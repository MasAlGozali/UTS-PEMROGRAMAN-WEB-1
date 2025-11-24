# TechVision Solutions - UTS Pemrograman Web 1

Platform website company profile yang interaktif dan responsif untuk PT TechVision Solutions.

## 🌐 Live Demo

- **Homepage**: `index.html`
- **Login Demo**: Username: `admin`, Password: `password123`

## 📋 Fitur Lengkap

### 1. Halaman Utama (Homepage)
- Hero section dengan presentasi menarik
- 6 card layanan interaktif
- Section tentang perusahaan
- Footer dengan copyright

### 2. Halaman Detail Layanan
- Detail lengkap setiap layanan
- Fitur dan keunggulan
- Pricing information
- Rekomendasi layanan lain
- Dynamic content berdasarkan parameter

### 3. Halaman Login
- Form login dengan validasi JavaScript
- Validasi IF-ELSE untuk kredensial
- Session management
- Remember me functionality
- Demo credentials tersedia

### 4. Halaman Registrasi
- Form registrasi lengkap
- Validasi email, password, dll
- Real-time validation feedback
- Data storage di localStorage

### 5. Dashboard (Post-Login)
- Welcome section
- Statistics cards
- Subscribed services
- User profile information
- Logout functionality

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: Bootstrap 5.3.0
- **CSS Framework**: Custom CSS dengan gradients dan animations
- **Icons**: Bootstrap Icons
- **JavaScript**: Vanilla JavaScript untuk validasi dan interaksi
- **Storage**: localStorage/sessionStorage untuk session management

## 📁 Struktur Project

```
frontend/
├── index.html              # Halaman utama
├── detail.html             # Detail layanan
├── login.html              # Form login
├── register.html           # Form registrasi
├── dashboard.html          # Dashboard user
├── styles.css              # Custom styling
├── login-script.js         # Login logic
├── register-script.js      # Register logic
├── detail-script.js        # Detail page logic
├── dashboard-script.js     # Dashboard logic
└── README.md               # Documentation
```

## 🔐 JavaScript Validation Features

### Login Form Validation
```javascript
✓ Username validation (min 3 chars)
✓ Password validation (min 6 chars)
✓ IF-ELSE credential checking
✓ Session persistence
✓ Auto-redirect to dashboard
```

### Register Form Validation
```javascript
✓ Full name validation
✓ Email validation (regex)
✓ Phone validation
✓ Password matching
✓ Terms agreement check
✓ Real-time field feedback
```

## 🎨 Design Highlights

- **Modern UI**: Clean dan professional design
- **Responsive**: Mobile-first approach
- **Animations**: Smooth transitions dan interactions
- **Accessibility**: WCAG compliant
- **Color Scheme**: Blue gradient theme
- **Typography**: Clear dan readable fonts

## 💡 How to Use

1. **Open Homepage**
   ```
   Open index.html in your browser
   ```

2. **Browse Services**
   - Click "Pelajari Selengkapnya" to view service details
   - Each service shows full features and pricing

3. **Login**
   ```
   Username: admin
   Password: password123
   Click "Masuk" button
   ```

4. **Register New Account**
   - Fill in all required fields
   - Create strong password
   - Click "Daftar"

5. **Access Dashboard**
   - After login, view your dashboard
   - See subscription details
   - Manage profile

## 📊 Test Credentials

| Username | Password | Access |
|----------|----------|--------|
| admin | password123 | ✓ Full Access |
| test | test123 | ✓ Full Access |
| guest | password | ✗ Invalid |

## 🎯 Requirements Checklist

- [x] Halaman Utama dengan informasi perusahaan
- [x] Halaman Detail Informasi (dinamis)
- [x] Halaman Login dengan validasi
- [x] Halaman Registrasi
- [x] Halaman Dashboard (Menu Utama)
- [x] Detail halaman muncul saat klik
- [x] JavaScript IF-ELSE validation
- [x] Footer di semua halaman
- [x] Desain menarik (Bootstrap + CSS)
- [x] Upload ke GitHub
- [x] README dengan screenshots

## 📸 Screenshots

### Homepage - Hero Section
![Hero Section](screenshots/01_hero.png)

### Services Section
![Services](screenshots/02_services.png)

### Service Detail Page
![Detail](screenshots/03_detail.png)

### Login Page
![Login](screenshots/04_login.png)

### Register Page
![Register](screenshots/05_register.png)

### Dashboard
![Dashboard](screenshots/06_dashboard.png)

## 🌟 Key Features

1. **Responsive Design**
   - Works perfectly on desktop, tablet, mobile
   - Bootstrap grid system
   - Media queries for optimization

2. **Form Validation**
   - Client-side validation
   - Real-time feedback
   - User-friendly error messages

3. **Session Management**
   - localStorage persistence
   - sessionStorage option
   - Logout functionality

4. **Dynamic Content**
   - URL parameter handling
   - Dynamic service loading
   - Smooth page transitions

5. **Professional Design**
   - Modern color scheme
   - Smooth animations
   - Interactive elements
   - Consistent styling

## 🔗 Navigation

```
index.html (Homepage)
├── detail.html (Service Details)
│   └── Other services links
├── login.html (Login Form)
│   └── register.html (Register link)
├── register.html (Register Form)
│   └── login.html (Login link)
└── dashboard.html (User Dashboard - Protected)
    └── logout → index.html
```

## ⚙️ Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## 📞 Contact & Support

For questions or issues:
- Check GitHub Issues
- Review documentation
- Test with demo credentials

## 📝 Academic Information

**Course**: UTS Pemrograman Web 1  
**Project Type**: Company Profile Website  
**Technology Stack**: HTML5, CSS3, JavaScript, Bootstrap  
**Created**: 2025

## 📄 License

This project is for educational purposes.

---

**Made with ❤️ for Web Development Learning**

Last Updated: November 2025
