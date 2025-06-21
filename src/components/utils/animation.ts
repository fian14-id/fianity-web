import gsap from"gsap";

export const animationPageIn = () => {
    const banners = document.querySelectorAll("[id^=banner-]");
    const tl = gsap.timeline();
    tl.set(banners, { yPercent: 0}).to(banners, { yPercent: 100, stagger: 0.2 })
}