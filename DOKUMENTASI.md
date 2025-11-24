# 📖 Dokumentasi Lengkap TechVision Solutions Website

## 📑 Daftar Isi

1. [Overview](#overview)
2. [Fitur Utama](#fitur-utama)
3. [Struktur Project](#struktur-project)
4. [Cara Menggunakan](#cara-menggunakan)
5. [Validasi Login](#validasi-login)
6. [Teknologi](#teknologi)
7. [Catatan Penting](#catatan-penting)

---

## 🎯 Overview

**TechVision Solutions** adalah website company profile yang dikembangkan untuk memenuhi requirement UTS Pemrograman Web 1. Website ini menampilkan informasi perusahaan teknologi beserta layanan-layanannya dengan fitur login/registrasi yang lengkap.

**Tech Stack:**
- HTML5
- CSS3 (Custom + Bootstrap 5)
- JavaScript (Vanilla - No Framework)
- Bootstrap 5.3.0 (CSS Framework)
- Bootstrap Icons

---

## ✨ Fitur Utama

### 1️⃣ Halaman Utama (index.html)

**Tujuan:** Menampilkan informasi perusahaan dan daftar layanan

**Komponen:**
- **Navbar**: Navigation dengan logo dan menu
- **Hero Section**: Welcome message dengan CTA button
- **Services Grid**: 6 card layanan dengan icon
- **About Section**: Informasi tentang perusahaan
- **Footer**: Copyright dan informasi kontak

**Interaksi:**
- Click pada card layanan → Navigate ke detail.html?id=X
- Responsive navbar untuk mobile
- Smooth scroll ke sections

### 2️⃣ Halaman Detail Informasi (detail.html)

**Tujuan:** Menampilkan detail lengkap setiap layanan

**Komponen:**
- **Back Button**: Kembali ke homepage
- **Service Header**: Judul dan deskripsi layanan
- **Features List**: Fitur-fitur dengan icon
- **Benefits List**: Manfaat bisnis
- **Pricing Card**: Harga dan CTA
- **Related Services**: Rekomendasi layanan lain

**Fitur Dinamis:**
- Content loading berdasarkan URL parameter `?id=1-6`
- Smooth transitions
- Related services yang berbeda untuk setiap layanan

```javascript
// Contoh URL:
detail.html?id=1  // Cloud Computing
detail.html?id=2  // Cybersecurity
detail.html?id=3  // Enterprise Solutions
// ... dst
```

### 3️⃣ Halaman Login (login.html)

**Tujuan:** Form login dengan validasi JavaScript menggunakan IF-ELSE

**Komponen:**
- **Username/Email Field**: Input dengan label
- **Password Field**: Input password dengan icon
- **Remember Me**: Checkbox untuk session persistence
- **Login Button**: Submit form
- **Links**: Ke registrasi dan recovery
- **Demo Credentials**: Display kredensial untuk testing

**Validasi JavaScript (IF-ELSE):**

```javascript
// Struktur Validasi:
if (username === '' || username.length < 3) {
    // Show error
} else if (password === '' || password.length < 6) {
    // Show error
} else if (username === 'admin' && password === 'password123') {
    // Login berhasil → redirect ke dashboard
} else if (username === 'test' && password === 'test123') {
    // Login berhasil → redirect ke dashboard
} else {
    // Credential tidak valid → show error message
}
```

**Session Management:**
```javascript
// Remember Me = true
localStorage.setItem('userSession', JSON.stringify(userData))

// Remember Me = false
sessionStorage.setItem('userSession', JSON.stringify(userData))
```

**Demo Credentials:**
| Username | Password | Status |
|----------|----------|--------|
| admin | password123 | ✅ Valid |
| test | test123 | ✅ Valid |

### 4️⃣ Halaman Registrasi (register.html)

**Tujuan:** Form registrasi akun baru dengan validasi

**Komponen:**
- **Full Name**: Input text
- **Email**: Input email dengan regex validation
- **Phone**: Input nomor telepon
- **Company**: Input nama perusahaan
- **Username**: Input username
- **Password**: Input password (min 6 char)
- **Confirm Password**: Validasi password matching
- **Terms Checkbox**: Agree to terms
- **Register Button**: Submit form

**Validasi:**
```javascript
✓ Nama (min 3 karakter)
✓ Email (format valid dengan regex)
✓ Phone (min 10 digits)
✓ Username (min 3 karakter)
✓ Password (min 6 karakter)
✓ Password Matching
✓ Terms Acceptance
```

**Storage:**
```javascript
// Data disimpan ke localStorage
localStorage.setItem('registeredUser_USERNAME', JSON.stringify({
    fullname, email, phone, company, username, password, registeredDate
}))
```

### 5️⃣ Dashboard (dashboard.html) - Protected Page

**Tujuan:** Halaman utama setelah login berhasil

**Komponen:**
- **Welcome Section**: Greeting dengan nama user
- **Statistics Cards**: 
  - Proyek Aktif
  - Proyek Selesai
  - Total Jam Support
  - Rating
- **Services Section**: Daftar layanan berlangganan
- **Profile Section**: Informasi akun user

**Fitur Proteksi:**
```javascript
// Redirect jika tidak login
if (!userSession) {
    window.location.href = 'login.html'
}
```

**Logout:**
```javascript
function logout() {
    localStorage.removeItem('userSession')
    sessionStorage.removeItem('userSession')
    window.location.href = 'index.html'
}
```

---

## 📁 Struktur Project

```
UTS PEMROGRAMAN WEB 1/
├── README.md                    # Main documentation
├── GITHUB_SETUP.md             # GitHub push guide
├── DOKUMENTASI.md              # This file
├── .gitignore                  # Git ignore rules
│
└── frontend/
    ├── index.html              # Halaman Utama
    ├── detail.html             # Halaman Detail
    ├── login.html              # Halaman Login
    ├── register.html           # Halaman Registrasi
    ├── dashboard.html          # Halaman Dashboard
    │
    ├── styles.css              # Custom CSS styles
    │                           # (850+ lines)
    │                           # - Navbar styling
    │                           # - Hero section
    │                           # - Service cards
    │                           # - Forms
    │                           # - Responsive design
    │                           # - Animations
    │
    ├── login-script.js         # Login validation (90+ lines)
    │                           # - Form validation
    │                           # - IF-ELSE logic
    │                           # - Session management
    │                           # - Auto-redirect
    │
    ├── register-script.js      # Register validation (100+ lines)
    │                           # - Field validation
    │                           # - Real-time feedback
    │                           # - Email regex
    │                           # - Data storage
    │
    ├── detail-script.js        # Detail page logic (150+ lines)
    │                           # - Service data
    │                           # - Dynamic rendering
    │                           # - URL parameter handling
    │
    ├── dashboard-script.js     # Dashboard functionality (60+ lines)
    │                           # - User profile loading
    │                           # - Login check
    │                           # - Logout function
    │
    └── README.md               # Frontend documentation
```

---

## 🚀 Cara Menggunakan

### 1. Membuka Website

```bash
# Buka file index.html dengan browser
# Atau gunakan live server extension di VS Code
```

### 2. Navigasi Halaman Utama

- **Scroll** ke section "Layanan"
- **Klik** tombol "Pelajari Selengkapnya" pada card layanan
- **Lihat** detail lengkap layanan
- **Kembali** ke homepage dengan tombol back

### 3. Proses Login

**Step-by-step:**
1. Klik tombol "Login" di navbar
2. Masukkan credentials:
   - Username: `admin`
   - Password: `password123`
3. Opsional: Check "Ingat saya"
4. Klik "Masuk"
5. Tunggu redirect ke dashboard

**Output:**
- ✅ Success alert muncul
- ✅ Auto-redirect ke dashboard.html setelah 2 detik
- ✅ User info tersimpan di session/local storage

### 4. Proses Registrasi (Opsional)

1. Klik "Daftar di sini" di login page
2. Isi semua field:
   - Nama Lengkap
   - Email (format valid)
   - Nomor Telepon
   - Nama Perusahaan
   - Username
   - Password (min 6 karakter)
   - Konfirmasi Password
3. Check "Saya setuju dengan Syarat & Ketentuan"
4. Klik "Daftar"
5. Success message muncul
6. Auto-redirect ke login page

### 5. Access Dashboard

Setelah login berhasil:
- ✅ Welcome message dengan nama user
- ✅ Statistics cards
- ✅ Subscribed services
- ✅ User profile information
- ✅ Logout button

---

## 🔐 Validasi Login (Detail)

### JavaScript IF-ELSE Structure

```javascript
// Pseudocode validasi login
function handleLogin(event) {
    event.preventDefault()
    
    const username = getUsername()
    const password = getPassword()
    
    // Validasi 1: Username tidak boleh kosong
    if (username === '' || username.length < 3) {
        showError('Username harus minimal 3 karakter')
        return
    }
    
    // Validasi 2: Password tidak boleh kosong
    if (password === '' || password.length < 6) {
        showError('Password harus minimal 6 karakter')
        return
    }
    
    // Validasi 3: Pengecekan Kredensial (IF-ELSE Chain)
    if (username === 'admin' && password === 'password123') {
        // ✅ VALID - Kredensial admin
        saveSession(username)
        redirectToDashboard()
    } else if (username === 'test' && password === 'test123') {
        // ✅ VALID - Kredensial test
        saveSession(username)
        redirectToDashboard()
    } else {
        // ❌ INVALID - Kredensial salah
        showError('Username atau password salah')
        return
    }
}
```

### Error Handling

```javascript
// Error messages yang ditampilkan:
1. Username harus minimal 3 karakter
2. Password harus minimal 6 karakter
3. Username atau password salah
4. Anda harus setuju dengan Syarat & Ketentuan
```

---

## 🎨 Teknologi & Styling

### CSS Framework
- **Bootstrap 5.3.0**: Grid system, components, utilities
- **Bootstrap Icons**: Vector icons untuk UI
- **Custom CSS**: 850+ lines untuk styling unik

### Custom Styling Features

```css
/* Color Scheme */
--primary-color: #0066cc (Blue)
--secondary-color: #f7f7f7 (Light gray)
--dark-color: #1a1a1a (Dark)

/* Components */
- Gradient backgrounds
- Smooth animations
- Hover effects
- Shadow effects
- Rounded corners
- Responsive design

/* Animations */
- slideInDown / slideInUp
- fadeIn
- slideInLeft / slideInRight
- pulse effect
- Transform on hover
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
- Extra Small: < 576px
- Small: >= 576px
- Medium: >= 768px
- Large: >= 992px
- Extra Large: >= 1200px

/* Media Queries */
@media (max-width: 768px) { ... }
@media (max-width: 576px) { ... }
```

---

## 📊 JavaScript Features

### 1. Form Validation
- Input validation
- Email regex checking
- Password matching
- Real-time feedback
- Error messages

### 2. Session Management
- localStorage untuk persistent sessions
- sessionStorage untuk temporary sessions
- Auto-logout on tab close
- Login protection untuk protected pages

### 3. Dynamic Content
- URL parameter parsing (detail.html?id=X)
- Dynamic content rendering
- Service data management
- Related items display

### 4. User Experience
- Auto-redirect setelah login/register
- Loading states
- Success/error notifications
- Form reset after submission
- Smooth transitions

---

## 📋 Footer Format

Setiap halaman memiliki footer dengan format:

```html
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>&copy; 2025 - TechVision Solutions. All rights reserved.</p>
            </div>
            <div class="col-md-6 text-md-end">
                <p>@Copyright by Student | UTS Pemrograman Web 1</p>
            </div>
        </div>
    </div>
</footer>
```

**Requirements yang dipenuhi:**
- ✅ Footer di semua halaman
- ✅ Format: @Copyright by [NPM_NAMA_MAHASISWA_KELAS]
- ✅ Styling yang sesuai dengan theme
- ✅ Responsive design

---

## 🔍 Testing Checklist

### Homepage
- [ ] Hero section muncul dengan sempurna
- [ ] 6 service cards visible
- [ ] Klik card → navigate ke detail page
- [ ] Navbar responsive di mobile
- [ ] Footer muncul di bawah

### Detail Page
- [ ] Content berubah sesuai URL parameter
- [ ] Back button berfungsi
- [ ] Related services ditampilkan
- [ ] Pricing card sticky di scroll
- [ ] Responsive di mobile

### Login Page
- [ ] Form validation berfungsi
- [ ] Admin/password123 → login berhasil
- [ ] Invalid credentials → error message
- [ ] Remember me menyimpan session
- [ ] Auto-redirect ke dashboard

### Register Page
- [ ] Semua field validation berfungsi
- [ ] Email regex validation bekerja
- [ ] Password matching check
- [ ] Data tersimpan ke localStorage
- [ ] Redirect ke login setelah register

### Dashboard
- [ ] Protected page → redirect ke login jika belum auth
- [ ] Welcome message menampilkan username
- [ ] Statistics cards visible
- [ ] Services section complete
- [ ] Profile section terisi dengan data user
- [ ] Logout button berfungsi

---

## ⚠️ Catatan Penting

### Storage
- Data di-simpan menggunakan **localStorage** (bukan server)
- Data akan hilang jika browser cache dihapus
- Untuk production, gunakan server/database

### Security
- **⚠️ WARNING**: Credentials di-hardcode dalam JavaScript
- Untuk production: gunakan backend authentication
- Password harus di-hash sebelum disimpan
- Gunakan HTTPS untuk transmisi data

### Browser Support
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

### Tips Penggunaan
1. Gunakan **Modern Browser** (Chrome/Firefox/Safari terbaru)
2. **Clear Cache** jika ada masalah
3. Gunakan **Live Server** untuk development
4. Check **Console** untuk debug errors
5. Test di **Multiple Browsers** untuk compatibility

---

## 🎓 Learning Outcomes

Setelah menggunakan project ini, Anda akan memahami:

✅ HTML5 Structure & Semantics
✅ CSS3 Advanced Styling & Responsive Design
✅ JavaScript Form Validation & IF-ELSE Logic
✅ Event Handling & DOM Manipulation
✅ Session Management & Local Storage
✅ Bootstrap Framework & Grid System
✅ Git & GitHub Workflow
✅ Web Application Architecture

---

## 📞 Support & Troubleshooting

### Masalah: Form tidak submit
- Cek Console untuk error messages
- Pastikan semua field required terisi
- Clear browser cache

### Masalah: Login tidak berfungsi
- Gunakan credentials yang benar: admin / password123
- Check localStorage di DevTools
- Refresh halaman setelah login

### Masalah: Detail page tidak load
- Pastikan URL parameter valid: ?id=1-6
- Check console untuk JavaScript errors
- Clear cache & reload

### Masalah: Responsive design tidak bekerja
- Check viewport meta tag di HTML
- Gunakan DevTools device emulation
- Test di berbagai screen sizes

---

## 🚀 Next Steps

Untuk pengembangan lebih lanjut:

1. **Backend Integration**: Tambahkan server dengan Node.js/Python
2. **Database**: Gunakan MongoDB/MySQL untuk persistent storage
3. **Authentication**: Implementasi proper auth dengan JWT
4. **Security**: Add CSRF protection dan input sanitization
5. **API**: Buat REST API untuk client-server communication
6. **Testing**: Tambahkan unit tests dan integration tests
7. **Deployment**: Deploy ke Heroku/Vercel/AWS

---

## 📝 Informasi Mahasiswa

**Mata Kuliah**: UTS Pemrograman Web 1  
**Semester**: [Your Semester]  
**NPM**: [Your NPM]  
**Nama**: [Your Name]  
**Kelas**: [Your Class]  

---

**Last Updated**: November 2025

Made with ❤️ for Web Development Learning

