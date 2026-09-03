"use client";

import { useState } from "react";

export default function PlantIdPage() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function handleSaveVariety(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  }

  return (
    <>
      {/* Top Header */}
      <header className="bg-surface flex justify-between items-center px-4 md:px-8 h-16 w-full z-30 border-b border-outline-variant shrink-0">
        <div className="flex items-center">
          <h1 className="md:hidden text-lg font-bold text-primary">Florasense</h1>
        </div>
        <div className="flex items-center gap-4 text-on-surface-variant">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant transition-colors text-sm font-semibold shadow-sm">
            <span className="material-symbols-outlined text-primary text-[18px]">language</span>
            <span>EN</span>
            <span className="text-xs text-on-surface-variant font-normal font-mono">English</span>
          </button>
          <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      {/* Dashboard Split Layout */}
      <div className="flex-1 flex overflow-hidden bg-surface-container-lowest">
        {/* Left: Chat */}
        <div className="w-7/12 flex flex-col border-r border-outline-variant relative">
          {/* Chat Header */}
          <div className="px-6 py-3 border-b border-outline-variant/50 flex items-center justify-between bg-surface/80 backdrop-blur-sm z-10 shrink-0">
            <div>
              <h2 className="text-lg font-semibold text-on-surface">Florasense Assistant</h2>
              <p className="text-xs text-on-surface-variant uppercase font-mono mt-1">AI ID Session Active</p>
            </div>
            <span className="material-symbols-outlined text-primary-container">psychology</span>
          </div>

          {/* Chat Feed */}
          <div className="flex-1 overflow-y-auto chat-scroll p-6 flex flex-col gap-6 pb-32">
            {/* AI Message */}
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-container text-[18px]">psychology</span>
              </div>
              <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-sm border border-outline-variant/30 text-on-surface">
                <p className="text-base">Good morning. Florasense AI ready. Upload an image or describe a specimen for identification and care protocol analysis.</p>
                <span className="text-xs text-on-surface-variant mt-2 block font-mono">08:42 AM</span>
              </div>
            </div>

            {/* User Message */}
            <div className="flex gap-4 max-w-[85%] self-end flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-on-secondary-container text-[18px]">person</span>
              </div>
              <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-sm">
                <p className="text-base mb-3">Can you identify this specimen from Zone 4? It&apos;s showing some slight variegation changes.</p>
                <div className="rounded-xl overflow-hidden border border-primary-fixed-dim/30">
                  <img
                    className="w-64 h-48 object-cover"
                    alt="Aglaonema Silver Queen plant leaf"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-P6m8bfIbTWU6ljt3xgAbkaf-_iAHEuD5SPYwYsTMWUKX904G3YuIN4wz9sO7WEwoPFWrn24w2H_BQ4PqzuPHk9im9WeMGTd9kOclQOBSSk16juOza950xj1O3ZduConiXBS03YjA9SRUm7piqWbw91nA2Kj7WSi5M4MplyAbm0IcLTwjOnE0zTGrmUbpJOPkj4-Lx1tPbthl4iaAx-qs9kD1PMKu9a6PMxmDrxs5Kk3Vh9bcfcm"
                  />
                </div>
                <span className="text-xs text-primary-fixed-dim mt-2 block text-right font-mono">08:45 AM</span>
              </div>
            </div>

            {/* AI Processing */}
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-container animate-spin text-[18px]">sync</span>
              </div>
              <div className="bg-surface-container p-4 rounded-2xl rounded-tl-sm border border-outline-variant/30 text-on-surface">
                <p className="text-base text-on-surface-variant flex items-center gap-2">Analyzing foliar patterns and structural geometry...</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-container text-[18px]">psychology</span>
              </div>
              <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-sm border border-outline-variant/30 text-on-surface">
                <p className="text-base mb-2">Analysis complete. High confidence match found.</p>
                <p className="text-base">
                  The specimen is identified as <strong className="text-primary-container">Aglaonema &apos;Silver Queen&apos;</strong>. I&apos;ve populated the detailed profile and care protocols in the adjacent panel for your review.
                </p>
                <span className="text-xs text-on-surface-variant mt-2 block font-mono">08:46 AM</span>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-surface-container-lowest/90 backdrop-blur-md border-t border-outline-variant">
            <div className="relative flex items-center">
              <button className="absolute left-3 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">add_a_photo</span>
              </button>
              <input
                className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-full py-3 pl-12 pr-14 text-base text-on-surface placeholder-on-surface-variant shadow-sm transition-all"
                placeholder="Ask about care, diseases, or upload another specimen..."
                type="text"
              />
              <button className="absolute right-2 p-2 bg-primary text-on-primary rounded-full hover:bg-primary-container transition-colors flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: ID Panel */}
        <div className="w-5/12 bg-background overflow-y-auto p-6 relative">
          {/* ID Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-outline-variant/40">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">yard</span>
              <span className="text-xs uppercase text-on-surface-variant font-bold tracking-wider font-mono">Catalogue Management</span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary-container text-on-primary rounded-lg text-sm font-bold shadow-sm transition-all hover:shadow hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>Add New Variety</span>
            </button>
          </div>

          {/* Plant ID Card */}
          <div className="bg-surface border border-outline-variant rounded-xl p-6 mb-6 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/20 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-flex items-center gap-1 bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs uppercase mb-2 font-mono">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    98% Match
                  </span>
                  <h3 className="text-xl font-bold text-on-surface">Aglaonema &apos;Silver Queen&apos;</h3>
                  <p className="text-base text-on-surface-variant italic">Chinese Evergreen</p>
                </div>
                <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              <p className="text-sm text-on-surface mb-6 leading-relaxed">
                A highly durable, low-light tolerant aroid prized for its extensive silver variegation. Optimal for interior commercial installations. Variegation intensity directly correlates with light exposure levels.
              </p>
              <button className="w-full bg-primary hover:bg-primary-container text-on-primary text-base font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined">bar_chart</span>
                View Future Availability Forecast
              </button>
            </div>
          </div>

          {/* Care Protocols */}
          <div className="mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">science</span>
            <h4 className="text-lg text-on-surface font-semibold">Care Protocols</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "water_drop", label: "Irrigation", color: "text-primary-container", title: "Moderate", desc: "Allow top 50% of substrate to dry between cycles. Sensitive to root rot if oversaturated." },
              { icon: "light_mode", label: "Luminance", color: "text-tertiary-container", title: "Low to Medium Indirect", desc: "Maintains variegation better in medium light. Avoid direct solar radiation to prevent scorch." },
              { icon: "thermostat", label: "Temperature", color: "text-error", title: "18°C - 27°C", desc: "Highly intolerant of drafts or temperatures below 15°C. Maintain stable climate control." },
              { icon: "eco", label: "Nutrition", color: "text-secondary", title: "Balanced NPK (Liquid)", desc: "Apply diluted 20-20-20 solution monthly during active growth phase. Suspend in dormancy." },
            ].map((p) => (
              <div key={p.label} className="bg-surface border border-outline-variant rounded-xl p-4 hover:border-primary/50 transition-colors">
                <div className={`flex items-center gap-2 mb-3 ${p.color}`}>
                  <span className="material-symbols-outlined">{p.icon}</span>
                  <span className="text-xs uppercase font-bold font-mono">{p.label}</span>
                </div>
                <p className="text-base font-semibold text-on-surface mb-1">{p.title}</p>
                <p className="text-sm text-on-surface-variant">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Zone Data */}
          <div className="mt-6 bg-surface-container-low border border-outline-variant/50 rounded-xl p-4">
            <h5 className="text-xs text-on-surface-variant uppercase mb-3 font-mono">Zone 4 Contextual Analysis</h5>
            <div className="flex items-center justify-between text-sm text-on-surface">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> Current Humidity: 65% (Optimal)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" /> Light Levels: slightly low
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Variety Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-low shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">local_florist</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Add New Plant Variety</h3>
                  <p className="text-xs text-on-surface-variant font-mono">Register Cultivar to Florasense Portal</p>
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="p-1.5 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>
            <form className="p-6 overflow-y-auto flex-1 flex flex-col gap-4" onSubmit={handleSaveVariety}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-on-surface-variant uppercase mb-1.5 font-mono font-semibold">Botanical Name *</label>
                  <input className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-2 px-3 text-sm text-on-surface transition-all" placeholder="e.g., Philodendron hederaceum" required type="text" />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant uppercase mb-1.5 font-mono font-semibold">Common Name *</label>
                  <input className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-2 px-3 text-sm text-on-surface transition-all" placeholder="e.g., Heartleaf Philodendron" required type="text" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-on-surface-variant uppercase mb-1.5 font-mono font-semibold">Variety / Cultivar</label>
                  <input className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-2 px-3 text-sm text-on-surface transition-all" placeholder="e.g., 'Lemon Lime'" type="text" />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant uppercase mb-1.5 font-mono font-semibold">Growing Zone *</label>
                  <select className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-2 px-3 text-sm text-on-surface transition-all" required>
                    <option>Zone 1 - High Humidity Tropicals</option>
                    <option>Zone 2 - Temperate propagation</option>
                    <option>Zone 3 - Arid &amp; Succulents</option>
                    <option selected>Zone 4 - Aroid Commercial Canopy</option>
                    <option>Zone 5 - Export Quarantine</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-on-surface-variant uppercase mb-1.5 font-mono font-semibold">Care Protocol &amp; Foliar Notes</label>
                <textarea className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-2 px-3 text-sm text-on-surface transition-all" placeholder="Describe watering thresholds, temperature limits..." rows={2} />
              </div>
              <div>
                <label className="block text-xs text-on-surface-variant uppercase mb-1.5 font-mono font-semibold">Specimen Image</label>
                <div className="border-2 border-dashed border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors cursor-pointer bg-surface-container-low hover:bg-surface-container">
                  <span className="material-symbols-outlined text-primary text-[32px]">add_photo_alternate</span>
                  <p className="text-sm text-on-surface font-semibold">Click or drag image to upload</p>
                  <p className="text-xs text-on-surface-variant font-mono">PNG, JPG or WEBP up to 10MB</p>
                </div>
              </div>
              <div className="pt-3 border-t border-outline-variant flex items-center justify-end gap-3 mt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border border-outline-variant text-on-surface rounded-lg text-sm font-semibold hover:bg-surface-container transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-primary hover:bg-primary-container text-on-primary rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  <span>Save Variety</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 text-sm font-semibold animate-[fadeIn_0.3s_ease-out]">
          <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
          <span>New plant variety registered successfully!</span>
        </div>
      )}
    </>
  );
}
