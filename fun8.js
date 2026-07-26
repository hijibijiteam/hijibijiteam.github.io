// 8. The "Wi-Fi Password Negotiations" Card (ওয়াইফাই পাসওয়ার্ড নিয়ে কারচুপি)
// Theme: Cyan (সায়ান)
// Context: ল্যাবে ফ্রি ওয়াইফাই চাইলে কি কি করতে হবে তার ফানি শর্ত।

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
                    <i data-lucide="wifi" class="w-3.5 h-3.5"></i> Secret Passwords
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Want Free Wi-Fi? <span class="font-hand text-slate-400 text-xl font-normal">/ terms & conditions</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Everyone who walks into our lab asks for the Wi-Fi password first, before even saying hello. The password changes daily based on how many syntax errors we made that morning.
            </p>
            <p>
                Want the password? Bring a packet of potato chips or tell us a really bad dad joke. Those are our only accepted currencies.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Dad%20Joke%20for%20WiFi" class="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-cyan-700 transition-colors shadow-sm">
                <span>Send a Bad Joke</span>
                <i data-lucide="smile" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
