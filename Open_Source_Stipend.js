// 1. Open Source Stipend (ওপেন সোর্স কাজের জন্য পেমেন্ট)
// Theme: Blue (নীল)
// Context: যখন আপনি কাউকে আপনাদের ওপেন সোর্স প্রোজেক্টে কন্ট্রিবিউট করার জন্য ছোট কোনো পেমেন্ট বা স্টাইপেন্ড দিতে চাইবেন।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-blue-200/60 bg-gradient-to-br from-white/60 to-blue-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold mb-2">
                    <i data-lucide="github" class="w-3.5 h-3.5"></i> Open Source
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Fix Our Bugs, Get Paid <span class="font-hand text-slate-400 text-xl font-normal">/ bounties</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Status: Active Bounties
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                We open-source a lot of our internal tools. Some of them have nasty bugs that we don't have time to fix. If you can fix them, we will pay you. Simple as that.
            </p>
            <p>
                Check our GitHub repository for issues tagged with <strong>"bounty"</strong>. Claim it, merge it, get paid.
            </p>
        </div>

        <div>
            <a href="[https://github.com/hijibiji](https://github.com/hijibiji)" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                <span>View GitHub Repos</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
