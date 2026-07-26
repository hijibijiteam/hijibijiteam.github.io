// 3. The "We Broke Production on Friday" Confession (শুক্রবার রাতে প্রডাকশন ক্র্যাশ করার কাহিনী)
// Theme: Violet (বেগুনি)
// Context: শুক্রবার রাতে প্রডাকশন কোড ভেঙে ফেলে সবার ছুটির বারোটা বাজানোর ফানি ঘটনা।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-violet-200/60 bg-gradient-to-br from-white/60 to-violet-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-violet-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100/80 text-violet-800 text-xs font-semibold mb-2">
                    <i data-lucide="bomb" class="w-3.5 h-3.5"></i> Disaster Log
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    We Blew Up The Server <span class="font-hand text-slate-400 text-xl font-normal">/ friday night</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Error 500 Everywhere
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Rule #1 of coding: Never push to production on a Friday. What did we do? We pushed to production on a Friday. 
            </p>
            <p>
                Currently, half our databases are crying in binary, and we are questioning all our life choices. If the site looks broken, just pretend it's avant-garde modern art.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Fix%20Your%20Server!" class="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-violet-700 transition-colors shadow-sm">
                <span>Laugh at Us via Email</span>
                <i data-lucide="laugh" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
