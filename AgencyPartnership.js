// 9. Agency Partnership (পার্টনারশিপ / কোলাবরেশন)
// Theme: Lime (সবুজ/লেবু কালার)
// Context: অন্যান্য এজেন্সি বা ফাউন্ডারদের সাথে মিলে বড় প্রজেক্টে কাজ করার প্রস্তাব।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-lime-200/60 bg-gradient-to-br from-white/60 to-lime-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-lime-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-100/80 text-lime-800 text-xs font-semibold mb-2">
                    <i data-lucide="handshake" class="w-3.5 h-3.5"></i> Let's Team Up
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Agency Partnerships <span class="font-hand text-slate-400 text-xl font-normal">/ scaling together</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Are you a design agency that needs solid engineers? Or a hardware startup that needs a scalable web backend? 
            </p>
            <p>
                We frequently partner with other small, highly skilled teams to deliver massive projects that none of us could do alone. Let's combine forces.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Partnership%20Discussion" class="inline-flex items-center gap-2 bg-lime-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-lime-700 transition-colors shadow-sm">
                <span>Discuss Partnership</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
