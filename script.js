// ===============================
// BEAUTY STUDIO SCRIPT
// ===============================


// Плавное появление элементов при скролле

const animatedItems = document.querySelectorAll(
    ".adv-card, .service-card, .why-grid div, .gallery-grid img, .review-card, .contact-box"
);


animatedItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .7s ease";

});



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";


            observer.unobserve(entry.target);


        }


    });


},{
    threshold:.15
});



animatedItems.forEach(item=>{

    observer.observe(item);

});








// ===============================
// Анимация кнопок
// ===============================


const buttons = document.querySelectorAll(
    ".main-btn, .header-btn, .second-btn"
);



buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.transform="translateY(-5px)";


    });



    button.addEventListener("mouseleave",()=>{


        button.style.transform="translateY(0)";


    });


});








// ===============================
// Параллакс главного изображения
// ===============================


const heroImage = document.querySelector(".hero-image");


window.addEventListener("scroll",()=>{


    if(heroImage){


        let offset = window.scrollY * 0.05;


        heroImage.style.transform =
        `translateY(${offset}px)`;


    }


});








// ===============================
// Плавная навигация
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        const target =
        document.querySelector(this.getAttribute("href"));



        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});








// ===============================
// Анимация логотипа
// ===============================


const logo = document.querySelector(".logo");


if(logo){


    logo.addEventListener("mouseenter",()=>{


        logo.style.transform="scale(1.05)";


    });



    logo.addEventListener("mouseleave",()=>{


        logo.style.transform="scale(1)";


    });


}
