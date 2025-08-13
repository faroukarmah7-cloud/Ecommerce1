// login-navbar-profile.js
// This script only handles updating the navbar profile after login, and is meant to be included in group 47.html

// Navbar profile click opens profile modal
const navbarProfile = document.getElementById('navbarProfile');
if (navbarProfile) {
    navbarProfile.addEventListener('click', showProfile);
}

// Update navbar profile image and name
function updateNavbarProfile() {
    const navbarProfile = document.getElementById('navbarProfile');
    const navbarProfileImg = document.getElementById('navbarProfileImg');
    const navbarProfileName = document.getElementById('navbarProfileName');
    if (currentUser && navbarProfile && navbarProfileImg && navbarProfileName) {
        navbarProfile.classList.remove('hidden');
        navbarProfileImg.src = currentUser.profileImage && currentUser.profileImage !== ''
            ? currentUser.profileImage
            : 'https://ui-avatars.com/api/?name=' + encodeURIComponent(currentUser.name);
        navbarProfileName.textContent = currentUser.name;
        // Hide old profile button if present
        if (profileBtn) profileBtn.classList.add('hidden');
    } else if (navbarProfile) {
        navbarProfile.classList.add('hidden');
    }
}

// Patch login form handler to call updateNavbarProfile after login
if (typeof loginForm !== 'undefined') {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Simulate login - in a real app, this would check against stored user data
        if ((email === 'test@example.com' || email === 'test@example.com') && password === 'password') {
            currentUser = {
                name: "Test User",
                email: "test@example.com",
                phone: "+233123456789",
                momoProvider: "MTN,Vodafone,AirtelTigo",
                momoNumber: "+233123456789",
                password: "password",
                profileImage: ''
            };
            alert(`Welcome back ${currentUser.name}!`);
            hideModal(loginModal);
            updateNavbarProfile();
            // Change register button to profile
            registerBtn.textContent = currentUser.name;
            becomeSellerBtn.textContent = "My Dashboard";
        } else {
            alert('Invalid email/phone or password');
        }
        // Show profile button and modal after login
        updateNavbarProfile();
        showProfile();
        this.reset();
    });
}
