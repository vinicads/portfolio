/* The small, purpose-built motion layer. No scroll interception or dependencies. */
(() => {
    "use strict";

    const start = () => {
        const root = document.documentElement;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const finePointer = window.matchMedia("(pointer: fine)");
        const desktop = window.matchMedia("(min-width: 768px)");
        const progress = document.querySelector("[data-scroll-progress]");
        const parallaxNodes = new Set();
        const pendingReveals = new Set();
        const magneticNodes = new WeakSet();
        let scrollFrame = 0;

        const reveal = (element) => {
            element.classList.add("is-visible");
            pendingReveals.delete(element);
            revealObserver?.unobserve(element);
        };

        const revealObserver = "IntersectionObserver" in window
            ? new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) reveal(entry.target);
                });
            }, { threshold: 0, rootMargin: "0px 0px -24px 0px" })
            : null;

        const updateScroll = () => {
            scrollFrame = 0;
            const viewportHeight = window.innerHeight;
            const scrollable = Math.max(0, root.scrollHeight - viewportHeight);
            if (progress) {
                const fraction = scrollable ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
                progress.style.transform = `scaleX(${fraction})`;
            }

            const active = desktop.matches && !reducedMotion.matches;
            parallaxNodes.forEach((element) => {
                if (!element.isConnected) {
                    parallaxNodes.delete(element);
                    return;
                }
                if (!active) {
                    element.style.setProperty("--parallax-y", "0px");
                    return;
                }
                const bounds = element.getBoundingClientRect();
                const previousOffset = parseFloat(element.style.getPropertyValue("--parallax-y")) || 0;
                const rawSpeed = Number.parseFloat(element.dataset.speed);
                const speed = Number.isFinite(rawSpeed) ? Math.min(.2, Math.max(-.2, rawSpeed)) : .06;
                // Subtract our own transform so repeated scroll events cannot feed it back.
                const center = bounds.top - previousOffset + bounds.height / 2;
                const displacement = Math.max(-45, Math.min(45, (viewportHeight / 2 - center) * speed));
                element.style.setProperty("--parallax-y", `${displacement.toFixed(2)}px`);
            });
        };

        const queueScroll = () => {
            if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
        };

        const resetMagnet = (element) => {
            element.style.setProperty("--magnetic-x", "0px");
            element.style.setProperty("--magnetic-y", "0px");
        };

        const bindMagnet = (element) => {
            if (magneticNodes.has(element)) return;
            magneticNodes.add(element);
            element.addEventListener("pointermove", (event) => {
                if (reducedMotion.matches || !finePointer.matches || !desktop.matches || event.pointerType === "touch") {
                    resetMagnet(element);
                    return;
                }
                const bounds = element.getBoundingClientRect();
                const oldX = parseFloat(element.style.getPropertyValue("--magnetic-x")) || 0;
                const oldY = parseFloat(element.style.getPropertyValue("--magnetic-y")) || 0;
                const x = Math.max(-6, Math.min(6, (event.clientX - bounds.left + oldX - bounds.width / 2) * .11));
                const y = Math.max(-6, Math.min(6, (event.clientY - bounds.top + oldY - bounds.height / 2) * .11));
                element.style.setProperty("--magnetic-x", `${x.toFixed(2)}px`);
                element.style.setProperty("--magnetic-y", `${y.toFixed(2)}px`);
            }, { passive: true });
            element.addEventListener("pointerleave", () => resetMagnet(element), { passive: true });
            element.addEventListener("blur", () => resetMagnet(element));
        };

        const register = (node) => {
            if (!(node instanceof Element)) return;
            const elements = [node, ...node.querySelectorAll("[data-reveal], [data-parallax], [data-magnetic]")];
            elements.forEach((element) => {
                if (element.matches("[data-reveal]") && !element.classList.contains("is-visible")) {
                    const bounds = element.getBoundingClientRect();
                    const alreadyInView = bounds.top < window.innerHeight - 24 && bounds.bottom >= 0;
                    if (!revealObserver || reducedMotion.matches || alreadyInView) reveal(element);
                    else if (!pendingReveals.has(element)) {
                        pendingReveals.add(element);
                        revealObserver.observe(element);
                    }
                }
                if (element.matches("[data-parallax]")) parallaxNodes.add(element);
                if (element.matches("[data-magnetic]")) bindMagnet(element);
            });
        };

        register(document.body);
        // CSS only opts into entrance motion once every initial node has a reveal path.
        root.classList.add("motion-ready");
        updateScroll();

        const contentObserver = new MutationObserver((records) => {
            records.forEach((record) => record.addedNodes.forEach(register));
            pendingReveals.forEach((element) => {
                if (!element.isConnected) {
                    revealObserver?.unobserve(element);
                    pendingReveals.delete(element);
                }
            });
            queueScroll();
        });
        contentObserver.observe(document.body, { childList: true, subtree: true });
        window.addEventListener("scroll", queueScroll, { passive: true });
        window.addEventListener("resize", queueScroll, { passive: true });
        window.addEventListener("load", queueScroll, { once: true });

        const updatePreferences = () => {
            if (reducedMotion.matches) pendingReveals.forEach(reveal);
            if (reducedMotion.matches || !finePointer.matches || !desktop.matches) {
                document.querySelectorAll('[data-magnetic]').forEach(resetMagnet);
            }
            updateScroll();
        };
        [reducedMotion, finePointer, desktop].forEach(query => query.addEventListener('change', updatePreferences));
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
})();
