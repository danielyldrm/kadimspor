// --- VERİ TABANI ---

const macTakvimi = {
    "16 Nisan 2026 Perşembe": { pota1: [], pota2: [] },
    "21 Nisan 2026 Salı": { pota1: [], pota2: [] },
    // Cuma Günü Fikstürü Buraya İşlendi!
    "24 Nisan 2026 Cuma": {
        pota1: [
            { ev: "Las Vegas (Mor Evgin)", dep: "The Bloodline (Mor Şemun)", skor: "20:00" },
            { ev: "Grand Theft Suryoyo (Mor Hananyo)", dep: "Suitt (Mor Efrem)", skor: "20:25" },
            { ev: "The Bloodline (Mor Şemun)", dep: "Real Mardin (Mor Abrohom)", skor: "20:50" },
            { ev: "Suitt (Mor Efrem)", dep: "Veteran (Mor Gabriel)", skor: "21:15" },
            { ev: "Real Mardin (Mor Abrohom)", dep: "Las Vegas (Mor Evgin)", skor: "21:40" },
            { ev: "Veteran (Mor Gabriel)", dep: "Grand Theft Suryoyo (Mor Hananyo)", skor: "22:05" },
            { ev: "Veteran (Mor Gabriel)", dep: "Real Mardin (Mor Abrohom)", skor: "22:30" }
        ],
        pota2: [
            { ev: "Kınalıada (Mor Aho)", dep: "Real Mardin (Mor Abrohom)", skor: "20:00" },
            { ev: "Feveran (Mor Yakup)", dep: "Veteran (Mor Gabriel)", skor: "20:25" },
            { ev: "Kınalıada (Mor Aho)", dep: "Las Vegas (Mor Evgin)", skor: "20:50" },
            { ev: "Feveran (Mor Yakup)", dep: "Grand Theft Suryoyo (Mor Hananyo)", skor: "21:15" },
            { ev: "The Bloodline (Mor Şemun)", dep: "Kınalıada (Mor Aho)", skor: "21:40" },
            { ev: "Suitt (Mor Efrem)", dep: "Feveran (Mor Yakup)", skor: "22:05" },
            { ev: "Feveran (Mor Yakup)", dep: "Kınalıada (Mor Aho)", skor: "22:30" }
        ]
    },
    "28 Nisan 2026 Salı": { pota1: [], pota2: [] },
    "30 Nisan 2026 Perşembe": { pota1: [], pota2: [] },
    "3 Mayıs 2026 Pazar": { pota1: [], pota2: [] }
};

const puanDurumu = [
    { takim: "Grand Theft Suryoyo (Mor Hananyo)", o: 7, g: 6, m: 1, a: 149, y: 62, av: 87, puan: 13 },
    { takim: "Feveran (Mor Yakup)", o: 7, g: 5, m: 2, a: 112, y: 107, av: 5, puan: 12 },
    { takim: "The Bloodline (Mor Şemun)", o: 7, g: 5, m: 2, a: 110, y: 94, av: 16, puan: 12 },
    { takim: "Veteran (Mor Gabriel)", o: 7, g: 5, m: 2, a: 90, y: 89, av: 1, puan: 12 },
    { takim: "Las Vegas (Mor Evgin)", o: 7, g: 3, m: 4, a: 85, y: 93, av: -8, puan: 10 },
    { takim: "Real Mardin (Mor Abrohom)", o: 7, g: 2, m: 5, a: 91, y: 101, av: -10, puan: 9 },
    { takim: "Suitt (Mor Efrem)", o: 7, g: 1, m: 6, a: 71, y: 119, av: -48, puan: 8 },
    { takim: "Kınalıada (Mor Aho)", o: 7, g: 1, m: 6, a: 83, y: 126, av: -43, puan: 8 }
];

const sayiKralligi = [];

const takimKadrolari = [
    { takim: "Real Mardin (Mor Abrohom)", oyuncular: [
        { isim: "Emre Luca Kömürcü (K)" }, { isim: "Daniel Söğüt" }, { isim: "Sercan Söğüt" }, { isim: "Tolga Tahincioğlu" }, { isim: "Saner Karakuş" }
    ]},
    { takim: "Kınalıada (Mor Aho)", oyuncular: [
        { isim: "Edi Koçhisarlı (K)" }, { isim: "Aykun Dökmeciyan" }, { isim: "İlyas Şakarer" }, { isim: "Sait Bardakçı" }, { isim: "Tomas Üzümcü" }
    ]},
    { takim: "The Bloodline (Mor Şemun)", oyuncular: [
        { isim: "Robert Üçkardeş (K)" }, { isim: "Kevin Akdoğan" }, { isim: "Şan Gülayın" }, { isim: "Yuhan Taş" }, { isim: "Cansın Taşkıran" }
    ]},
    { takim: "Las Vegas (Mor Evgin)", oyuncular: [
        { isim: "Gabi Koç (K)" }, { isim: "Tomas Turgay" }, { isim: "Aren Uzungör" }, { isim: "Antony Gülçe" }, { isim: "Jean Marcos Malhatun" }
    ]},
    { takim: "Veteran (Mor Gabriel)", oyuncular: [
        { isim: "Sami Bakistanlı (K)" }, { isim: "İsa Kocagöz" }, { isim: "Davut Abdülmesih" }, { isim: "Aycan Çakar" }, { isim: "Erdal Kocagöz" }
    ]},
    { takim: "Feveran (Mor Yakup)", oyuncular: [
        { isim: "Aslan Altınışık (K)" }, { isim: "Andreas Hamur" }, { isim: "Andreas Tok" }, { isim: "Can Hanna Zenginel" }, { isim: "Kevin Usanmaz" }
    ]},
    { takim: "Suitt (Mor Efrem)", oyuncular: [
        { isim: "Corç Zeki Üçkardeş (K)" }, { isim: "Burak Şirazi" }, { isim: "Roy İpekçi" }, { isim: "Arda Topalmıgdıs" }, { isim: "Rony Tokuç" }
    ]},
    { takim: "Grand Theft Suryoyo (Mor Hananyo)", oyuncular: [
        { isim: "Cem Timirci (K)" }, { isim: "Ceyşın Gülçe" }, { isim: "Robin Kilit" }, { isim: "Melek Taş" }, { isim: "Mesut Takılmaz" }
    ]}
];

// --- FONKSİYONLAR ---
function sekmeDegistir(sekmeId, tiklananLink) {
    const sekmeler = document.querySelectorAll('.tab-content');
    sekmeler.forEach(sekme => sekme.classList.remove('active-tab'));
    document.getElementById(sekmeId).classList.add('active-tab');
    const linkler = document.querySelectorAll('header nav a');
    linkler.forEach(link => link.classList.remove('active-tab-btn'));
    tiklananLink.classList.add('active-tab-btn');
}

function tariheGoreMaclariGetir(seciliTarih) {
    const pota1Listesi = document.getElementById('pota1-list');
    const pota2Listesi = document.getElementById('pota2-list');
    const seciliGunVerisi = macTakvimi[seciliTarih];
    
    pota1Listesi.innerHTML = "";
    if(!seciliGunVerisi || seciliGunVerisi.pota1.length === 0) {
        pota1Listesi.innerHTML = '<div class="empty-state">Bu tarih için maç takvimi henüz açıklanmadı.</div>';
    } else {
        seciliGunVerisi.pota1.forEach(mac => {
            // Skorun içinde tire (-) varsa maç oynanmıştır (kırmızı), yoksa saattir (gri)
            let scoreStyle = mac.skor.includes('-') ? "background: #d32f2f; color: #ffffff; border-color: #d32f2f;" : "background: #1a1a1a; color: #aaaaaa;";
            pota1Listesi.innerHTML += `<div class="match-card"><span class="team-name">${mac.ev}</span><span class="match-score" style="${scoreStyle}">${mac.skor}</span><span class="team-name">${mac.dep}</span></div>`;
        });
    }

    pota2Listesi.innerHTML = "";
    if(!seciliGunVerisi || seciliGunVerisi.pota2.length === 0) {
        pota2Listesi.innerHTML = '<div class="empty-state">Bu tarih için maç takvimi henüz açıklanmadı.</div>';
    } else {
        seciliGunVerisi.pota2.forEach(mac => {
            let scoreStyle = mac.skor.includes('-') ? "background: #d32f2f; color: #ffffff; border-color: #d32f2f;" : "background: #1a1a1a; color: #aaaaaa;";
            pota2Listesi.innerHTML += `<div class="match-card"><span class="team-name">${mac.ev}</span><span class="match-score" style="${scoreStyle}">${mac.skor}</span><span class="team-name">${mac.dep}</span></div>`;
        });
    }
}

function tablolariYukle() {
    const puanTablosu = document.getElementById('puan-tablosu');
    puanTablosu.innerHTML = ""; 

    puanDurumu.sort((a, b) => {
        if (b.puan !== a.puan) return b.puan - a.puan;
        return b.av - a.av; 
    }).forEach((takim, index) => {
        let averajRengi = takim.av > 0 ? '#4caf50' : (takim.av < 0 ? '#f44336' : '#fff');
        let averajİsareti = takim.av > 0 ? '+' : '';

        puanTablosu.innerHTML += `
            <tr>
                <td><strong>${index + 1}. ${takim.takim}</strong></td>
                <td>${takim.o}</td><td>${takim.g}</td><td>${takim.m}</td>
                <td>${takim.a}</td><td>${takim.y}</td>
                <td style="color: ${averajRengi}; font-weight: bold;">${averajİsareti}${takim.av}</td>
                <td><strong style="color: #ffffff; font-size: 1.25rem; font-weight: 900; text-shadow: 0 0 5px rgba(255,255,255,0.2);">${takim.puan}</strong></td>
            </tr>`;
    });

    const sayiTablosu = document.getElementById('sayi-tablosu');
    if (sayiKralligi.length === 0) {
        sayiTablosu.innerHTML = `<tr><td colspan="3" class="empty-state">Henüz istatistik girilmedi.</td></tr>`;
    }

    const takimListesi = document.getElementById('takim-listesi');
    takimListesi.innerHTML = "";
    takimKadrolari.forEach(takim => {
        let oyuncularHTML = takim.oyuncular.length === 0 ? `<li class="empty-state">Kadro henüz açıklanmadı.</li>` : takim.oyuncular.map(o => {
            let formatliIsim = o.isim.includes('(K)') ? o.isim.replace('(K)', '<span style="color: #d32f2f; font-weight: bold;">(K)</span>') : o.isim;
            return `<li><span class="player-no">🏀</span><span class="player-name">${formatliIsim}</span></li>`;
        }).join('');
        takimListesi.innerHTML += `<div class="team-card"><h3>${takim.takim}</h3><ul class="player-list">${oyuncularHTML}</ul></div>`;
    });
}

window.onload = () => {
    tablolariYukle();
    tariheGoreMaclariGetir(document.getElementById('tarih-secici').value);
};