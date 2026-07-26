/**
 * Dynamic Content Injector for Hijibiji
 * This file handles external insertions (e.g., job openings, notices, special announcements)
 * without modifying the main HTML code.
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-injection-container');
    
    if (!container) return;

    // Create the HTML structure dynamically via JavaScript
    const wrapper = document.createElement('article');
    wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-sky-200/60 bg-gradient-to-br from-white/60 to-sky-50/30';
    
    wrapper.innerHTML = `
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-sky-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-semibold mb-2">
                    <span class="w-2 h-2 rounded-full bg-sky-600 animate-ping"></span> We Are Hiring / Open Collaborative
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Join the Collective <span class="font-hand text-slate-400 text-xl font-normal">/ open roles</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Deadline: Ongoing
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                Got a knack for writing clean code, breaking down hardware, or exploring strange technical ideas? We are currently looking for passionate contributors (paid & volunteer/open research tracks) to join our Bogra-based collective.
            </p>
            <ul class="grid sm:grid-cols-2 gap-3 pt-2">
                <li class="bg-white/50 p-3.5 rounded-2xl border border-white flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i> Frontend Developers (Tailwind / Vanilla JS)
                </li>
                <li class="bg-white/50 p-3.5 rounded-2xl border border-white flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i> Embedded Hardware & IoT Enthusiasts
                </li>
            </ul>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=Application%20for%20Collective" class="inline-flex items-center gap-2 bg-fog-dark text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-slate-700 transition-colors shadow-sm">
                <span>Apply via Email</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    // Append the created element to the placeholder container
    container.appendChild(wrapper);

    // Re-initialize Lucide icons for the dynamically injected elements if needed
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
