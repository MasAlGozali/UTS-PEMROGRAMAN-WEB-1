// Register validation dengan JavaScript
function handleRegister(event) {
    event.preventDefault();

    // Get form values
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const company = document.getElementById('company').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Clear previous error messages
    clearErrorMessages();
    document.getElementById('error-alert').classList.add('d-none');
    document.getElementById('success-alert').classList.add('d-none');

    let isValid = true;

    // Validasi Nama Lengkap
    if (fullname === '' || fullname.length < 3) {
        showError('fullname-error', 'Nama lengkap harus minimal 3 karakter');
        isValid = false;
    }

    // Validasi Email dengan Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        showError('email-error', 'Format email tidak valid');
        isValid = false;
    }

    // Validasi Nomor Telepon
    if (phone === '' || phone.length < 10) {
        showError('phone-error', 'Nomor telepon harus minimal 10 digit');
        isValid = false;
    }

    // Validasi Username
    if (username === '' || username.length < 3) {
        showError('username-error', 'Username harus minimal 3 karakter');
        isValid = false;
    }

    // Validasi Password
    if (password === '' || password.length < 6) {
        showError('password-error', 'Password harus minimal 6 karakter');
        isValid = false;
    }

    // Validasi Konfirmasi Password
    if (password !== confirmPassword) {
        showError('confirm-error', 'Password tidak sesuai');
        isValid = false;
    }

    // Validasi Syarat & Ketentuan
    if (!agreeTerms) {
        document.getElementById('error-alert').classList.remove('d-none');
        document.getElementById('error-message').textContent = 'Anda harus setuju dengan Syarat & Ketentuan';
        isValid = false;
    }

    // Jika ada error, tampilkan alert
    if (!isValid) {
        if (!agreeTerms && document.getElementById('error-alert').classList.contains('d-none')) {
            document.getElementById('error-alert').classList.remove('d-none');
            document.getElementById('error-message').textContent = 'Silakan periksa kembali input Anda.';
        }
        return;
    }

    // Registrasi Berhasil
    document.getElementById('success-alert').classList.remove('d-none');

    // Simpan data registrasi (dalam praktik nyata, ini dikirim ke server)
    const userData = {
        fullname: fullname,
        email: email,
        phone: phone,
        company: company,
        username: username,
        password: password,
        registeredDate: new Date().toISOString()
    };

    // Simpan ke localStorage (untuk demo saja)
    localStorage.setItem('registeredUser_' + username, JSON.stringify(userData));

    // Redirect ke login setelah 2 detik
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
}

// Helper function untuk menampilkan error
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Helper function untuk clear error messages
function clearErrorMessages() {
    const errorElements = document.querySelectorAll('[id$="-error"]');
    errorElements.forEach(element => {
        element.style.display = 'none';
    });
}

// Run validation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Optional: Add real-time validation
    const form = document.getElementById('registerForm');
    if (form) {
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
});

// Real-time field validation
function validateField(field) {
    const fieldId = field.id;
    const value = field.value.trim();

    if (fieldId === 'fullname') {
        if (value.length < 3) {
            showError('fullname-error', 'Nama lengkap harus minimal 3 karakter');
        } else {
            document.getElementById('fullname-error').style.display = 'none';
        }
    } else if (fieldId === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError('email-error', 'Format email tidak valid');
        } else {
            document.getElementById('email-error').style.display = 'none';
        }
    } else if (fieldId === 'phone') {
        if (value.length < 10) {
            showError('phone-error', 'Nomor telepon harus minimal 10 digit');
        } else {
            document.getElementById('phone-error').style.display = 'none';
        }
    } else if (fieldId === 'reg-username') {
        if (value.length < 3) {
            showError('username-error', 'Username harus minimal 3 karakter');
        } else {
            document.getElementById('username-error').style.display = 'none';
        }
    }
}
