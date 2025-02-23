(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
    },
  });

  //accordions
  var tarifData = {
    tarif_pengiriman: [
      {
        jenis: "DARAT JAWA, BALI, DAN LOMBOK",
        origin: "Surabaya",
        regions: [
          {
            nama_region: "JABODETABEK",
            destinasi: [
              {
                no: 1,
                tujuan: "JAKARTA",
                kode: "JKT",
                harga: 2000,
                estimasi: "2-3",
              },
              {
                no: 2,
                tujuan: "BOGOR",
                kode: "BGR",
                harga: 2400,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "CIBINONG",
                kode: "CBG",
                harga: 2400,
                estimasi: "3-4",
              },
              {
                no: 4,
                tujuan: "G.PUTRI",
                kode: "GPR",
                harga: 2400,
                estimasi: "3-4",
              },
              {
                no: 5,
                tujuan: "DEPOK",
                kode: "DPK",
                harga: 2400,
                estimasi: "3-4",
              },
              {
                no: 6,
                tujuan: "TANGERANG",
                kode: "TGR",
                harga: 2400,
                estimasi: "3-4",
              },
              {
                no: 7,
                tujuan: "BEKASI",
                kode: "BKI",
                harga: 2400,
                estimasi: "3-4",
              },
              {
                no: 8,
                tujuan: "CIBITUNG",
                kode: "CBT",
                harga: 3200,
                estimasi: "3-4",
              },
              {
                no: 9,
                tujuan: "CIKARANG",
                kode: "CKR",
                harga: 2800,
                estimasi: "3-4",
              },
            ],
          },
          {
            nama_region: "KUDUS",
            destinasi: [
              {
                no: 1,
                tujuan: "KUDUS",
                kode: "KDS",
                harga: 2000,
                estimasi: "2-3",
              },
              {
                no: 2,
                tujuan: "DEMAK",
                kode: "DMK",
                harga: 2000,
                estimasi: "2-3",
              },
              {
                no: 3,
                tujuan: "JEPARA",
                kode: "JPR",
                harga: 2000,
                estimasi: "2-3",
              },
              {
                no: 4,
                tujuan: "REMBANG",
                kode: "RMB",
                harga: 2800,
                estimasi: "2-3",
              },
              {
                no: 5,
                tujuan: "BLORA",
                kode: "BLR",
                harga: 2400,
                estimasi: "2-3",
              },
              {
                no: 6,
                tujuan: "PATI",
                kode: "PTI",
                harga: 2400,
                estimasi: "2-3",
              },
              {
                no: 7,
                tujuan: "CEPU",
                kode: "CPU",
                harga: 2800,
                estimasi: "2-3",
              },
              {
                no: 8,
                tujuan: "PURWODADI",
                kode: "PDD",
                harga: 2800,
                estimasi: "2-3",
              },
            ],
          },
          {
            nama_region: "SERANG",
            destinasi: [
              {
                no: 1,
                tujuan: "SERANG",
                kode: "SNG",
                harga: 3600,
                estimasi: "2-3",
              },
              {
                no: 2,
                tujuan: "PANDEGLANG",
                kode: "PNDG",
                harga: 4000,
                estimasi: "2-3",
              },
              {
                no: 3,
                tujuan: "RANGKAS BITUNG",
                kode: "RBT",
                harga: 4000,
                estimasi: "2-3",
              },
              {
                no: 4,
                tujuan: "LABUAN",
                kode: "LBN",
                harga: 4000,
                estimasi: "2-3",
              },
              {
                no: 5,
                tujuan: "BITUNG",
                kode: "BIT",
                harga: 4000,
                estimasi: "2-3",
              },
              {
                no: 6,
                tujuan: "CILEGON",
                kode: "CLG",
                harga: 4800,
                estimasi: "2-3",
              },
              {
                no: 7,
                tujuan: "ANYER",
                kode: "ANY",
                harga: 4800,
                estimasi: "2-3",
              },
              {
                no: 8,
                tujuan: "MERAK",
                kode: "MRK",
                harga: 4800,
                estimasi: "2-3",
              },
            ],
          },
          {
            nama_region: "TUBAN",
            destinasi: [
              {
                no: 1,
                tujuan: "TUBAN",
                kode: "TBN",
                harga: 2400,
                estimasi: "2-3",
              },
              {
                no: 2,
                tujuan: "BOJONEGORO",
                kode: "BJG",
                harga: 2400,
                estimasi: "2-3",
              },
            ],
          },
          {
            nama_region: "BANDUNG",
            destinasi: [
              {
                no: 1,
                tujuan: "BANDUNG",
                kode: "BDO",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "CIMAHI",
                kode: "CMI",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "PADALARANG",
                kode: "PDL",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "SUMEDANG",
                kode: "SMD",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "LEMBANG",
                kode: "LBG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "CIWIDEY",
                kode: "CWY",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "PANGALENGAN",
                kode: "PGLN",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "RAJAMANDALA",
                kode: "RJDL",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 9,
                tujuan: "CIKALONG",
                kode: "CKLG",
                harga: 5200,
                estimasi: "5-6",
              },
            ],
          },
          {
            nama_region: "PURWAKARTA",
            destinasi: [
              {
                no: 1,
                tujuan: "PURWAKARTA",
                kode: "PWK",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "CIKOPO",
                kode: "CKPO",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "KARAWANG",
                kode: "KRW",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "CIKAMPEK",
                kode: "CKP",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "SUBANG",
                kode: "SBG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "PATROL",
                kode: "PRL",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "PAMANUKAN",
                kode: "PNK",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "SUKABUMI",
            destinasi: [
              {
                no: 1,
                tujuan: "SUKABUMI",
                kode: "SKB",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "KELAPA NUNGGAL",
                kode: "KNL",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "PARAKAN SALAK",
                kode: "PRSK",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "PELABUHAN RATU",
                kode: "PLRT",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "JAMPANG",
                kode: "JPG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "PABUARAN",
                kode: "PBR",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "SURADE",
                kode: "SRD",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "UJUNG GENTENG",
                kode: "UJG",
                harga: 5200,
                estimasi: "5-6",
              },
            ],
          },
          {
            nama_region: "CIANJUR",
            destinasi: [
              {
                no: 1,
                tujuan: "CIANJUR",
                kode: "CJR",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "CIPANAS",
                kode: "CPS",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "PAGELARAN",
                kode: "PGR",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "SUKANEGARA",
                kode: "SNR",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "TANGGEUNG",
                kode: "TGNG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "CIDAUN",
                kode: "CDN",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "AGRA BINTA",
                kode: "ABT",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "TASIKMALAYA",
            destinasi: [
              {
                no: 1,
                tujuan: "TASIKMALAYA",
                kode: "TSK",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "GARUT",
                kode: "GRT",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "CIAMIS",
                kode: "CMS",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "BANJAR",
                kode: "BJR",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "PURWOKERTO",
            destinasi: [
              {
                no: 1,
                tujuan: "PURWOKERTO",
                kode: "PWO",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "CILACAP",
                kode: "CLP",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "PURBALINGGA",
                kode: "PBLG",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "BANYUMAS",
                kode: "BYS",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "MAJENANG",
                kode: "MJG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "AJIBARANG",
                kode: "AJB",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "CIREBON",
            destinasi: [
              {
                no: 1,
                tujuan: "CIREBON",
                kode: "CRB",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "INDRAMAYU",
                kode: "IDY",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "PALIMANAN",
                kode: "PMN",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "KUNINGAN",
                kode: "KNG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "TEGAL GUBUK",
                kode: "TGG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "MAJALENGKA",
                kode: "MJK",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "TEGAL",
            destinasi: [
              {
                no: 1,
                tujuan: "TEGAL",
                kode: "TGL",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "BREBES",
                kode: "BBS",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "LOSARI",
                kode: "LSR",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "JATI BARANG",
                kode: "JTB",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "SLAWI",
                kode: "SLW",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "SURADADI",
                kode: "SRD",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "LARANGAN",
                kode: "LRG",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "PEKALONGAN",
            destinasi: [
              {
                no: 1,
                tujuan: "PEKALONGAN",
                kode: "PKL",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "PEMALANG",
                kode: "PMG",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "BATANG",
                kode: "BTG",
                harga: 3600,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "SEMARANG",
            destinasi: [
              {
                no: 1,
                tujuan: "SEMARANG",
                kode: "SMR",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "UNGGARAN",
                kode: "UGR",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "BAWEAN",
                kode: "BWN",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "AMBRAWA",
                kode: "ABW",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "SALATIGA",
                kode: "STG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "KENDAL",
                kode: "KDL",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "SOLO",
            destinasi: [
              {
                no: 1,
                tujuan: "SOLO",
                kode: "SOC",
                harga: 1600,
                estimasi: "2-3",
              },
              {
                no: 2,
                tujuan: "KARANGANYAR",
                kode: "KYR",
                harga: 2000,
                estimasi: "2-3",
              },
              {
                no: 3,
                tujuan: "SRAGEN",
                kode: "SGN",
                harga: 2400,
                estimasi: "2-3",
              },
              {
                no: 4,
                tujuan: "WONOGIRI",
                kode: "WGR",
                harga: 2800,
                estimasi: "2-3",
              },
              {
                no: 5,
                tujuan: "SUKOHARJO",
                kode: "SHJ",
                harga: 2400,
                estimasi: "2-3",
              },
              {
                no: 6,
                tujuan: "BOYOLALI",
                kode: "BYL",
                harga: 2400,
                estimasi: "2-3",
              },
            ],
          },
          {
            nama_region: "MADIUN",
            destinasi: [
              {
                no: 1,
                tujuan: "MADIUN",
                kode: "MDN",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "MAGETAN",
                kode: "MGT",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "NGAWI",
                kode: "NWI",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "PONOROGO",
                kode: "PNO",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "TRENGGALEK",
                kode: "TRLK",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "PACITAN",
                kode: "PCT",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "JOGJA",
            destinasi: [
              {
                no: 1,
                tujuan: "JOGJA",
                kode: "JOG",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "MAGELANG",
                kode: "MGL",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "SLEMAN",
                kode: "SML",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "WONOSARI",
                kode: "WNS",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "BANTUL",
                kode: "BTL",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "WONOSOBO",
                kode: "WSB",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "PURWOREJO",
                kode: "PWJ",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "KEBUMEN",
                kode: "KBW",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 9,
                tujuan: "TEMANGGUNG",
                kode: "TMGG",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 10,
                tujuan: "KLATEN",
                kode: "KLN",
                harga: 5200,
                estimasi: "5-6",
              },
            ],
          },
          {
            nama_region: "KEDIRI",
            destinasi: [
              {
                no: 1,
                tujuan: "KEDIRI",
                kode: "KDR",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "TULUNGAGUNG",
                kode: "TUG",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "NGANJUK",
                kode: "NJK",
                harga: 3600,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "SURABAYA",
            destinasi: [
              {
                no: 1,
                tujuan: "SIDOARJO",
                kode: "SDA",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "GERSIK",
                kode: "GRS",
                harga: 2800,
                estimasi: "3-4",
              },
            ],
          },
          {
            nama_region: "MADURA",
            destinasi: [
              {
                no: 1,
                tujuan: "BANGKALAN",
                kode: "BKLN",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "SAMPANG",
                kode: "SPNG",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "PAMEKASAN",
                kode: "PMK",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "SUMENEP",
                kode: "SMP",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "MALANG",
            destinasi: [
              {
                no: 1,
                tujuan: "MALANG",
                kode: "MLG",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "SINGOSARI",
                kode: "SSGR",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "TLOGOMAS",
                kode: "TLGS",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "MOJOKERTO",
                kode: "MJO",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "PASURUAN",
                kode: "PSR",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "PANDAAN",
                kode: "PDN",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "PURWOSARI",
                kode: "PWR",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "KASEMBON",
                kode: "KSBN",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 9,
                tujuan: "KEPANJEN",
                kode: "KPJN",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 10,
                tujuan: "BATU",
                kode: "BTU",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 11,
                tujuan: "BANGIL",
                kode: "BGL",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 12,
                tujuan: "WONOREJO",
                kode: "WNJO",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 13,
                tujuan: "SUKOREJO",
                kode: "SKJO",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 14,
                tujuan: "LAWANG",
                kode: "LWG",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 15,
                tujuan: "JOMBANG",
                kode: "JBG",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 16,
                tujuan: "PROBOLINGGO",
                kode: "PBO",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 17,
                tujuan: "BLITAR",
                kode: "BLR",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 18,
                tujuan: "DAMPIT",
                kode: "DMP",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 19,
                tujuan: "TUTUR TENGGER",
                kode: "TTR",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 20,
                tujuan: "PAITON",
                kode: "PTN",
                harga: 5200,
                estimasi: "5-6",
              },
            ],
          },
          {
            nama_region: "JEMBER",
            destinasi: [
              {
                no: 1,
                tujuan: "JEMBER",
                kode: "JBR",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "LUMAJANG",
                kode: "LMJ",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "BONDOWOSO",
                kode: "BWS",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "SITUBONDO",
                kode: "STB",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "BANYUWANGI",
                kode: "BWI",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "LOMBOK",
            destinasi: [
              {
                no: 1,
                tujuan: "MATARAM",
                kode: "AMI",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "GERUNG",
                kode: "GRG",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "PRAYA",
                kode: "PRY",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "SERONG",
                kode: "SLG",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "AIKMAL",
                kode: "AKL",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "PEMENANG",
                kode: "PMG",
                harga: 4400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "DENPASAR",
            destinasi: [
              {
                no: 1,
                tujuan: "DENPASAR",
                kode: "DPS",
                harga: 2000,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "KUTA",
                kode: "KTA",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 3,
                tujuan: "BADUNG",
                kode: "BDG",
                harga: 3600,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "NUSADUA",
                kode: "NSD",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "JIMBARAN",
                kode: "JBRN",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "TABANAN",
                kode: "TBNN",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "GIANYAR",
                kode: "GYR",
                harga: 4400,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "SINGARAJA",
                kode: "SGJ",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 9,
                tujuan: "KINTAMANI",
                kode: "KTM",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 10,
                tujuan: "BANGLI",
                kode: "BGL",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 11,
                tujuan: "KARANG ASEM",
                kode: "KSM",
                harga: 5200,
                estimasi: "5-6",
              },
            ],
          },
        ],
      },
      {
        jenis: "DARAT SUMATERA",
        regions: [
          {
            nama_region: "LAMPUNG",
            destinasi: [
              {
                no: 1,
                tujuan: "BANDAR LAMPUNG",
                kode: "TGK",
                harga: 2800,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "KOTABUMI",
                kode: "KTB",
                harga: 5600,
                estimasi: "5-6",
              },
              {
                no: 3,
                tujuan: "BANDAR JAYA",
                kode: "BDJ",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 4,
                tujuan: "METRO",
                kode: "MTR",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 5,
                tujuan: "KALIANDA",
                kode: "KLD",
                harga: 6000,
                estimasi: "5-6",
              },
              {
                no: 6,
                tujuan: "PRINGSEWU",
                kode: "PSW",
                harga: 5200,
                estimasi: "5-6",
              },
              {
                no: 7,
                tujuan: "TENGGAMUS",
                kode: "TGM",
                harga: 6000,
                estimasi: "5-6",
              },
            ],
          },
          {
            nama_region: "SUMATERA SELATAN",
            destinasi: [
              {
                no: 1,
                tujuan: "PALEMBANG",
                kode: "PLM",
                harga: 3200,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "INDRALAYA",
                kode: "INL",
                harga: 6400,
                estimasi: "4-5",
              },
              {
                no: 3,
                tujuan: "KAYU AGUNG",
                kode: "KYA",
                harga: 7200,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "PRABUMULIH",
                kode: "PRB",
                harga: 5600,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "BATURAJA",
                kode: "BTR",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "MUARA ENIM",
                kode: "MEM",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "LAHAT",
                kode: "LHT",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "TANJUNG ENIM",
                kode: "THE",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 9,
                tujuan: "MARIANA",
                kode: "MRN",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 10,
                tujuan: "BETUNG",
                kode: "BTUG",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 11,
                tujuan: "SEKAYU",
                kode: "SKY",
                harga: 5200,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "LUBUK LINGGAU",
            destinasi: [
              {
                no: 1,
                tujuan: "LUBUK LINGGAU",
                kode: "LLG",
                harga: 3200,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "TEBING TINGGI",
                kode: "TTG",
                harga: 6400,
                estimasi: "4-5",
              },
              {
                no: 3,
                tujuan: "MUARA BELITI",
                kode: "MBL",
                harga: 7200,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "CURUP",
            destinasi: [
              {
                no: 1,
                tujuan: "CURUP",
                kode: "CRP",
                harga: 3200,
                estimasi: "3-4",
              },
            ],
          },
          {
            nama_region: "BENGKULU",
            destinasi: [
              {
                no: 1,
                tujuan: "BENGKULU",
                kode: "BKU",
                harga: 3200,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "KAUR",
                kode: "KR",
                harga: 6400,
                estimasi: "4-5",
              },
              {
                no: 3,
                tujuan: "MANNA",
                kode: "MNN",
                harga: 7200,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "MUKOMUKO",
                kode: "MKK",
                harga: 5600,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "KETAHUN",
                kode: "KTN",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "SELUMA",
                kode: "SLM",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "KARANG TINGGI",
                kode: "KRT",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "TAIS",
                kode: "TAS",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 9,
                tujuan: "ARGA MAKMUR",
                kode: "ARMK",
                harga: 5200,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "JAMBI",
            destinasi: [
              {
                no: 1,
                tujuan: "JAMBI",
                kode: "DJB",
                harga: 3200,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "SANGETI",
                kode: "SGT",
                harga: 6400,
                estimasi: "4-5",
              },
              {
                no: 3,
                tujuan: "KUALA TUNGKAL",
                kode: "KTL",
                harga: 7200,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "BANYU LINCIR",
                kode: "BYCR",
                harga: 5600,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "TANJUNG JABUNG",
                kode: "TJBG",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "MERLUNG",
                kode: "MRLG",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "MUARA BUNGO",
                kode: "MBO",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "BANGKO",
                kode: "BKO",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 9,
                tujuan: "SAROLANGUN",
                kode: "SLG",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 10,
                tujuan: "SINGKUT",
                kode: "SKT",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 11,
                tujuan: "DAMASRAYA",
                kode: "DMS",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 12,
                tujuan: "SUNGAI RUMBAI",
                kode: "SBI",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 13,
                tujuan: "MUARA TEBO",
                kode: "MTB",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 14,
                tujuan: "MUARA BULIAN",
                kode: "MBL",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 15,
                tujuan: "RIMBO BUJANG",
                kode: "RMJ",
                harga: 5200,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "RIAU DARATAN",
            destinasi: [
              {
                no: 1,
                tujuan: "PEKANBARU",
                kode: "PKU",
                harga: 3200,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "BANGKINANG",
                kode: "BKN",
                harga: 6400,
                estimasi: "4-5",
              },
              {
                no: 3,
                tujuan: "UJUNG BATU",
                kode: "UJB",
                harga: 7200,
                estimasi: "4-5",
              },
              {
                no: 4,
                tujuan: "P.PANGARAIAN",
                kode: "PPR",
                harga: 5600,
                estimasi: "4-5",
              },
              {
                no: 5,
                tujuan: "P.KERINCI",
                kode: "PKC",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 6,
                tujuan: "TEMBILAHAN",
                kode: "TBH",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 7,
                tujuan: "RENGAT",
                kode: "RGT",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 8,
                tujuan: "BELILAS",
                kode: "BLLS",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 9,
                tujuan: "TELUK KUANTAN",
                kode: "TLK",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 10,
                tujuan: "PERAWANG",
                kode: "PRW",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 11,
                tujuan: "LIRIK",
                kode: "LRK",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 12,
                tujuan: "SIAK",
                kode: "SIK",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 13,
                tujuan: "AIR MOLEK",
                kode: "AMK",
                harga: 5200,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "KISARAN",
            destinasi: [
              {
                no: 1,
                tujuan: "KISARAN",
                kode: "KSR",
                harga: 3200,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "TJ BALAI ASAHAN",
                kode: "TJBH",
                harga: 6400,
                estimasi: "4-5",
              },
              {
                no: 3,
                tujuan: "AEK SONGSONGAN",
                kode: "ASG",
                harga: 7200,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "TEBING TINGGI",
            destinasi: [
              {
                no: 1,
                tujuan: "TEBING TINGGI",
                kode: "TT",
                harga: 3200,
                estimasi: "3-4",
              },
              {
                no: 2,
                tujuan: "SEI REMPAH",
                kode: "SPH",
                harga: 6400,
                estimasi: "4-5",
              },
              {
                no: 3,
                tujuan: "INDRAPURA",
                kode: "IPR",
                harga: 7200,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "PEMATANG SIANTAR",
            destinasi: [
              {
                no: 1,
                tujuan: "PEMATANG SIANTAR",
                kode: "PST",
                harga: 6800,
                estimasi: "6-7",
              },
              {
                no: 2,
                tujuan: "SIMALUNGUN BAWAH",
                kode: "SMGB",
                harga: 7200,
                estimasi: "7-8",
              },
              {
                no: 3,
                tujuan: "SIMALUNGUN ATAS",
                kode: "SMGA",
                harga: 7200,
                estimasi: "7-8",
              },
              {
                no: 4,
                tujuan: "SIDAMANIK",
                kode: "SMK",
                harga: 7200,
                estimasi: "7-8",
              },
              {
                no: 5,
                tujuan: "PERDAGANGAN",
                kode: "PRDG",
                harga: 8000,
                estimasi: "7-8",
              },
            ],
          },
          {
            nama_region: "BAGAN BATU",
            destinasi: [
              {
                no: 1,
                tujuan: "BAGAN BATU",
                kode: "BGBT",
                harga: 6800,
                estimasi: "5-6",
              },
            ],
          },
          {
            nama_region: "DURI",
            destinasi: [
              {
                no: 1,
                tujuan: "DURI",
                kode: "DRI",
                harga: 6000,
                estimasi: "4-5",
              },
              {
                no: 2,
                tujuan: "DUMAI",
                kode: "DMI",
                harga: 6000,
                estimasi: "4-5",
              },
              {
                no: 3,
                tujuan: "KANDIS",
                kode: "KNS",
                harga: 6400,
                estimasi: "4-5",
              },
            ],
          },
          {
            nama_region: "RANTAU PRAPAT",
            destinasi: [
              {
                no: 1,
                tujuan: "RANTAU PRAPAT",
                kode: "RPT",
                harga: 6800,
                estimasi: "5-6",
              },
              {
                no: 2,
                tujuan: "KOTA PINANG",
                kode: "KPNG",
                harga: 7600,
                estimasi: "6-7",
              },
              {
                no: 3,
                tujuan: "AEKANOVAN",
                kode: "AEVN",
                harga: 7600,
                estimasi: "6-7",
              },
              {
                no: 4,
                tujuan: "AEKNABARA",
                kode: "AEBR",
                harga: 7600,
                estimasi: "6-7",
              },
              {
                no: 5,
                tujuan: "CIKAMPAK",
                kode: "CKPK",
                harga: 7600,
                estimasi: "6-7",
              },
            ],
          },
          {
            nama_region: "PADANG",
            destinasi: [
              {
                no: 1,
                tujuan: "PADANG",
                kode: "PDG",
                harga: 5200,
                estimasi: "4-5",
              },
              {
                no: 2,
                tujuan: "PARIAMAN",
                kode: "PRM",
                harga: 6400,
                estimasi: "5-6",
              },
              {
                no: 3,
                tujuan: "SIJUNJUNG",
                kode: "SJJ",
                harga: 6400,
                estimasi: "5-6",
              },
              {
                no: 4,
                tujuan: "SUNGAI PENUH",
                kode: "SPH",
                harga: 6400,
                estimasi: "6-7",
              },
              {
                no: 5,
                tujuan: "SAWAH LUNTO",
                kode: "SWH",
                harga: 6800,
                estimasi: "6-7",
              },
              {
                no: 6,
                tujuan: "PASAMAN",
                kode: "PSM",
                harga: 8000,
                estimasi: "6-7",
              },
              {
                no: 7,
                tujuan: "PESISIR SELATAN",
                kode: "PSS",
                harga: 7200,
                estimasi: "6-7",
              },
              {
                no: 8,
                tujuan: "TAPAN",
                kode: "TPN",
                harga: 8400,
                estimasi: "6-7",
              },
              {
                no: 9,
                tujuan: "LUBUK BASUNG",
                kode: "LBS",
                harga: 7600,
                estimasi: "6-7",
              },
            ],
          },
          {
            nama_region: "BUKIT TINGGI",
            destinasi: [
              {
                no: 1,
                tujuan: "BUKIT TINGGI",
                kode: "BKT",
                harga: 6400,
                estimasi: "4-5",
              },
              {
                no: 2,
                tujuan: "PAYAKUMBUH",
                kode: "PYK",
                harga: 6400,
                estimasi: "5-6",
              },
              {
                no: 3,
                tujuan: "SOLOK",
                kode: "SLK",
                harga: 6400,
                estimasi: "5-6",
              },
              {
                no: 4,
                tujuan: "PDG.PANJANG",
                kode: "PPJ",
                harga: 6400,
                estimasi: "5-6",
              },
              {
                no: 5,
                tujuan: "BATU SANGKAR",
                kode: "BTS",
                harga: 6400,
                estimasi: "5-6",
              },
            ],
          },
          {
            nama_region: "SIGLI",
            destinasi: [
              {
                no: 1,
                tujuan: "SIGLI",
                kode: "SGL",
                harga: 8000,
                estimasi: "7-8",
              },
              {
                no: 2,
                tujuan: "PIDIE JAYA",
                kode: "PDJ",
                harga: 9200,
                estimasi: "8-9",
              },
            ],
          },
          {
            nama_region: "MEDAN",
            destinasi: [
              {
                no: 1,
                tujuan: "MEDAN",
                kode: "MES",
                harga: 5600,
                estimasi: "5-6",
              },
              {
                no: 2,
                tujuan: "SIBOLGA",
                kode: "SBG",
                harga: 8000,
                estimasi: "6-7",
              },
              {
                no: 3,
                tujuan: "P.SIDEMPUAN",
                kode: "PSP",
                harga: 8000,
                estimasi: "6-7",
              },
              {
                no: 4,
                tujuan: "KABAN JAHE",
                kode: "KJH",
                harga: 6800,
                estimasi: "6-7",
              },
              {
                no: 5,
                tujuan: "BINJAI",
                kode: "BJI",
                harga: 6800,
                estimasi: "6-7",
              },
              {
                no: 6,
                tujuan: "BRASTAGI",
                kode: "BRSG",
                harga: 7600,
                estimasi: "6-7",
              },
              {
                no: 7,
                tujuan: "PANGKALAN SUSU",
                kode: "PKSS",
                harga: 7200,
                estimasi: "7-8",
              },
              {
                no: 8,
                tujuan: "SIDIKALANG",
                kode: "SDKL",
                harga: 8000,
                estimasi: "7-8",
              },
              {
                no: 9,
                tujuan: "BALIGE",
                kode: "BLG",
                harga: 8000,
                estimasi: "7-8",
              },
              {
                no: 10,
                tujuan: "TARUTUNG",
                kode: "TRTG",
                harga: 8400,
                estimasi: "7-8",
              },
              {
                no: 11,
                tujuan: "SIPIROK",
                kode: "SPRK",
                harga: 8800,
                estimasi: "7-8",
              },
            ],
          },
          {
            nama_region: "NANGGROE ACEH DARUSSALAM",
            destinasi: [
              {
                no: 1,
                tujuan: "BANDA ACEH",
                kode: "BAH",
                harga: 7600,
                estimasi: "6-7",
              },
              {
                no: 2,
                tujuan: "MEULABOH",
                kode: "MLH",
                harga: 8000,
                estimasi: "7-8",
              },
              {
                no: 3,
                tujuan: "TAKENGON",
                kode: "TKG",
                harga: 8000,
                estimasi: "7-8",
              },
              {
                no: 4,
                tujuan: "TAPAK TUAN",
                kode: "TPT",
                harga: 8000,
                estimasi: "7-8",
              },
              {
                no: 5,
                tujuan: "NAGAN RAYA",
                kode: "NGR",
                harga: 9200,
                estimasi: "7-8",
              },
              {
                no: 6,
                tujuan: "CALANG",
                kode: "CLNG",
                harga: 9200,
                estimasi: "7-8",
              },
            ],
          },
          {
            nama_region: "LHOKSEUMAWE",
            destinasi: [
              {
                no: 1,
                tujuan: "LHOKSEUMAWE",
                kode: "LSW",
                harga: 8000,
                estimasi: "6-7",
              },
              {
                no: 2,
                tujuan: "LHOKSUKON",
                kode: "LSK",
                harga: 9200,
                estimasi: "7-8",
              },
              {
                no: 3,
                tujuan: "PANTON LABU",
                kode: "PTL",
                harga: 9600,
                estimasi: "7-8",
              },
              {
                no: 4,
                tujuan: "TANAH JAMBOE",
                kode: "TJB",
                harga: 9600,
                estimasi: "7-8",
              },
              {
                no: 5,
                tujuan: "BUKET RAYA",
                kode: "BKR",
                harga: 10000,
                estimasi: "7-8",
              },
            ],
          },
          {
            nama_region: "LANGSA",
            destinasi: [
              {
                no: 1,
                tujuan: "LANGSA",
                kode: "LGS",
                harga: 8000,
                estimasi: "6-7",
              },
              {
                no: 2,
                tujuan: "ACEH TAMIANG",
                kode: "ACT",
                harga: 9200,
                estimasi: "7-8",
              },
              {
                no: 3,
                tujuan: "PEURLAK",
                kode: "PEUR",
                harga: 9200,
                estimasi: "7-8",
              },
              {
                no: 4,
                tujuan: "ACEH TIMUR",
                kode: "ACTM",
                harga: 9200,
                estimasi: "7-8",
              },
            ],
          },
          {
            nama_region: "BIEREUN",
            destinasi: [
              {
                no: 1,
                tujuan: "BIEREUN",
                kode: "BRN",
                harga: 8000,
                estimasi: "6-7",
              },
              {
                no: 2,
                tujuan: "PEMATANG MESJID",
                kode: "PMM",
                harga: 9200,
                estimasi: "7-8",
              },
              {
                no: 3,
                tujuan: "SAMALANGA",
                kode: "SMLG",
                harga: 9200,
                estimasi: "7-8",
              },
              {
                no: 4,
                tujuan: "PEUSANGAN",
                kode: "PEUS",
                harga: 9200,
                estimasi: "7-8",
              },
            ],
          },
        ],
      },
    ],
  };

  var accordionContainer = $("#expedisiAccordion");
  var accordionIndex = 0;

  // Loop tiap jenis pengiriman
  $.each(tarifData.tarif_pengiriman, function (i, tarif) {
    // Loop tiap region (setiap region akan jadi 1 accordion item)
    $.each(tarif.regions, function (j, region) {
      accordionIndex++;
      var headingId = "heading" + accordionIndex;
      var collapseId = "collapse" + accordionIndex;

      // Buat item accordion
      var accordionItem = $(
        '<div class="accordion-item bg-light rounded mb-3"></div>'
      );
      var header = $(
        '<h2 class="accordion-header" id="' + headingId + '"></h2>'
      );
      // Button header tanpa icon, hanya menampilkan nama_region
      var button = $(
        '<button class="accordion-button collapsed bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          collapseId +
          '" aria-expanded="false" aria-controls="' +
          collapseId +
          '"></button>'
      );
      button.text(region.nama_region);
      header.append(button);
      accordionItem.append(header);

      // Buat accordion body dengan tabel data destinasi
      var collapseDiv = $(
        '<div id="' +
          collapseId +
          '" class="accordion-collapse collapse" aria-labelledby="' +
          headingId +
          '"></div>'
      );
      var bodyDiv = $('<div class="accordion-body"></div>');
      var table = $(
        '<table class="table table-striped table-bordered"></table>'
      );
      var thead = $(
        '<thead class="bg-primary text-white"><tr><th>No</th><th>Tujuan</th><th>Kode</th></tr></thead>'
      );
      table.append(thead);
      var tbody = $("<tbody></tbody>");

      // Loop tiap destinasi di region tersebut (tanpa harga dan estimasi)
      $.each(region.destinasi, function (k, dest) {
        var row = $("<tr></tr>");
        row.append("<td>" + dest.no + "</td>");
        row.append("<td>" + dest.tujuan + "</td>");
        row.append("<td>" + dest.kode + "</td>");
        tbody.append(row);
      });

      table.append(tbody);
      bodyDiv.append(table);
      collapseDiv.append(bodyDiv);
      accordionItem.append(collapseDiv);

      // Sisipkan accordion item ke container
      accordionContainer.append(accordionItem);
    });
  });
})(jQuery);

const galleryData = [
  {
    thumb: "img/galleries/image-1.jpg",
    full: "img/galleries/image-1.jpg", // perbaikan path
    description: "Deskripsi Gambar 1",
  },
  {
    thumb: "img/galleries/image-2.jpg",
    full: "img/galleries/image-2.jpg",
    description: "Deskripsi Gambar 2",
  },
  {
    thumb: "img/galleries/image-3.jpg",
    full: "img/galleries/image-3.jpg",
    description: "Deskripsi Gambar 3",
  },
  {
    thumb: "img/galleries/image-4.jpg",
    full: "img/galleries/image-4.jpg",
    description: "Deskripsi Gambar 4",
  },
  {
    thumb: "img/galleries/image-5.jpg",
    full: "img/galleries/image-5.jpg",
    description: "Deskripsi Gambar 5",
  },
  {
    thumb: "img/galleries/image-6.jpg",
    full: "img/galleries/image-6.jpg",
    description: "Deskripsi Gambar 6",
  },
];

function initGallery() {
  const galleryContainer = document.querySelector(".masonry-grid");
  galleryContainer.innerHTML = "";
  galleryData.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "masonry-item";
    galleryItem.innerHTML = `
      <img src="${image.thumb}" 
           class="masonry-img" 
           alt="Gallery Image ${index + 1}">
    `;
    galleryItem.addEventListener("click", () => {
      openModal(image.full, image.description);
    });
    galleryContainer.appendChild(galleryItem);
  });
}

function openModal(imageSrc, description) {
  const modal = document.getElementById("customModal");
  const modalImg = document.getElementById("modalImage");

  // Preload gambar
  const img = new Image();
  img.src = imageSrc;
  img.onload = () => {
    modalImg.src = imageSrc;
    modal.style.display = "flex";
  };
}

function closeModal() {
  document.getElementById("customModal").style.display = "none";
}

document.addEventListener("click", (e) => {
  const modal = document.getElementById("customModal");
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

window.addEventListener("DOMContentLoaded", initGallery);
