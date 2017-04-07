var images = [
    "img/backgrounds/laura.jpg",
    "img/backgrounds/ray.jpg",
    "img/backgrounds/tobias.jpg",
    "img/backgrounds/victoria.jpg"
];


document.body.style.background = "url('" + images[Math.floor(Math.random() * images.length)] + "')";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";




setInterval(() => {
    var time = new Date()
    var hours = time.getHours();
    var mins = time.getMinutes();
    document.getElementsByClassName("day")[0].innerText = time.toDateString();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    document.getElementsByClassName("currenttime")[0].innerText = hours + ":" + mins;

    if (hours < 12) {
        document.getElementsByClassName("currentstate")[0].innerText = "AM";
    }
    else if (hours >= 12) {
        document.getElementsByClassName("currentstate")[0].innerText = "PM";
    }
}, 1000)
