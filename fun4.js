// 4. The "Free Coffee / Sponsor Us" Begging Card (চা-বিস্কুটের ভিখারি মোড)
// Theme: Emerald (সবুজ)
// Context: কোডারদের ক্যাফেইন অ্যাডিকশন এবং চা-বিস্কুটের খরচের জন্য মজার আর্জি।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-emerald-200/60 bg-gradient-to-br from-white/60 to-emerald-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold mb-2">
                    <i data-lucide="coffee" class="w-3.5 h-3.5"></i> Caffeine Crisis
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Fund Our Tea Addiction <span class="font-hand text-slate-400 text-xl font-normal">/ fuel</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Science proves that a programmer converts tea directly into buggy JavaScript code. Our local tea stall owner now treats us like corporate investors because of our daily bill.
            </p>
            <p>
                Want better software from us? Send us money for milk tea and paratha. Or just send good vibes. Vibes work too.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Sending%20Tea%20Money" class="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm">
                <span>Sponsor a Cup of Tea</span>
                <i data-lucide="heart" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
