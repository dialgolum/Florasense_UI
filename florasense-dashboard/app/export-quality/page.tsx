"use client";

import { useState } from "react";

const requirements = [
  { id: 1, name: "Leaf Length", cat: "Geometric", target: "6.0 – 10.0 cm", tol: "Tolerance: ±0.5 cm" },
  { id: 2, name: "Minimum Stems", cat: "Structural", target: "≥ 3 Stems per pot", tol: "Strict Minimum" },
  { id: 3, name: "Yellow Leaves", cat: "Discoloration", target: "0 Count (Not Allowed)", tol: "Zero Chlorosis", catColor: "bg-error-container text-on-error-container" },
  { id: 4, name: "Visible Damage", cat: "Integrity", target: "0 Lesions / No Tears", tol: "Threshold: 0" },
  { id: 5, name: "Plant Height", cat: "Dimensional", target: "15.0 – 25.0 cm", tol: "Soil line to apex" },
  { id: 6, name: "Internodal Spacing", cat: "Density", target: "≤ 2.5 cm", tol: "Compact nodal habit" },
];

const tableRows = [
  { char: "Leaf Length (16 / 20 Cleared)", detected: "8.2 cm avg (7.1 – 9.4 cm)", spec: "6.0 – 10.0 cm (±0.5cm)", status: "PASS (16 Plants)", statusType: "pass", conf: "94.2%", action: "Inspect Details" },
  { char: "Minimum Stems (Pot #14 Violation)", detected: "Pot #14: 2 Stems Detected (Batch avg: 3.8)", spec: "Min 3 Stems per pot (Strict)", status: "REJECT (1 Plant)", statusType: "reject", conf: "98.4%", action: "View Disqualification" },
  { char: "Visible Damage (Pot #04 Flag)", detected: "Pot #04: 1.2mm margin tear", spec: "Not Allowed (Threshold: 0)", status: "MANUAL REVIEW (3 Plants)", statusType: "warn", conf: "71.3%", action: "View Crop Alert" },
  { char: "Yellow Leaves / Chlorosis Scan", detected: "0 Chlorotic Laminae (20/20 Clear)", spec: "Not Allowed (0 Count)", status: "PASS (16 Plants)", statusType: "pass", conf: "97.8%", action: "Inspect Details" },
  { char: "Plant Height Distribution", detected: "21.4 cm avg (Min: 20.8, Max: 22.4)", spec: "15.0 – 25.0 cm", status: "PASS (16 Plants)", statusType: "pass", conf: "94.6%", action: "Inspect Details" },
];

export default function ExportQualityPage() {
  const [reqs, setReqs] = useState(requirements);

  return (
    <>
      <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-xl border-b border-surface-variant/50 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-16 w-full px-6 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-primary">PhytoAudit</span>
            <span className="text-outline">/</span>
            <span className="font-semibold text-[15px] text-on-surface">Plant Export Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-outline-variant/30">
              <div className="text-right hidden sm:block">
                <div className="font-semibold text-[13px] text-on-surface">Dr. Elena Vance</div>
                <div className="text-[12px] text-on-surface-variant">Lead Agronomist (QA-7)</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">account_circle</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full bg-surface min-h-screen flex flex-col flex-1">
        {/* Batch Context */}
        <section className="w-full bg-surface-container-low px-6 md:px-8 py-3.5 border-b border-surface-variant/40 shadow-sm">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-on-surface">Batch EXP-2024-8849</span>
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[11px] font-semibold uppercase tracking-wider font-mono">Pre-Shipment Audit</span>
                  </div>
                  <p className="text-[13px] text-on-surface-variant">Ficus Lyrata &apos;Bambino&apos; • Dwarf Fiddle Leaf Fig</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  { label: "Total Consignment", value: "120 Units (Pots)" },
                  { label: "Representative Sample", value: "12 Inspected (10%)" },
                  { label: "Destination Terminal", value: "Rotterdam (NLRTM) • EU" },
                ].map((s) => (
                  <div key={s.label} className="bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-surface-variant/40 shadow-xs">
                    <span className="text-[11px] text-on-surface-variant block uppercase tracking-wider font-semibold font-mono">{s.label}</span>
                    <span className="text-[13px] text-on-surface font-semibold font-mono">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="w-full px-6 md:px-8 py-6 flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Buyer Requirements */}
            <section className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-surface-container-lowest rounded-xl p-5 border border-surface-variant/40 shadow-sm flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-primary">
                      <span className="material-symbols-outlined text-[20px]">tune</span>
                      <h2 className="text-[18px] text-on-surface font-bold">Buyer Requirements</h2>
                    </div>
                    <p className="text-[13px] text-on-surface-variant mt-0.5">Target quality limits for Lot Clearance</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-semibold text-[13px] flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">add</span> Add Rule
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {reqs.map((r, i) => (
                    <div key={r.id} className="p-3 rounded-lg bg-surface-container-low flex items-start justify-between gap-3 transition-all hover:bg-surface-container border border-surface-variant/30">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] text-on-surface font-semibold truncate">{i + 1}. {r.name}</span>
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${r.catColor || "bg-surface-container-high text-on-surface-variant"}`}>{r.cat}</span>
                        </div>
                        <div className="text-[13px] text-on-surface-variant">
                          Target: <span className="font-semibold text-on-surface">{r.target}</span> • {r.tol}
                        </div>
                      </div>
                      <button onClick={() => setReqs(reqs.filter((x) => x.id !== r.id))} className="p-1 text-outline hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-lg bg-surface-container text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
                  <span className="text-[13px]">{reqs.length} validation criteria bound to Buyer Contract #FC-2024-NL-04.</span>
                </div>
              </div>
            </section>

            {/* Photometric Rig */}
            <section className="lg:col-span-7 flex flex-col gap-4">
              <div className="bg-surface-container-lowest rounded-xl p-5 border border-surface-variant/40 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-primary">
                      <span className="material-symbols-outlined text-[20px]">center_focus_strong</span>
                      <h2 className="text-[18px] text-on-surface font-bold">Photometric Rig Intake</h2>
                    </div>
                    <p className="text-[13px] text-on-surface-variant">Station Bay #4 • Multi-angle calibrated sensor feed</p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30">
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden group">
                    <img alt="Botanical inspection tray" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi1w-pCcrtBNEqtDDq1DrdVlpSSuMzj5-Egjatcj-yrNdHCaVBuh_OIgLMlKTUiqIBMBIMAfIcajlt99XIt0zRtf_ZdTndL-XDb71RSfQ1OkkGGd8AIwob7Vyg8X6oWcqTHMOyXh10mNZ0IKXvxI07y7W-x50kfFgMh092wHwLevVLKUEjp9fVU08I9v3xcVnY-pxgAx-TF4KcHq1nz2-9dM3AxFSLSMxLBDSB9HSIQrDQs2QYbZ-x" />
                    <div className="absolute top-2 left-2">
                      <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary text-[11px] font-semibold flex items-center gap-1 shadow-sm font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
                        Active Batch Intake: Tray #01 (20 Specimen Netpots)
                      </span>
                    </div>
                  </div>
                </div>
                {/* Specimens */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "01", h: "21.2cm", status: "Ready for Eval", color: "text-primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCddpKw0ZPaRWiB2_8Mb5BZQF-960rTby40QA-m8WxrpJKJxZzd1ynOc2FKcfOJ-yS66mR-WOG2Zqnb4RXh5HK82CDNG5r7n9oBUNqVo5vYu-h0dnCkQ3-5CqUo87jOFn4BbTGAElvb_X-QPUIb_uOyAKBWV9CBIadM8sH1kyq2flQcbBp1cxqhAU1EhkE2BmV2OmnoFwAUgbrAatwmL56uSQu6T81C7T-JhVUynhWB1U95OQzFSmTK" },
                    { id: "02", h: "22.0cm", status: "Ready for Eval", color: "text-primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTcutddH6fCUyXqWW2rgUOxPrDOUDkmHO7yYlHucsXlthRCoWklMNHxhcgjdTD7NiIulnjlx8MUJLh5AhqMnrbAs_ThTavQvU5mg9ltYT-E027BkXNg73B_fkas8kpAUK9wL6NYBmGl315lWkTjIzjApABB1VuUIO6ski5PeaFtrw8SzV3y8uji2EOyyATUOZ_4PcWgQd8vDY4FbztWAxfqXVEw12TnfNbcvJ8M-ZzqJqx0NLbLsIg" },
                    { id: "03", h: "20.8cm", status: "Ready for Eval", color: "text-primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOSIxH4y52XJ7EcZ0mZUsFIZ8GOQc7AsV4Sned_YZIajW9jcIBjOXjDW8y49VlQ_VzWAQcsprMB0XpC34uBc9MNeQmHrt_UT8ay2pEph9iLn-XlrDXKorKNEpuQgFs80erIesTkkF8Fo8ARL3n3SMjLkIzf4bxWD1Akldjtx_S76RiaIQWLL4Dh8z5fnUlz1URK1DXdE1CMtFb10wbUxHcpxcLir3oXo-z9ETxq4uY-UKm5I-PBqm5" },
                    { id: "04", h: "1 Alert", status: "Flagged Specimen", color: "text-tertiary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5flHF2LvHqi-7BQuWZh13hv5Of1LvuxAc3fE8fexPMZBuX0rptOdDPAVi1-z4TSl81yR1V_4tvMnhJwgodbBnElH9inKPjN1DNb4egAGt7Clb3g81tLtdHDbZnltug63r4HS8VuJTUCpJ6dw8nMb_WyTC1Ln8XZS8zf-yA8TymMeC0nD5NzxuxNYcAUwoGG5XtqzHlD_3xPWwWUxaHL8Pekl3Hp8BWRvJW_s7CztoHxbLDDc4QLKU" },
                  ].map((s) => (
                    <div key={s.id} className={`cursor-pointer group relative rounded-lg overflow-hidden bg-surface-container-low transition-all border ${s.id === "04" ? "border-tertiary-fixed-dim" : "border-surface-variant/30"}`}>
                      <div className="h-28 w-full relative">
                        <img className="w-full h-full object-cover" alt={`Pot ${s.id}`} src={s.img} />
                        <span className={`absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[10px] font-semibold font-mono ${s.id === "04" ? "bg-tertiary-container text-on-tertiary-container" : "bg-primary-container text-on-primary"}`}>POT #{s.id}</span>
                        <span className={`absolute bottom-1.5 right-1.5 px-1 py-0.5 rounded text-[10px] font-mono ${s.id === "04" ? "bg-tertiary-fixed text-on-tertiary-fixed font-bold" : "bg-surface-container-lowest/90 text-primary"}`}>
                          {s.id === "04" ? s.h : `H: ${s.h}`}
                        </span>
                      </div>
                      <div className="p-1.5 bg-surface-container-lowest text-center">
                        <span className={`text-[11px] font-semibold ${s.color}`}>{s.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full sm:w-auto self-end px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-semibold text-[14px] flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all">
                  <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                  Detect &amp; Evaluate Batch (AI Engine)
                </button>
              </div>
            </section>
          </div>

          {/* Results Table */}
          <section className="w-full flex flex-col gap-5">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[24px]">analytics</span>
              <h2 className="text-xl text-on-surface font-bold">AI Detection &amp; Specification Matching Results</h2>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total Plants Inspected", value: "20", sub: "Plants", badge: "Tray #01" },
                { label: "Passed Specimens", value: "16", sub: "/ 20 Plants", badge: "80.0%", badgeColor: "bg-secondary-container text-on-secondary-container" },
                { label: "Manual Review", value: "3", sub: "/ 20 Plants", badge: "15.0%", badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed" },
                { label: "Rejected / Failed", value: "1", sub: "/ 20 Plants", badge: "5.0%", badgeColor: "bg-error-container text-on-error-container", valueColor: "text-error" },
              ].map((k) => (
                <div key={k.label} className="bg-surface-container-lowest p-4 rounded-xl border border-surface-variant/40 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold font-mono">{k.label}</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className={`text-3xl font-bold tracking-tight ${k.valueColor || "text-primary"}`}>{k.value}</span>
                      <span className="text-[13px] text-on-surface-variant">{k.sub}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[12px] font-bold font-mono ${k.badgeColor || "bg-surface-container text-on-surface"}`}>{k.badge}</span>
                </div>
              ))}
            </div>

            {/* Results Table */}
            <div className="bg-surface-container-lowest rounded-xl border border-surface-variant/40 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant text-[11px] uppercase tracking-wider border-b border-surface-variant/40">
                      <th className="py-3 px-4 font-semibold font-mono">Botanical Characteristic</th>
                      <th className="py-3 px-4 font-semibold font-mono">Detected Value</th>
                      <th className="py-3 px-4 font-semibold font-mono">Buyer Specification</th>
                      <th className="py-3 px-4 font-semibold text-center font-mono">Result Status</th>
                      <th className="py-3 px-4 font-semibold text-right font-mono">Confidence</th>
                      <th className="py-3 px-4 font-semibold text-right font-mono">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high/40 text-[14px] text-on-surface">
                    {tableRows.map((r) => (
                      <tr key={r.char} className={`transition-colors ${r.statusType === "reject" ? "bg-error-container/20 hover:bg-error-container/30" : r.statusType === "warn" ? "bg-tertiary-fixed-dim/20 hover:bg-tertiary-fixed-dim/30" : "hover:bg-surface-container-low/60"}`}>
                        <td className="py-3 px-4 font-semibold flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${r.statusType === "reject" ? "bg-error" : r.statusType === "warn" ? "bg-tertiary-container animate-ping" : "bg-primary"}`} />
                          {r.char}
                        </td>
                        <td className="py-3 px-4 font-mono">{r.detected}</td>
                        <td className="py-3 px-4 font-mono text-on-surface-variant">{r.spec}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold ${r.statusType === "reject" ? "bg-error text-on-error font-bold shadow-sm" : r.statusType === "warn" ? "bg-tertiary-fixed text-on-tertiary-fixed font-bold shadow-sm" : "bg-secondary-container text-on-secondary-container"}`}>
                            {r.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 text-right font-mono font-semibold ${r.statusType === "reject" ? "text-error" : r.statusType === "warn" ? "text-tertiary-container" : "text-primary"}`}>{r.conf}</td>
                        <td className="py-3 px-4 text-right">
                          <button className={`px-2.5 py-1 rounded text-[11px] font-semibold ${r.statusType === "reject" ? "bg-error text-on-error shadow-sm" : r.statusType === "warn" ? "bg-tertiary-container text-on-tertiary shadow-sm" : "text-primary hover:underline"}`}>
                            {r.action}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Decision Card */}
            <div className="rounded-xl px-5 py-3.5 bg-surface-container-lowest border border-surface-variant/40 shadow-sm">
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5 max-w-3xl">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary-container shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">warning</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold tracking-wider uppercase font-mono w-fit">Manual Review Required</span>
                    <h3 className="text-[15px] text-on-surface font-bold tracking-tight">Human Verification Mandated for Quarantine Clearance</h3>
                    <p className="text-[12px] text-on-surface-variant">&apos;Visible Damage&apos; triggered a potential micro-tear (1.2mm) on Specimen #04 with 71.3% confidence. Agronomist sign-off required.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-semibold text-[12px] transition-colors flex items-center gap-1.5 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">refresh</span> Re-evaluate #04
                  </button>
                  <button className="px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary font-semibold text-[12px] hover:opacity-95 shadow-sm transition-all flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">verified</span> Override PASS &amp; Issue Certificate
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-inverse-surface text-inverse-on-surface px-6 md:px-8 py-4 text-center">
        <p className="text-[12px] font-mono">National Plant Protection Organization • Export Certification Protocol v4.8 • <span className="text-primary-fixed-dim font-semibold">ISO 17020 ACCREDITED</span> • Station ID: AS-SF0-09 • PhytoAudit Enterprise © 2024</p>
      </footer>
    </>
  );
}
