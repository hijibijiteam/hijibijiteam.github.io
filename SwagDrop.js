// 10. Merch / Swag Drop (টি-শার্ট বা স্টিকার বিক্রি/গিভঅ্যাওয়ে)
// Theme: Purple (গাঢ় বেগুনি)
// Context: আপনাদের নিজস্ব কোডিং জোকস বা লোগো সহ টিশার্ট বা স্টিকার দেওয়ার ঘোষণা।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-purple-200/60 bg-gradient-to-br from-white/60 to-purple-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-purple-800 text-xs font-semibold mb-2">
                    <i data-lucide="shirt" class="w-3.5 h-3.5"></i> Swag Drop
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Wear Our Bugs <span class="font-hand text-slate-400 text-xl font-normal">/ merch</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Limited Run: 50 T-Shirts
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                People kept asking for the hoodie we wear during our 3 AM debugging sessions. So, we printed a small batch. It features some of our most embarrassing commit messages on the back.
            </p>
            <p>
                We are selling these at cost. First come, first served.
            </p>
        </div>

        <div>
            <!-- Change this to a Google Form or store link -->
            <a href="mailto:hello@hijibiji.tech?subject=I%20Want%20Merch" class="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-purple-700 transition-colors shadow-sm">
                <span>Grab a Shirt</span>
                <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
