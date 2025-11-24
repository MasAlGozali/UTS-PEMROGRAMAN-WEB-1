// Dashboard page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadUserProfile();
    checkLoginStatus();
});

// Check if user is logged in
function checkLoginStatus() {
    const userSession = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
    
    if (!userSession) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const user = JSON.parse(userSession);
        document.getElementById('welcome-name').textContent = user.username || 'User';
    } catch (e) {
        window.location.href = 'login.html';
    }
}

// Load user profile from stored data
function loadUserProfile() {
    const userSession = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
    
    if (!userSession) return;

    try {
        const user = JSON.parse(userSession);
        const username = user.username;

        // Try to load registered user data
        const userData = localStorage.getItem('registeredUser_' + username);
        
        if (userData) {
            const userInfo = JSON.parse(userData);
            
            // Fill profile information
            document.getElementById('profile-name').value = userInfo.fullname || '-';
            document.getElementById('profile-email').value = userInfo.email || '-';
            document.getElementById('profile-phone').value = userInfo.phone || '-';
            document.getElementById('profile-company').value = userInfo.company || '-';
            
            // Set join date
            if (userInfo.registeredDate) {
                const joinDate = new Date(userInfo.registeredDate);
                document.getElementById('join-date').textContent = joinDate.toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
        } else {
            // Demo data for admin user
            if (username === 'admin') {
                document.getElementById('profile-name').value = 'Administrator System';
                document.getElementById('profile-email').value = 'admin@techvision.com';
                document.getElementById('profile-phone').value = '+62 812-3456-7890';
                document.getElementById('profile-company').value = 'TechVision Solutions';
                document.getElementById('join-date').textContent = '15 Januari 2023';
            }
        }
    } catch (e) {
        console.error('Error loading profile:', e);
    }
}

// Logout function
function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        localStorage.removeItem('userSession');
        sessionStorage.removeItem('userSession');
        window.location.href = 'index.html';
    }
    return false;
}

// Add animations and interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to service cards
    const serviceCards = document.querySelectorAll('.card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
});
