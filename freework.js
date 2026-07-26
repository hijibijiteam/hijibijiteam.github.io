// <!-- ================= freeads.js CONTENT ================= -->
// <!-- NOTE: You can cut the script below and save it as "freeads.js" in your server -->

        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('dynamic-injection-container');
            
            if (!container) return;

            // Create the HTML structure dynamically via JavaScript
            const wrapper = document.createElement('article');
            wrapper.className = 'glass-card rounded-5xl p-8 sm:p-12 relative overflow-hidden border border-emerald-200/60 bg-gradient-to-br from-white/60 to-emerald-50/30';
            
            wrapper.innerHTML = `
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
                
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200/60 pb-5">
                    <div>
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold mb-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span> Open for Collaboration
                        </span>
                        <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                            Work With Us For Free <span class="font-hand text-slate-400 text-xl font-normal">/ volunteer</span>
                        </h2>
                    </div>
                </div>
                
                <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
                    <p>
                        Are you passionate about software, hardware, or R&D? We are opening our doors for curious minds who want to collaborate, experiment, and build cool things with us <strong>purely on a volunteer basis (no financial compensation)</strong>. 
                    </p>
                    <p>
                        If you want to gain real-world experience, contribute to open research, and don't mind the chaos of building things from scratch, we'd love to have you in our collective. Let's sketch some serious tech together.
                    </p>
                </div>

                <div>
                    <a href="mailto:hijibijiteam@gmail.com?subject=Interested%20in%20Free%20Collaboration/Volunteer" class="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-sm">
                        <span>Email Us to Join</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </a>
                </div>
            `;

            container.appendChild(wrapper);

            // Re-initialize Lucide icons for the dynamically injected elements
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
