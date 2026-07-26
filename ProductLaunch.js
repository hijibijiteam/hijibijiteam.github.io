// ২. Beta Testing / Product Launch (নতুন প্রোডাক্ট টেস্টিং)
// যখন আপনারা নতুন কোনো সফটওয়্যার বা হার্ডওয়্যার তৈরি করবেন এবং ইউজারদের দিয়ে টেস্ট করাতে চাইবেন। এটি 'Violet' (বেগুনি) থিমের হবে।

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
                    <span class="w-2 h-2 rounded-full bg-violet-600 animate-pulse"></span> Early Access
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Inkwell is in Beta <span class="font-hand text-slate-400 text-xl font-normal">/ test with us</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Limited Spots: 50 Users
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                We just finished the first usable version of <strong>Inkwell</strong> — our minimalist productivity tool. It has bugs, it might crash, but it's fundamentally different from anything else.
            </p>
            <p>
                We are looking for early testers to break things and give us honest feedback. In return, you get lifetime free access.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Beta%20Access%20Request:%20Inkwell" class="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-violet-700 transition-colors shadow-sm">
                <span>Request Beta Access</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
