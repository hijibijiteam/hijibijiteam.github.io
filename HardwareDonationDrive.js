// 4. Hardware Donation Drive (পুরনো হার্ডওয়্যার কালেকশন)
// Theme: Teal (সবুজ-নীল)
// Context: স্কুলের বাচ্চাদের শেখানোর জন্য নষ্ট বা পুরনো ল্যাপটপ, ফোন বা সার্কিট বোর্ড কালেকশন করার ঘোষণা।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-teal-200/60 bg-gradient-to-br from-white/60 to-teal-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-teal-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold mb-2">
                    <i data-lucide="recycle" class="w-3.5 h-3.5"></i> Community Drive
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Donate Your E-Waste <span class="font-hand text-slate-400 text-xl font-normal">/ saturdays</span>
                </h2>
            </div>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Got an old laptop that takes 10 minutes to boot? A broken router? A box of tangled wires? Don't throw them away. 
            </p>
            <p>
                We collect dead electronics, tear them down, and use the parts to teach kids basic electronics and soldering during our Saturday school sessions. We will wipe all your hard drives securely.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Hardware%20Donation" class="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-teal-700 transition-colors shadow-sm">
                <span>Arrange a Pickup / Drop-off</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
