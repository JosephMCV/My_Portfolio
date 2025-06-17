document.addEventListener("DOMContentLoaded", function () {
    
    window.scrollTo(0, 0);

    
    const images = document.querySelectorAll(".image-box img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    images.forEach((img) => observer.observe(img));

   
    const knowledgeLink = document.querySelector('a[href="#knowledge"]');
    const knowledgeSection = document.querySelector("#knowledge");

    if (knowledgeLink && knowledgeSection) {
        knowledgeLink.addEventListener("click", function (e) {
            e.preventDefault();
            knowledgeSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
