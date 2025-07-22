const database = {
    ustalar: [
        {
            id: 1,
            ad: "Əli Rzayev",
            ixtisas: "Avtomobil Sürət qutusu-Avtomat",
            foto: "https://i.ibb.co/5xjQvbb/s-ss-avatar-sm.jpg",
            haqqinda: "AVTOMAT SÜRƏT QUTUSU VƏ BUBLİK TƏMİRİ (6 AY ZƏMANƏTLƏ) MERCEDES, TOYOTA, LEXUS, HYUNDAİ, KİA, NİSSAN",
            telefon: "+994501234567",
            location: "Bakı, Xətai, Babək pr Astoria otelin yanı",
            isSaati: "Bazar ertəsi - Şənbə: 09:00 - 19:00",
            vip: true,
            reytinq: 4.9,
            mukafatlar: ["Ən yaxşı mühərrik ustası 2022", "Etibarlı xidmətçi sertifikatı"],
            xidmetler: ["Mercedes Sürət qutusu təmiri", "Toyota Sürət qutusu təmiri", "Kia Sürət qutusu təmiri", "Nissan Sürət qutusu təmiri", "Hyundai Sürət qutusu təmiri", "Lexus Sürət qutusu təmiri", "Bublik təmiri"]
        },
        {
            id: 2,
            ad: "Aygün Hüseynova",
            ixtisas: "Elektrik sistemləri mütəxəssisi",
            foto: "https://images.unsplash.com/photo-1596707328531-9f9b5a2b1f0c?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            haqqinda: "Bütün markalı avtomobillərdə elektrik ustası.",
            telefon: "+994552345678",
            location: "Bakı, Yasamal rayonu",
            isSaati: "Bazar ertəsi - Cümə: 10:00 - 18:00",
            vip: true,
            reytinq: 4.8,
            mukafatlar: ["Qadın ustalara dəstək 2023", "Elektrik təlimçisi"],
            xidmetler: ["Elektrik diaqnostikası", "Generator təmiri", "Akkumulyator dəyişimi"]
        },
        {
            id: 3,
            ad: "Elvin Qasımov",
            ixtisas: "Təkər təmiri ustası | 7 illik təcrübə",
            foto: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            haqqinda: "Avtomobil təkərlərinin təmiri və balanslaşdırılması.",
            telefon: "+994703334455",
            location: "Bakı, Binəqədi rayonu",
            isSaati: "Hər gün: 09:00 - 20:00",
            vip: false,
            reytinq: 4.5,
            mukafatlar: ["Yüksək keyfiyyətli xidmət 2023"],
            xidmetler: ["Təkər təmiri", "Balanslaşdırma", "Şin dəyişimi"]
        },
        {
            id: 4,
            ad: "Günay Məmmədova",
            ixtisas: "Kosmetik təmir ustası | 5 illik təcrübə",
            foto: "https://images.unsplash.com/photo-1580854406214-5b2b2a6c1d0f?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            haqqinda: "Avtomobilin daxili və xarici kosmetik təmiri.",
            telefon: "+994514445566",
            location: "Bakı, Xətai rayonu",
            isSaati: "Bazar ertəsi - Cümə: 09:00 - 17:00",
            vip: false,
            reytinq: 4.7,
            mukafatlar: ["Ən yaxşı qadın usta 2024"],
            xidmetler: ["Salon kimyəvi təmizliyi", "Polirovka", "Kiçik cızıqların təmiri"]
        },
        {
            id: 5,
            ad: "Namiq Əlizadə",
            ixtisas: "Asqı sistemi ustası | 10 illik təcrübə",
            foto: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            haqqinda: "Avtomobilin asqı sisteminin diaqnostikası və təmiri.",
            telefon: "+994507778899",
            location: "Bakı, Nizami rayonu",
            isSaati: "Bazar ertəsi - Şənbə: 08:30 - 18:30",
            vip: false,
            reytinq: 4.6,
            mukafatlar: [],
            xidmetler: ["Amortizator dəyişimi", "Rul sisteminin təmiri", "Əyləc sisteminin təmiri"]
        }
    ],
    ehtiyatHisseleri: [
        {
            id: 1,
            ad: "Brembo ön disk",
            marka: "BMW 5 Seriyası (F10) 2010-2017",
            foto: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            qiymet: "250 AZN",
            stok: true,
            satıcı: {
                ad: "AvtoPart Şirkəti",
                telefon: "+994551112233",
                ünvan: "Bakı, Nərimanov rayonu"
            }
        },
        {
            id: 2,
            ad: "Sürətlər qutusu",
            marka: "Mercedes C-Class (W205) 2014-2021",
            foto: "https://images.unsplash.com/photo-1525921820612-9c3f0b2f1e6f?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            qiymet: "1200 AZN",
            stok: true,
            satıcı: {
                ad: "AvtoServis MMC",
                telefon: "+994555551900",
                ünvan: "Bakı, Səbail rayonu"
            }
        }
    ]
};

let currentPart = null;
let currentPage = 'main';
let currentFilterSpecialty = 'All'; // Seçilmiş ixtisas filtri

function loadUstalar(filter = currentFilterSpecialty, searchTerm = '') {
    const vipList = document.getElementById('vip-list');
    const regularList = document.getElementById('regular-list');

    vipList.innerHTML = '';
    regularList.innerHTML = '';

    const filteredUstalar = database.ustalar.filter(usta => {
        const matchesSpecialty = (filter === 'All' || usta.ixtisas.toLowerCase().includes(filter.toLowerCase()));
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const matchesSearch = (
            usta.ad.toLowerCase().includes(lowerCaseSearchTerm) ||
            usta.ixtisas.toLowerCase().includes(lowerCaseSearchTerm) ||
            usta.haqqinda.toLowerCase().includes(lowerCaseSearchTerm) ||
            usta.location.toLowerCase().includes(lowerCaseSearchTerm)
        );
        return matchesSpecialty && matchesSearch;
    });

    const vipUstalarFiltered = filteredUstalar.filter(usta => usta.vip);
    const regularUstalarFiltered = filteredUstalar.filter(usta => !usta.vip);

    if (vipUstalarFiltered.length > 0) {
        document.getElementById('ustalar').style.display = 'block';
        vipUstalarFiltered.forEach(usta => {
            vipList.innerHTML += `
                <div>
                    <div class="card-item vip" onclick="showProfile(${usta.id})">
                        <span class="vip-badge"><i class="fas fa-crown me-1"></i>VIP</span>
                        <img src="${usta.foto}" class="card-img" alt="${usta.ad}">
                        <div class="card-body">
                            <h5 class="card-title">${usta.ad}</h5>
                            <p class="card-text text-muted">${usta.ixtisas}</p>
                            <button class="btn btn-outline-primary btn-custom">Profilə bax</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        document.getElementById('ustalar').style.display = 'none';
    }


    if (regularUstalarFiltered.length > 0) {
        document.querySelector('section.bg-light').style.display = 'block';
        regularUstalarFiltered.forEach(usta => {
            regularList.innerHTML += `
                <div>
                    <div class="card-item" onclick="showProfile(${usta.id})">
                        <img src="${usta.foto}" class="card-img" alt="${usta.ad}">
                        <div class="card-body">
                            <h5 class="card-title">${usta.ad}</h5>
                            <p class="card-text text-muted">${usta.ixtisas}</p>
                            <button class="btn btn-outline-primary btn-custom">Profilə bax</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        document.querySelector('section.bg-light').style.display = 'none';
    }
}

function loadEhtiyatHisseleri(searchTerm = '') {
    const partsList = document.getElementById('parts-list');
    partsList.innerHTML = '';

    const filteredHisseler = database.ehtiyatHisseleri.filter(hisse => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            hisse.ad.toLowerCase().includes(lowerCaseSearchTerm) ||
            hisse.marka.toLowerCase().includes(lowerCaseSearchTerm) ||
            hisse.satıcı.ad.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    if (filteredHisseler.length > 0) {
        document.getElementById('ehtiyat').style.display = 'block';
        filteredHisseler.forEach(hisse => {
            partsList.innerHTML += `
                <div>
                    <div class="card-item" onclick="showPartDetail(${hisse.id})">
                        <img src="${hisse.foto}" class="card-img" alt="${hisse.ad}">
                        <div class="card-body">
                            <h5 class="card-title">${hisse.ad}</h5>
                            <p class="card-text text-muted">${hisse.marka}</p>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="text-primary fw-bold">${hisse.qiymet}</span>
                                <span class="badge bg-${hisse.stok ? 'success' : 'danger'}">
                                    ${hisse.stok ? 'Stokda' : 'Stokda yox'}
                                </span>
                            </div>
                            <button class="btn btn-primary btn-custom">Ətraflı bax</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        document.getElementById('ehtiyat').style.display = 'none';
    }
}


function filterContent() {
    const searchTerm = document.getElementById('searchInput').value;
    loadUstalar(currentFilterSpecialty, searchTerm);
    loadEhtiyatHisseleri(searchTerm);
}

function filterBySpecialty(specialty, event) {
    currentFilterSpecialty = specialty;
    // Bütün düymələrdən 'active' classını sil
    document.querySelectorAll('.filter-buttons .btn').forEach(button => {
        button.classList.remove('active');
    });
    // Seçilmiş düyməyə 'active' classını əlavə et
    if (event && event.target) { // Event obyekti varsa, kliklənən düyməni aktiv et
        event.target.classList.add('active');
    } else { // Əgər event yoxdursa (məsələn, səhifə yenilənəndə), "Hamısı" düyməsini aktiv et
        const allButton = document.querySelector('.filter-buttons .btn[onclick*="filterBySpecialty(\'All\')"]');
        if (allButton) {
            allButton.classList.add('active');
        }
    }

    filterContent();
}

// Səhifələri id-yə görə göstərmək/gizlətmək üçün ümumi funksiya
function showSection(sectionId) {
    const mainContent = document.getElementById('main-content-wrapper');
    const ustaProfile = document.getElementById('usta-profile');
    const partDetail = document.getElementById('part-detail');
    const aboutPage = document.getElementById('about-page');
    const contactPage = document.getElementById('contact-page');
    const backButtonContainer = document.getElementById('back-button-container');

    // Bütün əsas hissələri gizlət
    mainContent.classList.add('hidden-section');
    ustaProfile.classList.add('hidden-section');
    partDetail.classList.add('hidden-section');
    aboutPage.classList.add('hidden-section');
    contactPage.classList.add('hidden-section');
    backButtonContainer.style.display = 'none'; // Geri düyməsini gizlət

    // Navbar linklərindən "active" classını sil
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Seçilmiş hissəni göstər
    if (sectionId === 'main') {
        mainContent.classList.remove('hidden-section');
        loadUstalar(); // Əsas səhifəyə qayıtdıqda ustaları yenidən yüklə
        loadEhtiyatHisseleri(); // Ehtiyat hissələrini yenidən yüklə
        // "Əsas Səhifə" linkini aktiv et
        document.querySelector('.navbar-nav .nav-link[onclick*="showSection(\'main\')"]').classList.add('active');
    } else if (sectionId === 'usta-profile') {
        ustaProfile.classList.remove('hidden-section');
        backButtonContainer.style.display = 'block';
    } else if (sectionId === 'part-detail') {
        partDetail.classList.remove('hidden-section');
        backButtonContainer.style.display = 'block';
    } else if (sectionId === 'about') {
        aboutPage.classList.remove('hidden-section');
        // "Haqqımızda" linkini aktiv et
        document.querySelector('.navbar-nav .nav-link[onclick*="showSection(\'about\')"]').classList.add('active');
    } else if (sectionId === 'contact') {
        contactPage.classList.remove('hidden-section');
        // "Əlaqə" linkini aktiv et
        document.querySelector('.navbar-nav .nav-link[onclick*="showSection(\'contact\')"]').classList.add('active');
    }
    
    window.scrollTo(0, 0); // Hər yeni səhifəyə keçəndə yuxarıya sürüşdür
}


function showPartDetail(id) {
    currentPage = 'part-detail';
    const hisse = database.ehtiyatHisseleri.find(p => p.id === id);
    if (!hisse) return;

    currentPart = hisse;
    document.getElementById('part-detail-img').src = hisse.foto;
    document.getElementById('part-detail-name').textContent = hisse.ad;
    document.getElementById('part-detail-brand').textContent = hisse.marka;
    document.getElementById('part-detail-price').textContent = hisse.qiymet;
    const partStockBadge = document.getElementById('part-detail-stock');
    partStockBadge.textContent = hisse.stok ? 'Stokda' : 'Stokda yox';
    partStockBadge.className = `badge bg-${hisse.stok ? 'success' : 'danger'}`;

    document.getElementById('seller-name').textContent = hisse.satıcı.ad;
    document.getElementById('seller-phone').textContent = hisse.satıcı.telefon;
    document.getElementById('seller-address').textContent = hisse.satıcı.ünvan;

    const whatsappBtn = document.getElementById('buy-now-btn');
    const message = `Salam, "${hisse.ad}" (${hisse.marka}) ehtiyat hissəsini almaq istəyirəm.`;
    whatsappBtn.setAttribute('onclick', `sendWhatsApp('${hisse.satıcı.telefon}', '${message}')`);

    showSection('part-detail'); // Detal səhifəsini göstərmək üçün yeni funksiyadan istifadə
}

function showProfile(id) {
    currentPage = 'usta-profile';
    const usta = database.ustalar.find(u => u.id === id);
    if (!usta) return;

    document.getElementById('profile-img').src = usta.foto;
    document.getElementById('profile-name').textContent = usta.ad;
    document.getElementById('profile-specialty').textContent = usta.ixtisas;
    document.getElementById('profile-about').textContent = usta.haqqinda;
    document.getElementById('profile-phone').textContent = usta.telefon;
    document.getElementById('profile-location').textContent = usta.location;
    document.getElementById('profile-hours').textContent = usta.isSaati;

    const servicesList = document.getElementById('profile-services');
    servicesList.innerHTML = '';
    usta.xidmetler.forEach(xidmet => {
        servicesList.innerHTML += `<li class="list-group-item"><i class="fas fa-check-circle me-2"></i>${xidmet}</li>`;
    });

    const existingVipInfo = document.getElementById('profile-vip-info');
    if (existingVipInfo) {
        existingVipInfo.remove();
    }

    if (usta.vip) {
        const vipHTML = `
            <div id="profile-vip-info">
                <hr>
                <h5 class="mb-3"><i class="fas fa-star me-2"></i>Reytinq</h5>
                <p>${usta.reytinq} / 5</p>
                ${usta.mukafatlar && usta.mukafatlar.length > 0 ? `
                    <h5 class="mb-3"><i class="fas fa-award me-2"></i>Mükafatlar</h5>
                    <ul class="list-group list-group-flush mb-3">
                        ${usta.mukafatlar.map(m => `<li class="list-group-item"><i class="fas fa-trophy me-2"></i>${m}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
        document.getElementById('profile-hours').insertAdjacentHTML('afterend', vipHTML);
    }
    
    showSection('usta-profile'); // Profil səhifəsini göstərmək üçün yeni funksiyadan istifadə
}

function goBack() {
    showSection('main'); // Geri düyməsinə basıldıqda əsas səhifəyə qayıt
    currentPage = 'main'; // Cari səhifəni "main" olaraq təyin et
}

function sendWhatsApp(phone, message) {
    const number = phone.replace(/\D/g, '');
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function addToCart() {
    if (currentPart) {
        alert(`${currentPart.ad} səbətə əlavə edildi!`);
    }
}

// "Topa Qayıt" Düyməsi Məntiqi
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hamar sürüşmə effekti
    });
}


document.addEventListener('DOMContentLoaded', function () {
    showSection('main'); // Səhifə yüklənəndə əsas səhifəni göstər
    // filterBySpecialty('All'); // Əsas səhifə yüklənəndə "Hamısı" düyməsini aktiv et

    // Navbar linklərinə aktivlik əlavə et
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Səhifə yüklənəndə "Əsas Səhifə" linkini aktiv et
    document.querySelector('.navbar-nav .nav-link[onclick*="showSection(\'main\')"]').classList.add('active');
});