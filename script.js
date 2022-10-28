const generate = (e) => {
    temptext.innerHTML = ""
    e.preventDefault();
    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qr_data.value)}`
};

btn.addEventListener("click", generate);
