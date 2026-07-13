document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Плавое появление блоков
    // =========================

    const elements = document.querySelectorAll(
        "section, .services article, .gallery img"
    );

    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all .8s ease";
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(el => observer.observe(el));



    // =========================
    // Параллакс главной картинки
    // =========================

    const heroImage = document.querySelector(".hero-image img");

    window.addEventListener("scroll", () => {

        if (!heroImage) return;

        const offset = Math.min(window.scrollY * 0.12, 70);

        heroImage.style.transform =
            `translateY(${offset}px) scale(1.03)`;

    });



    // =========================
    // Затемнение шапки
    // =========================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background = "rgba(10,10,10,.97)";
            header.style.boxShadow = "0 12px 40px rgba(0,0,0,.45)";

        } else {

            header.style.background = "rgba(10,10,10,.88)";
            header.style.boxShadow = "none";

        }

    });



    // =========================
    // Плавый скролл
    // =========================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    // =========================
    // Hover кнопок
    // =========================

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-5px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0)";

        });

    });



    // =========================
    // Подсветка карточек услуг
    // =========================

    document.querySelectorAll(".services article").forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background = `
            radial-gradient(circle at ${x}px ${y}px,
            rgba(201,169,110,.18),
            rgba(20,20,20,1) 70%)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "#151515";

        });

    });



    // =========================
    // Небольшой zoom фотографий
    // =========================

    document.querySelectorAll(".gallery img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.05)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

});
