document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // Optional: Add active class to hamburger for animation
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.fas');

            // Close other open answers
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.style.maxHeight = null;
                    otherQuestion.querySelector('.fas').classList.remove('fa-chevron-up');
                    otherQuestion.querySelector('.fas').classList.add('fa-chevron-down');
                }
            });

            // Toggle current answer
            question.classList.toggle('active');
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile nav if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('.main-header').offsetHeight + 20), // Adjust for sticky header height + some offset
                    behavior: 'smooth'
                });
            }
        });
    });
});
