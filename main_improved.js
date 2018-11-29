const fileInput = window.document.getElementById('fileInput');
const imageBox = window.document.getElementById('imageBox');

fileInput.addEventListener('change', event => {
    const width = 500;
    const height = 300;
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = event => {
        const imageString = event.target.result;
        const imageStringSize = imageString.length;

        const img = new Image();
        img.src = imageString;

        // for (let i = 0; i <= imageStringSize; i += 160000) {
        //     setTimeout(() => {
        //         a.src += imageString.substr(i, 160000);
        //         if (a.src.length === imageStringSize) {
        //             img.src = a.src;
        //         }
        //     }, 0);
        // }

        img.loadstart = (event) => {
            // const elem = document.createElement('canvas');
            // elem.width = width;
            // elem.height = height;
            // const ctx = elem.getContext('2d');
            // ctx.drawImage(img, 0, 0, width, height);
            // imageBox.innerHTML = `<img src="${elem.toDataURL('image/jpeg')}" />`;
        };
    };
});