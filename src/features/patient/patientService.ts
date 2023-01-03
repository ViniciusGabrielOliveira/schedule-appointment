import { Patient } from '../../app/models/patient.model';

export function postPatient(patient: Patient)
{
    patients = [
        ...patients,
        {
            ...patient,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Patient> }>((resolve) =>
        setTimeout(() => resolve({ data: patients }), 1000)
    );
}

export function getPatients()
{
    return new Promise<{ data: Array<Patient> }>((resolve) =>
        setTimeout(() => resolve({ data: patients }), 1000)
    );
}

export function putPatient(patient: Patient)
{
    patients = [
        ...patients.filter(doc => doc.id !== patient.id),
        {
            ...patient,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Patient> }>((resolve) =>
        setTimeout(() => resolve({ data: patients }), 1000)
    );
}

export function deletePatient(id: string)
{
    patients = patients.filter(doc => doc.id !== id);

    return new Promise<{ data: Array<Patient> }>((resolve) =>
        setTimeout(() => resolve({ data: patients }), 1000)
    );
}

export let patients: Array<Patient> = [
    {
        id: '123456789a',
        name: 'Maria das Graças',
        phone: 12988874488,
        email: 'mariadasgracas@gmail.com'
    },
    {
        id: '123456789b',
        name: 'João das Merces',
        phone: 12988994488,
        email: 'joadodasmerces@gmail.com'
    },
    {
        id: "com.listmanage.Ronstring",
        name: "Woodie Heims",
        phone: 3984872631,
        email: "wheims0@chronoengine.com",
        address: "3 Comanche Street"
    },
    {
        id: "com.jiathis.Transcof",
        name: "Tabbitha Molloy",
        phone: 8798401415,
        email: "tmolloy1@foxnews.com",
        address: "8 Petterle Parkway"
    },
    {
        id: "com.angelfire.Cardify",
        name: "Sigismundo Chasles",
        phone: 7244269014,
        email: "schasles2@cbslocal.com",
        address: "2 Union Plaza"
    },
    {
        id: "edu.upenn.Stronghold",
        name: "Bonnie Furbank",
        phone: 3109194122,
        email: "bfurbank3@edublogs.org",
        address: "3 Longview Pass"
    },
    {
        id: "ca.cbc.Mat Lam Tam",
        name: "Antonie Bacchus",
        phone: 1383829216,
        email: "abacchus4@jalbum.net",
        address: "789 Northview Terrace"
    },
    {
        id: "com.mediafire.Zathin",
        name: "Cecily Leport",
        phone: 6904499879,
        email: "cleport5@nature.com",
        address: "75987 Vahlen Road"
    },
    {
        id: "au.gov.nsw.Wrapsafe",
        name: "Teodora Sidaway",
        phone: 2325393346,
        email: "tsidaway6@1688.com",
        address: "9771 Memorial Terrace"
    },
    {
        id: "edu.wisc.Zathin",
        name: "Galvan Shipley",
        phone: 7716401872,
        email: "gshipley7@artisteer.com",
        address: "42376 Bartelt Trail"
    },
    {
        id: "cn.360.Hatity",
        name: "Viva Strickett",
        phone: 7973425395,
        email: "vstrickett8@nih.gov",
        address: "602 Bayside Crossing"
    },
    {
        id: "com.businesswire.Yfind",
        name: "Veronica Staniforth",
        phone: 9731455862,
        email: "vstaniforth9@apache.org",
        address: "374 Meadow Valley Terrace"
    },
    {
        id: "jp.co.yahoo.Daltfresh",
        name: "Elie Darragh",
        phone: 1009832277,
        email: "edarragha@opensource.org",
        address: "4 Gateway Center"
    },
    {
        id: "org.redcross.It",
        name: "Maria Akast",
        phone: 2512402006,
        email: "makastb@businessweek.com",
        address: "84 Pearson Terrace"
    },
    {
        id: "edu.umich.Alphazap",
        name: "Conny Bernardi",
        phone: 4464573646,
        email: "cbernardic@chron.com",
        address: "7063 Anderson Street"
    },
    {
        id: "uk.nhs.Duobam",
        name: "Kaylee Decreuze",
        phone: 3591444951,
        email: "kdecreuzed@wordpress.com",
        address: "6 Mariners Cove Way"
    },
    {
        id: "com.shutterfly.Greenlam",
        name: "Dorolisa Ipwell",
        phone: 8978893922,
        email: "dipwelle@ted.com",
        address: "60756 Weeping Birch Hill"
    },
    {
        id: "gov.fda.Overhold",
        name: "Renard Nurny",
        phone: 3827380667,
        email: "rnurnyf@parallels.com",
        address: "07869 Burning Wood Court"
    },
    {
        id: "tv.ustream.Keylex",
        name: "Phillie Brumen",
        phone: 4816513805,
        email: "pbrumeng@slate.com",
        address: "7815 Melrose Center"
    },
    {
        id: "com.sciencedirect.Tresom",
        name: "Stillman Tyre",
        phone: 7518246583,
        email: "styreh@nasa.gov",
        address: "2074 Crest Line Trail"
    },
    {
        id: "com.example.Tempsoft",
        name: "Frederique Frossell",
        phone: 9958985659,
        email: "ffrosselli@latimes.com",
        address: "5 Debs Avenue"
    },
    {
        id: "jp.japanpost.Fix San",
        name: "Galvan Ollis",
        phone: 4518380688,
        email: "gollisj@ow.ly",
        address: "6 Westend Pass"
    },
    {
        id: "gov.hhs.Alphazap",
        name: "Rozele Vassall",
        phone: 9704562909,
        email: "rvassallk@salon.com",
        address: "191 Lindbergh Plaza"
    },
    {
        id: "org.bbb.Tempsoft",
        name: "Beverlee Bertlin",
        phone: 2055153794,
        email: "bbertlinl@army.mil",
        address: "66958 Walton Trail"
    },
    {
        id: "com.qq.Flowdesk",
        name: "Stephanus Itzkov",
        phone: 4547873617,
        email: "sitzkovm@europa.eu",
        address: "115 Birchwood Drive"
    },
    {
        id: "com.yelp.Voyatouch",
        name: "Ronica Davidove",
        phone: 4562884762,
        email: "rdavidoven@blogtalkradio.com",
        address: "198 Hudson Lane"
    },
    {
        id: "com.buzzfeed.Stronghold",
        name: "Gale Fesby",
        phone: 3304991034,
        email: "gfesbyo@hostgator.com",
        address: "720 Barby Place"
    },
    {
        id: "com.businesswire.Alpha",
        name: "Arny Down",
        phone: 2148314734,
        email: "adownp@amazon.co.uk",
        address: "663 Del Mar Street"
    },
    {
        id: "com.deviantart.Solarbreeze",
        name: "Shayla Searchwell",
        phone: 1699272206,
        email: "ssearchwellq@nymag.com",
        address: "38033 Monument Pass"
    },
    {
        id: "com.vistaprint.Treeflex",
        name: "Prudence Baldick",
        phone: 9126958411,
        email: "pbaldickr@plala.or.jp",
        address: "770 Waywood Circle"
    },
    {
        id: "edu.columbia.Trippledex",
        name: "Grenville Krier",
        phone: 2981650187,
        email: "gkriers@bbc.co.uk",
        address: "846 Kedzie Way"
    },
    {
        id: "com.cafepress.Regrant",
        name: "Margie Corn",
        phone: 3209339055,
        email: "mcornt@vistaprint.com",
        address: "4 Mcbride Street"
    },
    {
        id: "com.globo.Pannier",
        name: "Husein Licciardello",
        phone: 7058567876,
        email: "hlicciardellou@ovh.net",
        address: "09282 Corben Center"
    },
    {
        id: "de.google.TresZap",
        name: "Felecia Josephsen",
        phone: 8735710746,
        email: "fjosephsenv@last.fm",
        address: "3 Glendale Alley"
    },
    {
        id: "org.opensource.Greenlam",
        name: "Valene Guilloux",
        phone: 2432032495,
        email: "vguillouxw@icq.com",
        address: "02603 6th Center"
    },
    {
        id: "cn.gov.miibeian.Lotlux",
        name: "Normy Mapis",
        phone: 1978755027,
        email: "nmapisx@ow.ly",
        address: "9 Kropf Road"
    },
    {
        id: "gov.senate.Fintone",
        name: "Caleb Klaassens",
        phone: 7949879887,
        email: "cklaassensy@netscape.com",
        address: "77043 Artisan Drive"
    },
    {
        id: "com.zdnet.Namfix",
        name: "Kissiah Leinweber",
        phone: 2488158838,
        email: "kleinweberz@go.com",
        address: "8404 Redwing Lane"
    },
    {
        id: "com.twitter.Bamity",
        name: "Arlan Stiegars",
        phone: 6026419907,
        email: "astiegars10@sohu.com",
        address: "89 Jay Park"
    },
    {
        id: "com.feedburner.Viva",
        name: "Guillema Beresford",
        phone: 3174231896,
        email: "gberesford11@sitemeter.com",
        address: "1078 Crest Line Hill"
    },
    {
        id: "com.disqus.Prodder",
        name: "Pamella Oake",
        phone: 5618635604,
        email: "poake12@netlog.com",
        address: "1 Linden Road"
    },
    {
        id: "uk.co.google.Redhold",
        name: "Johnna Jennings",
        phone: 5921852565,
        email: "jjennings13@hubpages.com",
        address: "069 Cascade Circle"
    },
    {
        id: "com.latimes.Fintone",
        name: "Ruthanne Yglesia",
        phone: 6125672270,
        email: "ryglesia14@reuters.com",
        address: "84 Tony Circle"
    },
    {
        id: "com.economist.Zamit",
        name: "Curr Vawton",
        phone: 2222029267,
        email: "cvawton15@alexa.com",
        address: "06059 Randy Avenue"
    },
    {
        id: "com.mlb.Keylex",
        name: "Ernaline Leall",
        phone: 4242798540,
        email: "eleall16@imdb.com",
        address: "820 Kim Pass"
    },
    {
        id: "uk.co.thetimes.Matsoft",
        name: "Cindi Quiddington",
        phone: 8423661405,
        email: "cquiddington17@nasa.gov",
        address: "89871 Oxford Center"
    },
    {
        id: "com.issuu.Overhold",
        name: "Kirk Don",
        phone: 2635758969,
        email: "kdon18@prnewswire.com",
        address: "7878 Delladonna Parkway"
    },
    {
        id: "com.xrea.Tampflex",
        name: "Ellery Polye",
        phone: 5762059151,
        email: "epolye19@printfriendly.com",
        address: "8 Browning Street"
    },
    {
        id: "com.tinyurl.It",
        name: "Ali Rolph",
        phone: 2802342299,
        email: "arolph1a@pcworld.com",
        address: "0491 Birchwood Drive"
    },
    {
        id: "uk.co.telegraph.ZaamDox",
        name: "Spence Angliss",
        phone: 9374471574,
        email: "sangliss1b@erecht24.de",
        address: "3545 Rutledge Hill"
    },
    {
        id: "com.mtv.Flowdesk",
        name: "Blinnie de Clerc",
        phone: 7766230063,
        email: "bde1c@mysql.com",
        address: "26 Bonner Crossing"
    },
    {
        id: "com.purevolume.Duobam",
        name: "Devy Dytham",
        phone: 2574810167,
        email: "ddytham1d@de.vu",
        address: "59 Bashford Street"
    },
    {
        id: "us.imageshack.Zontrax",
        name: "Carlos Tuxsell",
        phone: 4856256649,
        email: "ctuxsell1e@goodreads.com",
        address: "87747 Brentwood Court"
    },
    {
        id: "jp.japanpost.TresZap",
        name: "Constantine Ferreiro",
        phone: 9308083097,
        email: "cferreiro1f@a8.net",
        address: "1914 Nobel Crossing"
    },
    {
        id: "jp.ne.ocn.Konklux",
        name: "Blinnie Lake",
        phone: 7007451943,
        email: "blake1g@princeton.edu",
        address: "5026 Village Green Alley"
    },
    {
        id: "gov.va.YSolowarm",
        name: "Claudian Ottewill",
        phone: 7104736287,
        email: "cottewill1h@a8.net",
        address: "83132 Shoshone Plaza"
    },
    {
        id: "com.bloglovin.Prodder",
        name: "Beryle Lehrer",
        phone: 5832447608,
        email: "blehrer1i@unicef.org",
        address: "05219 Wayridge Point"
    },
    {
        id: "jp.co.rakuten.Lotlux",
        name: "Hugibert Burbridge",
        phone: 5714938193,
        email: "hburbridge1j@shareasale.com",
        address: "1894 Buhler Hill"
    },
    {
        id: "com.reddit.ZaamDox",
        name: "Carmina Blackaller",
        phone: 3822118802,
        email: "cblackaller1k@buzzfeed.com",
        address: "89965 Lukken Junction"
    },
    {
        id: "org.simplemachines.Viva",
        name: "Georgiana Bodicum",
        phone: 8918349828,
        email: "gbodicum1l@github.com",
        address: "2260 Susan Hill"
    },
    {
        id: "com.elegantthemes.Hatity",
        name: "Estelle Philbrook",
        phone: 3985446906,
        email: "ephilbrook1m@google.ru",
        address: "4 Corben Terrace"
    },
    {
        id: "com.linkedin.Stim",
        name: "Leshia Elcock",
        phone: 1276174455,
        email: "lelcock1n@de.vu",
        address: "637 Pleasure Circle"
    },
    {
        id: "gov.va.Ventosanzap",
        name: "Earvin Standeven",
        phone: 2257842702,
        email: "estandeven1o@blog.com",
        address: "736 Mariners Cove Court"
    },
    {
        id: "us.icio.Ventosanzap",
        name: "Grady Sambiedge",
        phone: 9099724143,
        email: "gsambiedge1p@timesonline.co.uk",
        address: "36844 Veith Lane"
    },
    {
        id: "org.unicef.Otcom",
        name: "Nisse Beeden",
        phone: 5549257049,
        email: "nbeeden1q@123reg.co.uk",
        address: "80 Oakridge Plaza"
    },
    {
        id: "com.prweb.Wrapsafe",
        name: "Quintin McClymont",
        phone: 4308766925,
        email: "qmcclymont1r@engadget.com",
        address: "78055 Melody Pass"
    },
    {
        id: "com.chron.Veribet",
        name: "Melli Henlon",
        phone: 6458611194,
        email: "mhenlon1s@statcounter.com",
        address: "69 Loeprich Park"
    },
    {
        id: "com.sciencedirect.Kanlam",
        name: "Tuckie Eliez",
        phone: 1743759879,
        email: "teliez1t@guardian.co.uk",
        address: "95556 Eagle Crest Crossing"
    },
    {
        id: "com.dropbox.Solarbreeze",
        name: "Lil Boyles",
        phone: 9171039549,
        email: "lboyles1u@springer.com",
        address: "05027 Northridge Way"
    },
    {
        id: "gov.va.Alphazap",
        name: "Cchaddie Studders",
        phone: 2041433556,
        email: "cstudders1v@nature.com",
        address: "671 Butternut Alley"
    },
    {
        id: "com.bandcamp.Tampflex",
        name: "Nettie Greenfield",
        phone: 1303460633,
        email: "ngreenfield1w@sourceforge.net",
        address: "56799 Rutledge Avenue"
    },
    {
        id: "com.netlog.Matsoft",
        name: "Godiva Arlott",
        phone: 2466684922,
        email: "garlott1x@netlog.com",
        address: "90530 Michigan Street"
    },
    {
        id: "cn.com.china.Stronghold",
        name: "Winny MacAughtrie",
        phone: 1171561267,
        email: "wmacaughtrie1y@privacy.gov.au",
        address: "569 Dahle Street"
    },
    {
        id: "io.github.Job",
        name: "Ofella Mottershaw",
        phone: 7743657787,
        email: "omottershaw1z@washington.edu",
        address: "5 Daystar Circle"
    },
    {
        id: "es.google.Tempsoft",
        name: "Jarret Flieger",
        phone: 1373796478,
        email: "jflieger20@bbb.org",
        address: "7 Debra Terrace"
    },
    {
        id: "edu.stanford.Asoka",
        name: "Amalle Martinetto",
        phone: 9099515345,
        email: "amartinetto21@imageshack.us",
        address: "42326 Northland Road"
    },
    {
        id: "jp.co.amazon.Tresom",
        name: "Manon Bennison",
        phone: 2083054810,
        email: "mbennison22@forbes.com",
        address: "1 Pond Park"
    },
    {
        id: "com.friendfeed.Opela",
        name: "Odie Aleksic",
        phone: 2095604313,
        email: "oaleksic23@discovery.com",
        address: "47 Sage Court"
    },
    {
        id: "com.freewebs.Bitchip",
        name: "Rebekah Chaster",
        phone: 6098884365,
        email: "rchaster24@php.net",
        address: "5 6th Park"
    },
    {
        id: "com.macromedia.Fix San",
        name: "Godiva Pownall",
        phone: 9521855547,
        email: "gpownall25@scribd.com",
        address: "74 Chive Way"
    },
    {
        id: "com.cdbaby.Domainer",
        name: "Raynor Headford",
        phone: 1722967815,
        email: "rheadford26@goodreads.com",
        address: "4850 Main Circle"
    },
    {
        id: "gov.fda.Fix San",
        name: "Cristin Lloyds",
        phone: 5399050307,
        email: "clloyds27@nhs.uk",
        address: "5 Russell Avenue"
    },
    {
        id: "com.sphinn.Asoka",
        name: "Pincas Mayworth",
        phone: 9988513728,
        email: "pmayworth28@moonfruit.com",
        address: "91116 Sloan Circle"
    },
    {
        id: "br.com.google.Zontrax",
        name: "Janina Lowmass",
        phone: 2277698365,
        email: "jlowmass29@berkeley.edu",
        address: "418 Sauthoff Trail"
    },
    {
        id: "com.discovery.Duobam",
        name: "Xever Songhurst",
        phone: 1911012716,
        email: "xsonghurst2a@home.pl",
        address: "8 Golden Leaf Circle"
    },
    {
        id: "com.livejournal.Sonsing",
        name: "Nissie Avery",
        phone: 5145228847,
        email: "navery2b@etsy.com",
        address: "5660 Forster Junction"
    },
    {
        id: "gd.is.Cardguard",
        name: "Jewel Panniers",
        phone: 8913973598,
        email: "jpanniers2c@ucoz.ru",
        address: "0022 Ridge Oak Lane"
    },
    {
        id: "org.archive.Mat Lam Tam",
        name: "Biddy Statham",
        phone: 5025486485,
        email: "bstatham2d@washington.edu",
        address: "91 Boyd Way"
    },
    {
        id: "com.sciencedirect.Bitwolf",
        name: "Brianne Keighley",
        phone: 4479888549,
        email: "bkeighley2e@yale.edu",
        address: "60238 Roxbury Circle"
    },
    {
        id: "uk.gov.Prodder",
        name: "Lauretta Gallear",
        phone: 2954525876,
        email: "lgallear2f@shinystat.com",
        address: "954 Drewry Plaza"
    },
    {
        id: "uk.co.timesonline.Biodex",
        name: "Vaclav Culp",
        phone: 6236678713,
        email: "vculp2g@parallels.com",
        address: "0 Clyde Gallagher Avenue"
    },
    {
        id: "com.answers.Stronghold",
        name: "Thoma Mossdale",
        phone: 7346166311,
        email: "tmossdale2h@surveymonkey.com",
        address: "8252 Corry Road"
    },
    {
        id: "edu.umich.Cardify",
        name: "Broddie Goning",
        phone: 1096435324,
        email: "bgoning2i@google.ru",
        address: "50301 Pankratz Crossing"
    },
    {
        id: "com.cbsnews.Fixflex",
        name: "Shayna Duley",
        phone: 3256023601,
        email: "sduley2j@miitbeian.gov.cn",
        address: "26801 Brickson Park Circle"
    },
    {
        id: "com.examiner.Solarbreeze",
        name: "Genevieve MacLachlan",
        phone: 5361227369,
        email: "gmaclachlan2k@intel.com",
        address: "8436 Blue Bill Park Lane"
    },
    {
        id: "gov.nps.Stronghold",
        name: "Sigismund Waddicor",
        phone: 9914727295,
        email: "swaddicor2l@webs.com",
        address: "36722 Granby Parkway"
    },
    {
        id: "com.hao123.It",
        name: "Goddard Yeiles",
        phone: 3889561333,
        email: "gyeiles2m@intel.com",
        address: "1861 Lindbergh Place"
    },
    {
        id: "com.scribd.Veribet",
        name: "Sinclair Haken",
        phone: 3424070380,
        email: "shaken2n@earthlink.net",
        address: "6 Lotheville Parkway"
    },
    {
        id: "uk.co.thetimes.Sonsing",
        name: "Teresita Jeanenet",
        phone: 4279314150,
        email: "tjeanenet2o@npr.org",
        address: "76575 Mockingbird Drive"
    },
    {
        id: "au.org.auda.Stronghold",
        name: "Daisy Stollhofer",
        phone: 2176742722,
        email: "dstollhofer2p@listmanage.com",
        address: "9 Claremont Trail"
    },
    {
        id: "edu.upenn.Zoolab",
        name: "Marthe Bartholomaus",
        phone: 2261252655,
        email: "mbartholomaus2q@fda.gov",
        address: "76483 Shelley Center"
    },
    {
        id: "com.overblog.Home Ing",
        name: "Florri Bertl",
        phone: 9786806429,
        email: "fbertl2r@unicef.org",
        address: "905 Norway Maple Point"
    }
]