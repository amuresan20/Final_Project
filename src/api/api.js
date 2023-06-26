const products = [
  {
    name: "Set canapele-canapea 3 locuri, scaune și măsuță de cafea ",
    price: "1000.00 Ron",
    image:
      "https://novadesignandbuild.ro/wp-content/uploads/2022/12/Nova-Design-Build-Set-de-canapea-Avero-1.png.webp",
    stock: 25,
    quantity: 0,
    details:
      "Set fermecător de canapele din frânghie: o atragere a ochiului în grădina dvs. de care vă veți bucura în continuare.",
    id: "2",
  },
  {
    name: "Lampadare- DIVINA FL ARCO CROM,ALB, CONTARDI ",
    price: "500.00 Ron",
    image:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_700/https://roomzia.ro/wp-content/uploads/2021/03/divina-fl-arco-cover-700x700.png",
    stock: 20,
    quantity: 0,
    details:
      "Abajurul din țesătură plissé și liniile simple ale designului său fac din Divina un adevărat clasic. Disponibil într-o gamă completă, Contardi semnează un produs atemporal, adaptabil în diferite contexte.",
    id: "3",
  },
  {
    name: "Tapet floral",
    price: "550.00 Ron",
    image:
      "https://deltastudio-assets.fra1.cdn.digitaloceanspaces.com/22867600/Images/0x22867600-004-20221108153906240.jpg",
    stock: 50,
    quantity: 0,
    details:
      "Culorile pot diferi, in realitate, in functie de ecranul dispozitivului dar si de luminozitatea din mediul ambiental in care sunt vizualizate produsele.",
    id: "4",
    prices: [25, 45, 60],
    average: 43.44,
  },
  {
    name: "Lampă Solară – SUNS Fay – Grey",
    price: "700.00 Ron",
    image:
      "https://novadesignandbuild.ro/wp-content/uploads/2022/12/Nova-Design-Build-Lampa-Solara-Fay-Matt-Grey-Setting-1-1024x669.png.webp",
    stock: 15,
    quantity: 0,
    details:
      "Lampă elegantă de exterior alimentată cu energie solară. Creează o atmosferă specială de seară în grădina sau terasa ta cu o lampă wireless pe care o poți amplasa oriunde.",
    id: "5",
  },
  {
    name: "Masă cu foc Cosiloft 120 cu cadru negru rotund și blat din tec",
    price: "8040.00 Ron",
    image:
      "https://novadesignandbuild.ro/wp-content/uploads/2022/09/Nova-Design-Build-Masa-cu-foc-COSILOFT-120-Setting-1.png.webp",
    stock: 10,
    quantity: 0,
    details:
      "Ești în căutarea unui focar rotund pentru tine, prietenii tăi și familia ta să stai și să te distrezi? Cosiloft 120 round este focarul perfect pentru tine! Cosiloft are un cadru deschis și din aluminiu cu un blat de masă din lemn de tec.",
    id: "6",
  },
  {
    name: "Bolovani Ornamentali Marmură Albă Thassos 100-250 mm – palet 1300kg",
    price: "2.00 Ron/kg",
    image:
      "https://novadesignandbuild.ro/wp-content/uploads/2022/08/Nova-Design-Build-Piatra-Decorativa-sparta-Marmura-Alba-Thassos-100-250-mm-1-1024x669.jpg.webp",
    stock: 40,
    quantity: 0,
    details:
      "Recomandat pentru amenajări grâdini, fântâni arteziene și cascade",
    id: "7",
  },
  {
    name: "BUCATARIE KREA",
    price: "57.273.00 Ron",
    image:
      "https://ik.imagekit.io/yk8a51nt1hm/deltastudio-assets/21607600/Images/0x21607600-001-20220506134022772.jpg?tr=tr-true,q-80",
    stock: 2,
    quantity: 0,
    details:
      "Pretul nu include si electrocasnicele.Bucatariile se realizeaza pe comanda din module de diferite dimensiuni si se configureaza special pentru fiecare proiect in parte",
    id: "8",
  },
  {
    name: "COMPOZITIE TV NOBLESSE",
    price: "4.547.00 Ron",
    image:
      "https://ik.imagekit.io/yk8a51nt1hm/deltastudio-assets/23077200/Images/0x23077200-001-20220531155521675.jpg?tr=tr-true,q-80,w-771",
    stock: 8,
    quantity: 0,
    details:
      "Construita integral din lemn masiv de brad cu un design elegant , ofera un spatiu de depozitare practic cu rafturi ce pot fii ajustate pe inaltime.",
    id: "9",
  },
  {
    name: "Set Masuță de cafea cu scaune – NAMI – 2 locuri – Black",
    price: "2.985.00",
    image:
      "https://novadesignandbuild.ro/wp-content/uploads/2022/06/Nova-Design-Build-Set-masuta-de-cafea-cu-2-scaun-Black-1024x669.jpg.webp",
    stock: 20,
    quantity: 0,
    details:
      "Masa și scaunul NAMI constă dintr-un cadru din oțel acoperit cu pulbere, cu un blat frumos turnat din plastic. Blatul mesei și învelișul scaunului este fabricat în Danemarca și conține 97% gunoi din plastic danez de uz casnic adăugat 3% pigment de culoare.",
    id: "10",
  },
  {
    name: "Gresie Porțelanată – Glocal – 2 cm",
    price: "547.00 Ron/mp",
    image:
      "https://novadesignandbuild.ro/wp-content/uploads/2022/08/Nova-Design-Build-Gresie-Portelanata-Glocal-20-mm-1024x669.png.webp",
    stock: 30,
    quantity: 0,
    details:
      "Puterea betonului constă în faptul că este un material de mobilier neutru, excepțional de versatil și în capacitatea sa de a întruchipa întreaga identitate materială a produsului ceramic. Este disponibil în 7 culori.",
    id: "11",
  },
  {
    name: "WARM CHAOS TABLOU",
    price: "1.283.00 Ron",
    image:
      "https://ik.imagekit.io/yk8a51nt1hm/deltastudio-assets/25498440/Images/0x25498440-001-20230216151500127.jpg?tr=tr-true,q-80,w-771",
    stock: 17,
    quantity: 0,
    details:
      " Culorile pot diferi, in realitate, in functie de ecranul dispozitivului dar si de luminozitatea din mediul ambiental in care sunt vizualizate produsele.",
    id: "12",
  },
  {
    name: "Ghiveci Capi – Jardinieră în formă de ou 35×34 cm – Rib NL – Black",
    price: "270.00 Ron",
    image:
      "https://novadesignandbuild.ro/wp-content/uploads/2022/07/Nova-Design-Build-Ghiveci-Capi-Jardiniera-in-forma-de-ou-35x34cm-Rib-NL-Black-1024x669.jpg",
    stock: 60,
    quantity: 0,
    details:
      "Jardinieră Capi în formă de ou este potrivit atât pentru interior, cât și pentru exterior și sunt 100% reciclabile. Mărime: 35x34 cm.",
    id: "13",
  },
  {
    name: "WALK IN EASY PARAVAN DUS 80",
    price: "793.00 Ron",
    image:
      "https://ik.imagekit.io/yk8a51nt1hm/deltastudio-assets/17376200/Images/0x17376200-001-20220516134608202.jpg?tr=tr-true,q-80",
    stock: 40,
    quantity: 0,
    details:
      "Paravan dus walk-in. Contine bara stabilizatoare, profil prindere la perete si sticla 6 mm.",
    id: "14",
  },
  {
    name: "Pergolă Aluminiu Gri – SUNS Alvaro",
    price: "20.502.00 Ron",
    image:
      "https://novadesignandbuild.ro/wp-content/uploads/2022/08/Nova-Design-Build-Pergola-Aluminiu-Alvaro-Matt-Royal-Grey-1-.png.webp",
    stock: 14,
    quantity: 0,
    details:
      "Datorită pergolei Alvaro, construirea unui pergola nu mai este un proiect de construcție complicat și îndelungat: aceasta este o soluție inteligentă cu o durată de viață lungă.",
    id: "15",
  },
  {
    name: "FOTOLIU URBINO L 760 X L 820 X H 940 MM",
    price: "8.353.00 Ron",
    image:
      "https://deltastudio-assets.fra1.cdn.digitaloceanspaces.com/24859400/Images/0x24859400-002-20230105094847200.jpg",
    stock: 50,
    quantity: 0,
    details: "Produsul se aduce special pe comanda.",
    id: "16",
  },
  {
    name: "FOTOLIU COCO",
    price: "640.00 Ron",
    image:
      "https://deltastudio-assets.fra1.cdn.digitaloceanspaces.com/23662800/Images/0x23662800-002-20230113092835076.jpg",
    stock: 35,
    quantity: 0,
    details:
      "Coco este un fotoliu cu un cadru metalic tubular de ø20 mm. Suprafata sezutului si spatarul au o tapiterie fixa , nedetasabila ce poate fi din material textil sau piele. Iese în evidenta prin contrastul dintre structura metalica eleganta si cadrul fotoliului tapitat, acest fotoliu rafinat poate fi personalizat cu finisaje diferite într-un sortiment larg de variante de culoare.",
    id: "17",
  },
  {
    name: "MASUTA CAFEA NEST BIG",
    price: "984.00 Ron",
    image:
      "https://deltastudio-assets.fra1.cdn.digitaloceanspaces.com/24223600/Images/0x24223600-002-20230116104301701.jpg",
    stock: 55,
    quantity: 0,
    details:
      "Masuta cafea cu picior metalic lucrat manual in finisaj cupru antichizat si blat de sticla transparenta cu tenta verde. Produsul este confectionat manual si poate prezenta unele neregularitati imaginile au rol de prezentare",
    id: "18",
  },
  {
    name: "PARCHET LAMINAT, LAMIKRON, K338LAMI8V4AC5PURE, K338, CLASA TRAFIC 33, 1285 X 192X8 MM",
    price: "71.66 Ron/mp",
    image:
      "https://ik.imagekit.io/yk8a51nt1hm/deltastudio-assets/25795800/Images/0x25795800-001-20230310132953921.jpg?tr=tr-true,q-80,w-771",
    stock: 34,
    quantity: 0,
    details:
      "Parchetul este printre cele mai importante finisaje din cadrul oricarei incaperi in care este integrat. Culoarea, textura si caracteristicile tehnice ale acestuia pot transforma o incapere rece, atat ca atmosfera, cat si ca estetica, intr-una foarte primitoare si intima. Alegerea parchetului trebuie asadar, sa tina cont de toate aceste elemente.",
    id: "19",
  },
  {
    name: "OGLINDA TRITON CU ILUMINAT LED SI DEZABURIRE",
    price: "455.00 Ron",
    image:
      "https://ik.imagekit.io/yk8a51nt1hm/deltastudio-assets/20665800/Images/0x20665800-001-20230508084628616.jpg?tr=tr-true,q-80,w-771",
    stock: 75,
    quantity: 0,
    details: "Oglinda cu functie de iluminat cu banda led si dezaburire.",
    id: "20",
  },
];
