(() => {
    "use strict";

    const content = window.PORTFOLIO_CONTENT;
    const translations = window.DESIGN_COPY;
    if (!content || !translations) return;

    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
    const root = document.documentElement;
    const storage = {
        get(key) { try { return localStorage.getItem(key); } catch { return null; } },
        set(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage may be restricted. */ } }
    };
    let language = storage.get("portfolio-language") === "en" ? "en" : "pt";
    let activeFilter = "all";
    let expanded = false;
    let currentProject = null;
    let galleryIndex = 0;
    let projectTrigger = null;
    let backdropPointerDown = false;
    let feedbackTimer;
    let feedbackKey = "";

    const projectOrder = ["encontrando-fretes", "smartrent", "site-santa-casa", "ninestacks", "truhail", "multicalculo", "multicalculo-winbot", "prontuarios-santa-casa", "cms-santa-casa", "banco-talentos", "eletrove"];
    const projects = [...content.projects].sort((a, b) => {
        const position = id => projectOrder.includes(id) ? projectOrder.indexOf(id) : projectOrder.length;
        return position(a.id) - position(b.id);
    });
    const coverSizes = {
        "encontrando-fretes": [1876, 923], smartrent: [1265, 712], "site-santa-casa": [1869, 917],
        ninestacks: [1265, 712], truhail: [1272, 716], multicalculo: [1280, 720],
        "multicalculo-winbot": [1265, 712], "prontuarios-santa-casa": [1253, 694],
        "cms-santa-casa": [1874, 926], "banco-talentos": [1875, 638], eletrove: [1920, 1080]
    };
    const filterKeys = { all: "filterAll", sites: "filterSites", systems: "filterSystems", game: "filterGame" };
    const typeKeys = { site: "typeSite", system: "typeSystem", cms: "typeCms", maintenance: "typeMaintenance", integration: "typeIntegration" };
    const t = key => translations[language][key] ?? translations.pt[key] ?? key;
    const localized = value => value && typeof value === "object" && !Array.isArray(value) ? (value[language] ?? value.pt ?? "") : (value ?? "");
    const category = project => t(filterKeys[project.category] || "filterSystems");
    const el = (tag, className, text) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    };
    const arrow = () => {
        const node = el("span", "link-arrow", "↗");
        node.setAttribute("aria-hidden", "true");
        return node;
    };
    const validLink = link => {
        if (!link || typeof link.url !== "string") return false;
        if (link.type === "download") return /^\.\/assets\/files\/[^?#]+$/i.test(link.url);
        try { return ["http:", "https:"].includes(new URL(link.url).protocol); } catch { return false; }
    };
    const externalAnchor = (url, label, className) => {
        const node = el("a", className, label);
        node.href = url;
        node.target = "_blank";
        node.rel = "noopener noreferrer";
        node.append(arrow());
        return node;
    };

    function updateTheme() {
        const dark = root.dataset.theme === "dark";
        root.style.colorScheme = dark ? "dark" : "light";
        const themeColor = $('meta[name="theme-color"]');
        const background = getComputedStyle(root).getPropertyValue("--bg").trim();
        if (themeColor && background) themeColor.content = background;
        $$('[data-theme-toggle]').forEach(button => {
            button.setAttribute("aria-label", t(dark ? "themeLight" : "themeDark"));
            button.setAttribute("title", t(dark ? "themeLight" : "themeDark"));
        });
    }

    function setMenu(open, restoreFocus = false) {
        document.body.classList.toggle("menu-open", open);
        const toggle = $('[data-menu-toggle]');
        if (toggle) {
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", t(open ? "menuClose" : "menu"));
            if (restoreFocus) toggle.focus({ preventScroll: true });
        }
    }

    function renderFilters() {
        const container = $('[data-project-filters]');
        if (!container) return;
        container.setAttribute("aria-label", t("filterProjects"));
        const filters = ["all", ...Object.keys(filterKeys).filter(key => key !== "all" && projects.some(project => project.category === key))];
        if (!container.children.length) filters.forEach(filter => {
            const button = el("button", "filter-button");
            button.type = "button";
            button.dataset.filter = filter;
            button.append(el("span", "filter-label"), el("span", "filter-count"));
            container.append(button);
        });
        $$('[data-filter]', container).forEach(button => {
            const filter = button.dataset.filter;
            const count = filter === "all" ? projects.length : projects.filter(project => project.category === filter).length;
            $('.filter-label', button).textContent = t(filterKeys[filter]);
            $('.filter-count', button).textContent = String(count).padStart(2, "0");
            button.setAttribute("aria-pressed", String(filter === activeFilter));
            button.classList.toggle("is-active", filter === activeFilter);
        });
    }

    function projectCard(project) {
        const card = el("article", "project-card");
        card.dataset.reveal = "";
        const open = el("button", "project-open");
        open.type = "button";
        open.dataset.project = project.id;
        open.setAttribute("aria-label", `${t("viewProject")}: ${localized(project.title)}`);
        open.setAttribute("aria-haspopup", "dialog");
        const visual = el("span", "project-visual");
        visual.dataset.projectTone = project.id;
        const browser = el("span", "project-browser");
        browser.setAttribute("aria-hidden", "true");
        const dots = el("span", "browser-dots");
        for (let index = 0; index < 3; index += 1) dots.append(el("i"));
        const publicLink = project.links.find(link => link.type === "external" && validLink(link));
        const url = publicLink ? new URL(publicLink.url).hostname.replace(/^www\./, "") : localized(project.title);
        browser.append(dots, el("span", "browser-url", url));
        const image = el("img", "project-image");
        image.src = project.cover;
        image.alt = localized(project.title);
        image.loading = "lazy";
        image.decoding = "async";
        const size = coverSizes[project.id];
        if (size) [image.width, image.height] = size;
        const view = el("span", "project-view", t("viewProject"));
        view.setAttribute("aria-hidden", "true");
        view.append(arrow());
        visual.append(browser, image, view);
        open.append(visual);
        const info = el("div", "project-info");
        const number = el("span", "project-number", String(projects.indexOf(project) + 1).padStart(2, "0"));
        number.setAttribute("aria-hidden", "true");
        const projectArrow = el("span", "project-arrow", "↗");
        projectArrow.setAttribute("aria-hidden", "true");
        info.append(number, el("h3", "", localized(project.title)), projectArrow, el("p", "", localized(project.subtitle)));
        const meta = el("div", "project-meta");
        meta.append(el("span", "project-category", category(project)), el("span", "project-year", project.year));
        card.append(open, info, meta);
        return card;
    }

    function renderProjects() {
        const container = $('[data-projects]');
        if (!container) return;
        const filtered = activeFilter === "all" ? projects : projects.filter(project => project.category === activeFilter);
        const visible = expanded ? filtered : filtered.slice(0, 4);
        container.replaceChildren(...visible.map(projectCard));
        const count = $('[data-project-count]');
        if (count) count.textContent = `${String(visible.length).padStart(2, "0")} / ${String(filtered.length).padStart(2, "0")}`;
        const more = $('[data-project-more]');
        if (more) {
            more.hidden = filtered.length <= 4;
            more.setAttribute("aria-expanded", String(expanded));
            const label = $('[data-copy]', more);
            if (label) {
                label.dataset.copy = expanded ? "projectsLess" : "projectsMore";
                label.textContent = t(label.dataset.copy);
            } else more.textContent = t(expanded ? "projectsLess" : "projectsMore");
        }
        renderFilters();
    }

    function renderRecentHighlights() {
        const container = $('[data-recent-highlights]');
        if (!container) return;
        const highlights = Array.isArray(content.recentHighlights) ? content.recentHighlights : [];
        container.replaceChildren(...highlights.map((item, index) => {
            const article = el("article", "recent-item");
            article.dataset.reveal = "";
            const number = el("span", "recent-number mono", String(index + 1).padStart(2, "0"));
            number.setAttribute("aria-hidden", "true");
            const main = el("div", "recent-main");
            main.append(el("h3", "", localized(item.title)), el("p", "", localized(item.description)));
            if (item.role) main.append(el("p", "recent-role", localized(item.role)));
            const stack = el("div", "recent-stack");
            (item.stack || []).forEach(technology => stack.append(el("span", "", technology)));
            main.append(stack);
            article.append(number, main);
            return article;
        }));
    }

    function renderExperience() {
        const experience = $('[data-experience]');
        if (experience) experience.replaceChildren(...content.experience.map(item => {
            const row = el("article", "experience-row");
            row.dataset.reveal = "";
            const main = el("div", "experience-main");
            main.append(el("h3", "", item.company), el("p", "experience-role", localized(item.role)));
            if (item.employment) main.append(el("p", "experience-employment", localized(item.employment)));
            main.append(el("p", "experience-description", localized(item.description)));
            const tags = el("div", "experience-tags");
            localized(item.tags).forEach(tag => tags.append(el("span", "", tag)));
            main.append(tags);
            row.append(el("p", "experience-period", localized(item.period)), main);
            return row;
        }));
        const education = $('[data-education]');
        if (education) education.replaceChildren(...content.education.map(item => {
            const row = el("article", "education-item");
            row.append(el("h3", "", localized(item.title)), el("p", "education-place", item.place), el("span", "education-period", localized(item.period)));
            return row;
        }));
        const stack = $('[data-stack]');
        if (stack) stack.replaceChildren(...content.stackMap.map(item => {
            const group = el("div", "stack-group");
            group.append(el("h3", "", localized(item.label)));
            const items = el("div", "stack-items");
            item.items.forEach(tech => items.append(el("span", "", tech)));
            group.append(items);
            return group;
        }));
    }

    function renderContact() {
        $$('[data-socials]').forEach(container => container.replaceChildren(...content.socials
            .filter(social => validLink({ type: "external", url: social.url }))
            .map(social => externalAnchor(social.url, social.label, "social-link"))));
        $$('[data-resume-link]').forEach(link => {
            const resumeUrl = language === "en" && content.resumeUrlEn ? content.resumeUrlEn : content.resumeUrl;
            link.href = resumeUrl;
            link.setAttribute("download", resumeUrl.split("/").pop());
        });
        $$('[data-email-link]').forEach(link => {
            link.href = `mailto:${content.email}`;
            if (!link.hasAttribute("data-copy") && !link.querySelector('[data-copy]')) link.textContent = content.email;
        });
        $$('[data-whatsapp-link]').forEach(link => {
            link.href = `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(t("whatsappGreeting"))}`;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });
        $$('[data-profile-image]').forEach(image => {
            if (content.profileImageWidth && content.profileImageHeight) {
                image.width = content.profileImageWidth;
                image.height = content.profileImageHeight;
            }
            image.onload = () => { image.width = image.naturalWidth; image.height = image.naturalHeight; };
            if (image.getAttribute("src") !== content.profileImage) image.src = content.profileImage;
            if (image.complete && image.naturalWidth) {
                image.width = image.naturalWidth;
                image.height = image.naturalHeight;
            }
        });
        if (feedbackKey) {
            const feedback = $('[data-copy-feedback]');
            if (feedback) feedback.textContent = t(feedbackKey);
        }
    }

    function galleryImages() {
        return currentProject ? (currentProject.images.length ? currentProject.images : [currentProject.cover]) : [];
    }

    function renderGallery() {
        if (!currentProject) return;
        const images = galleryImages();
        const target = $('[data-dialog-image]');
        if (target) {
            const image = target.tagName === "IMG" ? target : ($('img', target) || target.appendChild(el("img")));
            image.onload = () => { image.width = image.naturalWidth; image.height = image.naturalHeight; };
            image.src = images[galleryIndex];
            image.alt = `${localized(currentProject.title)} — ${t("projectImage")} ${galleryIndex + 1} ${t("imageOf")} ${images.length}`;
            image.decoding = "async";
        }
        const counter = $('[data-gallery-counter]');
        if (counter) counter.textContent = `${String(galleryIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
        $$('[data-gallery-prev], [data-gallery-next]').forEach(button => {
            button.hidden = images.length <= 1;
            button.disabled = images.length <= 1;
        });
    }

    function renderDialog() {
        if (!currentProject) return;
        const set = (selector, value) => { const node = $(selector); if (node) node.textContent = value; };
        set('[data-dialog-title]', localized(currentProject.title));
        set('[data-dialog-category]', `${category(currentProject)} / ${currentProject.year}`);
        set('[data-dialog-description]', localized(currentProject.description));
        const tags = $('[data-dialog-tags]');
        if (tags) tags.replaceChildren(...localized(currentProject.tags).map(tag => el("span", "", tag)));
        const links = $('[data-dialog-links]');
        if (links) links.replaceChildren(...currentProject.links.filter(validLink).map(link => {
            if (link.type === "download") {
                const anchor = el("a", "button button-primary", t("downloadLink"));
                anchor.href = link.url;
                anchor.download = "";
                anchor.append(arrow());
                return anchor;
            }
            return externalAnchor(link.url, t("externalLink"), "button button-primary");
        }));
        renderGallery();
    }

    function openProject(id, trigger) {
        const dialog = $('[data-project-dialog]');
        const project = projects.find(item => item.id === id);
        if (!dialog || !project) return;
        currentProject = project;
        projectTrigger = trigger;
        galleryIndex = 0;
        renderDialog();
        document.body.classList.add("dialog-open");
        dialog.showModal();
        $('[data-dialog-close]', dialog)?.focus({ preventScroll: true });
    }

    function applyLanguage(nextLanguage) {
        language = nextLanguage;
        root.lang = language === "pt" ? "pt-BR" : "en";
        root.dataset.language = language;
        storage.set("portfolio-language", language);
        $$('[data-copy]').forEach(node => {
            const key = node.dataset.copy;
            if (translations[language][key] !== undefined) node.textContent = t(key);
        });
        $$('[data-copy-label]').forEach(node => node.setAttribute("aria-label", t(node.dataset.copyLabel)));
        $$('[data-lang]').forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
        $('[data-menu]')?.setAttribute("aria-label", t("navigationLabel"));
        $('.language-switch')?.setAttribute("aria-label", t("languageLabel"));
        document.title = t("documentTitle");
        const description = $('meta[name="description"]');
        if (description) description.content = t("metaDescription");
        renderProjects();
        renderRecentHighlights();
        renderExperience();
        renderContact();
        updateTheme();
        setMenu(document.body.classList.contains("menu-open"));
        renderDialog();
        document.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language } }));
    }

    function updateClock() {
        const time = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date());
        $$('[data-clock]').forEach(node => { node.textContent = time; });
    }

    $$('[data-lang]').forEach(button => button.addEventListener("click", () => {
        if (["pt", "en"].includes(button.dataset.lang) && language !== button.dataset.lang) applyLanguage(button.dataset.lang);
    }));
    $$('[data-theme-toggle]').forEach(button => button.addEventListener("click", () => {
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
        storage.set("portfolio-theme", root.dataset.theme);
        updateTheme();
    }));
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    systemTheme.addEventListener("change", event => {
        if (!storage.get("portfolio-theme")) {
            root.dataset.theme = event.matches ? "dark" : "light";
            updateTheme();
        }
    });
    $('[data-menu-toggle]')?.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
    $('[data-menu]')?.addEventListener("click", event => { if (event.target.closest("a")) setMenu(false); });
    document.addEventListener("pointerdown", event => {
        if (document.body.classList.contains("menu-open") && !event.target.closest('[data-menu], [data-menu-toggle]')) setMenu(false);
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && document.body.classList.contains("menu-open")) setMenu(false, true);
    });
    window.matchMedia("(min-width: 761px)").addEventListener("change", event => { if (event.matches) setMenu(false); });

    $('[data-project-filters]')?.addEventListener("click", event => {
        const button = event.target.closest('[data-filter]');
        if (!button || !filterKeys[button.dataset.filter]) return;
        activeFilter = button.dataset.filter;
        expanded = false;
        renderProjects();
    });
    $('[data-project-more]')?.addEventListener("click", () => {
        expanded = !expanded;
        const container = $('[data-projects]');
        const needsScroll = !expanded && container && container.getBoundingClientRect().top < 0;
        renderProjects();
        if (needsScroll) $('[data-project-filters]')?.scrollIntoView({ block: "start", behavior: "instant" });
    });
    $('[data-projects]')?.addEventListener("click", event => {
        const button = event.target.closest('[data-project]');
        if (button) openProject(button.dataset.project, button);
    });

    const dialog = $('[data-project-dialog]');
    $('[data-dialog-close]')?.addEventListener("click", () => dialog?.close());
    dialog?.addEventListener("pointerdown", event => { backdropPointerDown = event.target === dialog; });
    dialog?.addEventListener("pointerup", event => {
        if (backdropPointerDown && event.target === dialog) {
            const rect = dialog.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
        }
        backdropPointerDown = false;
    });
    dialog?.addEventListener("close", () => {
        document.body.classList.remove("dialog-open");
        const id = currentProject?.id;
        currentProject = null;
        const target = projectTrigger?.isConnected ? projectTrigger : $$('[data-project]').find(button => button.dataset.project === id);
        target?.focus({ preventScroll: true });
        projectTrigger = null;
    });
    function stepGallery(direction) {
        const count = galleryImages().length;
        if (count <= 1) return;
        galleryIndex = (galleryIndex + direction + count) % count;
        renderGallery();
    }
    $('[data-gallery-prev]')?.addEventListener("click", () => stepGallery(-1));
    $('[data-gallery-next]')?.addEventListener("click", () => stepGallery(1));
    dialog?.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            stepGallery(event.key === "ArrowLeft" ? -1 : 1);
        }
    });

    $('[data-copy-email]')?.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(content.email); feedbackKey = "copied"; }
        catch { feedbackKey = "copyFallback"; window.location.href = `mailto:${content.email}`; }
        const feedback = $('[data-copy-feedback]');
        if (feedback) feedback.textContent = t(feedbackKey);
        clearTimeout(feedbackTimer);
        feedbackTimer = setTimeout(() => { feedbackKey = ""; if (feedback) feedback.textContent = ""; }, 4500);
    });
    $('[data-contact-form]')?.addEventListener("submit", event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.reportValidity()) return;
        const data = new FormData(form);
        const message = [
            t("formGreeting"), "",
            `${t("formNameLabel")}: ${String(data.get("name") || "").trim()}`,
            `${t("formEmailLabel")}: ${String(data.get("email") || "").trim()}`,
            `${t("formTypeLabel")}: ${t(typeKeys[data.get("type")] || "typeSite")}`,
            "", `${t("formMessageLabel")}:`, String(data.get("message") || "").trim()
        ].join("\n");
        window.open(`https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });

    $$('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });
    applyLanguage(language);
    updateClock();
    setInterval(updateClock, 60_000);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) updateClock(); });

    if ("IntersectionObserver" in window) {
        const navLinks = $$('[data-menu] a[href^="#"]');
        const sections = navLinks.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
        const visibleSections = new Map();
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => visibleSections.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
            const active = [...visibleSections].filter(([, ratio]) => ratio > 0).sort((a, b) => b[1] - a[1])[0]?.[0];
            navLinks.forEach(link => {
                const isActive = link.hash === `#${active}`;
                link.classList.toggle("is-active", isActive);
                if (isActive) link.setAttribute("aria-current", "location");
                else link.removeAttribute("aria-current");
            });
        }, { rootMargin: "-15% 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] });
        sections.forEach(section => observer.observe(section));
    }
})();
