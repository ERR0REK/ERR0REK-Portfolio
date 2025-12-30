/**
 * main.js - Common logic for the portfolio
 * Contains: Clock, Language Switcher, Theme Toggle, Scroll to Top, Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- CLOCK ---
    function updateClock() {
        const timeElement = document.getElementById('current-time');
        if (!timeElement) return;

        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Europe/Warsaw'
        };
        const timeString = now.toLocaleTimeString('pl-PL', options);
        // Approximation of CEST/CET logic
        // Simplified check: offset -120 is UTC+2 (Summer time in PL), -60 is UTC+1 (Winter)
        const timezoneOffset = now.getTimezoneOffset();
        const isCEST = (timezoneOffset === -120);
        const timezoneAbbr = isCEST ? 'CEST' : 'CET';

        timeElement.innerText = `${timeString} ${timezoneAbbr}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // --- LANGUAGE DROPDOWN ---
    const dropbtn = document.querySelector('.dropbtn');
    const dropbtnMobile = document.getElementById('current-language'); // Handle both IDs if they differ
    const activeBtn = dropbtn || dropbtnMobile;
    const dropdownContent = document.querySelector('.dropdown-content');
    const langOptions = document.querySelectorAll('.dropdown-content a, .lang-option');

    if (activeBtn && dropdownContent) {
        let currentLang = localStorage.getItem('selectedLanguage') || 'pl';

        function updateDropbtnText(lang) {
            const langTextMap = { pl: 'PL', en: 'EN', cs: 'CS', sk: 'SK', de: 'DE' };
            activeBtn.innerHTML = `${langTextMap[lang] || 'PL'} <i class="fas fa-caret-down"></i>`;
        }
        updateDropbtnText(currentLang);

        langOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === currentLang);
        });

        activeBtn.addEventListener('click', (event) => {
            dropdownContent.classList.toggle('show');
            event.stopPropagation();
        });

        langOptions.forEach(option => {
            option.addEventListener('click', (event) => {
                event.preventDefault();
                const newLang = option.dataset.lang;
                if (newLang !== currentLang) {
                    currentLang = newLang;
                    localStorage.setItem('selectedLanguage', newLang);
                    langOptions.forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');

                    if (typeof translatePage === 'function') {
                        translatePage(newLang);
                    } else if (window.translatePage) {
                        // In case it's in global scope but not yet detected
                        window.translatePage(newLang);
                    }

                    updateDropbtnText(newLang);
                    dropdownContent.classList.remove('show');

                    // Trigger custom event for other scripts to update (e.g. dynamic text)
                    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
                }
            });
        });

        window.addEventListener('click', (event) => {
            if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    // --- THEME TOGGLE ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'cyan';
    htmlElement.setAttribute('data-theme', savedTheme);
    if (themeToggleBtn) {
        themeToggleBtn.textContent = savedTheme === 'cyan' ? '🟣' : '🔵';

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'cyan' ? 'purple' : 'cyan';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggleBtn.textContent = newTheme === 'cyan' ? '🟣' : '🔵';
        });
    }

    // --- SCROLL TO TOP ---
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (scrollToTopBtn) {
        let isScrolling = false;
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 300) {
                        scrollToTopBtn.classList.add('show');
                    } else {
                        scrollToTopBtn.classList.remove('show');
                    }
                    isScrolling = false;
                });
                isScrolling = true;
            }
        }, { passive: true });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- SCROLL ANIMATIONS (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-scroll');
                // For project cards that use a different class/style
                if (entry.target.classList.contains('reveal')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe common elements
    const animatedItems = document.querySelectorAll('.info-item, .contact-section, .timeline-item, .project-card.reveal');
    animatedItems.forEach(item => {
        // Setup initial state for project cards if not set in CSS
        if (item.classList.contains('reveal')) {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
        observer.observe(item);
    });

    // --- Page Transitions ---
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 10);

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && link.target !== '_blank') {
                e.preventDefault();
                document.body.classList.remove('fade-in');
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    // --- MOBILE MENU TOGGLE ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });

        // Close menu when clicking links
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            });
        });
    }

    // --- CUSTOM CURSOR ---
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            // Dot follows immediately
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';

            // Circle follows via CSS transition (handled by styles.css)
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const clickables = document.querySelectorAll('a, button, .project-card, .gallery-folder');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
                cursorDot.classList.add('hovered'); // Optional: hide dot or scale it
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
                cursorDot.classList.remove('hovered');
            });
        });
    }

    /* --- DISCORD STATUS (Lanyard API) - REVERTED BY USER ---
    const discordWidget = document.getElementById('discord-status-widget');
    const discordId = '687701665771814939'; // User Provided ID

    if (discordWidget && discordId) {
        const statusText = discordWidget.querySelector('.discord-status-text');
        const avatar = discordWidget.querySelector('.discord-avatar');
        const indicator = discordWidget.querySelector('.discord-status-indicator');

        function updateWidgetUI(username, status, activity, avatarId, discriminator) {
            // Update Avatar
            const avatarUrl = avatarId
                ? `https://cdn.discordapp.com/avatars/${discordId}/${avatarId}.png`
                : `https://cdn.discordapp.com/embed/avatars/${parseInt(discriminator) % 5}.png`;

            if (avatar) {
                avatar.src = avatarUrl;
                avatar.style.display = 'block';
            }

            // Update Status Indicator
            if (indicator) {
                indicator.className = 'discord-status-indicator'; // Reset
                indicator.classList.add(`status-${status}`);
            }

            // Update Text
            if (statusText) {
                if (activity) {
                    statusText.textContent = `Playing: ${activity.name}`;
                } else {
                    const statusMap = {
                        online: 'Online',
                        idle: 'Idle',
                        dnd: 'Do Not Disturb',
                        offline: 'Offline'
                    };
                    statusText.textContent = statusMap[status] || 'Offline';
                }
            }
        }

        // 1. Try to load from Cache first
        const cachedData = localStorage.getItem('discordData');
        if (cachedData) {
            try {
                const parsed = JSON.parse(cachedData);
                updateWidgetUI(parsed.username, parsed.status, parsed.activity, parsed.avatarId, parsed.discriminator);
            } catch (e) { console.error("Cache parse error", e); }
        }

        async function fetchDiscordStatus() {
            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
                const data = await response.json();

                if (data.success) {
                    const { discord_user, discord_status, activities } = data.data;
                    const game = activities.find(a => a.type === 0);

                    // Update UI
                    updateWidgetUI(discord_user.username, discord_status, game, discord_user.avatar, discord_user.discriminator);

                    // Save to Cache
                    const cachePayload = {
                        username: discord_user.username,
                        status: discord_status,
                        activity: game,
                        avatarId: discord_user.avatar,
                        discriminator: discord_user.discriminator,
                        timestamp: Date.now()
                    };
                    localStorage.setItem('discordData', JSON.stringify(cachePayload));
                }
            } catch (error) {
                console.error('Error fetching Discord status:', error);
                // If fetch fails and no cache, maybe show error? But we have cache logic above.
            }
        }

        // Initial fetch and interval
        fetchDiscordStatus();
        setInterval(fetchDiscordStatus, 30000); // Update every 30s
    }
    */

    // --- PHASE 8: CONTENT PROTECTION ---
    // Disable right-click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Disable keyboard shortcuts for inspecting
    document.addEventListener('keydown', (e) => {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
        }
        // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+U (View Source)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault();
        }
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
        }
    });

});
