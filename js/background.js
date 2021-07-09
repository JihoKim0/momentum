const images = ["0.JPG", "1.JPG", "2.JPG", "3.JPG",
        "4.JPG", "5.JPG", "6.JPG", "7.JPG", "8.JPG"];

 const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.id = 'bgImage';