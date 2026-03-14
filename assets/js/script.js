/**
 * Ahmed Elhag Portfolio - Multi-language Logic Engine
 */

let currentLang = localStorage.getItem('portfolio_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof portfolioData !== 'undefined') {
        initLanguage();
        renderContent();
    }
    setupNavigation();
    setupLanguageToggle();
});

function initLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateLangToggleButton();
}

function setupLanguageToggle() {
    const langBtn = document.getElementById('lang-toggle');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            if (window.PreloaderManager) window.PreloaderManager.show();

            setTimeout(() => {
                currentLang = currentLang === 'en' ? 'ar' : 'en';
                localStorage.setItem('portfolio_lang', currentLang);
                
                initLanguage();
                renderContent();
                
                if (window.PreloaderManager) window.PreloaderManager.hide(100);
            }, 500); 
        });
    }
}

function updateLangToggleButton() {
    // Icon-only mode, no text update needed.
}

function renderContent() {
    const data = portfolioData[currentLang];
    
    // Render Profile Info
    document.getElementById('profile-name').innerText = data.profile.name;
    document.getElementById('profile-avatar').src = data.profile.avatar;
    document.getElementById('profile-title').innerText = data.profile.title;
    
    // Contact Info Labels & Values
    document.getElementById('label-location').innerText = data.profile.locationLabel;
    const linkedinLink = document.getElementById('contact-location');
    linkedinLink.innerText = data.profile.location;
    linkedinLink.href = data.profile.linkedin;

    document.getElementById('label-email').innerText = data.profile.emailLabel;
    document.getElementById('contact-email').innerText = data.profile.email || "—";

    const socialContainer = document.getElementById('social-links');
    socialContainer.innerHTML = data.profile.socials.map(s => `
        <a href="${s.link}" target="_blank" class="text-[#a8a8a8] text-base md:text-lg hover:text-[#3b82f6] transition-all hover:scale-110"><i class="${s.icon}"></i></a>
    `).join('');

    // Update Nav
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const target = link.getAttribute('data-target');
        if (data.nav[target]) {
            link.innerText = data.nav[target];
        }
    });

    // Render About
    document.getElementById('about-title').innerText = data.about.title;
    const aboutText = document.getElementById('about-description');
    aboutText.innerHTML = data.about.description.map(text => `<p>${text}</p>`).join('');

    document.getElementById('services-title').innerText = data.about.servicesTitle;
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = data.about.services.map(s => `
        <div class="bg-gradient-to-br from-[#2b2b2c] to-[#121212] p-6 md:p-8 rounded-[20px] border border-[#383838] shadow-xl flex items-start gap-4 md:gap-5 hover:border-[#3b82f6]/30 transition-colors group">
            <div class="w-10 h-10 md:w-12 md:h-12 bg-[#383838] flex items-center justify-center rounded-xl md:rounded-2xl border border-[#383838] shadow-xl text-[#3b82f6] text-lg md:text-xl shrink-0 group-hover:scale-110 transition-transform">
                <i class="${s.icon}"></i>
            </div>
            <div>
                <h4 class="text-white font-bold mb-1 md:mb-2 uppercase text-[10px] md:text-xs tracking-widest">${s.title}</h4>
                <p class="text-[11px] md:text-[12px] text-[#a8a8a8] leading-relaxed">${s.description}</p>
            </div>
        </div>
    `).join('');

    // Render Resume
    document.getElementById('resume-title').innerText = data.resume.title;
    document.getElementById('exp-header-title').innerText = data.resume.experienceTitle;
    document.getElementById('edu-header-title').innerText = data.resume.educationTitle;
    document.getElementById('skills-header-title').innerText = data.resume.skillsTitle;

    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = data.resume.experience.map(e => `
        <div class="relative ${currentLang === 'ar' ? 'pr-8 md:pr-10' : 'pl-8 md:pl-10'} pb-8 md:pb-10 last:pb-0">
            <div class="absolute ${currentLang === 'ar' ? 'right-[-5px] md:right-[-6px]' : 'left-[-5px] md:left-[-6px]'} top-1.5 w-[9px] h-[9px] md:w-[11px] md:h-[11px] rounded-full bg-[#3b82f6] shadow-[0_0_0_3px_#383838] md:shadow-[0_0_0_4px_#383838] z-10"></div>
            <h4 class="text-white text-sm md:text-base font-bold mb-1">${e.role}</h4>
            <div class="flex flex-wrap items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                <span class="text-[#3b82f6] text-[10px] md:text-xs font-semibold">${e.company}</span>
                <span class="text-[#a8a8a8] text-[9px] md:text-[10px] uppercase font-bold tracking-widest">— ${e.period}</span>
            </div>
            <p class="text-[11px] md:text-[12px] text-[#d6d6d6] leading-relaxed">${e.description}</p>
        </div>
    `).join('');

    const educationList = document.getElementById('education-list');
    educationList.innerHTML = data.resume.education.map(e => `
        <div class="relative ${currentLang === 'ar' ? 'pr-8 md:pr-10' : 'pl-8 md:pl-10'} pb-8 md:pb-10 last:pb-0">
            <div class="absolute ${currentLang === 'ar' ? 'right-[-5px] md:right-[-6px]' : 'left-[-5px] md:left-[-6px]'} top-1.5 w-[9px] h-[9px] md:w-[11px] md:h-[11px] rounded-full bg-[#3b82f6] shadow-[0_0_0_3px_#383838] md:shadow-[0_0_0_4px_#383838] z-10"></div>
            <h4 class="text-white text-sm md:text-base font-bold mb-1">${e.institution}</h4>
            <div class="flex flex-wrap items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                <span class="text-[#3b82f6] text-[10px] md:text-xs font-semibold">${e.degree}</span>
                <span class="text-[#a8a8a8] text-[9px] md:text-[10px] uppercase font-bold tracking-widest">— ${e.period}</span>
            </div>
        </div>
    `).join('');

    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = data.resume.skills.map(s => `
        <i class="${s.icon} colored text-3xl md:text-4xl hover:scale-110 transition-transform" title="${s.name}"></i>
    `).join('');

    // Render Portfolio
    document.getElementById('portfolio-title').innerText = data.portfolio.title;
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = data.portfolio.items.map(p => `
        <a href="${p.link}" target="_blank" class="group relative bg-[#1e1e1f] border border-[#383838] rounded-[24px] p-6 transition-all duration-300 hover:border-[#3b82f6]/30 shadow-xl flex flex-col gap-6">
            <!-- Icon Box: Matches exactly the Experience/Education header style -->
            <div class="flex items-center justify-between">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-[#383838] flex items-center justify-center rounded-xl md:rounded-2xl border border-[#383838] shadow-xl text-[#3b82f6] text-lg md:text-xl shrink-0">
                    <i class="${p.icon || 'fas fa-rocket'}"></i>
                </div>
                <span class="text-[8px] md:text-[10px] text-[#a8a8a8] font-bold uppercase tracking-widest bg-[#2b2b2c] px-3 py-1 rounded-lg border border-[#383838]">
                    ${p.category}
                </span>
            </div>
            
            <!-- Content -->
            <div class="space-y-1">
                <h3 class="text-white font-bold text-sm md:text-base tracking-tight">${p.title}</h3>
                <div class="flex items-center gap-1.5 text-[#3b82f6] text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>${currentLang === 'ar' ? 'عرض المشروع' : 'View Project'}</span>
                    <i class="fas ${currentLang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'} group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"></i>
                </div>
            </div>
        </a>
    `).join('');

    // Render Certificates
    document.getElementById('certificates-title').innerText = data.certificates.title;
    const certificateList = document.getElementById('certificate-list');
    certificateList.innerHTML = data.certificates.items.map(c => `
        <div class="flex items-center gap-4 md:gap-6 p-4 bg-[#212123] rounded-2xl border border-[#383838] hover:border-[#3b82f6]/30 transition-colors group">
            <div class="w-8 h-8 md:w-10 md:h-10 bg-[#383838] flex items-center justify-center rounded-lg md:rounded-xl border border-[#383838] shadow-xl text-[#3b82f6] text-sm md:text-base shrink-0 group-hover:scale-110 transition-transform">
                <i class="fas fa-certificate"></i>
            </div>
            <div class="flex-1">
                <h4 class="text-xs md:text-sm font-bold text-white uppercase tracking-wider">${c.title}</h4>
                <p class="text-[9px] md:text-[10px] text-[#3b82f6] font-bold uppercase tracking-widest mt-1">${c.provider} &bull; ${c.year}</p>
            </div>
        </div>
    `).join('');

    // Render Footer
    document.getElementById('footer-text').innerText = data.footer;

    // Handle RTL adjustments specifically for margins if needed
    const timelineList = document.querySelectorAll('.ml-5');
    timelineList.forEach(list => {
        if (currentLang === 'ar') {
            list.classList.remove('ml-5', 'md:ml-12', 'border-l');
            list.classList.add('mr-5', 'md:mr-12', 'border-r');
        } else {
            list.classList.remove('mr-5', 'md:mr-12', 'border-r');
            list.classList.add('ml-5', 'md:ml-12', 'border-l');
        }
    });
}

function setupNavigation() {
    const sidebarToggle = document.getElementById('toggle-info');
    const sidebarMore = document.getElementById('sidebar-more');
    if (sidebarToggle && sidebarMore) {
        sidebarToggle.addEventListener('click', () => {
            sidebarMore.classList.toggle('hidden');
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Initial section from Hash or default to About
    function showSectionFromHash() {
        const hash = window.location.hash || '#about';
        const targetId = hash.substring(1);
        
        sections.forEach(s => s.classList.remove('active'));
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Update UI Active State
            navLinks.forEach(l => {
                if (l.getAttribute('data-target') === targetId) {
                    l.classList.add('text-[#3b82f6]');
                    l.classList.remove('text-[#d6d6d6]');
                } else {
                    l.classList.remove('text-[#3b82f6]');
                    l.classList.add('text-[#d6d6d6]');
                }
            });
        }
    }

    // Handle hash change (back button / manual typing)
    window.addEventListener('hashchange', showSectionFromHash);
    
    // Call on load
    showSectionFromHash();

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Control navigation manually
            const targetId = link.getAttribute('data-target');
            window.location.hash = targetId;
            if (window.innerWidth < 1024) window.scrollTo({ top: 0, behavior: 'auto' });
        });
    });
}
