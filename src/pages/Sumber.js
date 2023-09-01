import "./Sumber.css";
import KadSumber from "../components/KadSumber";

const sumber_sumber = [
  {
    tajuk: "Pantun Melayu",
    penulis: "Richard J. Wilkinson and Sir R.O. Winstedt",
    pautan:
      "https://ota.bodleian.ox.ac.uk/repository/xmlui/handle/20.500.12024/0376",
    imej: "data:image/jpeg;base64,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",
  },
  {
    tajuk: "Alam Pantun Melayu: Studies on the Malay Pantun",
    penulis: "Francois-Rene Daillie",
    pautan:
      "https://www.nutmegpublishing.com/books/other-books/alam-pantun-melayu.html",
    imej: "https://www.nutmegpublishing.com/img/other-books/alam-pantun.jpg",
  },
  {
    tajuk: "KUMPULAN PANTUN LISAN MELAYU: KURIK KUNDI MERAH SAGA EDISI KEDUA",
    penulis: "Dewan Bahasa Dan Pustaka",
    pautan: "https://dbpniaga.my/Inventori/Detail_Inventori?i=MzM1",
    imej: "https://dbpniaga.my/ShowImage.ashx?typic=3&pathPic=0&idxPic=1074",
  },
];

function Sumber() {
  return (
    <main>
      <div>
        {/* <h1>Sumber</h1>
        <p>🚧 Under Construction 🚧</p> */}
        <div className="sumber-sumber">
          {sumber_sumber.length > 0
            ? sumber_sumber.map((ss) => {
                return (
                  <KadSumber
                    tajuk={ss.tajuk}
                    penulis={ss.penulis}
                    pautan={ss.pautan}
                    imej={ss.imej}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </main>
  );
}

export default Sumber;
