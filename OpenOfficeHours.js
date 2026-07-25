6. Open Office Hours (ফ্রি মেন্টরশিপ বা আড্ডা)
Theme: Orange (কমলা)
Context: যখন আপনি চাইবেন লোকাল ডেভেলপার বা ফাউন্ডাররা আপনাদের সাথে আধা ঘণ্টা ফ্রি কথা বলুক বা কফি খাক।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-orange-200/60 bg-gradient-to-br from-white/60 to-orange-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-800 text-xs font-semibold mb-2">
                    <i data-lucide="coffee" class="w-3.5 h-3.5"></i> Mentorship
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Open Office Hours <span class="font-hand text-slate-400 text-xl font-normal">/ let's talk</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Every Thursday Afternoon
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Stuck on a bizarre bug? Don't know how to scale your architecture? Or just want to argue about why JavaScript is terrible? 
            </p>
            <p>
                We open our space for 2 hours every Thursday for free tech consultation and coffee. Whether you're a junior dev or building a startup, come talk to us. 
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Book%20Office%20Hours" class="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-orange-700 transition-colors shadow-sm">
                <span>Book a 30-min Slot</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
