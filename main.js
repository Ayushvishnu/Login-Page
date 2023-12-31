
document.addEventListener('DOMContentLoaded', function () {
    var register = document.getElementById('register');
    var login = document.getElementById('login');
    var commonContainer = document.querySelector('.common-container');
    var lgBtn = document.getElementById('lgbtn');
    var btnReg = document.getElementById('btnreg');
    var btnLg = document.getElementById('btnlg');
    var btnClose = document.querySelectorAll('.btn-close');

    register.style.display = 'none';

    lgBtn.addEventListener('click', function () {
        commonContainer.classList.remove('d-none');
    });

    btnReg.addEventListener('click', function () {
        login.style.display = 'none';
    
        register.style.display = 'block';
    });

    btnLg.addEventListener('click', function () {
        register.style.display = 'none';
        login.style.display = 'block';
        
    });

    btnClose.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // commonContainer.style.display = 'none';
            commonContainer.classList.add('d-none');
        });
    });
});