## 📖 Panduan Push ke GitHub

Berikut adalah langkah-langkah untuk push project ke GitHub:

### Step 1: Buat Repository di GitHub

1. Buka [GitHub.com](https://github.com)
2. Klik **New** untuk membuat repository baru
3. Isi nama repository: `UTS-Pemrograman-Web-1` atau `TechVision-Solutions`
4. Pilih **Public** untuk bisa dilihat publik
5. **Jangan** initialize dengan README (sudah ada di lokal)
6. Klik **Create Repository**

### Step 2: Copy Remote URL

Setelah membuat repository, GitHub akan menampilkan URL:
- Gunakan **HTTPS** jika belum setup SSH
- Contoh: `https://github.com/username/UTS-Pemrograman-Web-1.git`

### Step 3: Add Remote & Push

Jalankan perintah berikut di terminal (dalam folder project):

```bash
# Add remote repository
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git

# Rename branch ke main (optional, jika default masih master)
git branch -M main

# Push ke GitHub
git push -u origin main
```

### Step 4: Verifikasi di GitHub

1. Refresh halaman repository GitHub
2. Semua file seharusnya sudah ter-upload
3. README.md akan ditampilkan otomatis

### 🔐 Alternatif: Gunakan SSH (Recommended)

Jika sudah setup SSH keys:

```bash
git remote add origin git@github.com:USERNAME/REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

### 📝 Konfigurasi Git (Jika Belum)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 🔄 Update Setelah Push

Untuk update selanjutnya:

```bash
git add .
git commit -m "Update description"
git push origin main
```

---

**Selamat! Project Anda sudah di GitHub! 🎉**
