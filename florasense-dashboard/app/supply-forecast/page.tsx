"use client";

import { useState } from "react";

export default function SupplyForecastPage() {
  const [sliderVal, setSliderVal] = useState(2);
  const sliderLabels = ["1 Month (Mid-February)", "2 Months (Mid-March)", "3 Months (Mid-April)"];

  return (
    <>
      <div className="flex-1 px-6 lg:px-12 py-6">
        <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-end gap-3 pb-1 border-b border-outline-variant/20">
            <div className="flex min-w-72 flex-col gap-1">
              <span className="text-xs text-primary font-semibold uppercase tracking-wider font-mono">Predictive Yield Analytics</span>
              <h1 className="text-on-surface text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Supply Forecast Dashboard</h1>
              <p className="text-on-surface-variant text-sm md:text-base">Real-time yield projections adjusted by agro-climatic sensor inputs and contract milestones</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-1.5 shadow-sm">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-on-surface-variant font-medium font-mono">Sensors Active: 99.4% Uptime</span>
              </div>
              <button className="flex items-center justify-center gap-1.5 rounded-lg h-9 px-3.5 bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shadow-sm transition-all">
                <span className="material-symbols-outlined text-sm">download</span> Export Report
              </button>
            </div>
          </div>

          {/* Data Integration Pipeline */}
          <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-outline-variant/20 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">sensors</span>
                </div>
                <div>
                  <h3 className="text-on-surface text-sm md:text-base font-bold">Data Integration Pipeline</h3>
                  <p className="text-[11px] text-on-surface-variant font-mono">Automated sensor ingestion &amp; ERP sync</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30 text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Auto-sync: 5m frequency
                </span>
                <span className="text-[11px] text-primary font-semibold hidden sm:inline">• Latency: 24ms</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { icon: "cloud_sync", label: "Historical Sales", value: "Live Synced", color: "bg-emerald-500/10 text-emerald-600", badge: <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> },
                { icon: "water_drop", label: "Rainfall Radar", value: "4.2 mm /24h", color: "bg-primary/10 text-primary", badge: <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-low text-primary font-semibold">Optimal</span> },
                { icon: "humidity_percentage", label: "Humidity Bus", value: "78% RH stable", color: "bg-primary/10 text-primary", badge: <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-low text-primary font-semibold">Nominal</span> },
                { icon: "thermostat", label: "Temperature", value: "27.4 °C avg", color: "bg-primary/10 text-primary", badge: <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container-low text-primary font-semibold">In-range</span> },
                { icon: "sunny", label: "Sunshine Hours", value: "Deficit (-14d)", color: "bg-error text-on-error", isAlert: true, badge: <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-error text-on-error text-[10px] font-bold font-mono uppercase">Alert</span> },
              ].map((ind) => (
                <div key={ind.label} className={`flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest border shadow-sm group transition-all ${ind.isAlert ? "border-error/40 hover:border-error bg-error-container/20" : "border-outline-variant/30 hover:border-primary/40"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${ind.color} ${ind.isAlert ? "shadow-sm" : ""}`}>
                      <span className={`material-symbols-outlined text-base ${ind.isAlert ? "animate-pulse" : ""}`}>{ind.icon}</span>
                    </div>
                    <div>
                      <p className={`text-[11px] font-medium uppercase font-mono tracking-wider ${ind.isAlert ? "text-error font-semibold" : "text-secondary"}`}>{ind.label}</p>
                      <p className={`text-sm font-bold mt-0.5 ${ind.isAlert ? "text-error" : "text-on-surface"}`}>{ind.value}</p>
                    </div>
                  </div>
                  {ind.badge}
                </div>
              ))}
            </div>
          </section>

          {/* Yield Impact Alert */}
          <div className="relative overflow-hidden rounded-xl border border-error/30 bg-surface-container-lowest p-5 shadow-sm">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-error" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pl-2">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-error/10 text-error flex items-center justify-center shrink-0 mt-0.5 border border-error/20">
                  <span className="material-symbols-outlined text-xl">thunderstorm</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error text-on-error text-[10px] font-bold font-mono uppercase tracking-wider">Yield Impact Alert</span>
                    <span className="text-xs text-secondary font-mono">• Rambukkana Sensor Array #4B</span>
                    <span className="text-xs font-mono text-error font-medium px-2 py-0.5 rounded bg-error-container/40">Confidence: 94.2%</span>
                  </div>
                  <p className="text-on-surface text-sm md:text-base font-semibold leading-snug">
                    AI models forecast a <span className="text-error font-bold">10.0% supply deficit</span> in mid-February Codiaeum yield from a 14-day direct sunlight deficiency.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                    <div className="flex items-center gap-1.5 font-mono text-error font-semibold">
                      <span className="material-symbols-outlined text-sm">trending_down</span> Estimated Loss: -1,250 units
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-secondary">calendar_clock</span> Critical Window: Feb 10 – Feb 24
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-md">
                      <span className="material-symbols-outlined text-sm">tips_and_updates</span> Countermeasure: Deploy Auxiliary LED/HID Arrays +4.5h/day
                    </div>
                  </div>
                </div>
              </div>
              <button className="px-3.5 py-2 rounded-lg bg-error hover:bg-error/90 text-on-error font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all shrink-0">
                <span className="material-symbols-outlined text-sm">tune</span> Deploy Remediation
              </button>
            </div>
          </div>

          {/* Controls: Variety + Slider */}
          <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <label className="font-semibold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-base">potted_plant</span> Target Crop Variety
                  </label>
                  <span className="text-xs text-secondary font-mono bg-surface-container-low px-2 py-0.5 rounded border border-outline-variant/30">Zone: Rambukkana Sector A</span>
                </div>
                <select className="w-full h-11 pl-3.5 pr-10 bg-surface-container-low hover:bg-surface-container-lowest border border-outline-variant text-on-surface text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm">
                  <option selected>Codiaeum variegatum (Croton Mammy / Petra)</option>
                  <option>Dracaena sanderiana (Lucky Bamboo)</option>
                  <option>Aglaonema commutatum (Silver Queen)</option>
                  <option>Anthurium andraeanum (Flamingo Lily)</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <label className="font-semibold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-base">date_range</span> Forecast Timeline Horizon
                  </label>
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                    {sliderLabels[sliderVal - 1]}
                  </span>
                </div>
                <div className="pt-2">
                  <input className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" type="range" min="1" max="3" step="1" value={sliderVal} onChange={(e) => setSliderVal(Number(e.target.value))} />
                  <div className="flex justify-between text-xs text-secondary font-mono mt-2">
                    {["1 Month (30d)", "2 Months (60d)", "3 Months (90d)"].map((l, i) => (
                      <span key={l} className={`flex items-center gap-1 ${sliderVal === i + 1 ? "font-bold text-primary" : ""}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${sliderVal === i + 1 ? "bg-primary" : "bg-outline-variant"}`} />{l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chart Section */}
          <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/20">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-on-surface text-lg font-bold">Projected Supply vs. Contract Demand</h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">Dynamic Model v3.4</span>
                </div>
                <p className="text-xs text-secondary mt-0.5">Bi-weekly volumetric projections reconciled against agricultural contract baselines</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-surface-container-low border border-outline-variant/30">
                  <span className="w-3 h-1 bg-primary rounded-full ring-2 ring-primary/30" />
                  <span className="text-on-surface font-mono text-xs font-semibold">Projected Supply</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-surface-container-low border border-outline-variant/30">
                  <span className="w-4 h-0.5 border-t-2 border-dashed border-[#764900]" />
                  <span className="text-on-surface font-mono text-xs font-semibold">Contract Demand (11,500)</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-error-container/30 border border-error/30 text-error">
                  <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                  <span className="font-mono text-xs font-bold">Deficit Period (Feb W2)</span>
                </div>
              </div>
            </div>

            {/* SVG Chart */}
            <div className="pt-6">
              <div className="relative flex h-72 w-full">
                <div className="w-12 h-60 flex flex-col justify-between items-end pr-2 text-[11px] font-mono text-secondary select-none">
                  <span>14,000</span>
                  <span className="text-primary font-semibold">12,500</span>
                  <span className="text-[#764900] font-bold bg-tertiary-fixed/40 px-1 rounded">11,500</span>
                  <span className="text-error font-semibold">10,000</span>
                  <span>8,000</span>
                </div>
                <div className="flex-1 h-60 relative border-b border-l border-outline-variant/40">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-25">
                    {[1, 2, 3, 4, 5].map((i) => (<div key={i} className="border-b border-outline w-full" />))}
                  </div>
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 240">
                    <defs>
                      <linearGradient id="supplyGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#004532" stopOpacity="0.35" />
                        <stop offset="70%" stopColor="#004532" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#004532" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="deficitGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ba1a1a" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#ba1a1a" stopOpacity="0.05" />
                      </linearGradient>
                      <filter id="glow" height="140%" width="140%" x="-20%" y="-20%">
                        <feDropShadow dx="0" dy="3" floodColor="#004532" floodOpacity="0.3" stdDeviation="3" />
                      </filter>
                      <filter id="deficitGlow" height="140%" width="140%" x="-20%" y="-20%">
                        <feDropShadow dx="0" dy="2" floodColor="#ba1a1a" floodOpacity="0.4" stdDeviation="4" />
                      </filter>
                    </defs>
                    <line stroke="#764900" strokeDasharray="6 4" strokeWidth="2" x1="0" x2="700" y1="120" y2="120" opacity="0.85" />
                    <rect fill="#ffddb8" fillOpacity="0.75" height="20" rx="4" width="155" x="540" y="106" />
                    <text fill="#563400" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" x="548" y="120">Contract Min: 11,500</text>
                    <path d="M 233 120 L 233 104 C 290 120, 310 166, 350 166 C 390 166, 420 136, 466 136 L 466 120 Z" fill="url(#deficitGradient)" opacity="0.8" />
                    <path d="M 50 84 C 95 72, 110 68, 140 68 C 185 68, 205 95, 233 104 C 290 122, 310 166, 350 166 C 390 166, 420 136, 466 136 C 515 136, 545 84, 580 76 C 620 68, 640 55, 665 52 L 665 240 L 50 240 Z" fill="url(#supplyGradient)" />
                    <path d="M 50 84 C 95 72, 110 68, 140 68 C 185 68, 205 95, 233 104 C 290 122, 310 166, 350 166 C 390 166, 420 136, 466 136 C 515 136, 545 84, 580 76 C 620 68, 640 55, 665 52" fill="none" filter="url(#glow)" stroke="#004532" strokeLinecap="round" strokeWidth="3.5" />
                    {[
                      { cx: 50, cy: 84, label: "12,500" },
                      { cx: 140, cy: 68, label: "12,800" },
                      { cx: 233, cy: 104, label: "11,900" },
                      { cx: 580, cy: 76, label: "12,600" },
                      { cx: 665, cy: 52, label: "13,200" },
                    ].map((p) => (
                      <g key={p.cx} className="cursor-pointer">
                        <circle cx={p.cx} cy={p.cy} fill="#ffffff" r="6" stroke="#004532" strokeWidth="2.5" />
                        <circle cx={p.cx} cy={p.cy} fill="#004532" r="2.5" />
                        <text fill="#121c2a" fontFamily="JetBrains Mono" fontSize="10" fontWeight="600" textAnchor="middle" x={p.cx} y={p.cy - 16}>{p.label}</text>
                      </g>
                    ))}
                    {/* Deficit point */}
                    <g className="cursor-pointer">
                      <circle cx="350" cy="166" fill="#ba1a1a" filter="url(#deficitGlow)" r="8" stroke="#ffdad6" strokeWidth="3" />
                      <circle cx="350" cy="166" fill="#ffffff" r="3" />
                      <g transform="translate(250, 182)">
                        <rect fill="#ba1a1a" filter="url(#deficitGlow)" height="38" rx="6" width="200" />
                        <polygon fill="#ba1a1a" points="100,-6 94,0 106,0" />
                        <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" textAnchor="middle" x="100" y="16">-10% Drop • 10,350 Units</text>
                        <text fill="#ffdad6" fontFamily="JetBrains Mono" fontSize="9" fontWeight="500" textAnchor="middle" x="100" y="29">Deficit: -1,150 vs 11,500 target</text>
                      </g>
                    </g>
                    {/* Recovery point */}
                    <g className="cursor-pointer">
                      <circle cx="466" cy="136" fill="#ffffff" r="6" stroke="#764900" strokeWidth="2.5" />
                      <circle cx="466" cy="136" fill="#764900" r="2.5" />
                      <rect fill="#ffddb8" height="18" rx="3" width="56" x="438" y="146" />
                      <text fill="#563400" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" textAnchor="middle" x="466" y="159">11,100</text>
                    </g>
                  </svg>
                  <div className="absolute -bottom-7 inset-x-0 flex justify-between px-2 text-xs font-mono">
                    {["Jan W3", "Jan W4", "Feb W1"].map((l) => (<span key={l} className="text-on-surface-variant font-medium">{l}</span>))}
                    <span className="text-error font-bold px-1.5 py-0.5 rounded bg-error-container/30">Feb W2</span>
                    <span className="text-[#764900] font-semibold px-1 rounded bg-tertiary-fixed/30">Feb W3</span>
                    {["Mar W1", "Mar W2"].map((l) => (<span key={l} className="text-on-surface-variant font-medium">{l}</span>))}
                  </div>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-2">
                {[
                  { label: "Contracted Target", value: "11,500", unit: "units/bi-wk", sub: "Minimum committed volume", icon: "assignment_turned_in", iconBg: "bg-surface-container-high text-on-surface-variant" },
                  { label: "Projected Average", value: "12,050", unit: "units/bi-wk", sub: "+4.7% surplus aggregate", subColor: "text-emerald-600", icon: "trending_up", iconBg: "bg-primary/10 text-primary", valueColor: "text-primary" },
                  { label: "Mid-Feb Sunshine Deficit", value: "-1,150", unit: "units gap", sub: "Critical alert: Feb W2 dip", subColor: "text-error", icon: "wb_cloudy", iconBg: "bg-error text-on-error shadow-sm", valueColor: "text-error", cardBg: "bg-error-container/20 border-error/30" },
                ].map((m) => (
                  <div key={m.label} className={`p-4 rounded-xl border flex items-center justify-between shadow-sm hover:border-primary/40 transition-all ${m.cardBg || "bg-surface-container-low border-outline-variant/30"}`}>
                    <div>
                      <div className={`flex items-center gap-1 text-xs font-medium ${m.valueColor ? m.valueColor : "text-secondary"}`}>
                        <span>{m.label}</span>
                        {m.sub?.includes("surplus") && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                        {m.sub?.includes("Critical") && <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping" />}
                      </div>
                      <p className={`text-xl font-bold font-mono mt-0.5 ${m.valueColor || "text-on-surface"}`}>{m.value} <span className="text-xs font-normal text-secondary">{m.unit}</span></p>
                      <span className={`text-[11px] font-mono mt-1 inline-block ${m.subColor || "text-secondary"}`}>{m.sub}</span>
                    </div>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${m.iconBg}`}>
                      <span className="material-symbols-outlined text-xl">{m.icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
