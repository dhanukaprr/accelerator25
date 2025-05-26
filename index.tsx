/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

console.log("Accelerator '25 script loaded. Dark Theme Active.");

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header.fixed-header') as HTMLElement;
    const mainContent = document.querySelector('main') as HTMLElement;

    function setMainPadding() {
        if (header && mainContent) {
            const headerHeight = header.offsetHeight;
            mainContent.style.paddingTop = `${headerHeight}px`;
        }
    }

    // Set padding on load and on resize
    setMainPadding();
    window.addEventListener('resize', setMainPadding);

    // Smooth scroll for navigation links considering fixed header
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId) as HTMLElement;
            if (targetElement && header) {
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else if (targetElement) { // Fallback if header not found
                 targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scroll for CTA buttons considering fixed header
    const ctaButtons = document.querySelectorAll('a.cta-button[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId) as HTMLElement;
             if (targetElement && header) {
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else if (targetElement) { // Fallback if header not found
                 targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});