import { useEffect, useRef } from "react";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Same canvas-texture approach as the single-book demo, so this file has no
// external image dependencies. Swap makeCoverTexture/makeSpineTexture for
// TextureLoader.load('/covers/whatever.jpg') when you have real artwork.
// ---------------------------------------------------------------------------

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let cursorY = y;
  for (const word of words) {
    const test = line + word + " ";
    if (ctx.measureText(test).width > maxWidth && line !== "") {
      ctx.fillText(line, x, cursorY);
      line = word + " ";
      cursorY += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, cursorY);
}

function makeCoverTexture({ title, author, bg, accent }) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 768;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = accent;
  ctx.fillRect(40, 120, canvas.width - 80, 6);

  ctx.fillStyle = "#f5f2ea";
  ctx.textAlign = "left";
  ctx.font = "700 44px Georgia, serif";
  wrapText(ctx, title, 40, 220, canvas.width - 80, 52);

  ctx.font = "400 24px Georgia, serif";
  ctx.fillStyle = "#cfccc2";
  ctx.fillText(author, 40, canvas.height - 60);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeSpineTexture({ title, bg, accent }) {
  const canvas = document.createElement("canvas");
  canvas.width = 96;
  canvas.height = 768;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, 6, canvas.height);
  ctx.fillRect(canvas.width - 6, 0, 6, canvas.height);

  ctx.save();
  ctx.translate(canvas.width / 2 + 8, canvas.height / 2);
  ctx.rotate(Math.PI / 2);
  ctx.fillStyle = "#f5f2ea";
  ctx.font = "700 32px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText(title, 0, 0);
  ctx.restore();

  return new THREE.CanvasTexture(canvas);
}

let pagesTextureCache = null;
function makePagesTexture() {
  if (pagesTextureCache) return pagesTextureCache;
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#efe9da";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#d9d0ba";
  ctx.lineWidth = 1;
  for (let i = 0; i < canvas.height; i += 4) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }
  pagesTextureCache = new THREE.CanvasTexture(canvas);
  return pagesTextureCache;
}

// BoxGeometry material order: [+x, -x, +y, -y, +z, -z]
// Spine lives on -x, front cover on +z.
function buildBook({ title, author, bg, accent }) {
  const width = 1.2;
  const height = 1.75;
  const depth = 0.3;

  const cover = makeCoverTexture({ title, author, bg, accent });
  const back = makeCoverTexture({ title: "", author: "", bg, accent: bg });
  const spine = makeSpineTexture({ title, bg, accent });
  const pages = makePagesTexture();

  const materials = [
    new THREE.MeshStandardMaterial({ map: pages, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: spine, roughness: 0.6 }),
    new THREE.MeshStandardMaterial({ map: pages, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: pages, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: cover, roughness: 0.5 }),
    new THREE.MeshStandardMaterial({ map: back, roughness: 0.5 }),
  ];

  const geometry = new THREE.BoxGeometry(width, height, depth);
  return new THREE.Mesh(geometry, materials);
}

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.max(0, Math.min(1, v));

const BOOKS = [
  // { title: "The Dream Machine", author: "M. Mitchell Waldrop", bg: "#1c2b3a", accent: "#e8b04b" },
  { title: "The Dream Machine", author: "M. Mitchell Waldrop", bg: "#ff0000", accent: "#e8b04b" },
  { title: "The Power Broker", author: "Robert Caro", bg: "#2a1f1a", accent: "#c96a4e" },
  { title: "Working in Public", author: "Nadia Eghbal", bg: "#16261f", accent: "#7fb37a" },
  { title: "Poor Charlie's Almanack", author: "Charles T. Munger", bg: "#22222b", accent: "#d9c26a" },
  { title: "The Great CEO Within", author: "Matt Mochary", bg: "#1a2430", accent: "#6ea8d9" },
];

export default function BookshelfShelfDemo() {
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);
  const linkRefs = useRef([]);
  const meshesRef = useRef([]);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.2, 8.5);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x88aaff, 0.3);
    rim.position.set(-4, -2, -3);
    scene.add(rim);

    const spacing = 1.7;
    const n = BOOKS.length;
    const group = new THREE.Group();
    scene.add(group);

    const baseX = [];
    BOOKS.forEach((config, i) => {
      const mesh = buildBook(config);
      const x = (i - (n - 1) / 2) * spacing;
      mesh.position.x = x;
      mesh.userData.index = i;
      baseX.push(x);
      meshesRef.current[i] = mesh;
      group.add(mesh);
    });

    // one shared soft shadow strip under the whole shelf
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 512;
    shadowCanvas.height = 128;
    const sctx = shadowCanvas.getContext("2d");
    const grad = sctx.createRadialGradient(256, 64, 10, 256, 64, 260);
    grad.addColorStop(0, "rgba(0,0,0,0.35)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 512, 128);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: new THREE.CanvasTexture(shadowCanvas),
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(new THREE.PlaneGeometry(n * spacing + 2, 2), shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.15;
    scene.add(shadowMesh);

    function resize() {
      const rect = scrollEl.getBoundingClientRect();
      const w = rect.width;
      const h = window.innerHeight * 0.8;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    let targetProgress = 0;
    let currentProgress = 0;

    function onScroll() {
      const max = scrollEl.scrollHeight - scrollEl.clientHeight;
      targetProgress = max > 0 ? scrollEl.scrollTop / max : 0;
    }
    scrollEl.addEventListener("scroll", onScroll, { passive: true });

    let hovered = -1;

    let rafId;
    const tmpVec = new THREE.Vector3();

    function tick() {
      currentProgress = lerp(currentProgress, targetProgress, 0.08);

      // Each book gets its own slice of the overall scroll range, so they
      // fan open one after another rather than all rotating in lockstep.
      meshesRef.current.forEach((mesh, i) => {
        const start = i / n;
        const span = 1.4 / n; // slight overlap between neighbors
        const local = clamp01((currentProgress - start) / span);

        mesh.rotation.y = lerp(-1.15, 0.25, local);
        mesh.position.z = lerp(-0.3, 0.15, local);
        mesh.position.y = Math.sin(local * Math.PI) * 0.12;

        const hoverLift = i === hovered ? 0.15 : 0;
        mesh.position.y += hoverLift;
        const targetScale = i === hovered ? 1.06 : 1;
        mesh.scale.x = lerp(mesh.scale.x, targetScale, 0.15);
        mesh.scale.y = lerp(mesh.scale.y, targetScale, 0.15);
        mesh.scale.z = lerp(mesh.scale.z, targetScale, 0.15);
      });

      renderer.render(scene, camera);

      const canvasRect = canvas.getBoundingClientRect();
      meshesRef.current.forEach((mesh, i) => {
        tmpVec.set(0, 0, 0).applyMatrix4(mesh.matrixWorld).project(camera);
        const x = (tmpVec.x * 0.5 + 0.5) * canvasRect.width;
        const y = (tmpVec.y * -0.5 + 0.5) * canvasRect.height;
        const link = linkRefs.current[i];
        if (link) {
          link.style.left = `${x}px`;
          link.style.top = `${y}px`;
        }
      });

      rafId = requestAnimationFrame(tick);
    }
    tick();

    // expose a setter the JSX event handlers below can call
    tick.setHovered = (i) => {
      hovered = i;
    };
    canvas._setHovered = (i) => {
      hovered = i;
    };

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      scrollEl.removeEventListener("scroll", onScroll);
      renderer.dispose();
      meshesRef.current.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.forEach((m) => {
          m.map && m.map.dispose();
          m.dispose();
        });
      });
      shadowMesh.geometry.dispose();
      shadowMat.map.dispose();
      shadowMat.dispose();
      pagesTextureCache = null;
    };
  }, []);

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#0f0f12", color: "#f2efe6", padding: "24px" }}>
      <p style={{ maxWidth: 640, margin: "0 auto 16px", fontSize: 14, opacity: 0.7, textAlign: "center" }}>
        Scroll inside the box. Books fan open one after another, each keeps
        its own real, clickable link pinned to its on-screen position, and
        hovering lifts a book slightly.
      </p>

      <div
        ref={scrollRef}
        style={{
          position: "relative",
          maxWidth: 900,
          height: "70vh",
          margin: "0 auto",
          overflowY: "auto",
          overflowX: "hidden",
          border: "1px solid #2a2a30",
          borderRadius: 12,
        }}
      >
        <div style={{ position: "sticky", top: 0, height: "70vh", overflow: "hidden" }}>
          <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />

          {BOOKS.map((book, i) => (
            <a
              key={book.title}
              ref={(el) => (linkRefs.current[i] = el)}
              href={`#${book.title.replace(/\s+/g, "-").toLowerCase()}`}
              aria-label={`View ${book.title}`}
              onMouseEnter={(e) => {
                e.currentTarget.ownerDocument
                  .querySelector("canvas")._setHovered(i);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.ownerDocument
                  .querySelector("canvas")._setHovered(-1);
              }}
              onClick={(e) => {
                e.preventDefault();
                alert(`Navigate to: ${book.title}`);
              }}
              style={{
                position: "absolute",
                width: 110,
                height: 170,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                // visible for building; set to 0 once positions look right
                outline: "1px dashed rgba(255,255,255,0.2)",
                background: "transparent",
              }}
            />
          ))}
        </div>

        <div style={{ height: "260vh" }} />
      </div>
    </div>
  );
}
