

Ini adalah project website company profile yang dikembangkan untuk **UTS Pemrograman Web 1**. Website ini menampilkan halaman utama perusahaan teknologi, halaman detail layanan, fitur login/registrasi dengan validasi JavaScript, dan dashboard user.

## 📋 Fitur Utama

### ✅ Halaman-halaman yang Tersedia

1. **Halaman Utama (index.html)**
   - Hero section dengan presentasi company
   - Daftar 6 layanan utama dalam bentuk card yang menarik
   - Informasi tentang perusahaan
   - Footer dengan copyright

2. **Halaman Detail Informasi (detail.html)**
   - Menampilkan detail lengkap layanan saat user mengklik salah satu layanan
   - Berisi fitur, pricing, dan manfaat layanan
   - Rekomendasi layanan lainnya
   - Dynamic content loading berdasarkan URL parameter

3. **Halaman Login (login.html)**
   - Form login dengan validasi JavaScript menggunakan IF-ELSE
   - Demo credentials: username: `admin`, password: `password123`
   - Session management dengan localStorage/sessionStorage
   - Redirect ke dashboard setelah login berhasil

4. **Halaman Registrasi (register.html)**
   - Form registrasi lengkap dengan validasi
   - Validasi email, password, dan field lainnya
   - Real-time field validation
   - Simpan data registrasi ke localStorage

5. **Dashboard/Menu Utama (dashboard.html)**
   - Halaman setelah user berhasil login
   - Menampilkan welcome message dengan nama user
   - Statistics dashboard
   - Daftar layanan yang berlangganan
   - Profil pengguna



## 🔐 JavaScript Validation

### Login Validation (login-script.js)
```javascript
- Validasi username (min 3 karakter)
- Validasi password (min 6 karakter)
- Validasi IF-ELSE untuk kredensial:
  - admin / password123 ✓
  - test / test123 ✓
  - Credentials lain ✗
- Session management (localStorage/sessionStorage)
- Redirect ke dashboard
```

### Register Validation (register-script.js)
```javascript
- Validasi nama lengkap
- Validasi email dengan regex
- Validasi nomor telepon
- Validasi password matching
- Real-time field validation
- Simpan ke localStorage
```

## 📁 Struktur File

```
frontend/
├── index.html              # Halaman utama
├── detail.html             # Halaman detail layanan
├── login.html              # Halaman login
├── register.html           # Halaman registrasi
├── dashboard.html          # Dashboard (menu utama setelah login)
├── styles.css              # Custom CSS
├── login-script.js         # Login validation logic
├── register-script.js      # Register validation logic
├── detail-script.js        # Detail page dynamic loading
├── dashboard-script.js     # Dashboard functionality
└── README.md               # This file
```

## 🚀 Cara Menggunakan

### 1. Buka Halaman Utama
Buka `index.html` di browser untuk melihat halaman utama perusahaan

### 2. Explore Layanan
Klik tombol "Pelajari Selengkapnya" pada card layanan untuk melihat detail lengkap

### 3. Login
- Klik tombol "Login" di navbar
- Gunakan credentials: `admin` / `password123`
- Atau daftar akun baru melalui halaman registrasi

### 4. Dashboard
Setelah login berhasil, Anda akan diarahkan ke dashboard dengan:
- Welcome message
- Statistics
- Daftar layanan berlangganan
- Profil pengguna

## 📊 Demo Credentials

| Username | Password | Status |
|----------|----------|--------|
| admin | password123 | ✓ Valid |
| test | test123 | ✓ Valid |
| other | any | ✗ Invalid |

## 🎯 Requirements yang Terpenuhi

✅ Halaman Utama dengan informasi perusahaan  
✅ Halaman Detail Informasi yang dinamis  
✅ Halaman Login dengan validasi IF-ELSE  
✅ Halaman Registrasi  
✅ Halaman Dashboard (Menu Utama setelah login)  
✅ Detail halaman muncul saat user memilih layanan  
✅ JavaScript validasi dengan struktur percabangan  
✅ Footer di semua halaman dengan copyright  
✅ Desain menarik menggunakan Bootstrap & custom CSS  
✅ Upload ke GitHub dengan README  

## 🎨 Screenshot

### Halaman Utama
![Homepage](screenshots/01-homepage.png)

### Halaman Detail Layanan
![Detail Page](screenshots/02-detail-page.png)

### Halaman Login
![Login Page](screenshots/03-login-page.png)

### Halaman Registrasi
![Register Page](screenshots/04-register-page.png)

### Dashboard
![Dashboard](screenshots/05-dashboard.png)

## 📝 Informasi Mahasiswa

**NPM**: [Your NPM]  
**Nama**: [Your Name]  
**Kelas**: [Your Class]  
**Mata Kuliah**: UTS Pemrograman Web 1  





-
