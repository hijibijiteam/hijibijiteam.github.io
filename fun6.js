// 6. The "We Sleep Under The Desk" Notice
// Theme: Rose (গোলাপি)
// Context: অতিরিক্ত কাজের চাপে অফিস বা ল্যাবের মেঝেতে ঘুমিয়ে পড়ার জোকস।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-rose-200/60 bg-gradient-to-br from-white/60 to-rose-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-rose-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-800 text-xs font-semibold mb-2">
                    <i data-lucide="moon" class="w-3.5 h-3.5"></i> Sleep Deprived
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Bed Under The Desk <span class="font-hand text-slate-400 text-xl font-normal">/ office life</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Rent in Bogra is fine, but sleeping under the computer desk saves 20 minutes of morning commute time. We have pillows made of old bubble wrap and blankets woven from spare CAT6 cables.
            </p>
            <p>
                If you visit our lab unannounced, please don't step on us. We bite when woken up before compiling.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Bringing%20Pillows" class="inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-rose-700 transition-colors shadow-sm">
                <span>Send Us a Real Pillow</span>
                <i data-lucide="gift" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
