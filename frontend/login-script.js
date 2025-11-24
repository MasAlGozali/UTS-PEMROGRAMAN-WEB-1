// Login validation dengan JavaScript menggunakan if-else structure
function handleLogin(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('rememberMe').checked;

    // Clear previous error messages
    document.getElementById('username-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
    document.getElementById('error-alert').classList.add('d-none');
    document.getElementById('success-alert').classList.add('d-none');

    let isValid = true;

    // Validasi Username
    if (username === '' || username.length < 3) {
        document.getElementById('username-error').style.display = 'block';
        document.getElementById('username-error').textContent = 'Username harus minimal 3 karakter';
        isValid = false;
    }

    // Validasi Password
    if (password === '' || password.length < 6) {
        document.getElementById('password-error').style.display = 'block';
        document.getElementById('password-error').textContent = 'Password harus minimal 6 karakter';
        isValid = false;
    }

    // Jika ada error, tampilkan alert
    if (!isValid) {
        document.getElementById('error-alert').classList.remove('d-none');
        document.getElementById('error-message').textContent = 'Silakan periksa kembali input Anda.';
        return;
    }

    // Validasi Login dengan IF-ELSE
    // Demo credentials: username: admin, password: password123
    if (username === 'admin' && password === 'password123') {
        // Login Berhasil
        document.getElementById('success-alert').classList.remove('d-none');
        
        // Simpan session
        if (rememberMe) {
            localStorage.setItem('userSession', JSON.stringify({
                username: username,
                loginTime: new Date().toISOString()
            }));
        } else {
            sessionStorage.setItem('userSession', JSON.stringify({
                username: username,
                loginTime: new Date().toISOString()
            }));
        }

        // Redirect ke dashboard setelah 2 detik
        setTimeout(function() {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else if (username === 'test' && password === 'test123') {
        // Login Berhasil (Test account)
        document.getElementById('success-alert').classList.remove('d-none');
        
        if (rememberMe) {
            localStorage.setItem('userSession', JSON.stringify({
                username: username,
                loginTime: new Date().toISOString()
            }));
        } else {
            sessionStorage.setItem('userSession', JSON.stringify({
                username: username,
                loginTime: new Date().toISOString()
            }));
        }

        setTimeout(function() {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        // Login Gagal
        document.getElementById('error-alert').classList.remove('d-none');
        document.getElementById('error-message').textContent = 'Username atau password salah. Coba: admin / password123';
    }
}

// Auto-fill demo credentials button (optional)
function fillDemoCredentials() {
    document.getElementById('username').value = 'admin';
    document.getElementById('password').value = 'password123';
}

// Logout function
function logout() {
    localStorage.removeItem('userSession');
    sessionStorage.removeItem('userSession');
    window.location.href = 'login.html';
}

// Check if user is logged in
function checkLoginStatus() {
    const userSession = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
    
    // Jika user belum login dan mencoba akses halaman yang memerlukan login
    if (window.location.pathname.includes('dashboard.html') && !userSession) {
        window.location.href = 'login.html';
    }
}

// Run check on page load
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});
