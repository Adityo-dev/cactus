
const sr = ScrollReveal({
    origin: 'left',
    distance: '200px',
    duration: 2500,
    delay: 300,
    opacity: 0,
    reset: true // Animations repeat
})

sr.reveal(".header-section-img");
sr.reveal(".header-section-data-container", { delay: '600', origin: 'right' });
sr.reveal(".section2-text-data-container", { delay: '600', origin: 'left' });
sr.reveal(".section2-text-data-container", { delay: '600', origin: 'left' });
sr.reveal(".section2-img-card", { delay: '600', origin: 'right', interval: 100 });
sr.reveal("#alimation-top", { delay: '600', origin: 'top', interval: 180 });
sr.reveal(".imge-data-container", { delay: '400', origin: 'left' });
sr.reveal("#animation-bottom", { delay: '600', origin: 'bottom', interval: 180 });
sr.reveal(".section5-all-data-container", { delay: '600', origin: 'bottom', interval: 180 });
sr.reveal("#contact-icon a", { delay: '1200', origin: 'top', interval: 220 });
sr.reveal("#footer-info-1", { delay: '300', origin: 'top' });
sr.reveal("#footer-info-2", { delay: '300', origin: 'top' });
sr.reveal("#footer-info-3", { delay: '300', origin: 'top' });
sr.reveal("#footer-info-4", { delay: '300', origin: 'top' });