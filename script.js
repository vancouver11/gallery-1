"use strict";

let images =[
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
]
let root = document.getElementById('root');
let container = document.createElement('div');
container.classList.add('container');
let bigPhoto = document.createElement('div');
bigPhoto.classList.add('bigPhoto');
container.appendChild(bigPhoto);

createGallery();
changeBackroundPhoto();
loupe();



function createGallery(){
    let listPhoto = document.createElement('div');
    listPhoto.classList.add('listPhoto');

    images.forEach( elem => {
        let smallPhoto = document.createElement('div');
        smallPhoto.classList.add('smallPhoto');
        smallPhoto.style.backgroundImage =`url(${elem})`;
        listPhoto.appendChild(smallPhoto);
    })
    
    container.appendChild(listPhoto);
    root.appendChild(container);
}


function changeBackroundPhoto(){
    document.body.addEventListener('click', function (event) {
        if(event.target.classList.contains('smallPhoto')){
            bigPhoto.style.backgroundImage = `${event.target.style.backgroundImage}`;
        }
     }) 
     
}

function loupe(){
    bigPhoto.addEventListener('mouseover', function (event) {
        bigPhoto.addEventListener('mousemove', function (event) {
            bigPhoto.classList.add('active');
            let xScale=  (event.pageX - bigPhoto.offsetLeft) / bigPhoto.offsetWidth;
            let yScale=  (event.pageY - bigPhoto.offsetTop) / bigPhoto.offsetHeight;
            bigPhoto.style.backgroundPosition = `${Math.abs(xScale* 100) }%  ${Math.abs(yScale* 100)}% `
        })
    })

    bigPhoto.addEventListener('mouseout', function(){
        bigPhoto.classList.remove('active');
        bigPhoto.style.backgroundPosition ="center"
    })
    
}





