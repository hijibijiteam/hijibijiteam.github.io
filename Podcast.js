// 11. Podcast / Interview Call (পডকাস্ট বা আড্ডার জন্য গেস্ট খোঁজা)
// Theme: Pink (পিঙ্ক)
// Context: আপনারা যদি কোনো আড্ডা, পডকাস্ট বা ইন্টারভিউ সিরিজ শুরু করেন এবং লোকাল কাউকে গেস্ট হিসেবে খুঁজছেন।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-pink-200/60 bg-gradient-to-br from-white/60 to-pink-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 text-pink-800 text-xs font-semibold mb-2">
                    <i data-lucide="mic" class="w-3.5 h-3.5"></i> Recording Sessions
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Tell Us Your Tech Stories <span class="font-hand text-slate-400 text-xl font-normal">/ podcast</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                We are starting a small, highly informal podcast to document the local tech scene. We want to hear about the worst production crash you've caused, or the hardware project you completely ruined.
            </p>
            <p>
                No scripted PR talk, just raw engineering horror stories and wins. If you're around Bogra, come sit in front of our mics.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Podcast%20Guest%20Pitch" class="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-pink-700 transition-colors shadow-sm">
                <span>Pitch a Story</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
