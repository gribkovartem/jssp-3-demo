const fileInput = window.document.getElementById('fileInput');
const imageBox = window.document.getElementById('imageBox');

fileInput.addEventListener('change', event => {
    const width = 500;
    const height = 300;
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = event => {
        const img = new Image();

        img.src = event.target.result;
        img.onload = () => {
            const elem = document.createElement('canvas');
            elem.width = width;
            elem.height = height;
            const ctx = elem.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            imageBox.innerHTML = `<img src="${elem.toDataURL('image/jpeg')}" />`;
        };
    };
});