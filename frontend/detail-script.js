// Detail page content data
const serviceDetails = {
    1: {
        title: 'Cloud Computing',
        icon: 'bi-cloud-check',
        description: 'Infrastruktur cloud yang scalable dan aman untuk kebutuhan bisnis modern Anda dengan uptime 99.9%.',
        fullDescription: 'Platform Cloud Computing kami dirancang khusus untuk memenuhi kebutuhan bisnis modern yang dinamis. Dengan teknologi terdepan dan infrastruktur yang tersebar di berbagai lokasi geografis, kami menjamin uptime 99.9% dan performa optimal.',
        features: [
            'Scalability unlimited untuk pertumbuhan bisnis',
            'Auto-scaling untuk traffic management otomatis',
            'Multiple region support untuk redundancy',
            'Backup otomatis harian',
            'Database management yang mudah',
            'API integration yang lengkap',
            'CDN global untuk akses cepat',
            'Security compliance standar industri'
        ],
        pricing: '$299/bulan untuk paket unlimited',
        benefits: [
            'Biaya operasional lebih hemat',
            'Setup dan maintenance otomatis',
            'Support teknis 24/7',
            'Skalabilitas tanpa batas',
            'Migrasi data gratis'
        ],
        imageColor: 'bg-primary'
    },
    2: {
        title: 'Cybersecurity',
        icon: 'bi-shield-lock',
        description: 'Proteksi data dan sistem Anda dari ancaman cyber dengan teknologi keamanan terkini dan monitoring 24/7.',
        fullDescription: 'Solusi Cybersecurity kami menggunakan teknologi AI dan machine learning untuk mendeteksi dan mencegah ancaman cyber secara real-time. Tim security expert kami siap memantau sistem Anda 24 jam sehari, 7 hari seminggu.',
        features: [
            'Real-time threat detection & prevention',
            'Advanced firewall protection',
            'DDoS mitigation protection',
            'Intrusion detection system (IDS)',
            'Vulnerability assessment',
            'Penetration testing',
            'Security incident response',
            'Compliance audit & reporting'
        ],
        pricing: '$199/bulan untuk enterprise protection',
        benefits: [
            'Perlindungan maksimal dari cyber attack',
            'Compliance dengan regulasi internasional',
            'Rapid incident response',
            'Training keamanan untuk team Anda',
            'Security reports bulanan'
        ],
        imageColor: 'bg-danger'
    },
    3: {
        title: 'Enterprise Solutions',
        icon: 'bi-diagram-3',
        description: 'Solusi enterprise custom yang disesuaikan dengan kebutuhan spesifik perusahaan Anda untuk efisiensi maksimal.',
        fullDescription: 'Kami menyediakan solusi enterprise yang fully customizable sesuai dengan business process dan requirement spesifik perusahaan Anda. Tim consultant kami akan bekerja sama untuk merancang solusi yang optimal.',
        features: [
            'Custom software development',
            'Business process automation',
            'ERP system implementation',
            'CRM integration',
            'Data warehouse solution',
            'Business intelligence tools',
            'Workflow optimization',
            'Legacy system migration'
        ],
        pricing: 'Custom pricing based on requirements',
        benefits: [
            'Fully customized untuk bisnis Anda',
            'Improved operational efficiency',
            'Better decision making with analytics',
            'Reduced manual processes',
            'Integration dengan sistem existing'
        ],
        imageColor: 'bg-success'
    },
    4: {
        title: 'Data Analytics',
        icon: 'bi-graph-up',
        description: 'Analisis data mendalam untuk insights bisnis yang actionable dan strategic decision making yang lebih baik.',
        fullDescription: 'Platform Data Analytics kami membantu Anda mengubah data mentah menjadi insights yang actionable. Dengan dashboard interaktif dan reporting real-time, Anda dapat membuat keputusan bisnis yang lebih baik dan cepat.',
        features: [
            'Advanced data visualization',
            'Real-time dashboarding',
            'Predictive analytics',
            'Customer analytics',
            'Sales forecasting',
            'Market trend analysis',
            'Custom report generation',
            'Data mining & discovery'
        ],
        pricing: '$149/bulan untuk analytics suite',
        benefits: [
            'Data-driven decision making',
            'Identify business opportunities',
            'Better customer understanding',
            'Improved ROI tracking',
            'Competitive advantage'
        ],
        imageColor: 'bg-info'
    },
    5: {
        title: 'Mobile Development',
        icon: 'bi-app',
        description: 'Aplikasi mobile native dan cross-platform yang user-friendly dan performa tinggi untuk semua kebutuhan.',
        fullDescription: 'Tim mobile developer berpengalaman kami siap mengembangkan aplikasi mobile yang tidak hanya cantik secara visual tetapi juga robust dan performan. Kami menggunakan teknologi terkini dan best practices dalam development.',
        features: [
            'Native iOS & Android development',
            'Cross-platform solution (React Native/Flutter)',
            'User experience design',
            'Performance optimization',
            'Push notification integration',
            'Payment gateway integration',
            'Analytics integration',
            'App store optimization'
        ],
        pricing: 'Mulai dari $5,000 untuk MVP',
        benefits: [
            'Reach customers di mobile devices',
            'Improved user engagement',
            'Native app performance',
            'Regular updates & maintenance',
            'Technical support jangka panjang'
        ],
        imageColor: 'bg-warning'
    },
    6: {
        title: 'Technical Support',
        icon: 'bi-headset',
        description: 'Support teknis 24/7 dengan response time cepat untuk memastikan sistem Anda selalu berjalan optimal.',
        fullDescription: 'Tim support kami yang berpengalaman siap membantu Anda 24 jam sehari, 7 hari seminggu. Dengan SLA response time kurang dari 1 jam, kami memastikan sistem Anda selalu dalam kondisi optimal.',
        features: [
            'Phone support 24/7',
            'Email & chat support',
            'Ticket management system',
            'Remote troubleshooting',
            'Proactive monitoring',
            'Performance tuning',
            'Regular maintenance',
            'Knowledge base access'
        ],
        pricing: '$99/bulan untuk priority support',
        benefits: [
            'Minimal downtime',
            'Expert technical assistance',
            'Faster issue resolution',
            'Preventive maintenance',
            'Peace of mind knowing help is available'
        ],
        imageColor: 'bg-secondary'
    }
};

// Load detail content based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    if (serviceId && serviceDetails[serviceId]) {
        const service = serviceDetails[serviceId];
        displayServiceDetail(service);
    } else {
        displayNotFound();
    }
});

// Display service detail
function displayServiceDetail(service) {
    const contentDiv = document.getElementById('detail-content');
    
    const html = `
        <div class="row mb-5">
            <div class="col-lg-8">
                <div class="${service.imageColor} rounded-lg p-5 mb-4" style="height: 300px; display: flex; align-items: center; justify-content: center;">
                    <div class="text-center text-white">
                        <i class="bi ${service.icon}" style="font-size: 80px; opacity: 0.7;"></i>
                    </div>
                </div>

                <h1 class="display-4 fw-bold mb-4">${service.title}</h1>
                
                <p class="lead text-muted mb-4">${service.fullDescription}</p>

                <h3 class="fw-bold mb-3">Fitur & Keunggulan</h3>
                <ul class="list-group list-group-flush mb-4">
                    ${service.features.map(feature => `
                        <li class="list-group-item border-0 pb-2">
                            <i class="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>

                <h3 class="fw-bold mb-3">Manfaat Bisnis</h3>
                <ul class="list-group list-group-flush">
                    ${service.benefits.map(benefit => `
                        <li class="list-group-item border-0 pb-2">
                            <i class="bi bi-star-fill text-warning me-2"></i>
                            <span>${benefit}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="col-lg-4">
                <div class="card shadow-lg border-0 position-sticky" style="top: 20px;">
                    <div class="card-body">
                        <h4 class="card-title fw-bold mb-4">Paket Pricing</h4>
                        <p class="h5 text-primary fw-bold mb-4">${service.pricing}</p>
                        
                        <button class="btn btn-primary btn-lg w-100 mb-3">
                            <i class="bi bi-cart-plus"></i> Subscribe Sekarang
                        </button>

                        <button class="btn btn-outline-primary btn-lg w-100 mb-3">
                            <i class="bi bi-chat-dots"></i> Hubungi Sales
                        </button>

                        <hr>

                        <h6 class="fw-bold mb-3">Apa yang Anda Dapatkan?</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-2">
                                <i class="bi bi-check-circle text-success me-2"></i>
                                <strong>30 Hari Trial Gratis</strong>
                            </li>
                            <li class="mb-2">
                                <i class="bi bi-check-circle text-success me-2"></i>
                                <strong>Setup & Training</strong>
                            </li>
                            <li class="mb-2">
                                <i class="bi bi-check-circle text-success me-2"></i>
                                <strong>24/7 Support</strong>
                            </li>
                            <li class="mb-2">
                                <i class="bi bi-check-circle text-success me-2"></i>
                                <strong>Dokumentasi Lengkap</strong>
                            </li>
                            <li>
                                <i class="bi bi-check-circle text-success me-2"></i>
                                <strong>Money-back Guarantee</strong>
                            </li>
                        </ul>

                        <hr>

                        <div class="alert alert-info">
                            <small><strong>Promo Special:</strong> Dapatkan diskon 20% untuk kontrak tahunan!</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <h3 class="fw-bold mb-4">Paket Lainnya</h3>
                <div class="row g-4">
                    ${getOtherServices(Object.keys(service)).map(otherId => {
                        const otherService = serviceDetails[otherId];
                        return `
                            <div class="col-md-6 col-lg-4">
                                <div class="card shadow-sm border-0 h-100">
                                    <div class="card-body">
                                        <i class="bi ${otherService.icon} text-primary" style="font-size: 32px;"></i>
                                        <h5 class="card-title mt-3">${otherService.title}</h5>
                                        <p class="card-text text-muted small">${otherService.description}</p>
                                        <a href="detail.html?id=${otherId}" class="btn btn-outline-primary btn-sm">Pelajari Lebih Lanjut →</a>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;

    contentDiv.innerHTML = html;
}

// Get other services (exclude current)
function getOtherServices(excludeIds) {
    return Object.keys(serviceDetails).filter(id => !excludeIds.includes(id)).slice(0, 3);
}

// Display not found message
function displayNotFound() {
    const contentDiv = document.getElementById('detail-content');
    contentDiv.innerHTML = `
        <div class="alert alert-warning">
            <h4>Layanan tidak ditemukan</h4>
            <p>Maaf, layanan yang Anda cari tidak ditemukan. <a href="index.html">Kembali ke halaman utama</a></p>
        </div>
    `;
}
