// 7. The "AI Will Take Our Jobs... Eventually" Panic (এআই নিয়ে ফানি ভয়)
// Theme: Fuchsia (ফিউশা)
// Context: চ্যাটজিপিটি বা এআই চলে আসার পর নিজেদের ভবিষ্যৎ নিয়ে মজার হতাশা।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-fuchsia-200/60 bg-gradient-to-br from-white/60 to-fuchsia-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-fuchsia-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-100/80 text-fuchsia-800 text-xs font-semibold mb-2">
                    <i data-lucide="cpu" class="w-3.5 h-3.5"></i> Existential Dread
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Competing With Robots <span class="font-hand text-slate-400 text-xl font-normal">/ ai panic</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                An AI bot just solved a bug in 2 seconds that took us 3 days of crying. We are thinking of closing our laptops and opening a tea stall instead.
            </p>
            <p>
                Until the robots take over completely, we are still open to building stuff. Hire us before ChatGPT replaces us with a smarter toaster.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Human%20vs%20AI" class="inline-flex items-center gap-2 bg-fuchsia-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-fuchsia-700 transition-colors shadow-sm">
                <span>Hire Humans Instead</span>
                <i data-lucide="user-check" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
