import { Medicine } from '../../app/models/medicine.model';

export function postMedicine(medicine: Medicine)
{
    medicines = [
        ...medicines,
        {
            ...medicine,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Medicine> }>((resolve) =>
        setTimeout(() => resolve({ data: medicines }), 1000)
    );
}

export function getMedicines()
{
    return new Promise<{ data: Array<Medicine> }>((resolve) =>
        setTimeout(() => resolve({ data: medicines }), 1000)
    );
}

export function putMedicine(medicine: Medicine)
{
    medicines = [
        ...medicines.filter(doc => doc.id !== medicine.id),
        {
            ...medicine,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Medicine> }>((resolve) =>
        setTimeout(() => resolve({ data: medicines }), 1000)
    );
}

export function deleteMedicine(id: string)
{
    medicines = medicines.filter(doc => doc.id !== id);

    return new Promise<{ data: Array<Medicine> }>((resolve) =>
        setTimeout(() => resolve({ data: medicines }), 1000)
    );
}

export let medicines: Array<Medicine> = [
    {
        id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString(),
        name: 'Dorflex',
        manufacturer: 'Sanofi'
    },
    {
        id: "01",
        name: "Glycerin",
        manufacturer: "AMI Cosmetic Co.,Ltd."
    },
    {
        id: "02",
        name: "Dextromethorphan Hydrobromide, GUAIFENESIN",
        manufacturer: "Major Pharmeceuticals"
    },
    {
        id: "03",
        name: "Acetaminophen, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride, and Doxylamine succinate",
        manufacturer: "Bayer HealthCare LLC, Consumer Care"
    },
    {
        id: "04",
        name: "Oxycodone Hydrochloride",
        manufacturer: "Aurolife Pharma LLC"
    },
    {
        id: "05",
        name: "buprenorphine hydrochloride",
        manufacturer: "REMEDYREPACK INC."
    },
    {
        id: "06",
        name: "Titanium Dioxide and Octinoxate",
        manufacturer: "Space Brands Limited"
    },
    {
        id: "07",
        name: "Avena Sativa Flowering Top, Capsicum, Strychnos Nux-Vomica Seed, Veratrum Album Root, and Zinc",
        manufacturer: "LC Industries"
    },
    {
        id: "08",
        name: "Ethyl Alcohol",
        manufacturer: "HandsFree"
    },
    {
        id: "09",
        name: "Cyclobenzaprine Hydrochloride",
        manufacturer: "KVK-TECH, Inc."
    },
    {
        id: "10",
        name: "Penicillin V Potasium",
        manufacturer: "Sandoz Inc"
    },
    {
        id: "11",
        name: "Bisacodyl",
        manufacturer: "H E B"
    },
    {
        id: "12",
        name: "Octinoxate Zinc Oxide",
        manufacturer: "Cosmelor Ltd"
    },
    {
        id: "13",
        name: "TOPICAL STARCH",
        manufacturer: "KJI Industrial Co Ltd"
    },
    {
        id: "14",
        name: "Johnson Grass",
        manufacturer: "Nelco Laboratories, Inc."
    },
    {
        id: "15",
        name: "Hypromellose 2910 (4000 Mpa.s)",
        manufacturer: "OCuSOFT, Inc."
    },
    {
        id: "16",
        name: "Alprazolam",
        manufacturer: "Actavis Elizabeth LLC"
    },
    {
        id: "17",
        name: "Aluminum Chlorohydrate",
        manufacturer: "Conopco Inc. d/b/a Unilever"
    },
    {
        id: "18",
        name: "Eucalyptol, Menthol, Methyl Salicylate, and Thymol",
        manufacturer: "Navajo Manufacturing Company Inc."
    },
    {
        id: "19",
        name: "COAL TAR",
        manufacturer: "NeoStrata Company Inc."
    },
    {
        id: "20",
        name: "Bacitracin",
        manufacturer: "G&W Laboratories, Inc."
    },
    {
        id: "21",
        name: "Atorvastatin Calcium",
        manufacturer: "Dr. Reddy's Laboratories Limited"
    },
    {
        id: "22",
        name: "Acetaldehyde, Arsenicum album, Balsamum peruvianum, Calcarea carbonica, Carbolicum acidum, Conium, Coumarinum, Crocus sativus, Histaminum hydrochloricum, Lachesis, Lycopodium, Phosphorus, Sepia",
        manufacturer: "Native Remedies, LLC"
    },
    {
        id: "23",
        name: "Dimethicone",
        manufacturer: "pH R&D LLC"
    },
    {
        id: "24",
        name: "Promethazine Hydrochloride",
        manufacturer: "Cardinal Health"
    },
    {
        id: "25",
        name: "Donepezil Hydrochloride",
        manufacturer: "REMEDYREPACK INC."
    },
    {
        id: "26",
        name: "estradiol",
        manufacturer: "Mylan Pharmaceuticals Inc."
    },
    {
        id: "27",
        name: "Benzalkonium chloride",
        manufacturer: "Chain Drug Consortium"
    },
    {
        id: "28",
        name: "Nicotine Polacrilex",
        manufacturer: "L. Perrigo Company"
    },
    {
        id: "29",
        name: "Levothyroxine Sodium",
        manufacturer: "REMEDYREPACK INC."
    },
    {
        id: "30",
        name: "Nicotine Polacrilex",
        manufacturer: "Topco Associates LLC"
    },
    {
        id: "31",
        name: "Herpes Zoster",
        manufacturer: "Deseret Biologicals, Inc."
    },
    {
        id: "32",
        name: "sodium bicarbonate",
        manufacturer: "Sagent Pharmaceuticals"
    },
    {
        id: "33",
        name: "Naltrexone Hydrochloride",
        manufacturer: "TAGI Pharma Inc."
    },
    {
        id: "34",
        name: "Herring",
        manufacturer: "Nelco Laboratories, Inc."
    },
    {
        id: "35",
        name: "DIMETHICONE",
        manufacturer: "GOWOONSESANG COSMETICS CO., LTD."
    },
    {
        id: "36",
        name: "Sumatriptan Succinate",
        manufacturer: "Greenstone LLC"
    },
    {
        id: "37",
        name: "Capsaicin, Menthol",
        manufacturer: "Hisamitsu Pharmaceutical Co., Inc."
    },
    {
        id: "38",
        name: "Hydralazine Hydrochloride",
        manufacturer: "Akorn, Inc."
    },
    {
        id: "39",
        name: "Lidocaine Hydrochloride",
        manufacturer: "Mylan Institutional LLC"
    },
    {
        id: "40",
        name: "GRANISETRON HYDROCHLORIDE",
        manufacturer: "WOCKHARDT USA LLC"
    },
    {
        id: "41",
        name: "Fosinopril Sodium and Hydrochlorothiazide",
        manufacturer: "Glenmark Generics Inc., USA"
    },
    {
        id: "42",
        name: "OCTINOXATE and TITANIUM DIOXIDE",
        manufacturer: "KANEBO COSMETICS INC."
    },
    {
        id: "43",
        name: "Lamotrigine",
        manufacturer: "Aurobindo Pharma Limited"
    },
    {
        id: "44",
        name: "Factor XIII Concentrate (Human)",
        manufacturer: "CSL Behring GmbH"
    },
    {
        id: "45",
        name: "sumatriptan succinate",
        manufacturer: "West-Ward Pharmaceutical Corp"
    },
    {
        id: "46",
        name: "Cetirizine Hydrochloride",
        manufacturer: "Sun Pharma Global FZE"
    },
    {
        id: "47",
        name: "Titanium Dioxide, Zinc Oxide",
        manufacturer: "Bare Escentuals Beauty Inc."
    },
    {
        id: "48",
        name: "Arroyo Willow",
        manufacturer: "Nelco Laboratories, Inc."
    },
    {
        id: "49",
        name: "Levothyroxine Sodium",
        manufacturer: "AbbVie Inc."
    },
    {
        id: "50",
        name: "AZITHROMYCIN",
        manufacturer: "REMEDYREPACK INC."
    },
    {
        id: "51",
        name: "Oxybutynin Chloride",
        manufacturer: "AvPAK"
    },
    {
        id: "52",
        name: "Diphenhydramine Hydrochloride, Zinc Acetate",
        manufacturer: "Safeway"
    },
    {
        id: "53",
        name: "Captopril",
        manufacturer: "Unit Dose Services"
    },
    {
        id: "54",
        name: "SULFUR",
        manufacturer: "Remedy Makers"
    },
    {
        id: "55",
        name: "SODIUM FLUORIDE",
        manufacturer: "Mission Hills S.A de C.V"
    },
    {
        id: "56",
        name: "Phenylephrine HCl, Witch hazel",
        manufacturer: "Rite Aid Corporation"
    },
    {
        id: "57",
        name: "Sotalol Hydrochloride",
        manufacturer: "Upsher-Smith Laboratories, Inc."
    },
    {
        id: "58",
        name: "Pramipexole Dihydrochloride",
        manufacturer: "NCS HealthCare of KY, Inc dba Vangard Labs"
    },
    {
        id: "59",
        name: "ZIKS ARTHRITIS PAIN RELIEF",
        manufacturer: "Nnodum Pharmaceuticals"
    },
    {
        id: "60",
        name: "Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone",
        manufacturer: "Philosophy"
    },
    {
        id: "61",
        name: "SULFURIC ACID",
        manufacturer: "Natural Health Supply"
    },
    {
        id: "62",
        name: "perphenazine",
        manufacturer: "Clinical Solutions Wholesale"
    },
    {
        id: "63",
        name: "Bismuth Subsalicylate",
        manufacturer: "Family Dollar"
    },
    {
        id: "64",
        name: "Prochlorperazine maleate",
        manufacturer: "Preferred Pharmaceuticals, Inc."
    },
    {
        id: "65",
        name: "Loratadine, Pseudoephedrine Sulfate",
        manufacturer: "Publix Super Markets Inc"
    },
    {
        id: "66",
        name: "oxandrolone",
        manufacturer: "Upsher-Smith Laboratories, Inc."
    },
    {
        id: "67",
        name: "acetylcholine chloride, histamine, serotonin",
        manufacturer: "VIATREXX BIO INCORPORATED"
    },
    {
        id: "68",
        name: "Guanidine hydrochloride",
        manufacturer: "Merck Sharp & Dohme Corp."
    },
    {
        id: "69",
        name: "warfarin sodium",
        manufacturer: "Aphena Pharma Solutions - Tennessee, Inc."
    },
    {
        id: "70",
        name: "Morphine Sulfate",
        manufacturer: "Lake Erie Medical DBA Quality Care Products LLC"
    },
    {
        id: "71",
        name: "Neomycin, Polymyxin B, Pramoxine Hcl",
        manufacturer: "H E B"
    },
    {
        id: "72",
        name: "Loratadine",
        manufacturer: "Target Corporation"
    },
    {
        id: "73",
        name: "FLUOXETINE HYDROCHLORIDE",
        manufacturer: "Pharmaceutical Associates, Inc."
    },
    {
        id: "74",
        name: "Clotrimazole",
        manufacturer: "Meijer Distribution Inc"
    },
    {
        id: "75",
        name: "Belladonna, Carduus Marianus, Chelidonium Majus, Colocynthis, Lycopodium Clavatum, Natrum Sulphuricum, Nux Vomica, Phosphorus, Pulsatilla, Veratrum Album",
        manufacturer: "Energique, Inc."
    },
    {
        id: "76",
        name: "Glyburide and Metformin",
        manufacturer: "Unit Dose Services"
    },
    {
        id: "77",
        name: "Amoxicillin",
        manufacturer: "Altura Pharmaceuticals, Inc."
    },
    {
        id: "78",
        name: "Triclosan",
        manufacturer: "STERIS Corporation"
    },
    {
        id: "79",
        name: "Octinoxate and Titanium dioxide",
        manufacturer: "L'Oreal USA Products Inc"
    },
    {
        id: "80",
        name: "SIMVASTATIN",
        manufacturer: "Merck Sharp & Dohme Corp."
    },
    {
        id: "81",
        name: "Paroxetine Hydrochloride",
        manufacturer: "Teva Pharmaceuticals USA Inc"
    },
    {
        id: "82",
        name: "calcium carbonate",
        manufacturer: "Western Family Foods Inc"
    },
    {
        id: "83",
        name: "Dimethicone",
        manufacturer: "Medline Industries, Inc."
    },
    {
        id: "84",
        name: "Oxygen",
        manufacturer: "Riverside Health Equipment"
    },
    {
        id: "85",
        name: "OCTINOXATE, OCTOCRYLENE, OCTISALATE, and OXYBENZONE",
        manufacturer: "GANZ U.S.A., LLC"
    },
    {
        id: "86",
        name: "Flumazenil",
        manufacturer: "General Injectables and Vaccines, Inc"
    },
    {
        id: "87",
        name: "Oyster",
        manufacturer: "Nelco Laboratories, Inc."
    },
    {
        id: "88",
        name: "Permethrin",
        manufacturer: "Insight Pharmaceuticals"
    },
    {
        id: "89",
        name: "Lovastatin",
        manufacturer: "REMEDYREPACK INC."
    },
    {
        id: "90",
        name: "Menthol",
        manufacturer: "CVS"
    },
    {
        id: "91",
        name: "ISOPROPYL ALCOHOL",
        manufacturer: "AMERICAN CONSUMER PRODUCTS LLC"
    },
    {
        id: "92",
        name: "Trazodone Hydrochloride",
        manufacturer: "Golden State Medical Supply, Inc."
    },
    {
        id: "93",
        name: "Nitrogen",
        manufacturer: "Corp Brothers, Incorporated"
    },
    {
        id: "94",
        name: "VARDENAFIL HYDROCHLORIDE",
        manufacturer: "KAISER FOUNDATION HOSPITALS"
    },
    {
        id: "95",
        name: "Avobenzone, Homosalate, Octisalate and Octocrylene",
        manufacturer: "L'Oreal USA Products Inc"
    },
    {
        id: "96",
        name: "Duloxetine",
        manufacturer: "BluePoint Laboratories"
    },
    {
        id: "97",
        name: "estropipate",
        manufacturer: "Physicians Total Care, Inc."
    },
    {
        id: "98",
        name: "Propranolol Hydrochloride",
        manufacturer: "Pliva Inc."
    },
    {
        id: "99",
        name: "Chlordiazepoxide Hydrochloride",
        manufacturer: "REMEDYREPACK INC."
    },
    {
        id: "100",
        name: "Triclosan",
        manufacturer: "SJ Creations, Inc."
    }
]