// 1. The "We Lost Our Keys" Notice (চাবি হারিয়ে যাওয়ার ইমার্জেন্সি)
// Theme: Red (লাল)
// Context: ল্যাবের চাবি বা গেটের চাবি হারিয়ে যাওয়ার মজার ঘোষণা।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-red-200/60 bg-gradient-to-br from-white/60 to-red-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-red-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/80 text-red-800 text-xs font-semibold mb-2">
                    <i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> Emergency Panic
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Lab Key is Missing <span class="font-hand text-slate-400 text-xl font-normal">/ send help</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Status: Locked Outside
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Somebody (we suspect it was the cat or the guy who drinks 5 cups of black coffee) lost the main lab key. We are currently sitting on the staircase writing code on our phones. 
            </p>
            <p>
                If you find a key attached to a broken USB drive lying around Bogra streets, please bring it back. We will pay you in half-eaten biscuits and eternal gratitude.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=I%20Found%20The%20Key!" class="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-red-700 transition-colors shadow-sm">
                <span>I Found Your Key</span>
                <i data-lucide="key" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
