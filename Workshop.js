// ৩. Workshop / Meetup Announcement (ইভেন্ট বা কর্মশালা)
// বগুড়াতে কোনো টেকনিক্যাল মিটআপ বা কর্মশালা করলে তার ঘোষণা দেওয়ার জন্য। এটি 'Rose' (গোলাপি/লালচে) থিমের হবে।

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
                    <i data-lucide="calendar" class="w-3 h-3"></i> Upcoming Event
                </span>
                <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">
                    Saturday Hardware Tear-down <span class="font-hand text-slate-400 text-xl font-normal">/ workshop</span>
                </h2>
            </div>
            <span class="text-xs font-medium text-slate-500 bg-white/70 px-3 py-1.5 rounded-full border border-white">
                Entry: Free (RSVP Required)
            </span>
        </div>
        
        <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
            <p>
                This coming Saturday, we are tearing down old routers, broken laptops, and faulty PCBs to see how they were engineered. No prior experience needed, just bring your curiosity.
            </p>
            <p>
                We only have space for 10 people in our lab, so drop us an email to save your spot!
            </p>
        </div>

        <div>
            <a href="mailto:hello@hijibiji.tech?subject=RSVP:%20Saturday%20Workshop" class="inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-rose-700 transition-colors shadow-sm">
                <span>Book a Seat</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `;

    container.appendChild(wrapper);
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
