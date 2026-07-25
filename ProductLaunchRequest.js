// 7. Product Launch Request (নতুন প্রোডাক্ট লঞ্চ সাপোর্ট)
// Theme: Rose (লাল/রোজ)
// Context: যখন আপনারা কোনো প্রোডাক্ট ইন্টারনেটে ছাড়বেন (যেমন Product Hunt এ) এবং কমিউনিটির সাপোর্ট চাইবেন।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-rose-200/60 bg-gradient-to-br from-white/60 to-rose-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-rose-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-800 text-xs font-semibold mb-2">
                    <span class="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span> Launch Day
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    We Shipped A Thing <span class="font-hand text-slate-400 text-xl font-normal">/ support us</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                After weeks of aggressive typing and minimal sleep, we just launched our new developer tool live on Product Hunt today. 
            </p>
            <p>
                If you like what we build, it would mean the world to us if you could drop by, roast our code, leave a comment, or give it an upvote. 
            </p>
        </div>

        <div>
            <!-- Change href to your actual launch link -->
            <a href="[https://producthunt.com](https://producthunt.com)" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-rose-700 transition-colors shadow-sm">
                <span>View on Product Hunt</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
