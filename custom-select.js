(() => {
    "use strict";

    const normalize = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
    document.querySelectorAll("[data-custom-select]").forEach((field, index) => {
        const native = field.querySelector("select");
        const ui = field.querySelector(".select-ui");
        const trigger = field.querySelector("[data-select-trigger]");
        const value = field.querySelector("[data-select-value]");
        const popover = field.querySelector("[data-select-popover]");
        const list = field.querySelector("[data-select-options]");
        const error = field.querySelector(".select-error");
        if (!native || !ui || !trigger || !value || !popover || !list) return;

        const id = native.id || `custom-select-${index}`;
        let choices = [];
        let active = -1;
        let opened = false;
        let search = "";
        let searchTimer;
        let positionFrame;
        trigger.id = `${id}-trigger`;

        function clearError() {
            trigger.removeAttribute("aria-invalid");
            trigger.removeAttribute("aria-describedby");
            if (error) error.hidden = true;
        }

        function position() {
            if (!opened) return;
            const rect = trigger.getBoundingClientRect();
            const viewport = window.visualViewport;
            const viewportTop = viewport?.offsetTop || 0;
            const top = Math.max(viewportTop, document.querySelector("[data-header]")?.getBoundingClientRect().bottom || 0);
            const bottom = viewportTop + (viewport?.height || window.innerHeight);
            const above = Math.max(0, rect.top - top - 16);
            const below = Math.max(0, bottom - rect.bottom - 16);
            const height = Math.min(330, popover.scrollHeight + 2);
            const upward = below < height && above > below;
            ui.dataset.placement = upward ? "top" : "bottom";
            ui.style.setProperty("--select-menu-max-height", `${Math.min(330, upward ? above : below)}px`);
        }

        function schedulePosition() {
            if (!opened || positionFrame) return;
            positionFrame = requestAnimationFrame(() => { positionFrame = 0; position(); });
        }

        function activate(next) {
            active = Math.max(0, Math.min(next, choices.length - 1));
            Array.from(list.children).forEach((option, optionIndex) => option.classList.toggle("is-active", optionIndex === active));
            const option = list.children[active];
            if (!opened || !option) return;
            trigger.setAttribute("aria-activedescendant", option.id);
            const optionRect = option.getBoundingClientRect();
            const menuRect = popover.getBoundingClientRect();
            if (optionRect.top < menuRect.top) popover.scrollTop -= menuRect.top - optionRect.top;
            else if (optionRect.bottom > menuRect.bottom) popover.scrollTop += optionRect.bottom - menuRect.bottom;
        }

        function close() {
            opened = false;
            popover.hidden = true;
            field.classList.remove("is-open");
            trigger.setAttribute("aria-expanded", "false");
            trigger.removeAttribute("aria-activedescendant");
            search = "";
            clearTimeout(searchTimer);
        }

        function sync() {
            value.textContent = native.selectedOptions[0]?.textContent || "";
            field.classList.toggle("has-value", Boolean(native.value));
            trigger.disabled = native.disabled;
            Array.from(list.children).forEach((option, optionIndex) => option.setAttribute("aria-selected", String(choices[optionIndex].value === native.value)));
            if (native.validity.valid) clearError();
        }

        function render() {
            choices = Array.from(native.options).filter(option => option.value && !option.disabled);
            list.replaceChildren(...choices.map((choice, optionIndex) => {
                const option = document.createElement("div");
                option.className = "select-option";
                option.id = `${id}-option-${optionIndex}`;
                option.dataset.index = String(optionIndex);
                option.dataset.value = choice.value;
                option.setAttribute("role", "option");
                const label = document.createElement("span");
                label.className = "select-option-label";
                label.textContent = choice.textContent;
                const check = document.createElement("span");
                check.className = "select-check";
                check.setAttribute("aria-hidden", "true");
                check.textContent = "✓";
                option.append(label, check);
                return option;
            }));
            sync();
        }

        function open(direction = 1) {
            if (native.disabled || !choices.length) return;
            opened = true;
            popover.hidden = false;
            field.classList.add("is-open");
            trigger.setAttribute("aria-expanded", "true");
            position();
            const selected = choices.findIndex(option => option.value === native.value);
            activate(selected >= 0 ? selected : direction < 0 ? choices.length - 1 : 0);
        }

        function choose(optionIndex) {
            const choice = choices[optionIndex];
            if (!choice) return;
            const changed = native.value !== choice.value;
            native.value = choice.value;
            close();
            sync();
            if (changed) {
                native.dispatchEvent(new Event("input", { bubbles: true }));
                native.dispatchEvent(new Event("change", { bubbles: true }));
            }
        }

        trigger.addEventListener("click", () => opened ? close() : open());
        trigger.addEventListener("keydown", event => {
            if (event.ctrlKey || event.metaKey || event.altKey) return;
            const key = event.key;
            if (key === "Tab") { if (opened) choose(active); return; }
            if (key === "Escape") { if (opened) { event.preventDefault(); close(); } return; }
            if (key === "ArrowDown" || key === "ArrowUp") {
                event.preventDefault();
                const direction = key === "ArrowDown" ? 1 : -1;
                if (opened) activate(active + direction); else open(direction);
            } else if (key === "Home" || key === "End") {
                event.preventDefault();
                if (!opened) open();
                activate(key === "Home" ? 0 : choices.length - 1);
            } else if (key === "Enter" || (key === " " && !search)) {
                event.preventDefault();
                if (opened) choose(active); else open();
            } else if (key.length === 1) {
                event.preventDefault();
                const wasOpen = opened;
                if (!opened) open();
                clearTimeout(searchTimer);
                search += normalize(key);
                const query = [...search].every(character => character === search[0]) ? search[0] : search;
                const start = query.length === 1 && (wasOpen || native.value) ? active + 1 : active;
                for (let offset = 0; offset < choices.length; offset += 1) {
                    const match = (start + offset) % choices.length;
                    if (normalize(choices[match].textContent.trim()).startsWith(query)) { activate(match); break; }
                }
                searchTimer = setTimeout(() => { search = ""; }, 700);
            }
        });
        popover.addEventListener("pointerdown", event => event.preventDefault());
        list.addEventListener("pointermove", event => {
            const option = event.target.closest(".select-option");
            if (option && Number(option.dataset.index) !== active) activate(Number(option.dataset.index));
        });
        list.addEventListener("click", event => {
            const option = event.target.closest(".select-option");
            if (option) { choose(Number(option.dataset.index)); trigger.focus({ preventScroll: true }); }
        });
        document.addEventListener("pointerdown", event => { if (opened && !field.contains(event.target)) close(); });
        field.addEventListener("focusout", event => { if (!field.contains(event.relatedTarget)) close(); });
        native.addEventListener("change", () => { close(); sync(); });
        native.addEventListener("invalid", event => {
            event.preventDefault();
            close();
            trigger.setAttribute("aria-invalid", "true");
            if (error) { error.hidden = false; trigger.setAttribute("aria-describedby", error.id); }
            const firstInvalid = Array.from(native.form?.elements || [native]).find(control => control.willValidate && !control.validity.valid);
            if (firstInvalid === native) trigger.focus();
        });
        native.form?.addEventListener("reset", () => setTimeout(() => { close(); clearError(); sync(); }, 0));
        document.addEventListener("portfolio:languagechange", () => { close(); render(); });
        window.addEventListener("resize", schedulePosition, { passive: true });
        window.addEventListener("scroll", schedulePosition, { capture: true, passive: true });
        window.visualViewport?.addEventListener("resize", schedulePosition, { passive: true });

        render();
        native.hidden = true;
        native.tabIndex = -1;
        native.setAttribute("aria-hidden", "true");
        ui.hidden = false;
        const label = field.querySelector("label");
        if (label) label.htmlFor = trigger.id;
    });
})();
