// 2. The "Please Stop Asking for Internships in DMs" Card (ইনবক্সে কাজের জন্য বিরক্ত করার করুণ আর্জি)
// Theme: Amber (কমলা)
// Context: সোশ্যাল মিডিয়া ইনবক্সে সারাদিন "ভাইয়া একটা কাজ দেন" বলা মানুষদের জন্য মজার কার্ড।

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
                    <i data-lucide="message-square-off" class="w-3.5 h-3.5"></i> Public Service Announcement
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Stop "Hi Brother" in DMs <span class="font-hand text-slate-400 text-xl font-normal">/ please</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                If you ping us saying just "Hi brother, are you free?" and then vanish for 3 hours, our soul leaves our body. We love you, but please send the actual problem or resume directly.
            </p>
            <p>
                Read our minds? No. Read the email button below? Yes. Send your pitch there instead.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Proper%20Email%20Pitch" class="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-amber-700 transition-colors shadow-sm">
                <span>Okay, Here is My Actual Pitch</span>
                <i data-lucide="send" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
