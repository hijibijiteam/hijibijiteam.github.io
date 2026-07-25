// 5. Trial by Fire / Intense Internship (ইন্টার্নশিপ প্রোগ্রাম)
// Theme: Cyan (আকাশি)
// Context: যখন আপনি ৩ মাসের জন্য কোনো ছাত্র বা ফ্রেশারকে ইন্টার্ন হিসেবে নিতে চাইবেন।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-cyan-200/60 bg-gradient-to-br from-white/60 to-cyan-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/80 text-cyan-800 text-xs font-semibold mb-2">
                    <i data-lucide="flame" class="w-3.5 h-3.5"></i> Internship Program
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Trial By Fire <span class="font-hand text-slate-400 text-xl font-normal">/ 3 months</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Undergrads Welcome
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                We are opening 1 slot for a 3-month intense technical internship. You will not be fetching coffee. You will be writing production code, debugging hardware protocols, and probably breaking things on a Friday evening.
            </p>
            <p>
                It's a paid stipend position. It will be tough, but you'll learn more in 3 months here than a year anywhere else.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Trial%20By%20Fire%20Internship" class="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-cyan-700 transition-colors shadow-sm">
                <span>Apply for Internship</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
