const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showAnim');
        } else {
            entry.target.classList.remove('showAnim');
        }
    });
})



const hiddenElements = document.querySelectorAll('.hiddenAnim');

hiddenElements.forEach((el) => observer.observe(el));
