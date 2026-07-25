// 2. Client Project Intake (নতুন ক্লায়েন্ট প্রজেক্ট নেওয়ার ঘোষণা)
// Theme: Indigo (গাঢ় নীল/বেগুনি)
// Context: যখন আপনাদের হাতে সময় থাকবে এবং নতুন কোনো কোম্পানির ওয়েবসাইট, অ্যাপ বা হার্ডওয়্যার প্রজেক্ট নিতে চাইবেন।

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    if (!container) return;

    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-indigo-200/60 bg-gradient-to-br from-white/60 to-indigo-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-800 text-xs font-semibold mb-2">
                    <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span> Bandwidth Available
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Need Something Built? <span class="font-hand text-slate-400 text-xl font-normal">/ client work</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Taking 2 New Projects
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                We just cleared out our backlog and have room for one or two serious client projects this quarter. Whether it's a web dashboard, an embedded systems prototype, or a weird automation idea—we can build it.
            </p>
            <p>
                We don't do blockchain, and we don't do "exposure". We do clean code and solid hardware.
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Project%20Inquiry" class="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                <span>Pitch Your Project</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
