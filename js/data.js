const places = [
  {
    id: 1,
    name: "Kopi Kotak",
    city: "depok",
    area: "beji",
    tags: ["rooftop", "kopi", "nongkrong"],
    priceMin: 10000,
    priceMax: 57000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kopi+Kotak+Margonda+Depok",
    notes: "Jl. Margonda Raya No.488. Cocok teman"
  },
  {
    id: 2,
    name: "Waroeng SS (Spesial Sambal)",
    city: "depok",
    area: "beji",
    tags: ["sambal", "ayam penyet", "nasi", "murah"],
    priceMin: 10000,
    priceMax: 50000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Waroeng+SS+Margonda+Depok",
    notes: "Jl. Margonda No.280. Cocok teman"
  },
  {
    id: 3,
    name: "Roti Bakar Eddy",
    city: "depok",
    area: "beji",
    tags: ["roti bakar", "kopi", "legendaris"],
    priceMin: 10000,
    priceMax: 35000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Roti+Bakar+Eddy+Margonda+Depok",
    notes: "Jl. Margonda Raya No.369. Cocok teman"
  },
  {
    id: 4,
    name: "Tamelo Atap Cafe",
    city: "depok",
    area: "beji",
    tags: ["rooftop", "kopi", "sunset", "dessert"],
    priceMin: 10000,
    priceMax: 70000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tamelo+Atap+Cafe+Depok",
    notes: "Rooftop Apartemen Taman Melati Margonda 2. Cocok pasangan"
  },
  {
    id: 5,
    name: "Shabu Hachi",
    city: "depok",
    area: "beji",
    tags: ["shabu", "all you can eat", "jepang"],
    priceMin: 158000,
    priceMax: 200000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shabu+Hachi+Margonda+Depok",
    notes: "Jl. Margonda Raya No.2. Cocok keluarga"
  },
  {
    id: 6,
    name: "Mansae Korean Grill",
    city: "depok",
    area: "pancoran-mas",
    tags: ["korean bbq", "all you can eat", "korea"],
    priceMin: 99000,
    priceMax: 99000, // TODO: cek harga maksimum di Maps
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mansae+Korean+Grill+Depok",
    notes: "Ruko ITC Depok, Jl. Margonda Raya No.18. Cocok teman"
  },
    {
    id: 7,
    name: "Saung Talaga",
    city: "depok",
    area: "pancoran-mas",
    tags: ["sunda", "lesehan", "pecak ikan", "gurame"],
    priceMin: 32000,
    priceMax: 57000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Saung+Talaga+Sawangan+Depok",
    notes: "Jl. Raya Sawangan No.1. Cocok untuk keluarga",
    address: "Jl. Raya Sawangan No.1, Rangkapan Jaya, Pancoran Mas",
    openHours: "",
    facilities: [],
    whatsapp: "",
    instagram: "",
    tiktok: "",
    priceCheckedAt: "",
        photos: [
      "assets/images/places/saung-talaga-1.jpg",
      "assets/images/places/saung-talaga-2.jpg",
      "assets/images/places/saung-talaga-3.jpg"
    ]
  },
  {
    id: 8,
    name: "Soto Bu Tjondro",
    city: "depok",
    area: "pancoran-mas",
    tags: ["soto", "nasi", "sarapan"],
    priceMin: 30000,
    priceMax: 57000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Soto+Bu+Tjondro+Depok",
    notes: "Jl. Siliwangi No.1. Cocok keluarga"
  },
  {
    id: 9,
    name: "Sop Durian Margando",
    city: "depok",
    area: "pancoran-mas",
    tags: ["sop durian", "durian", "dessert"],
    priceMin: 10000,
    priceMax: 32000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sop+Durian+Margando+Depok",
    notes: "Jl. Arif Rahman Hakim No.1. Cocok teman, pasangan"
  },
  {
    id: 10,
    name: "Kampung Kecil Depok Sawangan",
    city: "depok",
    area: "pancoran-mas",
    tags: ["ayam bakar", "gurame", "iga penyet", "seafood"],
    priceMin: 21500,
    priceMax: 35000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kampung+Kecil+Depok+Sawangan",
    notes: "Ruko Pancoran Mas, Jl. Raya Sawangan No.81. Cocok keluarga"
  },
  {
    id: 11,
    name: "Rumah Makan Lesehan Pondok Laras",
    city: "depok",
    area: "sukmajaya",
    tags: ["lesehan", "ayam penyet", "ikan bakar", "sunda"],
    priceMin: 19000,
    priceMax: 30000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pondok+Laras+Keadilan+Raya+Depok",
    notes: "Jl. Keadilan Raya No.1. Cek cabang. Cocok keluarga"
  },
  {
    id: 12,
    name: "Pondok Laras (Akses UI)",
    city: "depok",
    area: "cimanggis",
    tags: ["lesehan", "gurame", "sunda"],
    priceMin: 10000,
    priceMax: 100000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pondok+Laras+Akses+UI+Depok",
    notes: "Jl. Akses UI No.2. Saung di atas kolam, ada area bermain anak"
  },
  {
    id: 13,
    name: "Roti Bakar Edi Klasik",
    city: "depok",
    area: "sawangan",
    tags: ["roti bakar", "kopi", "nongkrong"],
    priceMin: 10000,
    priceMax: 150000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Roti+Bakar+Edi+Klasik+Sawangan",
    notes: "Jl. Rivaria Dalam No.3, Bedahan"
  },
  {
    id: 14,
    name: "Kaizen Heritage",
    city: "depok",
    area: "limo",
    tags: ["kafe", "24 jam"],
    priceMin: 30000,
    priceMax: 32000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaizen+Heritage+Meruyung+Depok",
    notes: "Jl. Meruyung Raya No.1. Cocok teman"
  },
  {
    id: 15,
    name: "The Park Sawangan (foodhub)",
    city: "depok",
    area: "bojongsari",
    tags: ["food court", "mal", "steak", "jepang", "keluarga"],
    priceMin: 35000,
    priceMax: 70000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Park+Sawangan",
    notes: "Jl. Raya Parung-Ciputat No.1, Serua. Cocok keluarga"
  }
];