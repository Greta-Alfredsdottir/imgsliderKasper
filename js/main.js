//Here laver vi gallery
const imageArray = [
    './assets/image1.jpg',
    './assets/image2.jpg',
    './assets/image3.jpg',
    './assets/image4.jpg',
    './assets/image5.jpg',
    './assets/image6.jpg'
]
let sliderImage = document.getElementById('sliderImage')
let sliderIndex = 0
sliderImage.src = imageArray[sliderIndex] //FØRSTEGANG DEN LOADER IN BILLEDE

function increment(){
    if (sliderIndex < imageArray.length -1){
    sliderIndex = sliderIndex + 1  //SLIDERINDEX++, KAN SKRIVES I STEDET
}
else{ //SLIDERINDEX STARTER PÅ 0 OG GÅ OP TIL 5
}
sliderImage.src = imageArray[sliderIndex]
console.log(imageArray.length)
}

function decrement() {
    if (sliderIndex > 0){
    sliderIndex = sliderIndex - 1   //HERE KAN MAN OGSÅ BRUGE --
    }
    else{
        sliderIndex = 5 //SLIDERINDEX ENDER PÅ 5 OG GÅ NED TIL 0
    }
    sliderImage.src = imageArray[sliderIndex]
}

