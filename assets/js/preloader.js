/**
 * Ahmed Elhag Portfolio - Unified Preloader Manager
 * Provides a consistent loading experience across the main site and projects.
 */

window.PreloaderManager = {
    init: function() {
        this.render();
        this.hideOnLoad();
    },

    render: function() {
        if (document.getElementById('preloader')) return;
        if (!document.body) {
            setTimeout(() => this.render(), 10);
            return;
        }

        const logoPath = this.getLogoPath();
        const preloaderHTML = `
            <div id="preloader" style="position:fixed; inset:0; background:#0c0c0d; z-index:9999; display:flex; align-items:center; justify-content:center; transition:opacity 0.5s ease;">
                <div style="position:relative; display:flex; flex-direction:column; align-items:center;">
                    <div style="width:100px; height:100px; border:4px solid rgba(59,130,246,0.1); border-top:4px solid #3b82f6; border-radius:50%; animation: preloader-spin 1s linear infinite;"></div>
                    <img src="${logoPath}" style="width:85px; height:85px; position:absolute; top:7.5px; animation: preloader-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;" onerror="this.style.display='none'">
                </div>
            </div>
            <style>
                @keyframes preloader-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes preloader-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
                .preloader-hidden { opacity: 0 !important; pointer-events: none !important; }
            </style>
        `;
        document.body.insertAdjacentHTML('afterbegin', preloaderHTML);
    },

    getLogoPath: function() {
        const scriptTag = document.querySelector('script[src*="preloader.js"]');
        if (scriptTag) {
            const src = scriptTag.getAttribute('src');
            return src.replace('js/preloader.js', 'images/logo.svg');
        }
        return "assets/images/logo.svg";
    },

    hide: function(delay = 300) {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
            }, delay);
        }
    },

    show: function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.remove('preloader-hidden');
        }
    },

    hideOnLoad: function() {
        window.addEventListener('load', () => this.hide(300));
        if (document.readyState === 'complete') this.hide(300);
    }
};

// Start
PreloaderManager.init();

// Auto-initialize when DOM is ready to ensure document.body exists
document.addEventListener('DOMContentLoaded', () => {
    PreloaderManager.init();
});

// Fallback in case script is loaded after DOMContentLoaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    PreloaderManager.init();
}
