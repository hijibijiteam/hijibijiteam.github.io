// 5. The "StackOverflow Copied My Life" Status (স্ট্যাকওভারফ্লো থেকে কোড কপি করার ফানি স্টেটমেন্ট)
// Theme: Blue (নীল)
// Context: নিজে কোড না লিখে পুরোটা স্ট্যাকওভারফ্লো থেকে কপি করে রান করানোর ফানি স্বীকারোক্তি।

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
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i> Copy-Paste Engineering
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Ctrl+C, Ctrl+V Masters <span class="font-hand text-slate-400 text-xl font-normal">/ stackoverflow</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                People ask us: "How do you write such complex algorithms?" Honestly? A random guy named 'user192834' answered it on StackOverflow 11 years ago, and we just pasted it here.
            </p>
            <p>
                Don't look too closely at the source code, or it might collapse like a house of cards made from old spaghetti.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=I%20Found%20Your%20Bug" class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                <span>Complain About Our Code</span>
                <i data-lucide="bug" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
