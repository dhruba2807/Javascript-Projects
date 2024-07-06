let imagebox = document.getElementById("qrimage")
let qrimage = document.getElementById("qrl");
let qrtext = document.getElementById("input");


function generateqr() {
    if (qrtext.value.length > 0) {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
        imagebox.classList.add("qrl");
    }else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000)
    }
}