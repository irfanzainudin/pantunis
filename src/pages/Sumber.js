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
    <main className="mt-3 animate__animated animate__fadeIn">
      <hgroup>
        <h1>
          <i className="bi bi-book"></i> Sumber
        </h1>
        <p>Kenali kitab-kitab pantun</p>
      </hgroup>
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
      <hgroup className="mt-3">
        <h2>
          <i className="bi bi-card-list"></i> Disiderata
        </h2>
        <p>Senarai sumber yang ingin disimpan di dalam Pantunis<br/>(diambil daripada <a href="http://pantun.com/rujukan.html">pantun.com/rujukan.html</a>)</p>
      </hgroup>
      <div className="disiderata-sumber">
        <ol>
          {/* SEPARATOR */}
          <li>
            <p>
              <a href="https://catalog.loc.gov/vwebv/search?searchArg=pantun&amp;searchCode=GKEY%5E*&amp;searchType=0&amp;recCount=25"><b>Library of Congress Catalog</b></a>
            </p>
          </li>
          {/* SEPARATOR */}
          <li>
            <p><a href="https://pantun-sayang-afp.fr/bibliopantun/"><b>Pantun Sayang: Bibliopantoun</b></a></p>
          </li>
          {/* SEPARATOR */}
          <li>
            <b>Rujukan dan Sumber Pantun dan Syair Melayu /
            Pantun and Syair References and Sources:</b><br/>
            <ol>
              <li>Ungku Abdul Aziz Ungku Abdul Hamid. <i>Pantun dan Kebijaksanaan
                Akal Budi Melayu</i>. Kuala Lumpur: Dewan Bahasa dan
                Pustaka, 2011.</li>

              <li>Ahmad Babji. <i>Pantun</i>. Cetekan kedua (rumi). Singapura:
                Geliga, 1959.</li>

              <li>Abdul Hajar. <i>Rampai pantun bertuah</i>. Pustaka Melayu: 
                Pekanbaru, Riau, 2007. ISBN: 9791611971. [LOC]</li>

              <li>Abd. Halim "R".
                <ul>
                  <li><i>Koleksi Berbalas: Pantun Merakam
                    Zaman</i>. Kuala Lumpur: Jabatan Kebudayaan dan Kesenian
                    Negara (JKKN), 2011.</li>

                  <li>Abdul Hamid "R". Editor Umum: Muhammad Haji Salleh.
                    <i>Setaman Pantun Kenangan</i>. Pulau Pinang: Universiti
                    Sains Malaysia, 2006.</li>
                  </ul></li>

                <li>Abdul Latiff Abu Bakar dan Mohd. Rosli Saludin,
                  penyelenggara. <i>Pantun dan Ungkapan Indah: Adat Perkahwinan
                  Melayu</i>. Melaka: Institut Seni Malaysia Melaka, 2004.</li>

                <li>Abg. Seruji Abg. Muhi dan Hajah Sarbanum Marican.
                  <i>Himpunan Pantun Melayu Sarawak I (Tema: Percintaan)</i>.
                  Kuching: Yayasan Budaya Melayu Sarawak, 2004.</li>

                <li>Amat Juhari Moain. <i>Pemilihan Kata dalam Pantun
                  Melayu</i>. Kuala Lumpur: Dewan Bahasa dan Pustaka,
                  2008.</li>

                <li>James Marshall Amend. <i>Negotiation of Identity as Theme
                  and Variation: the Musical Art of Dondang Sayang in Melaka,
                  Malaysia</i>. Dissertation. 2 vols. The Florida State
                  University School of Music, 1998. UMI Number: 9836069.</li>

                <li>Aminah Haji Noor. <i>Pantun Melayu: Warisan Bangsa</i>.
                  Kuala Lumpur: Iqra' Publications, 2006.</li>

                <li><a href="http://pantun-sayang-afp.fr/category/revue-pantouns">
                  Amis Francophones du Pantoun</a>. <i>Pantouns</i>. Majalah
                  yang diterbit 2-8 kali setahun sejak September, 2012.</li>

                <li>Anwar Ridhwan dan E.U. Kratz, penyelenggara. <i>Hati
                  Mesra: Pantun Melayu Sebelum 1914: Suntingan Hans
                  Overbeck.</i> Kuala Lumpur: Dewan Bahasa dan Pustaka
                  2004.</li>

                <li>Balai Pustaka. <i>Pantun Melayu</i>. Jakarta: Departemen
                  Pendidikan dan Kebudayaan, 1978.</li>

                <li>Biro Ekbang dan SDA <i>Pantun Titah</i>. 2 vol.
                  Pemerintah Provinsi Jambi: Jambi, 2012. [LOC]</li><li>

                </li><li>Boon Kim Yew. Pantun Boon Kim Yew: 1921-1982. Manuscript
                  from the Library of the Institute of Southeast Asian Studies,
                  Singapore.</li>

                <li>Jérôme Bouchaud &amp; Georges Voisset. <i>Une Poignée de
                  Pierreries</i>. Collection de Pantouns Francophones. <a href="http://editions-jentayu.fr">Éditions Jentayu</a>, 2014.</li>

                <li>W.A. Braasem. <i>Pantuns</i>. Djakarta: De Moderne
                  Boekhandel Indonesie, 1950.</li>

                <li>British Library. <a href="http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=MSS_Malay_A_4">
                  <i>Surat Pantun Cara Lampung</i></a>, 1812. "Inilah surat
                    pantun cara Lampung, dialih pada basa Melayu, sama hartinya
                    pantun Lampung dengan pantun Melayu...."</li>

                <li>Ivo Castro, Hugo C. Cardoso, Alan Baxter, Alexander Adelaar,
                  Gijs Koster. <i>Livro de Pantuns / Book of Pantuns:</i> Un
                  Manuscrito Asi´tico do Museu Nacional de
                  Arqueologia / An Asian Manuscript of the National
                  Museum of Archeology. Lisboa: Imprensa Nacional,
                  2022. ISBN: 978-972-27-2907-9.</li>
                  
                <li>François-René Daillie.
                  <ul>
                    <li><i>Alam Pantun Melayu: Studies on the Malay Pantun</i>.
                      Dewan Bahasa dan Pustaka, 1988.</li>
                    <li><i>La Lune et Les Étoiles</i>.
                      Paris: Les Belles Lettres, 2000.</li>
                  </ul></li>

                <li>Dewan Bahasa dan Pustaka. <i>Kurik Kundi Merah Saga:
                  Kumpulan Pantun Lisan Melayu.</i> Kuala Lumpur: Dewan Bahasa
                  dan Pustaka, 1990.</li>

                <li>Dewan Bahasa dan Pustaka Brunei. <i>Adun nan Alun
                  Sebahtera</i>: Antologi Syair dan Pantun.
                  Berakas: Kementerian Kebudayaan, Belia dan Sukan:
                  2002.</li>

                <li>
                  Ding Choo Ming. <i>Pantun Pilihan Peranakan Baba Negeri Selat, 1910-1930-an</i>. Pulau Pinang: Penerbit Universiti Sains Malaysia, 2012. ISBN: 9789838615617.
                </li>
            
                <li>W. Theodor Elwert. <i>Französische Metric</i>.
                  Regensburg: Max Hueber Verlag, 1978. ISBN: 3-19-003021-9. [pantoum]</li>
                  
                <li>Eizah Mat Hussain, Tengku Intan Marlina Tengku Mohd. Ali,
                  &amp; Salinah Jaafar. "Simbol Tumbuhan dalam Pantun dari
                  Perspektif Puitika Sastera Melayu," <i>Jurnal Pengajian
                  Melayu</i> 26 (2015), 235-255.</li>
                  
                <li>Mary Fatimah Subet. <i>Pantun Melayu Sarawak: Pentafsiran
                  Makna Implikatur</i>. Kota Samarahan: UNIMAS, 2017.</li>
                  
                <li>Sylvie Gradeler &amp; Serge Jardin.
                  <i>Malaisie, un certain regard</i>. Malacca:
                  The Lemongrass, 2013. Ms. 43-54.</li>

                <li> A.H. Greasy (Printer). <i>Dendang Sayang Pantun
                  Selong: Pembacha An Orang Muda Mudahan</i>. Colombo,
                  1950[?]. <a href="http://eap.bl.uk/archive-file/EAP609-5-1">
                  Endangered Archives Program</a></li>

                <li>A.W. Hamilton.
                  <ul>
                    <li>
                      <i>Malay Pantuns: Pantun Melayu</i>. Singapore: Donald Moore, 1959 [1941].
                    </li>
                    <li><i>Malay pantuns = Pantun Melayu</i>. Petaling Jaya: Eastern Universities Press, 1982. [LOC]</li>
                  </ul>
                </li>

                <li>Hamzah Hamdani &amp; Marzuki Ali, penyelenggara. <i>Ratib
                  1u000 Syair</i>. Kuala Lumpur; GAPENA, 2005.</li>

                <li>Hassan Ahmad. <i>Pantun Melayu: Binkisan Permata</i>.
                  Kuala Lumpur: Yayasan Karyawan, 2001.</li>

                <li>B. L. Ho. <i>Pantun Sejati</i>. Petaling Jaya:
                  Agrogreen Consult, 1997.</li>

                <li>Tengku M. Lah Husny.
                  <ul>
                      <li><i>Seni bina tari traditionil dan pantun/kuntai
                        Melayu Sumatera Timur</i>. Medan: B.P. Husny, 1977
                        [LOC]</li>

                      <li><i>Pantun dan Kuntai diungkai dan dibingkai</i>.
                        Medan: Badan Penerbit Husny, 1981 or 1982. [LOC]
                        Examples of pantun having 1, 2, 3, and 4 lines.</li>

                      <li><i>Pantun pada upacara perkawinan menurut adat
                        Melayu, Sumatera Timur</i>. Medan: Badan Penerbit
                        Husny, 1982. [LOC]</li>

                      <li><i>Upacara perkawinan adat Melayu, Sumatera Timur: 
                        pantun</i>. Jakarta: Departemen Pendidikan dan
                        Kebudayaan, Proyek Penerbitan Buku Sastra Indonesia
                        dan Daera, 1984. [LOC]</li>

                      <li><i>Pantun/kuntai Melayu Sumatra
                        Timur</i>. Jakarta: Departemen Pendidikan dan Kebudayaan,
                        Proyek Penerbitan Buku Sastra Indonesia dan Daerah, 1985.</li>
                  </ul></li>

                <li>Idawati. <i>Irama Syair Melayu, Kajian estetika pada
                  cengkok Melayu</i>. Pemerintah Provinsi Riau:
                  Dinas Kebudayaan dan Parawisata, 2013.</li>

                <li>Junaini Kasdan, penyelenggara. <i>Syair Seratus Siti</i>.
                  Kuala Lumpur: Dewan Bahasa dan Pustaka, 2004.</li>

                <li>Abdul Karim bin Md. Shariff. <i>Puisi Melayu:
                  Sha'er, Pantun, Seloka dan lain-lain</i>. Cetakan
                  diperbaiki. Kuala Lumpur: Longmans, 1963. Isi: teka-teki
                  dan pantun berkait.</li>

                <li>Wan Khazim. <i>Bukit Lagi Bintang Berkarang</i>.
                  Pulau Pinang: Universiti Sains Malaysia, 2006.
                  ISBN: 983-3391-64-8.</li>

                <li>Jean de Kerno. <i>Les Pantoumniques: Ernest, Victor,
                  Charles &amp; Cie</i>. Les Dossiers de Pantun Sayang.
                  <a href="http://pantun-sayang-afp.fr/publications">
                  Association Française du Pantoun</a>, 2013.</li>
                  
                <li>Khadijah Hashim.
                  <ul>
                    <li><i>1001 Pantun Baru</i>. Shah Alam: 'K' Publishing
                    Sdn. Bhd., 2000.</li>
                    <li><i>1010 Pantun Baru</i>. Shah Alam: 'K' Publishing
                    Sdn. Bhd., 2010.</li>
                  </ul>
                </li>

                <li>Raymond Kwok. <i>Ch'arm-Ch'arm: Rhymes and Ditties Down
                  Memory Lane</i>. Penang: Raymond Kwok, 2005.

                </li><li>El Lazuardi. <i>Suluh Damar: Opera pantun edisi nasihat
                  dalam pantun</i>. Bandung: Pimedia, 2023. 
                  ISBN: 978-623-8426-00-3.</li>

                <li>Low Kok On. "Unsur Berahi dalam Pantun Kasih Sayang Melayu Brunei
                  di Sabah (The Elements of Lust and Affection in the Love
                  Pantuns of Brunei Malays in Sabah),"<i>Malay Literature</i>",
                  29.1 (2016): 1-21.</li>

                <li>Madulara (Hj. Ahmad bin Usop).
                  <ul>
                    <li><i>Dondang Sayang: Seni Tradisi Negeri Melaka.</i>
                      [Melaka:] Majlis Kebudayaan Negeri Melaka dengan
                      kerjasama Kementerian Kebudayaan Belia dan Sukan
                      Malaysia, 1984.</li>
                  </ul>

                </li><li>Maimunah Daud. <i>The Romance of Sarawak Malay
                  Pantun</i>. Kuching: www.sarawakceritalah.com, 2004.</li>

                <li>Haji Mera'ee bin Abdullah &amp; Lord Medway.
                  <i>Sya'ir Jerjezang: Cetera Niah Zaman yang Bahari</i>.
                    Leiston: Leiston Press, 2001.</li>

                <li>Md. Salleh Yaapar. <i>Setaman Pantun Lestari</i>.
                  Pulau Pinang: Universiti Sains Malaysia, 2010.</li>

                <li>Mohd. Ali bin Hitam. <i>Mininjau Pantun Melayu Lama di
                  Pedalaman Dungun, Terengganu</i>. Kuala Lumpur: Dewan Bahasa
                  dan Pustaka, 1967. "Ada suatu keperchayaan..., ia-itu barang
                  siapa tamat hapal pantun Empat Puloh, mesti-lah di-sembeleh
                  sa-ekor kerbau balar untok menghindarkan daripada padah mati
                  di-bunoh atau membunoh diri." hal. xiii.</li>

                <li>Haji Mohd. Yasin Ahmad (1947 - 2013).
                  <ul>
                    <li><i>Dondang Sayang</i>. Melaka: Institut Kajian
                      Sejarah dan Patriotisme Malaysia (IKSEP), 2004.</li>
                    <li><i>Pantun Jiwa Masyarakat Melayu.</i> Kuala Lumpur:
                      Akademi Seni Budaya dan Warisan Kebangsaan (ASWARA),
                      2012.</li>
                  </ul>
                </li>

                <li>Hj. Mokhtar Yasin. <i>Pantun</i>. Melaka: Institut Kajian
                  Sejarah dan Patriotisme Malaysia (IKSEP), 2004.</li>

                <li>Hj. Mokhtar Yasin, Hj. Mohd. Yasin Ahmad, Dr. Hj. Haron
                  Hj. Kidam, Mat Hassan Abdullah, Mohammad B. Musip, eds.
                  <i>Pantun Warisan: Khazanah Budaya Bangsa</i>. Siri Pertama
                  Hasil Ciptaan Baru 25,000 Rangkap Pantun. Melaka: Institut
                  Kajian Sejarah dan Patriotisme Malaysia (IKSEP), 2013.</li>

                <li>Muda Omar 'Ali Saifuddien. <i>Syair Perlembagaan Negeri
                  Brunei</i>. Edisi rumi. Bandar Seri Begawan, 1994.

                </li><li>Muhammad Idris. <i>Syair Pantun Seloka</i>. Singapura:
                  Kampung [H]aji Lane, nombor 20,
                  5 Zulhijah 1334 AH, 15 ms.</li>

                <li>Muhammad Saleh. <i>Krakatau: The Tale of Lampung
                  Submerged. Syair Lampung Karam</i>. Translated by John
                  McGwyn. Singapore: NUS Press, 2014. ISBN:
                  978-602-9144-27-7. Reviewed by Harry Aveling.
                  <i>IJAPS</i> 12.2 (2016): 105-113.</li>
              
                <li>Muhammad Haji Salleh.
                  <ul>
                    <li><i>Bila Terkenang Zaman Dahulu: Pantun Pulau Pinang</i>.
                      Pulau Pinang: Penerbit Universiti Sains Malaysia, 2011.</li>
                    <li><i>Les Érudits Français
                      et le Pantun Malais</i>. Les Dossiers de Pantun Sayang.
                      <a href="http://pantun-sayang-afp.fr/publications">
                      Association Française du Pantoun</a>, 2013.</li>
                    <li><i>Pantun: The Poetry of Passion</i>. 
                      Kuala Lumpur: University of Malaya Press, 2018.</li>
                    <li><i>Pantun dari Tujuh Tanjung</i>. Pulau Pinang:
                      Universiti Sains Malaysia, 2018.</li>
                  </ul>
                </li><li>N.A. Salleh.
                  <ul>
                    <li><i>Aneka Contoh Pantun Pilihan Mengikut Atur Cara
                      Majlis</i>. Kajang: Al Falah, 2012 [2008].</li>

                    <li><i>518 Pantun Pelbagai Majlis untuk Teks Pengacara
                      &amp; Teks Ucapan</i>. Cheras: Perintis Books, 2013
                      [2011].</li>
                  </ul>
                </li>

                <li>Nazel Hashim Mohamad.
                  <ul>
                    <li><i>Riang Ria Berpantun 1</i>. Kuala Lumpur: Dewan Bahasa
                      dan Pustaka, 2008</li>

                    <li><i>Riang Ria Berpantun 2</i>. Kuala Lumpur: Dewan Bahasa
                      dan Pustaka, 2008</li>

                    <li><i>Riang Ria Berpantun 3</i>. Kuala Lumpur: Dewan Bahasa,
                      dan Pustaka, 2008.</li>

                    <li><i>Pantun Pak Nazel.</i> Kuala Lumpur: Dewan Bahasa
                      dan Pustaka, 2010.</li>

                    <li><i>Koleksi Pantun untuk Kanak-Kanak</i>. Batu Caves,
                      Selangor: PTS, 2011.</li>

                    <li><i>Pantun Pak Nazel: 101 perkara</i>.
                      Kuala Lumpur: Institut Terjemahan &amp; Buku Malaysia,
                      2012.</li>

                    <li><i>Pantun Pak Nazel 2</i>. Kuala Lumpur: Dewan Bahasa
                      dan Pustaka, 2013.</li>

                    <li><i>Pantun Pak Nazel 3</i>. Kuala Lumpur: Dewan Bahasa
                      dan Pustaka, 2015.</li>

                    <li><i>Pantun Pak Nazel 4</i>. Kuala Lumpur: Dewan Bahasa
                      dan Pustaka, 2015.</li>

                    <li><i>Pantun Pak Nazel: sejujur kata seikhlas hati</i>.
                      Penerbit Universiti Malaysia Perlis, 2017.</li>

                    <li><i>Pantun Pak Nazel: rangkap disurat maksud tersirat</i>.
                      Kangar: Penerbit Universiti Malaysia Perlis, 2019. ISBN
                      978-967-0922-73-7.</li>
                  </ul>
                </li>

                <li>Mulaika Hijjas. <i>Victorious Wives: The Disguised
                  Heroine in 19th-Century Malay Syair</i>. Singapore:
                  NUS Press, 2012. ISBN-13: 978-9971-69-526-2</li>

                <li>Noriah Taslim. <i>Pantun Perawi</i>. Pulau Pinang:
                  Universiti Sains Malaysia, 2015.</li>

                <li>Omardin Haji Asha'ari. <i>Kajian Pantun Melayu</i>.
                  Singapura: Malaya Publishing House Limited, 1961.</li>

                <li> H. Overbeck. "The Malay Pantun."
                  <i>Journal of the Straits Branch of the Royal Asiatic Society</i>
                    85 (1922): 4-28.</li>

                <li>Jose Villa Panganiban. <i>Tanaga, Haiku, Pantun</i>.
                  San Juan. 1963. [LOC]</li>

                <li>William R. Race. <i>The Classical Priamel from Homer
                  to Boethius</i>. Leiden: E.J. Brill, 1982. ISBN: 90-04-06515-6.</li>

                <li>Ramli M.I. Editor Umum: Muhammad Haji Salleh. <i>Tunggu
                  Padi Jemoq</i>: Serangkaian Pantun Kedah. Pulau Pinang:
                  Universiti Sains Malaysia, 2006</li>
          
                <li>Shashim Shah B. Harun, Mohamed Jais B. Darso, Sahar B.
                  Mohamad @ Mohd, Zulkarnain B. Ossman, Mustafa B. Musa, Ismail
                  B.D Hj. Daud, Zuneta Bt. Khairudin, Norazlina Bt. Mohd. Kiram,
                  Mukhtar B. Zakaria, dan Wan Norshikah Bt. Hasbullah.
                  <i>Tradisi Dondang Sayang di Negeri Melaka</i>, Serdang:
                  Fakulti Pengajian Pendidikan, Universiti Putra Malaysia [BBM
                  376], Kajian Puisi Melayu, 1997.</li>

                <li>Krishnavanie Shunmugam. A History of Malay Pantun
                  Translations into English. Ph.D. Thesis. Monash University,
                  2009.</li>

                <li>Sigrid Welmoed Spangenberg.
                  <a href="https://openaccess.leidenuniv.nl/handle/1887/32097">
                    The function of pantun in Malay speech</a>.
                    Master thesis. Leiden University, 2015.</li>

                <li>Katherine Sim. <i>More than a Pantun: Understanding Malay Verse</i>. 
                  Singapore : Times Books International, 1987.
                  ISBN: 9971654040.</li>
            
                <li>Siti Hawa Salleh. "Language Change in the Literature
                  of Borneo: A Study Based on <i>Hikayat Banjar</i> and
                  <i>Syair Awan Semaun</i>" in James T. Collins, ed.
                    <i> Language and Oral Traditions
                    in Borneo</i>. Phillips: Borneo Research Council, 1990.</li>

                <li>Siti Zaleha, M. Hashim, dan Khadijah Hashim. <i>Puisi
                  Tunas Bangsa: Kumpulan pantun, syair, gurindam, dan sajak
                  pilhan</i>. Shah Alam: K Publishing Sdn. Bhd., 2008.</li>

                <li>Shirin Nadira Sulaiman. The Isthmus Between Their Lips: A
                  Comparative Reading of Postcolonial Nusantara and
                  Francophone Caribbean Literature. B.A. Thesis. Wesleyan
                  University, 2011.</li>

                <li>Eko Sugiarto. <i>Kitab Peribahasa dan Pantun Terbaru</i>.
                  Malang: Beranda, 2019. [LOC]</li>

                <li>Tan Sooi Beng. <i>Eclectic Cultures for All: The development
                  of the Peranakan Performing, Visual and Material Arts in Penang</i>.
                  Pulau Pinang: Universiti Sains Malaysia, 2019. ISBN: 978-967-461-406-5.
                  [bangsawan, boria, pantun, syair].</li>
                  
                <li>Tenas Effendy. <i>Khazanah Pantun Melayu Riau</i>. Kuala
                  Lumpur: Dewan Bahasa dan Pustaka, 2007.</li>

                <li>Phillip Lee Thomas.
                  <ul>
                    <li>"Long and Short Pantun Lines". <i>Review of Indnesian
                    and Malayan Affairs</i> 14, no. 1 (1980): 23-39.</li>

                    <li>"Anonymous Malay Poetry." <i>Pacific Quarterly
                    Moana</i> 7, no. 2 (April 1982): 60-70.</li>

                    <li>"The Malay Pantun: a Problem of Redundancy."
                    <i>Indonesia Circle</i>, no. 33 (March 1984): 15-22.</li>

                    <li>"Phonology and Semantic Suppression in Malay Pantun."
                    <i>Semiotica</i> 57, no. 1/2 (1985): 87-99.</li>

                    <li><i>Like Tigers around a Piece of Meat.</i> Singapore:
                    Institute of Southeast Asian Studies, 1986.</li>
                  </ul>
                </li>

                <li>Tim Penggerak Pemberdayaan Kesejahteraan Keluarga (TP PKK)
                  Provinsi Riau bekerjasama dengan Lembaga Adat Melayu (LAM) Riau,
                  [dan] BKMT Provinsi Riau. <i>Pantun dalam upacara adat
                  Melayu</i>. Pekanbaru, 2010. [LOC].</li>

                <li>Jean-Claude Trutt.
                  <ul>
                    <li><i>Les Découvreurs Allemands du Pantoun</i>.
                      Jilid 1: Chamisso; jilid 2: Overbeck; jilid 3:
                      Nevermann.
                      Les dossiers de Pantun Sayang:
                      <a href="http://pantun-sayang-afp.fr/publications">
                      Association Française du Pantoun</a>, 2015.</li>

                    <li><i>Recontre de Barbezieux des
                      9 et 10 juillet 2015: Sur les traces d'Henri Fauconnier
                      et du pantoun</i>. Les dossiers de Pantun Sayang:
                      <a href="http://pantun-sayang-afp.fr/publications">
                      Association Française du Pantoun</a>, 2015. Esei oleh
                      Jérôme Bouchaud,
                      Georges Chapouthier (Friedenkraft),
                      Jean de Kerno,
                      Roland Fauconnier,
                      Pierre Labrousse,
                      Laurent Metzger,
                      Muhammad Haji Salleh.
                      Renuka Devi Naidu,
                      Michel Norbert,
                      Yann Quero,
                      Jean-Claude Trutt, dan
                      Georges Voisset.
                    </li>

                    <li><i>Le Tanka Japonais</i>: Comparaison avec
                      le pantoun malais. Les dossiers de Pantun Sayang:
                      <a href="http://pantun-sayang-afp.fr/publications">
                      Association Française du Pantoun</a>, 2015.</li>

                    <li><i>Tour du monde du quatrain en compagnie de
                      Giacomo Prampolini</i>.
                      Les dossiers de Pantun Sayang:
                      <a href="http://pantun-sayang-afp.fr/publications">
                      Amis Francophones du Pantoun</a>, 2016.</li> 
                </ul>
                </li><li>Usup Abdul Kadir. <i>Hikayat Raja Babi</i> (HRB).
                  Transliterasi Jawi ke Rumi oleh Arsyad Mokhtar.
                  Petaling Jaya : Buku Fixi, 2015 [1775].
                </li>
                  
                <li>Georges Voisset
                  <ul>
                    <li><i>Histoire du genre pantoun: Malasie,
                      francophonie, universalie</i>.
                      Paris: L'Hartmattan, 1997.</li>

                <li><i>Le livre des charmes: Incantations malaises 
                  du temps passé</i>. Orphée/La
                  Diffeérence, 1997. ISBN: 2-7291-1153-0.</li>

                <li><i>La Terre et L'Eau: Un siècle
                      de poésie de l'Archipel malais (1913-1996)</i>.
                      Paris: Éditions You-Feng, 1999.</li>

                <li><i>René Ghil</i>: Premier et plus grand
                      pantouneur francophone.
                      Les Dossiers de Pantun Sayang.
                      <a href="http://pantun-sayang-afp.fr/publications">
                      Association Française du Pantoun</a>, 2008.</li>

                <li><i>Pantouns Malais</i>. Bécherel:
                      Les Perséides, 2009.</li>

                <li><i>Le Chant à quatre mains: Pantouns
                      et autres poèmes d'amour</i>.
                      Paris Association Pasar Malam, 2010.</li>

                <li><i>Le Dernier Gouverneur, Le Premier Pantoun et
                      La Belle Sultane</i>: Nouvelle histoire du «premier
                      pantoun» en français.
                      <a href="http://pantun-sayang-afp.fr/publications">
                      Amis du Pantoun Francophone</a>, 2015.</li>

                <li><i>250 Pantouns: Le Trésor Malais — Khazanah Melayu:
                  250 Pantun</i>. Institut Terjemahan &amp; Buku Malaysia:
                  Kuala Lumpur, 2015.</li>

                <li><i>Complément d'enquête</i>:
                  Seize pantouns retrouvés du «Fonds Henri
                  Fouconnier». Présentation et essais de traduction.
                  <a href="http://pantun-sayang-afp.fr/publications">Amis
                  du Pantoun Francophone</a>, 2016.</li>

                <li><i>Édouard Dulaurier</i>. Pionnier français
                  des études sur le pantoun. Jilid 1: Les sources
                  britanniques. Analyse; jilid 2: «Le pantoun
                  considéré comme une des formes de la
                  poésie lyrique des Malais», 1859;
                  jilid 3: Les sources britanniques. Extraits originaux.
                  Les Dossiers de Pantun Sayang.
                  <a href="http://pantun-sayang-afp.fr/publications">
                  Association Française du Pantoun</a>, 2016.</li>

                <li><i>Les Neuf Muses de William Marsden,
                  père européen du pantoun</i>.
                  <a href="http://pantun-sayang-afp.fr/publications">Amis
                  du Pantoun Francophone</a>, 2016.</li>

                    <li><i>Pantouns: Les Centuries Pantoun: 100 Traducteurs —
                    100 Pantouns</i>. Avec les illustrations de Patricia
                    Houéfa Grange. <a href="http://pantun-sayang-afp.fr/publications">
                    Amis du Pantoun Francophone</a>, 2017. <i>Pantouns</i> Special
                    Issue—Hors-série.</li>

                    <li><i>Les Vagabonds de Malaisie: Nouvelle Envolée
                      de Pantouns Francophones</i>. Pantun Sayang:
                      Editions Jentau, 2022. ISBN: 979-10-96165-24-7.
                      [Pantun Perancis] </li>
                  </ul>
                </li>
                <li>T. Wignesan. <i>Sporadic Striving Amid Echoed Voices,
                  Mirrored Images and Stereotypic Posturing in
                  Malaysian-Singaporean Literatures</i>. Allahabad:
                  Cyberwit.net, 2008.</li>

                <li>R.J. Wilkinson dan R.O. Winstedt. <i>Pantun Melayu</i>.
                  Cetekan ke-4. Singapura: Malaya Publishing House, 1961.
                  [1914, 1923, 1957]</li>

                <li>Mohd. Yasin bin Ahmad, Haji. <i>Dondang Sayang</i>.
                  Batu Berendam, Melaka, Malaysia : Institut Kajian Sejarah
                  dan Patriotisme Malaysia, 2004. ISBN: 9832600189.</li>

                <li>Yumi Zuhanis Has-Yum Hashim dan Nazel Hashim Mohamad.
                  <i>Koleksi Pantun Halal untuk Kanak-Kanak
                  dan Remaja</i>. International Islamic University
                  Malaysia Press (IIUM), 2015.</li>

                <li>Zainal Abidin Ahmad (Za'ba). <i>Ilmu Mengarang Melayu</i>.
                  Edisi Ejaan Rumi Baharu. Kuala Lumpur: Dewan Bahasa dan
                  Pustaka, 2002 [1934].</li>

                <li>Zainal Abidin Bakar. <i>Kumpulan Pantun Melayu.</i> Kuala
                  Lumpur: Dewan Bahasa dan Pustaka, 1983.</li>

                <li>Zainal Abidin Borhan, Prof. Madya Datuk dan Ramli Raman.
                  <i>Pantun Warisan Rakyat</i>. Kuala Lumpur: Jabatan
                  Kebudayaan dan Kesenian Negara. Kementerian Perpaduan,
                  Kebudayaan, Kesenian dan Warisan Malaysia, 2008.</li>
                <li>Zainal Jaslan, pengedit. <i>1000 Pantun Dondang Sayang.</i> Cetekan kedua:
                  Zainal Jaslan, pengedit. Penyumbang: Hj. Ahmad bin Usop
                  (Madulara), Ma'arof bin Abu Chik, Nyonya Tan bt.
                  Abdullah, Abas bin Katan, dan Mohd. Yasin bin Ahmad.
                  Kuala Lumpur: Kementerian Kebudayaan, Kesenian dan
                  Warisan Malaysia, 2007 [2004].</li>
            </ol>
            <br/>
          </li>
          {/* SEPARATOR */}
          <li>
            <b>Karya Sastra yang bernama "pantun," yang serupa pantun Melayu, ataupun yang ada unsor pantun / Literary works named "pantun," are like Malay pantun, or have pantun elements.</b><br/>
            <ul>
              <b>Bahasa Jawa / Javanese</b>
              <ul>
                <li>René Ghil. <i>Le pantoun des pantoun:
                  poème javanais</i> Paris &amp; Batavia, 1902.</li>
              </ul>
            </ul>
            {/* SEPARATOR */}
            <ul>
              <b>Boria</b>
              <ul>
                <li>Omar Yusoff &amp; Jamaluddin Aziz, eds. <i>Jawi
                    Peranakan di Pulau Pinang: Ekspresi Sebuah Identiti</i>
                    Pulau Pinang: Universiti Sains Malaysia, 2010.
                    USBN: 978-983-8614-58-0. [syair]</li>

                <li>Pejabat Kebudayaan dan Kesenian Negeri Pulau Pinang.
                    <i>Sejarah dan Perkembangan Boria Pulau Pinang</i>.
                    Kementerian Kebudayaan Kesenian dan Pelangcongan
                    Malaysia: Pulau Pinang, 199[?] [syair].</li>

                <li>Wazir Jahan Karim. <i>Boria: From Passion Play to
                    Malay-Jawi Peranakan Parody</i>. Petaling Jaya:
                    Pelandok, Yayasan Hasanah, Penang Jawi Peranakan
                    Heritage Society (JAWI), &amp; Academy of Socio-economic
                    Research and Analysis (ASERA), 2018.
                    ISBN: 978-967-494-003-4. [pantun, syair]</li>
              </ul>
            </ul>
            {/* SEPARATOR */}
            <ul><b>Nazam</b>
              <ul>
                <li>Haji Mohd. Yasin Ahmad (1947 - 2013). <i>Koleksi Nazam
                  Asli &amp; Kontemporari Negeri Melaka</i>. Kuala Lumpur:
                  Akademi Seni Budaya dan Warisan Kebangsaan (ASWARA),
                  2012.</li>
                <li>Hj. Md. Ali Bachik. <i>Nazam</i>. Batu Berendam:
                    Institut Kajian Sejarah dan Patriotisme Malaysia
                    (IKSEP), 2004.</li>
              </ul>
            </ul>
            {/* SEPARATOR */}
            <ul><b>Pantun Ambon</b>
              <ul>
                <li>
                  Hugo Warami. "Pantun Kelautan dalam Bahasa Melayu Ambon: Kajian Ekolinguistic," <i>E-Bangi</i>, vol. 17.9 (2020), 90-103.  ISSN: 1823-884x.
                </li>
              </ul>
            </ul>
            {/* SEPARATOR */}
            <ul><b>Pantun Iban</b>
              <ul>
                <li>Anna Sulan Masing. "<a href="https://repository.londonmet.ac.uk/678/1/Anna%20Masing%20PhD%20Thesis.pdf">
                  From the Jungle: Iban performance practice, migration
                  and identity</a>." London: London Metropolitan
                  University, 2012.</li>

                  <li>Patricia Matusky. "The Iban <i>Pantun</i>:
                      Poetry and Song." <i>Wacana Seni - Journal of
                      Art Discourse</i>, 2004.</li>

                  <li>Robert Menua Saleh, Dr.
                  <ul>
                    <li> <i>Pantun Iban</i>.
                      Kuching: The Tun Jugah Foundation, 2015.</li>
                    <li>19 Contoh Pantun Iban. Kuching, 201[?].</li>
                  </ul>
                </li>
              </ul>
            </ul>
            {/* SEPARATOR */}
            <ul>
              <b>Pantun Makassar</b>
              <ul>
                <li>
                  J.S. Sande. <i>Pantun-pantun Makassar/Sahabuddin Nappu</i>. Jakarta: Departemen Pendidikan dan Kebudayaan, 1991. [LOC]
                </li>
              </ul>
            </ul>
            {/* SEPARATOR */}
            <ul><b>Pantun Minangkabau</b>
              <ul>
                <li>Jennifer Fraser with Saiful Hadi. "Singing
                    "Naked" Verses: Interactive Intimacies and 
              Islamic Moralities in <i>Saluang</i> Performances
              in West Sumatra" in Andrew McGraw and Christopher
              J. Miller, <i>Sounding Out the State of Indonesian
                    Music</i>. Ithaca: Cornell University Press, 2022.
                    Pp. 85-100. ISBN: 9781501765223.</li>

                <li>Muhammad Haji Salleh &amp; Ivan Adilla.
                    <i>Layarkan Kapal Dalam Embun: Sepilihan Pantun
                    Minangkabau</i>. Pulau Pinang: Penebit Universiti
                    Sains Malaysia, 2011.</li>

                <li>Ir H Darwin SN Sutan Sati. <i>Keajaiban Pantun
                    Minang: Arti dan Tafsir</i>. Bogor: Ar-Rahmah, 2005.</li>
              </ul>
            </ul>
            {/* SEPARATOR */}
            <ul><b>Pantun Sunda</b>
              <ul>
                <li>Tini Kartini. <i>Struktur cerita pantun Sunda: alur</i>.
                    Jakarta: Pusat Pembinaan dan Pengembangan Bahasa,
              Departemen Pendidikan dan Kebudayaan, 1984. [LOC]</li>

                <li>Andrew N. Weintraub. <i>Ngahudang Carita Anu Baheula</i>:
                  (To Awaken an Ancient Story) An Introduction to the
                  Stories of Pantun Sunda. Southeast Asia Paper No. 34.
                  Center for Southeast Asian Studies, University of Hawaii
                  at Manoa, 1991.</li>
              </ul>
            </ul>
            {/* SEPARATOR */}
            <ul>
              <b>Pantun Tetun Timor</b> 
              <ul>
                <li>
                  Julius Bria Seran. <i>Pantun bahasa Tetun Timor</i>. Kupang: Yayasan Oemata Moris, 1986. [LOC] 2-line, 5-foot poems
                </li>
              </ul>
            </ul><br/>
          </li>
          {/* SEPARATOR */}
          <li>
            <b>Kamus dan Bahan Jawi / Dictionaries and Jawi Materials:</b>
            <ol>
              <li>Dewan Bahasa dan Pustaka. <i>Daftar Ejaan Rumi-Jawi</i>.
              Kuala Lumpur: Dewan Bahasa dan Pustaka, 1989.</li>
              <li>Hashim Haji Musa. <i>Sejarah Perkembangan Tulisan
              Jawi</i>. Kuala Lumpur: Dewan Bahasa dan Pustaka, 1999.</li>
              <li>M.B. Lewis. <i>A Handbook of Malay Script</i>. London:
              Macmillan and Co. Limited, 1958.</li>
              <li>Muhammad Ali Abdul Hamid. <i>Kamus Jawi Ejaan Baru</i>.
              Kuala Lumpur: Mahir Publications, 1991.</li>
              <li>Haji Md. Said Haji Suleiman. <i>Buku Katan Kamus
              Melayu</i>. Kuala Lumpur: Dewan Bahasa dan Pustaka, (1936)
              1997 (edisi jawi), 2002 (edisi rumi).</li>
              <li>Softrade. <i>Softrade Jawi Writer 1.0</i>. Shah Alam:
              Software Trading, 1994-1998.</li>
              <li>Hj. Syamsuddin bin Muhammad Junus. <i>Kamus Melayu</i>.
              Penang: Sinaran Brothers, 1964.</li>
              <li>R.J. Wilkinson.
                <ul>
                  <li><i>Kamus Jawi - Melayu - Inggeris (A
                    Classic Jawi - Malay - English Dictionary)</i>. Singapore:
                    Kelly &amp; Walsh, Limited, 1903. Terbitan kedua: Alai,
                    Melaka: Penerbit Baharudinjoha, 1985.</li>
                  <li><i>A Malay-English Dictionary
                    (Romanised)</i>. 2 vols. London: Macmillan &amp; Co. Ltd.,
                    1959.</li>
                </ul>
              </li>
              <li>Yunus Maris. <i>Kamus Fajar Rumi-Jawi</i>. Petaling Jaya:
              Fajar Bakti, 1984.</li>
            </ol><br/>
          </li>
          {/* SEPARATOR */}
          <li>
            <b>Internet: Sumber Pantun / Internet Pantun Resources</b>
            <ol>
              <li><a href="http://pantunmelayu.com/koleksi-pantun-2-kerat">
              Koleksi Pantun 2 Kerat</a></li>

              <li><a href="http://www.malaycivilization.com.my">Malay
              Civilization (ATMA)</a>: Pantun Baba Peranakan dan
              sumber-sumber lain.</li>

              <li><a href="http://melayuonline.com/ind/culture/dig/610/pantun">Melayu
              Online</a>: Pantun, rencana... -- Daftar dahulu!</li>

              <li><a href="http://msomelayu.blogspot.com/2007/08/pantun-politik.html">Pantun Politik</a>.</li>

              <li><a href="http://pantun-sayang-afp.fr/publications">Pantun
              Sayang—AFP</a> : Amis Francophones du Pantoun: Buku, majalah,
              rencana...</li>

              <li><a href="http://pantun.usm.my">Pantun Universiti Sains
              Malaysia</a>: Rencana, himpunan, peta sebaran....</li>

              <li><a href="http://wali-pantunmelayu.blogspot.com">
              Wali-PantunMelayu</a>.</li>
              
              <li>
                <a href="https://www.scribd.com/doc/256757965/pantun-2-kerat">
                  Scribd
                </a>
              </li>
              
              <li>
                <a href="https://www.youtube.com/watch?v=5_lScyhiHRE">Youtube #1</a>
              </li>
              
              <li>
                <a href="https://id.scribd.com/doc/265151233/Pantun-Dua-Kerat">
                  Scribd
                </a>
              </li>
              
              <li>
                <a href="https://www.liveworksheets.com/w/ms/bahasa-melayu-bm/1006695">
                  Liveworksheets
                </a>
              </li>
              
              <li>
                <a href="https://www.liveworksheets.com/w/ms/bahasa-melayu-bm/1461228">
                  Liveworksheets
                </a>
              </li>
              
              <li>
                <a href="https://anyflip.com/ihtdm/fach/basic">Anyflip</a>
              </li>
              
              <li>
                <a href="https://anyflip.com/ihtdm/nbna/basic">Anyflip</a>
              </li>
              
              <li>
                <a href="ramlibahasa.blogspot.com/2013/04/jenis-jenis-pantun-pantun-2-kerat.html">
                  Ramli Bahasa's Blogspot
                </a>
              </li>
              
              <li>
                <a href="https://www.pinterest.com/pin/742531057309232517/?amp_client_id=CLIENT_ID%28_%29&mweb_unauth_id=&amp_url=https%3A%2F%2Fwww.pinterest.com%2Famp%2Fpin%2F742531057309232517%2F&amp_expand=true">
                  Pinterest
                </a>
              </li>
              
              <li>
                <a href="https://www.facebook.com/kesatuanmelayurayaII/photos/a.320864475140249/439926013234094/?type=3">
                  Facebook
                </a>
              </li>
              
              <li>
                <a href="https://www.youtube.com/watch?v=hrqCEO_67UM">Youtube</a>
              </li>
              
              <li>
                <a href="https://pikaramli.wordpress.com/2019/04/10/bbm3410duapantun-dua-kerat-instagram/">
                  Pika Ramli's Wordpress
                </a>
              </li>
              
              <li>
                <a href="https://puisipoesy.blogspot.com/2006/08/pantun.html">
                  Puisi Poesy's Blogspot
                </a>
              </li>
              
              <li>
                <a href="https://thebookaholic.blogspot.com/2005/10/six-pantuns-for-lost-love.html">
                  TheBookaholic's Blogspot
                </a>
              </li>
              
              <li>
                <a href="https://www.bisnis.com/read/20231103/638/1710862/34-contoh-pantun-jenaka-4-baris-struktur-dan-maknanya">
                  Bisnis
                </a>
              </li>
              
              <li>
                <a href="https://www.cnnindonesia.com/edukasi/20230713154922-569-973098/25-contoh-pantun-jenaka-4-baris-lucu-dan-menghibur">
                  CNN Indonesia
                </a>
              </li>
            </ol>
            <hr/>
          </li><br/>
        </ol>
      </div>
    </main>
  );
}

export default Sumber;
