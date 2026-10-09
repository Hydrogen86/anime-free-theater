function heroChangeBG (heroClassName) {

    const className = document.querySelector(`.${heroClassName}`);

    const images = [
        "../assets/images/one-piece.jpg",
        "../assets/images/ancient-magus-bride.jpg",
        "../assets/images/bleach.jpg",
        "../assets/images/haikyuu 2.jpg",
        "../assets/images/haikyuu.jpg",
        "../assets/images/one-punch-man.jpg"
    ];

    let currentIndex = 0;

    function changeImage() {
        className.style.backgroundImage = `url("${images[currentIndex]}")`;

        currentIndex = (currentIndex + 1) % images.length;
    }

    // Set the initial background
    changeImage();

    // Change every 3 seconds
    setInterval(changeImage, 3000);
}

export default heroChangeBG;