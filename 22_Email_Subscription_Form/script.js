const scriptURL = 'https://script.google.com/macros/s/AKfycbxNK_fC1ocBdCWnXjHFxCMSAptG17hqIH6X7x5eT7u_WZ94QXZ22Hi6aWP4-RsmiocTaw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
