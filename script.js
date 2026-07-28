(() => {
    "use strict";

    const content = window.PORTFOLIO_CONTENT;
    if (!content) return;

    const state = {
        lang: getInitialLanguage(),
        theme: getInitialTheme(),
        filter: "all",
        activeProject: null,
        activeImageIndex: 0,
        dialogScrollY: 0
    };

    const dom = {
        html: document.documentElement,
        cursorDot: document.querySelector("[data-cursor-dot]"),
        cursorRing: document.querySelector("[data-cursor-ring]"),
        header: document.querySelector("[data-header]"),
        menu: document.querySelector("[data-menu]"),
        menuToggle: document.querySelector("[data-menu-toggle]"),
        scrollProgress: document.querySelector("[data-scroll-progress]"),
        themeToggle: document.querySelector("[data-theme-toggle]"),
        themeIcon: document.querySelector("[data-theme-icon]"),
        languageToggle: document.querySelector("[data-lang-toggle]"),
        currentLanguage: document.querySelector("[data-current-lang]"),
        heroTitle: document.querySelector("[data-hero-title]"),
        heroShowcase: document.querySelector("[data-hero-showcase]"),
        stats: document.querySelector("[data-stats]"),
        techList: document.querySelector("[data-tech-list]"),
        paths: document.querySelector("[data-paths]"),
        skills: document.querySelector("[data-skills]"),
        education: document.querySelector("[data-education]"),
        services: document.querySelector("[data-services]"),
        workflow: document.querySelector("[data-workflow]"),
        projectFilters: document.querySelector("[data-project-filters]"),
        projects: document.querySelector("[data-projects]"),
        whatsappLinks: document.querySelectorAll("[data-whatsapp-link]"),
        resumeLinks: document.querySelectorAll("[data-resume-link]"),
        contactList: document.querySelector("[data-contact-list]"),
        footerSocials: document.querySelector("[data-footer-socials]"),
        footerCopy: document.querySelector("[data-footer-copy]"),
        dialog: document.querySelector("[data-project-dialog]"),
        dialogClose: document.querySelector("[data-dialog-close]"),
        dialogImage: document.querySelector("[data-dialog-image]"),
        dialogTitle: document.querySelector("[data-dialog-title]"),
        dialogCategory: document.querySelector("[data-dialog-category]"),
        dialogDescription: document.querySelector("[data-dialog-description]"),
        dialogTags: document.querySelector("[data-dialog-tags]"),
        dialogLinks: document.querySelector("[data-dialog-links]"),
        galleryPrev: document.querySelector("[data-gallery-prev]"),
        galleryNext: document.querySelector("[data-gallery-next]"),
        galleryCounter: document.querySelector("[data-gallery-counter]")
    };

    const revealObserver = "IntersectionObserver" in window
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.14 })
        : null;

    init();

    function init() {
        applyTheme();
        renderLanguage();
        bindEvents();
        observeReveals();
        showInitialReveals();
        observeNavigation();
        updateScrollProgress();
    }

    function getInitialLanguage() {
        const saved = localStorage.getItem("portfolio-language");
        return saved === "en" ? "en" : "pt";
    }

    function getInitialTheme() {
        const saved = localStorage.getItem("portfolio-theme");
        if (saved === "dark" || saved === "light") return saved;
        return "light";
    }

    function bindEvents() {
        window.addEventListener("scroll", updateScrollProgress, { passive: true });
        bindCursor();

        dom.menuToggle?.addEventListener("click", () => {
            const isOpen = document.body.classList.toggle("menu-open");
            dom.menuToggle.setAttribute("aria-expanded", String(isOpen));
            dom.menuToggle.setAttribute("aria-label", isOpen ? t("menu.close") : t("menu.open"));
        });

        dom.menu?.addEventListener("click", (event) => {
            if (event.target instanceof HTMLAnchorElement) closeMenu();
        });

        dom.themeToggle?.addEventListener("click", () => {
            state.theme = state.theme === "dark" ? "light" : "dark";
            localStorage.setItem("portfolio-theme", state.theme);
            applyTheme();
        });

        dom.languageToggle?.addEventListener("click", () => {
            state.lang = state.lang === "pt" ? "en" : "pt";
            localStorage.setItem("portfolio-language", state.lang);
            renderLanguage();
            observeReveals();
        });

        dom.projectFilters?.addEventListener("click", (event) => {
            const button = event.target.closest("[data-filter]");
            if (!(button instanceof HTMLButtonElement)) return;
            state.filter = button.dataset.filter || "all";
            renderProjectFilters();
            renderProjects();
        });

        [dom.projects, dom.heroShowcase].forEach((container) => {
            container?.addEventListener("click", (event) => {
                const button = event.target.closest("[data-project-id]");
                if (!(button instanceof HTMLButtonElement)) return;
                event.preventDefault();
                openProject(button.dataset.projectId);
            });
        });

        dom.dialogClose?.addEventListener("click", closeProjectDialog);
        dom.dialog?.addEventListener("click", (event) => {
            if (event.target === dom.dialog) closeProjectDialog();
        });
        dom.dialog?.addEventListener("close", () => {
            unlockPageScroll();
            state.activeProject = null;
            state.activeImageIndex = 0;
        });

        dom.galleryPrev?.addEventListener("click", () => moveGallery(-1));
        dom.galleryNext?.addEventListener("click", () => moveGallery(1));

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });
    }

    function renderLanguage() {
        dom.html.lang = state.lang === "pt" ? "pt-BR" : "en";
        document.title = t("documentTitle");
        updateMetaDescription();

        document.querySelectorAll("[data-copy]").forEach((element) => {
            element.textContent = t(element.dataset.copy);
        });

        renderFloatingCtaIcon();

        document.querySelectorAll("[data-nav]").forEach((link) => {
            link.textContent = t(`nav.${link.dataset.nav}`);
        });

        if (dom.heroTitle) {
            dom.heroTitle.replaceChildren();
            const first = document.createElement("span");
            first.textContent = t("hero.titleStart");
            const second = document.createElement("span");
            second.textContent = t("hero.titleEnd");
            dom.heroTitle.append(first, second);
        }

        if (dom.currentLanguage) dom.currentLanguage.textContent = state.lang.toUpperCase();
        dom.languageToggle?.setAttribute("aria-label", state.lang === "pt" ? "Switch to English" : "Mudar para português");
        dom.menuToggle?.setAttribute("aria-label", document.body.classList.contains("menu-open") ? t("menu.close") : t("menu.open"));

        renderHeroShowcase();
        renderStats();
        renderTechList();
        renderPaths();
        renderSkills();
        renderEducation();
        renderServices();
        renderWorkflow();
        renderProjectFilters();
        renderProjects();
        renderContact();
        renderFooter();
        applyTheme();

        if (state.activeProject) renderDialog();
    }

    function updateMetaDescription() {
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", t("metaDescription"));
    }

    function renderFloatingCtaIcon() {
        const link = document.querySelector(".floating-cta");
        if (!link) return;

        const label = t("floatingCta");
        link.setAttribute("aria-label", label);
        link.setAttribute("title", label);
        link.replaceChildren(createWhatsAppIcon());
    }

    function createWhatsAppIcon() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "whatsapp-icon");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");

        const bubble = document.createElementNS("http://www.w3.org/2000/svg", "path");
        bubble.setAttribute("d", "M20.5 11.8a8.45 8.45 0 0 1-12.2 7.6L4 20.5l1.1-4.1a8.45 8.45 0 1 1 15.4-4.6Z");
        bubble.setAttribute("fill", "none");
        bubble.setAttribute("stroke", "currentColor");
        bubble.setAttribute("stroke-width", "1.9");
        bubble.setAttribute("stroke-linecap", "round");
        bubble.setAttribute("stroke-linejoin", "round");

        const phone = document.createElementNS("http://www.w3.org/2000/svg", "path");
        phone.setAttribute("d", "M9.15 8.45c.16-.38.38-.55.78-.55h.52c.25 0 .45.14.54.37l.68 1.62c.1.25.05.48-.14.67l-.42.42c.64 1.26 1.64 2.25 2.9 2.9l.44-.42c.19-.18.42-.23.66-.13l1.6.67c.25.1.38.3.38.56v.52c0 .4-.17.63-.55.78-.58.23-1.23.28-1.95.1-2.66-.64-5.13-3.11-5.77-5.77-.17-.7-.12-1.36.13-1.94Z");
        phone.setAttribute("fill", "none");
        phone.setAttribute("stroke", "currentColor");
        phone.setAttribute("stroke-width", "1.7");
        phone.setAttribute("stroke-linecap", "round");
        phone.setAttribute("stroke-linejoin", "round");

        svg.append(bubble, phone);
        return svg;
    }

    function applyTheme() {
        dom.html.dataset.theme = state.theme;
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) themeMeta.setAttribute("content", state.theme === "dark" ? "#080808" : "#f8f8f9");

        if (dom.themeToggle && dom.themeIcon) {
            const nextTheme = state.theme === "dark" ? "light" : "dark";
            dom.themeToggle.setAttribute("aria-label", t(`themeLabel.${nextTheme}`));
            dom.themeIcon.textContent = state.theme === "dark" ? "☀" : "☾";
        }
    }

    function renderHeroShowcase() {
        if (!dom.heroShowcase) return;

        const featuredId = content.featuredProjectId;
        const featuredProject = content.projects.find((item) => item.id === featuredId) || content.projects[0];
        if (!featuredProject) return;

        const sideProjects = content.projects
            .filter((project) => project.id !== featuredProject.id)
            .slice(0, 3);

        const media = document.createElement("div");
        media.className = "showcase-media";

        const image = document.createElement("img");
        image.src = featuredProject.cover;
        image.alt = localize(featuredProject.title);
        image.decoding = "async";
        image.loading = "eager";
        image.width = 1200;
        image.height = 750;
        media.append(image);

        const body = document.createElement("div");
        body.className = "showcase-body";

        const label = document.createElement("span");
        label.className = "showcase-topline";
        label.textContent = t("projects.featured");

        const title = document.createElement("h2");
        title.textContent = localize(featuredProject.title);

        const description = document.createElement("p");
        description.textContent = localize(featuredProject.subtitle);

        const tags = document.createElement("div");
        tags.className = "showcase-tags";
        getProjectTags(featuredProject).slice(0, 4).forEach((tag) => tags.append(createTag(tag)));

        const button = document.createElement("button");
        button.type = "button";
        button.className = "project-action";
        button.dataset.projectId = featuredProject.id;
        button.textContent = t("projects.viewDetails");

        const contactLink = document.createElement("a");
        contactLink.className = "project-action project-action-soft";
        contactLink.href = "#contact";
        contactLink.textContent = t("projects.talkToMe");

        const actions = document.createElement("div");
        actions.className = "showcase-actions";
        actions.append(button, contactLink);

        const rail = document.createElement("div");
        rail.className = "showcase-rail";
        sideProjects.forEach((project) => {
            const item = document.createElement("button");
            item.type = "button";
            item.dataset.projectId = project.id;
            item.textContent = localize(project.title);
            rail.append(item);
        });

        body.append(label, title, description, tags, actions, rail);
        dom.heroShowcase.replaceChildren(media, body);
    }

    function renderStats() {
        if (!dom.stats) return;

        const fragment = document.createDocumentFragment();
        content.stats.forEach((stat) => {
            const wrapper = document.createElement("div");
            wrapper.className = "fact-card";

            const value = document.createElement("dd");
            value.textContent = `${stat.value}${stat.suffix}`;

            const label = document.createElement("dt");
            label.textContent = localize(stat.label);

            wrapper.append(value, label);
            fragment.append(wrapper);
        });

        dom.stats.replaceChildren(fragment);
    }

    function renderTechList() {
        if (!dom.techList) return;
        const techList = content.tech;
        const repeatedTech = [...techList, ...techList];
        dom.techList.replaceChildren(...repeatedTech.map((tech, index) => {
            const item = document.createElement("span");
            item.className = "tech-pill";
            item.textContent = tech;
            if (index >= techList.length) item.setAttribute("aria-hidden", "true");
            return item;
        }));
    }

    function renderPaths() {
        if (!dom.paths) return;

        const fragment = document.createDocumentFragment();
        content.paths.forEach((path, index) => {
            const card = document.createElement("article");
            card.className = "path-card reveal";
            card.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;

            const icon = document.createElement("span");
            icon.className = "path-icon";
            icon.textContent = path.icon;
            icon.setAttribute("aria-hidden", "true");

            const title = document.createElement("h3");
            title.textContent = localize(path.title);

            const text = document.createElement("p");
            text.textContent = localize(path.description);

            const list = document.createElement("ul");
            localize(path.items).forEach((itemText) => {
                const item = document.createElement("li");
                item.textContent = itemText;
                list.append(item);
            });

            const link = document.createElement("a");
            link.className = "path-link";
            link.href = path.href;
            link.textContent = localize(path.cta);

            card.append(icon, title, text, list, link);
            fragment.append(card);
        });

        dom.paths.replaceChildren(fragment);
        observeReveals();
    }

    function renderSkills() {
        if (!dom.skills) return;

        const fragment = document.createDocumentFragment();
        content.skills.forEach((group) => {
            const card = document.createElement("section");
            card.className = "skill-group";

            const title = document.createElement("strong");
            title.textContent = localize(group.title);

            const list = document.createElement("ul");
            localize(group.items).forEach((skill) => {
                const item = document.createElement("li");
                item.textContent = skill;
                list.append(item);
            });

            card.append(title, list);
            fragment.append(card);
        });

        dom.skills.replaceChildren(fragment);
    }

    function renderEducation() {
        if (!dom.education) return;

        const fragment = document.createDocumentFragment();
        content.education.forEach((education) => {
            const item = document.createElement("article");
            item.className = "timeline-item";

            const title = document.createElement("strong");
            title.textContent = localize(education.title);

            const place = document.createElement("span");
            place.textContent = education.place;

            const period = document.createElement("small");
            period.textContent = education.period;

            item.append(title, place, period);
            fragment.append(item);
        });

        dom.education.replaceChildren(fragment);
    }

    function renderServices() {
        if (!dom.services) return;

        const fragment = document.createDocumentFragment();
        content.services.forEach((service, index) => {
            const card = document.createElement("article");
            card.className = "service-card reveal";
            card.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;

            const header = document.createElement("div");
            header.className = "service-head";

            const serviceIndex = document.createElement("span");
            serviceIndex.className = "service-index";
            serviceIndex.textContent = String(index + 1).padStart(2, "0");

            if (service.icon) {
                const icon = document.createElement("img");
                icon.className = "service-icon";
                icon.src = service.icon;
                icon.alt = "";
                icon.loading = "lazy";
                icon.decoding = "async";
                header.append(icon);
            }

            header.append(serviceIndex);

            const title = document.createElement("h3");
            title.textContent = localize(service.title);

            const description = document.createElement("p");
            description.textContent = localize(service.description);

            const bullets = document.createElement("div");
            bullets.className = "service-tags";
            localize(service.tags || []).forEach((tag) => bullets.append(createTag(tag)));

            card.append(header, title, description, bullets);
            fragment.append(card);
        });

        dom.services.replaceChildren(fragment);
        observeReveals();
    }

    function renderWorkflow() {
        if (!dom.workflow) return;

        const fragment = document.createDocumentFragment();
        content.workflow.forEach((step, index) => {
            const item = document.createElement("article");
            item.className = "workflow-step reveal";
            item.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;

            const number = document.createElement("span");
            number.textContent = step.step;

            const title = document.createElement("h3");
            title.textContent = localize(step.title);

            const description = document.createElement("p");
            description.textContent = localize(step.description);

            item.append(number, title, description);
            fragment.append(item);
        });

        dom.workflow.replaceChildren(fragment);
        observeReveals();
    }

    function renderProjectFilters() {
        if (!dom.projectFilters) return;

        const fragment = document.createDocumentFragment();
        content.filters.forEach((filter) => {
            const button = document.createElement("button");
            button.className = "filter-button";
            button.type = "button";
            button.dataset.filter = filter.id;
            const count = filter.id === "all"
                ? content.projects.length
                : content.projects.filter((project) => project.category === filter.id).length;
            button.textContent = `${localize(filter.label)} (${count})`;
            button.classList.toggle("is-active", state.filter === filter.id);
            button.setAttribute("aria-pressed", String(state.filter === filter.id));
            fragment.append(button);
        });

        dom.projectFilters.replaceChildren(fragment);
    }

    function renderProjects() {
        if (!dom.projects) return;

        const filteredProjects = state.filter === "all"
            ? content.projects
            : content.projects.filter((project) => project.category === state.filter);

        const fragment = document.createDocumentFragment();

        if (filteredProjects.length === 0) {
            const empty = document.createElement("p");
            empty.className = "empty-state";
            empty.textContent = t("projects.empty");
            fragment.append(empty);
            dom.projects.replaceChildren(fragment);
            return;
        }

        filteredProjects.forEach((project, index) => {
            const card = document.createElement("article");
            card.className = "case-card reveal";
            card.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;

            const media = document.createElement("div");
            media.className = "case-media";

            const image = document.createElement("img");
            image.src = project.cover;
            image.alt = localize(project.title);
            image.loading = "lazy";
            image.decoding = "async";
            image.width = 1200;
            image.height = 750;
            media.append(image);

            const body = document.createElement("div");
            body.className = "case-content";

            const meta = document.createElement("div");
            meta.className = "case-meta";
            meta.textContent = `${getFilterLabel(project.category)} · ${project.year}`;

            const caseNumber = document.createElement("span");
            caseNumber.className = "case-number";
            caseNumber.textContent = String(index + 1).padStart(2, "0");

            const title = document.createElement("h3");
            title.textContent = localize(project.title);

            const description = document.createElement("p");
            description.textContent = localize(project.subtitle);

            const tags = document.createElement("div");
            tags.className = "project-tags";
            getProjectTags(project).forEach((tag) => tags.append(createTag(tag)));

            const button = document.createElement("button");
            button.type = "button";
            button.className = "project-action";
            button.dataset.projectId = project.id;
            button.textContent = t("projects.viewDetails");

            const contactLink = document.createElement("a");
            contactLink.className = "project-action project-action-soft";
            contactLink.href = "#contact";
            contactLink.textContent = t("projects.talkToMe");

            const actions = document.createElement("div");
            actions.className = "case-actions";
            actions.append(button, contactLink);

            body.append(caseNumber, meta, title, description, tags, actions);
            card.append(media, body);
            fragment.append(card);
        });

        dom.projects.replaceChildren(fragment);
        observeReveals();
    }

    function renderContact() {
        const message = encodeURIComponent(t("contact.whatsappMessage"));
        dom.whatsappLinks.forEach((link) => {
            link.href = `https://api.whatsapp.com/send?phone=${content.whatsappNumber}&text=${message}`;
        });

        dom.resumeLinks.forEach((link) => {
            link.href = content.resumeUrl;
        });
        if (!dom.contactList) return;

        const items = [
            { label: t("contact.email"), value: content.email, href: `mailto:${content.email}` },
            { label: t("contact.phone"), value: content.phone, href: `tel:${content.phone.replace(/\D/g, "")}` },
            { label: t("contact.location"), value: localize(content.location) }
        ];

        const fragment = document.createDocumentFragment();
        items.forEach((item) => {
            const wrapper = document.createElement("div");
            wrapper.className = "contact-item";

            const label = document.createElement("span");
            label.textContent = item.label;

            const value = item.href ? document.createElement("a") : document.createElement("strong");
            value.textContent = item.value;
            if (item.href) value.href = item.href;

            wrapper.append(label, value);
            fragment.append(wrapper);
        });

        dom.contactList.replaceChildren(fragment);
    }

    function renderFooter() {
        if (dom.footerSocials) {
            const links = content.socials.map((social) => {
                const link = document.createElement("a");
                link.href = social.url;
                link.target = "_blank";
                link.rel = "noopener";
                link.textContent = social.label;
                return link;
            });
            dom.footerSocials.replaceChildren(...links);
        }

        if (dom.footerCopy) {
            dom.footerCopy.textContent = t("footer.copyright").replace("{year}", new Date().getFullYear());
        }
    }

    function openProject(projectId) {
        const project = content.projects.find((item) => item.id === projectId);
        if (!project) return;

        const currentScrollY = window.scrollY;
        state.activeProject = project;
        state.activeImageIndex = 0;
        state.dialogScrollY = currentScrollY;
        renderDialog();
        lockPageScroll(currentScrollY);

        if (typeof dom.dialog.showModal === "function") dom.dialog.showModal();
        else dom.dialog.setAttribute("open", "");

        requestAnimationFrame(() => restoreScrollPosition(currentScrollY));
    }

    function closeProjectDialog() {
        if (dom.dialog?.open) dom.dialog.close();
        else unlockPageScroll();
    }

    function lockPageScroll(scrollY) {
        document.body.classList.add("dialog-open");
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
    }

    function unlockPageScroll() {
        if (!document.body.classList.contains("dialog-open")) return;
        const scrollY = state.dialogScrollY || Math.abs(parseInt(document.body.style.top, 10)) || 0;

        document.body.classList.remove("dialog-open");
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        restoreScrollPosition(scrollY);
        state.dialogScrollY = 0;
        updateScrollProgress();
    }

    function restoreScrollPosition(scrollY) {
        const previousBehavior = dom.html.style.scrollBehavior;
        dom.html.style.scrollBehavior = "auto";
        window.scrollTo(0, scrollY);
        dom.html.style.scrollBehavior = previousBehavior;
    }

    function renderDialog() {
        const project = state.activeProject;
        if (!project) return;

        const images = project.images.length ? project.images : [project.cover];
        const currentImage = images[state.activeImageIndex];

        dom.dialogImage.src = currentImage;
        dom.dialogImage.alt = `${localize(project.title)} - ${state.activeImageIndex + 1}`;
        dom.dialogTitle.textContent = localize(project.title);
        dom.dialogCategory.textContent = `${getFilterLabel(project.category)} · ${project.year}`;
        dom.dialogDescription.textContent = localize(project.description);
        dom.galleryCounter.textContent = t("projects.imageCounter")
            .replace("{current}", state.activeImageIndex + 1)
            .replace("{total}", images.length);

        dom.galleryPrev.disabled = images.length <= 1;
        dom.galleryNext.disabled = images.length <= 1;
        dom.dialogTags.replaceChildren(...getProjectTags(project).map(createTag));
        renderDialogLinks(project);
    }

    function renderDialogLinks(project) {
        const links = project.links.map((linkData) => {
            const link = document.createElement("a");
            link.className = linkData.type === "download" ? "button primary" : "button secondary";
            link.href = linkData.url;
            link.textContent = linkData.type === "download" ? t("projects.download") : t("projects.openProject");

            if (linkData.type === "download") link.download = "";
            else {
                link.target = "_blank";
                link.rel = "noopener";
            }

            return link;
        });

        if (!links.length) {
            const contactLink = document.createElement("a");
            contactLink.className = "button primary";
            contactLink.href = "#contact";
            contactLink.textContent = t("projects.talkSimilar");
            contactLink.addEventListener("click", closeProjectDialog);
            links.push(contactLink);
        }

        dom.dialogLinks.replaceChildren(...links);
    }

    function moveGallery(direction) {
        if (!state.activeProject) return;

        const total = state.activeProject.images.length;
        if (total <= 1) return;

        state.activeImageIndex = (state.activeImageIndex + direction + total) % total;
        renderDialog();
    }

    function updateScrollProgress() {
        if (!dom.scrollProgress) return;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        dom.scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    }

    function closeMenu() {
        document.body.classList.remove("menu-open");
        dom.menuToggle?.setAttribute("aria-expanded", "false");
        dom.menuToggle?.setAttribute("aria-label", t("menu.open"));
    }

    function bindCursor() {
        if (!dom.cursorDot || !dom.cursorRing || !window.matchMedia("(pointer: fine)").matches) {
            return;
        }

        let ringX = 0;
        let ringY = 0;
        let targetX = 0;
        let targetY = 0;
        let textTarget = null;
        let largeTarget = null;
        const largeCursorSelector = "h1, .section-heading h2";
        const textCursorSelector = ".section-kicker, .button, .path-link, .project-action, .nav-panel a, .floating-cta, .theme-button, .lang-button";
        const activeCursorSelector = "a, button, .path-card, .case-card, .skill-group, .service-card, .workflow-step, .tech-pill, .fact-card";

        document.body.classList.add("has-custom-cursor");

        window.addEventListener("pointermove", (event) => {
            const element = event.target instanceof Element ? event.target : null;
            largeTarget = element?.closest(largeCursorSelector) || null;
            textTarget = largeTarget ? null : element?.closest(textCursorSelector) || null;
            const isLarge = Boolean(largeTarget);
            const isActive = Boolean(textTarget || isLarge || element?.closest(activeCursorSelector));

            document.body.classList.add("has-cursor-position");
            document.body.classList.toggle("cursor-text", Boolean(textTarget));
            document.body.classList.toggle("cursor-large", isLarge);
            document.body.classList.toggle("cursor-active", isActive);
            targetX = event.clientX;
            targetY = event.clientY;
            dom.html.style.setProperty("--pointer-x", `${targetX}px`);
            dom.html.style.setProperty("--pointer-y", `${targetY}px`);
            dom.html.style.setProperty("--pointer-opacity", "1");
            dom.cursorDot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

            if (!textTarget) {
                const size = isLarge ? (largeTarget?.matches("h1") ? 148 : 118) : (isActive ? 74 : 48);
                setCursorSize(size, size);
            }
        }, { passive: true });

        window.addEventListener("pointerleave", () => {
            dom.html.style.setProperty("--pointer-opacity", "0");
            textTarget = null;
            largeTarget = null;
            setCursorSize(48, 48);
            document.body.classList.remove("has-cursor-position", "cursor-active", "cursor-text", "cursor-large");
        });

        const animate = () => {
            let nextX = targetX;
            let nextY = targetY;

            if (textTarget?.isConnected) {
                const rect = textTarget.getBoundingClientRect();
                const viewportWidth = window.visualViewport?.width || window.innerWidth;
                const width = Math.min(Math.max(rect.width + 34, 76), viewportWidth - 24);
                const height = Math.min(Math.max(rect.height + 24, 58), 190);
                setCursorSize(width, height);
                nextX = rect.left + rect.width / 2;
                nextY = rect.top + rect.height / 2;
            }

            ringX += (nextX - ringX) * 0.2;
            ringY += (nextY - ringY) * 0.2;
            dom.cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        function setCursorSize(width, height) {
            dom.cursorRing.style.width = `${width}px`;
            dom.cursorRing.style.height = `${height}px`;
            dom.cursorRing.style.marginLeft = `${width / -2}px`;
            dom.cursorRing.style.marginTop = `${height / -2}px`;
        }
    }

    function observeReveals() {
        document.querySelectorAll(".reveal:not([data-observed])").forEach((item) => {
            item.dataset.observed = "true";
            if (revealObserver) revealObserver.observe(item);
            else item.classList.add("is-visible");
        });
    }

    function showInitialReveals() {
        document.querySelectorAll(".hero .reveal").forEach((item) => {
            item.classList.add("is-visible");
        });
    }

    function observeNavigation() {
        if (!("IntersectionObserver" in window)) return;

        const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
        const sections = ["about", "paths", "services", "projects", "contact"]
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            });
        }, {
            rootMargin: "-45% 0px -45% 0px",
            threshold: 0.01
        });

        sections.forEach((section) => observer.observe(section));
    }

    function createTag(text) {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = text;
        return tag;
    }

    function getProjectTags(project) {
        if (Array.isArray(project.tags)) return project.tags;
        return project.tags?.[state.lang] || project.tags?.pt || [];
    }

    function getFilterLabel(category) {
        const filter = content.filters.find((item) => item.id === category);
        return filter ? localize(filter.label) : category;
    }

    function t(path) {
        return resolvePath(content.copy[state.lang], path) || "";
    }

    function resolvePath(source, path) {
        if (!source) return "";
        return path.split(".").reduce((value, key) => value?.[key], source);
    }

    function localize(value) {
        if (Array.isArray(value)) return value;
        if (value && typeof value === "object") return value[state.lang] || value.pt || value.en || "";
        return value;
    }
})();
