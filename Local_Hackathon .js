// 3. Local Hackathon (লোকাল হ্যাকাথন বা বিল্ড-অ-থন)
// Theme: Fuchsia (উজ্জ্বল গোলাপি)
// Context: বগুড়াতে যদি কোনো ২৪ বা ৪৮ ঘণ্টার হ্যাকাথনের আয়োজন করেন।

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
                    <i data-lucide="terminal" class="w-3.5 h-3.5"></i> Hackathon
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Bogra Build-a-thon <span class="font-hand text-slate-400 text-xl font-normal">/ 24 hours</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Next Weekend
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                We are hosting a 24-hour intense coding and hardware hacking session at our workspace. Bring your laptops, your arduinos, and your half-baked ideas. 
            </p>
            <p>
                Pizza and endless coffee are on us. Sleep is optional. The goal is to build a working prototype by Sunday morning.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Build-a-thon%20Registration" class="inline-flex items-center gap-2 bg-fuchsia-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-fuchsia-700 transition-colors shadow-sm">
                <span>Register (Free)</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
