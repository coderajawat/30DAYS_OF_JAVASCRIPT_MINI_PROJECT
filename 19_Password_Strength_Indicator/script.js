let pass = document.getElementById('password');
let msg = document.getElementById('message');
let str = document.getElementById('strength');
let strengthIcon = document.getElementById('strength-icon');

let strongPass = '<i class="fa-solid fa-circle-check"></i>';
let weakPass = '<i class="fa-solid fa-circle-xmark"></i>';
let mediumPass = '<i class="fa-solid fa-circle-exclamation"></i>';

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
        strengthIcon.innerHTML = "";
    }

    if(pass.value.length < 4){
        str.textContent = "Weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
        strengthIcon.innerHTML = weakPass;
        strengthIcon.style.color = "red";
    } else if(pass.value.length >= 4 && pass.value.length < 8){
        str.textContent = "Medium";
        pass.style.borderColor = "orange";
        msg.style.color = "orange";
        strengthIcon.innerHTML = mediumPass;
        strengthIcon.style.color = "orange";
    } else if(pass.value.length >= 8){
        str.textContent = "Strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
        strengthIcon.innerHTML = strongPass;
        strengthIcon.style.color = "green";
    }
});
