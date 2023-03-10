// const slipper = document.querySelector(".slipper");
// let isDragStart = false, prevPageX, prevScrollLeft;

// arrowButton = document.querySelectorAll(".product-container i");
// firstImg = slipper.querySelectorAll("img")[0];

// //mendapatkan pixel img slipper pertama + nilai margin
// let firstImgWidth = firstImg.clientWidth + 330;



// arrowButton.forEach(icon => {
//     icon.addEventListener("click", () => {
//         slipper.scrollLeft += icon.id == "left"? -firstImgWidth : firstImgWidth;
       
//     })
// });

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = slipper.scrollLeft;
// }

// const dragging = (e) => {
//     if (!isDragStart) return ;
//     e.preventDefault();
//     slipper.classList.add("dragging");
//     let posDiff = e.pageX - prevPageX;
//     slipper.scrollLeft = prevScrollLeft - posDiff; 
// }



// const dragStop = () => {
//     isDragStart = false;
//     slipper.classList.remove("dragging");
// }

// slipper.addEventListener("mousedown", dragStart);
// slipper.addEventListener("mousemove", dragging);
// slipper.addEventListener("mouseup", dragStop);

const productContainer = [...document.querySelectorAll('.product-container')];

const prev = [...document.querySelectorAll('.prev')];
const next = [...document.querySelectorAll('.next')];

productContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    prev[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    next[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
})