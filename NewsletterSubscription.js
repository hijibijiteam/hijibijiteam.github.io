// 8. Newsletter Subscription (নিউজলেটার সাইন-আপ)
// Theme: Slate (অ্যাশ/ধূসর)
// Context: আপনাদের কাজের আপডেট বা রিসার্চ জানানোর জন্য ইমেইল নিউজলেটার সাইন আপ।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-slate-200/60 bg-gradient-to-br from-white/60 to-slate-100/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-slate-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold mb-2">
                    <i data-lucide="newspaper" class="w-3.5 h-3.5"></i> The Lab Notes
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Read Our Chaos <span class="font-hand text-slate-400 text-xl font-normal">/ monthly email</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Once a month, we send out a highly unpolished email about what we are building, what broke, and weird hardware components we discovered. 
            </p>
            <p>
                No spam, no marketing funnels. Just pure tech rambling from our desks in Bogra. Send us an email with "Subscribe" in the subject, and we'll add you to the list manually.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Subscribe%20to%20Lab%20Notes" class="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-black transition-colors shadow-sm">
                <span>Subscribe via Email</span>
                <i data-lucide="send" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
