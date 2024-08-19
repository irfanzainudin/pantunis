import "./Sumber.css";
import KadSumber from "../components/KadSumber";

// images
import PM from "../media/PantunMelayu.png";
import KKMS from "../media/KurikKundiMerahSaga.png";
import MP from "../media/MalayPantuns.png";
import SP from "../media/SejutaPantun.png";
import BM from "../media/BudayaMelayu.png";
import In from "../media/Internet.png";

const sumber_sumber = [
  {
    tajuk: "Pantun Melayu",
    penulis: "Richard J. Wilkinson and Sir R.O. Winstedt",
    pautan:
      "https://ota.bodleian.ox.ac.uk/repository/xmlui/handle/20.500.12024/0376",
    imej: PM,
    nota: "published",
  },
  {
    tajuk: "Malay Pantuns",
    penulis: "A. W. Hamilton",
    pautan:
      "https://www.malaycivilization.com.my/omeka/files/original/47cee3bf87ef80ba92a195c691ee2fc3.pdf",
    imej: MP,
    nota: "published",
  },
  {
    tajuk: "KUMPULAN PANTUN LISAN MELAYU: KURIK KUNDI MERAH SAGA EDISI KEDUA",
    penulis: "Dewan Bahasa Dan Pustaka",
    pautan: "https://dbpniaga.my/Inventori/Detail_Inventori?i=MzM1",
    imej: KKMS,
    nota: "draft",
  },
  {
    tajuk: 'Koleksi "Sejuta Pantun" oleh Portal Malaycivilization',
    penulis:
      "Institut Alam dan Tamadun Melayu (ATMA), Universiti Kebangsaan Malaysia",
    pautan: "https://malaycivilization.com.my/exhibits/show/sejuta-pantun",
    imej: SP,
    nota: "draft",
  },
  {
    tajuk: "Budaya Melayu",
    penulis: "Orang Melayu",
    pautan: "https://pantunis.com",
    imej: BM,
    nota: "published",
  },
  {
    tajuk: "Internet",
    penulis: "Netizen",
    pautan: "/sumber-internet",
    imej: In,
    nota: "published",
  },
  // {
  //   tajuk: "Alam Pantun Melayu: Studies on the Malay Pantun",
  //   penulis: "Francois-Rene Daillie",
  //   pautan:
  //     "https://www.nutmegpublishing.com/books/other-books/alam-pantun-melayu.html",
  //   imej: "https://www.nutmegpublishing.com/img/other-books/alam-pantun.jpg",
  // },
  // {
  //   tajuk: "iPantun",
  //   penulis: "Netizen",
  //   pautan: "https://www.ipantun.com/",
  //   imej: In,
  //   nota: "draft",
  // },
];

function Sumber() {
  return (
    <main>
      <div>
        <div className="sumber-sumber">
          {sumber_sumber.length > 0
            ? sumber_sumber.map((ss) => {
                return (
                  <KadSumber
                    tajuk={ss.tajuk}
                    penulis={ss.penulis}
                    pautan={ss.pautan}
                    imej={ss.imej}
                    nota={ss.nota}
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
