"use client";

export default function DiseaseScannerPage() {
  return (
    <>
      {/* Top Header */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center px-4 md:px-8 h-16 w-full z-30 shrink-0">
        <div className="hidden md:flex flex-1 items-center justify-center">
          <span className="text-lg font-semibold text-on-surface">Disease Diagnostics Dashboard</span>
        </div>
        <div className="flex items-center gap-6 ml-auto">
          <button className="flex items-center gap-1 text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full">
            <span className="text-xs uppercase mr-1 font-mono font-semibold">EN</span>
            <span className="material-symbols-outlined">language</span>
          </button>
          <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto space-y-6">
          {/* High Priority Alert */}
          <div className="bg-error-container border border-error/20 rounded-xl p-3 md:p-6 flex items-start sm:items-center gap-3 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-error" />
            <span className="material-symbols-outlined text-on-error-container icon-fill text-3xl">warning</span>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-on-error-container m-0">Manual Inspection Required: Unfit for Export</h2>
              <p className="text-sm text-on-error-container/80 mt-1">
                Pathogen detected exceeds acceptable thresholds for international shipment. Immediate isolation protocols enacted.
              </p>
            </div>
            <button className="shrink-0 bg-surface-container-lowest text-on-error-container px-4 py-2 rounded-lg text-xs uppercase border border-error/30 hover:bg-error/10 transition-colors font-mono font-semibold">
              Review Policy
            </button>
          </div>

          {/* Batch Context */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-outline-variant pb-3">
            <div>
              <span className="text-xs text-on-surface-variant uppercase tracking-wider font-mono font-semibold">Current Sample Context</span>
              <div className="flex items-center gap-4 mt-1">
                <h3 className="text-xl font-semibold text-on-surface m-0">Batch ID: FL-8924-B</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-surface-container-high text-on-surface font-mono">
                  <span className="w-2 h-2 rounded-full bg-error mr-2 animate-pulse" />
                  Suspended
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant bg-surface-container px-3 py-2 rounded-lg border border-outline-variant/50">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span className="text-xs font-mono">Active Line: Sorting Queue A (Zone B Harvest)</span>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Left: Analysis Pane */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <div className="bg-surface rounded-xl border border-outline-variant p-6 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-lowest opacity-50 pointer-events-none" />
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <h4 className="text-xs text-on-surface-variant uppercase tracking-wider flex items-center gap-1 font-mono font-semibold">
                    <span className="material-symbols-outlined text-sm">biotech</span>
                    Optical Analysis Result
                  </h4>
                  <span className="text-xs text-on-surface-variant font-mono">Scanned 2 mins ago</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  {/* Image */}
                  <div className="relative rounded-lg overflow-hidden border border-outline-variant bg-surface-container aspect-square md:aspect-auto flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <img
                      className="w-full h-full object-cover"
                      alt="Tropical plant leaf with bacterial spotting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuALU6Jv_Gd-apiiL9cwGyVO_FWb_rwZIRXesJjruU0SpGNNqg4_CU-JGv7LPjZ4-1he87ZHBiX7onSLFDJxKUR7hSd_DvG3nW6jlaD_SdWLxWotLtCY_aFs6EH-77Dp47C9vNup16LtKzh-zzkDu0IVd7swwtgNg7T85Wyr1OxDtpaxFAjdqjHgpBD6N6pgxdR-Zo8lv5Sgf47g-FEjbMrC4A1LLLGbMNe5X9qnCJgxb51nWUXkN_GP"
                    />
                    <div className="absolute inset-0 border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-md rounded px-2 py-1 flex items-center gap-1 border border-outline/20">
                      <span className="material-symbols-outlined text-[16px] text-error">target</span>
                      <span className="text-[10px] uppercase font-bold text-on-surface font-mono">Lesion Detected</span>
                    </div>
                  </div>

                  {/* Diagnostic Details */}
                  <div className="flex flex-col justify-center space-y-3">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1 font-mono">Primary Diagnosis</p>
                      <h5 className="text-lg font-semibold text-error flex items-center gap-3">
                        Bacterial Infection: Xanthomonas
                      </h5>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-surface-container-high rounded-lg p-3 border border-outline-variant/50 flex-1">
                        <p className="text-xs text-on-surface-variant mb-1 font-mono">Confidence Score</p>
                        <div className="flex items-end gap-1">
                          <span className="text-2xl text-primary font-bold leading-none">94.2</span>
                          <span className="text-sm text-on-surface-variant pb-1">%</span>
                        </div>
                      </div>
                      <div className="bg-error/10 rounded-lg p-3 border border-error/20 flex-1">
                        <p className="text-xs text-error/80 mb-1 font-mono">Severity Level</p>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-error icon-fill text-lg">warning</span>
                          <span className="text-lg font-bold text-error">Stage 3</span>
                        </div>
                        <p className="text-[10px] text-error mt-1 uppercase font-mono">Severe Damage</p>
                      </div>
                    </div>
                    {/* Spread Risk */}
                    <div className="pt-3 border-t border-outline-variant/50">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-on-surface-variant font-mono">Contagion Spread Risk</span>
                        <span className="text-xs text-error font-bold font-mono">HIGH (85%)</span>
                      </div>
                      <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                        <div className="bg-error h-2 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Protocol Pane */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <div className="bg-surface rounded-xl border border-outline-variant p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-3">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary-container rounded-lg">integration_instructions</span>
                  <h4 className="text-lg font-semibold text-on-surface">Treatment &amp; Routing Protocol</h4>
                </div>

                {/* Pathway */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 mb-6 flex items-center justify-between relative overflow-hidden">
                  <div className="absolute top-1/2 left-8 right-8 h-px bg-outline-variant border-dashed border-t border-outline-variant z-0 transform -translate-y-1/2" />
                  {/* Origin */}
                  <div className="relative z-10 flex flex-col items-center bg-surface-container-lowest px-2">
                    <div className="w-8 h-8 rounded-full border-2 border-outline bg-surface flex items-center justify-center text-outline">
                      <span className="material-symbols-outlined text-sm">home_work</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant mt-1 font-mono">Origin</span>
                    <span className="text-sm font-bold text-on-surface text-center">Zone B<br />Nursery</span>
                  </div>
                  <div className="relative z-10 bg-surface-container-lowest px-2 text-primary">
                    <span className="material-symbols-outlined animate-pulse">arrow_right_alt</span>
                  </div>
                  {/* Destination */}
                  <div className="relative z-10 flex flex-col items-center bg-surface-container-lowest px-2">
                    <div className="w-8 h-8 rounded-full border-2 border-error bg-error-container flex items-center justify-center text-error">
                      <span className="material-symbols-outlined text-sm icon-fill">front_hand</span>
                    </div>
                    <span className="text-[10px] text-error mt-1 uppercase font-bold font-mono">Destination</span>
                    <span className="text-sm font-bold text-on-error-container text-center">Quarantine<br />Zone C</span>
                  </div>
                </div>

                {/* Steps */}
                <div className="flex-1 space-y-4">
                  <h5 className="text-xs text-on-surface-variant uppercase tracking-wider font-mono font-semibold">Required Actions</h5>
                  {[
                    { num: "1", title: "Isolate Subject Batch", desc: "Halt sorting line A immediately. Physically move batch FL-8924-B to sealed transport carts to prevent airborne transmission.", active: true },
                    { num: "2", title: "Adjust Microclimate (Zone B)", desc: "System recommendation: Decrease relative humidity in Zone B to 65% to suppress further bacterial sporulation.", active: true },
                    { num: "3", title: "Chemical Intervention (Quarantine)", desc: "Schedule application of Copper-based bactericide formulation within 4 hours of arrival at Zone C.", active: false },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-3">
                      <div className="shrink-0 flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border font-mono ${step.active ? "bg-primary-container text-on-primary-container border-primary/20" : "bg-surface-container-high text-on-surface-variant border-outline-variant"}`}>
                          {step.num}
                        </div>
                        {step.num !== "3" && <div className="w-px h-full bg-outline-variant/50 my-1" />}
                      </div>
                      <div className={step.num !== "3" ? "pb-3" : ""}>
                        <p className="text-sm font-bold text-on-surface">{step.title}</p>
                        <p className="text-sm text-on-surface-variant mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-3 border-t border-outline-variant">
                  <button className="w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary text-lg font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined">check_circle</span>
                    Acknowledge &amp; Initiate Protocol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
