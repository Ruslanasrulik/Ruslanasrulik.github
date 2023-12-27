document.addEventListener('DOMContentLoaded', function (){
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.querySelector('input[type="password"]');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function (){
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
            passwordInput.setAttribute('type',type);
        });
    }
})