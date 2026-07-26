// ১. Paid Hiring (পেইড চাকরির বিজ্ঞাপন)
// যখন আপনি অর্থের বিনিময়ে লোক নিয়োগ দিতে চাইবেন। এটি একটি 'Amber' (কমলা/হলুদ) কালার থিম ব্যবহার করবে যা দৃষ্টি আকর্ষণ করে।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-amber-200/60 bg-gradient-to-br from-white/60 to-amber-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs font-semibold mb-2">
                    <span class="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span> We Are Hiring
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Join Our Chaos <span class="font-hand text-slate-400 text-xl font-normal">/ paid roles</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Location: Bogra (On-site)
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                We're looking for someone who doesn't just write code, but understands why they are writing it. We have open positions for Frontend Developers (Tailwind/JS) and Hardware Enthusiasts. 
            </p>
            <p>
                This is a fully paid role. No corporate ladders, just good work and plenty of coffee.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Job%20Application:%20Paid%20Role" class="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-amber-700 transition-colors shadow-sm">
                <span>Send Your Resume</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
