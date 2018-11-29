const fileInput = window.document.getElementById('fileInput');
const imageBox = window.document.getElementById('imageBox');

fileInput.addEventListener('change', event => {
    const width = 500;
    const height = 300;
    const img = new Image();

    var imageUrl = window.URL.createObjectURL(event.target.files[0]);
    img.src = imageUrl;

    img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = width;
        elem.height = height;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        imageBox.innerHTML = `<img src="${elem.toDataURL('image/jpeg')}" />`;
    };
});