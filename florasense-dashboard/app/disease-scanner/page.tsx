"use client";

import { useState } from "react";

export default function DiseaseScannerPage() {
  const [activeTab, setActiveTab] = useState<"scan" | "results" | "register">("scan");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showConfidenceBadge, setShowConfidenceBadge] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [selectedTags, setSelectedTags] = useState<string[]>([
    "Variegation browning / sector necrosis",
    "Foliar water-soaked spots"
  ]);

  const allTags = [
    "Variegation browning / sector necrosis",
    "Foliar water-soaked spots",
    "Yellow chlorotic halos",
    "Petiole rot / stem collapse",
    "Powdery mildew on bracts",
    "Bud blast / bloom blight"
  ];

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  function triggerDiagnosis() {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowConfidenceBadge(true);
      setActiveTab("results");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 650);
  }

  function handleRegistrationSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ticketId = 'REG-' + Math.floor(1000 + Math.random() * 9000);
    setToastMessage(`Successfully submitted! Pathogen registration and lab verification is processing (Ticket #${ticketId}).`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 h-14 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-4 md:px-6 w-full border-b border-outline-variant/30">
        <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
          <span className="material-symbols-outlined text-[16px] text-secondary">hub</span>
          <span className="text-on-surface font-semibold hidden sm:inline">Florasense Core</span>
          <span className="text-outline hidden sm:inline">/</span>
          <span>Phytosanitary Protocol</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface-variant font-mono text-xs">
            <span className="material-symbols-outlined text-[14px] text-secondary">language</span>
            <span>EN-US</span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant">
            <button className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">security</span>
            </button>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </header>

      <main className="relative w-full p-6 md:p-8 min-h-screen bg-surface">
        <div className="flex flex-col w-full pb-12 max-w-[1440px] mx-auto">
          {/* Top Utility Sub-Header & Breadcrumb Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 pb-6 mb-4">
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2 font-mono text-[11px] text-on-surface-variant flex-wrap uppercase tracking-wider">
                <span>Ornamental Nursery</span>
                <span className="text-outline">/</span>
                <span>Foliage &amp; Flowering Taxa</span>
                <span className="text-outline">/</span>
                <span className="text-secondary font-semibold">Specimen Scan</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap mt-1">
                <h1 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight">Ornamental Plant Disease Diagnosis &amp; Pathogen Intake</h1>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[11px] font-bold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                    Engine v4.8 Active
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface text-[11px] font-bold font-mono">
                    <span className="material-symbols-outlined text-[12px] text-secondary">videocam</span>
                    Pipeline Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Tab Controller */}
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-xl bg-surface-container-low shadow-sm mb-8 w-fit border border-outline-variant/30">
            <button
              onClick={() => setActiveTab("scan")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${activeTab === "scan" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}
            >
              <span className="material-symbols-outlined text-[18px]">biotech</span>
              <span>Live Intake &amp; Diagnosis</span>
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${activeTab === "results" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}
            >
              <span className="material-symbols-outlined text-[18px]">lab_profile</span>
              <span>Diagnostic Results &amp; SOP</span>
              {showConfidenceBadge && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-tertiary-fixed text-on-tertiary-fixed font-bold ml-1">96.4% Alert</span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${activeTab === "register" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}
            >
              <span className="material-symbols-outlined text-[18px]">app_registration</span>
              <span>New Disease Registration</span>
            </button>
          </div>

          {/* Notification Banner */}
          {toastMessage && (
            <div className="mb-6 p-4 rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant shadow-md flex items-center justify-between transition-all border border-secondary/20">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-on-secondary-fixed">Pathogen Profile Submitted</span>
                  <span className="text-sm">{toastMessage}</span>
                </div>
              </div>
              <button className="p-1 text-on-secondary-fixed hover:opacity-75" onClick={() => setToastMessage(null)}>
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          )}

          {/* VIEW 1: Specimen Intake */}
          {activeTab === "scan" && (
            <section className="w-full flex flex-col gap-6 animate-[fadeIn_0.3s_ease-out]">
              <div className="p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 border border-outline-variant/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">troubleshoot</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-on-surface">Glasshouse Triage Directive: High-Value Foliar Inspection</span>
                    <span className="text-sm text-on-surface-variant mt-0.5">Calibrate diffuse shade canopy lighting to 750–850 lux. Position variegated chimeric leaf sectors squarely within the focal plane.</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 bg-surface px-3 py-1.5 rounded-lg border border-outline-variant/30">
                  <span className="font-mono text-xs text-secondary font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">sensors</span> Optical Calibration: ±0.03mm
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Form */}
                <div className="lg:col-span-7 flex flex-col gap-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">assignment</span>
                      <h2 className="text-xl font-bold text-on-surface">Specimen Intake Parameters</h2>
                    </div>
                    <span className="font-mono text-[10px] text-outline uppercase tracking-wider font-bold">Form Ref FL-SCAN-902</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold flex items-center justify-between">
                        <span>Batch ID Code</span>
                        <span className="text-secondary font-normal">Auto-Index Ready</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline">qr_code_2</span>
                        <input className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="FL-9042-C" type="text" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Nursery Zone &amp; Sector</label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline">domain</span>
                        <select defaultValue="Glasshouse B - Aroid & Foliage Propagation Bay" className="w-full pl-9 pr-8 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                          <option value="Glasshouse B - Aroid & Foliage Propagation Bay">Glasshouse B - Aroid &amp; Foliage Propagation Bay</option>
                          <option value="Greenhouse 3 - Variegated Cultivar Nursery (Mother Stock)">Greenhouse 3 - Variegated Cultivar Nursery (Mother Stock)</option>
                          <option value="Quarantine Misting Tunnel C (Biosecurity L2)">Quarantine Misting Tunnel C (Biosecurity L2)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 text-[18px] text-outline pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Plant Variety / Botanical Taxon</label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline">potted_plant</span>
                      <select defaultValue="Monstera deliciosa 'Albo Variegata'" className="w-full pl-9 pr-8 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                        <option value="Monstera deliciosa 'Albo Variegata'">Monstera deliciosa &apos;Albo Variegata&apos; (Chimeric Araceae)</option>
                        <option value="Philodendron 'Pink Princess' (Cultivar TC-4 Mother Stock)">Philodendron &apos;Pink Princess&apos; (Cultivar TC-4 Mother Stock)</option>
                        <option value="Anthurium clarinervium (High-Sensitivity Velvet Foliage)">Anthurium clarinervium (High-Sensitivity Velvet Foliage)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 text-[18px] text-outline pointer-events-none">expand_more</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-2">
                    <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold flex items-center justify-between">
                      <span>Observed Macroscopic Manifestations</span>
                      <span className="text-outline font-normal">Select all detected</span>
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {allTags.map((tag) => {
                        const isSelected = selectedTags.includes(tag);
                        return (
                          <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1.5 rounded-full text-xs transition-all flex items-center gap-1 border ${isSelected ? "bg-primary-container text-on-primary border-primary-container shadow-sm font-semibold" : "bg-surface text-on-surface-variant border-outline-variant/30 hover:border-primary/50"}`}
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">{isSelected ? "check" : "add"}</span>
                            <span>{tag}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-2">
                    <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Agronomist Field Notes</label>
                    <textarea className="w-full p-3 rounded-lg bg-surface border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" rows={3} defaultValue="Spotted necrotic margin along chimeric variegation sector of tertiary leaf blade. High risk of spread across ornamental mother stock. Water-soaked halo visible on abaxial cuticle under 10x inspection loupe." />
                  </div>

                  <div className="pt-4 mt-auto">
                    <button
                      onClick={triggerDiagnosis}
                      disabled={isAnalyzing}
                      className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary hover:opacity-95 disabled:opacity-80 disabled:cursor-not-allowed font-semibold text-base transition-all shadow-md flex items-center justify-center gap-3"
                    >
                      {isAnalyzing ? (
                        <>
                          <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                          <span>Extracting Foliar Features &amp; Matching...</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                          <span>Run AI Pathogen Diagnosis</span>
                          <span className="ml-auto font-mono text-xs text-on-primary-container font-normal">Inference ~420ms</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Optical Viewport */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-outline-variant/30 h-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">center_focus_strong</span>
                        <h3 className="font-semibold text-on-surface">Optical Ingestion Viewport</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high font-mono text-[10px] uppercase font-bold text-on-surface border border-outline-variant/20">Camera ID: OPT-02</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden bg-inverse-surface text-inverse-on-surface min-h-[320px] flex flex-col justify-between p-4 group">
                      <img className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 pointer-events-none" alt="Specimen Scan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrr0_P53Ec5DyQWVjRw5_ornYYpX6YccH7xTtpvabS22wtQ8J-aYmndsj-3SaGh_OHv9USruQYfjpHtjgBvnsKAzQV6oejRM-pgX0JHBBMUnqi9bLU6y8UWHc_A-wpppNSdS96Tr1SpsGSLdbbyuebxJrXPqlMtBPwbFoqi91Ea_wC_xmBt8mK60seUS8RJZ2YVDUMFvndF8eKzCK_q8bPTRUU0Debrsh_stD8rQoeqQzVvCMTu7O4"/>
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-inverse-surface/80 backdrop-blur-md font-mono text-[11px] text-inverse-on-surface shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                          <span>FOV: 140mm macro</span>
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-inverse-surface/80 backdrop-blur-md font-mono text-[11px] text-secondary-fixed">
                          <span className="material-symbols-outlined text-[13px]">grid_4x4</span>
                          <span>8.4 MP Focal Matrix</span>
                        </div>
                      </div>

                      <div className="relative z-10 self-center w-48 h-48 border-2 border-dashed border-error/90 rounded-lg p-2 flex flex-col justify-between pointer-events-none bg-error/10 backdrop-blur-[1px]">
                        <div className="flex items-center justify-between">
                          <span className="bg-error text-on-error px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-bold">Target Lesion Alpha</span>
                          <span className="font-mono text-[10px] text-white">ΔE 4.8</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-white bg-inverse-surface/75 px-1.5 py-0.5 rounded">
                          <span>Dia: 14.2mm</span>
                          <span className="text-tertiary-fixed">Active Halos</span>
                        </div>
                      </div>

                      <div className="relative z-10 flex items-center justify-between mt-auto pt-4">
                        <div className="flex items-center gap-2">
                          <button className="px-2 py-1.5 rounded-lg bg-inverse-surface/90 hover:bg-inverse-surface text-inverse-on-surface font-mono text-[11px] flex items-center gap-1 transition-colors">
                            <span className="material-symbols-outlined text-[15px]">photo_camera</span> Retake
                          </button>
                          <button className="px-2 py-1.5 rounded-lg bg-inverse-surface/90 hover:bg-inverse-surface text-inverse-on-surface font-mono text-[11px] flex items-center gap-1 transition-colors">
                            <span className="material-symbols-outlined text-[15px]">upload_file</span> File
                          </button>
                        </div>
                        <span className="font-mono text-[10px] text-white/80">specimen_FL9042_c.raw</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-auto">
                      {[
                        { l: "Luminance", v: "846 lx", s: "Optimal" },
                        { l: "Chromaticity", v: "CIE-Lab", s: "Calibrated" },
                        { l: "Foliar Area", v: "312 cm²", s: "Composite" }
                      ].map((s) => (
                        <div key={s.l} className="p-2 rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/20">
                          <span className="font-mono text-[10px] text-outline uppercase font-bold">{s.l}</span>
                          <span className="font-semibold text-on-surface mt-0.5">{s.v}</span>
                          <span className="text-xs text-secondary mt-0.5 font-medium">{s.s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Nursery Context */}
              <div className="p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-2 border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase font-bold text-on-surface-variant">Glasshouse Canopy Microclimate</span>
                  <span className="font-mono text-xs text-secondary font-semibold">Aroid Bay Sensor GL-08</span>
                </div>
                <div className="flex items-center justify-between text-sm text-on-surface pt-1 border-t border-outline-variant/20">
                  <span>Canopy Humidity: <strong className="text-error font-bold">78.4% RH</strong> (High)</span>
                  <span>VPD: <strong>0.62 kPa</strong> | Temp: <strong>24.6°C</strong></span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-error h-full rounded-full w-[78%]"></div>
                </div>
                <span className="text-xs text-outline mt-1">Diffuse light 820 lx optimal for shade foliage. High humidity accelerates variegation rot by 2.4x.</span>
              </div>
            </section>
          )}

          {/* VIEW 2: Results & SOP */}
          {activeTab === "results" && (
            <section className="w-full flex flex-col gap-6 animate-[fadeIn_0.3s_ease-out]">
              <div className="p-4 md:p-6 rounded-xl bg-error-container text-on-error-container shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 border border-error/20">
                <div className="flex items-start md:items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px] icon-fill">warning</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xl font-bold text-on-error-container">Quarantine Protocol Level 2 Enforced</span>
                      <span className="px-2 py-0.5 rounded bg-tertiary text-on-tertiary font-mono text-[10px] uppercase font-bold tracking-wider">High Infectious Potential</span>
                    </div>
                    <p className="text-sm mt-1 max-w-3xl">
                      Specimen <strong>FL-9042-C</strong> diagnosed with confirmed foliar phytopathogen. Immediate isolation routing required to prevent lateral spread in Zone B.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => alert("Physical lock triggered on Zone B transport cart. Biosecurity team dispatched.")}
                  className="px-4 py-2 rounded-lg bg-tertiary-container text-on-tertiary hover:opacity-90 font-mono text-xs font-semibold transition-all shadow-sm flex items-center gap-2 shrink-0 border border-tertiary/20"
                >
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                  <span>Lock Transport Cart</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Dossier */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-5 border border-outline-variant/30 h-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">clinical_notes</span>
                        <h3 className="font-semibold text-on-surface">Pathogen Identification Dossier</h3>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-outline uppercase border border-outline-variant/30 px-2 py-0.5 rounded">Class: Bacteriota</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-outline-variant/30">
                      <span className="font-mono text-[10px] text-secondary uppercase font-bold">Primary Taxon Identification</span>
                      <h4 className="text-2xl font-bold text-on-surface tracking-tight mt-1">Bacterial Leaf Spot</h4>
                      <span className="font-mono text-sm text-on-surface-variant italic font-semibold">Xanthomonas campestris pv. dieffenbachiae</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-surface-container-high flex flex-col gap-1 border border-outline-variant/20">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-on-surface-variant uppercase font-bold">Model Confidence</span>
                          <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                        </div>
                        <span className="text-2xl font-black text-primary">96.4%</span>
                        <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
                          <div className="bg-secondary h-full rounded-full w-[96.4%]"></div>
                        </div>
                        <span className="font-mono text-[9px] text-on-surface-variant mt-1">Validated via 142k Vectors</span>
                      </div>
                      <div className="p-3 rounded-xl bg-error-container text-on-error-container flex flex-col gap-1 border border-error/20">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-error/80 uppercase font-bold">Severity Stage</span>
                          <span className="material-symbols-outlined text-[16px] text-error icon-fill">warning</span>
                        </div>
                        <span className="text-2xl font-black text-tertiary">Stage 2</span>
                        <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
                          <div className="bg-tertiary h-full rounded-full w-[55%]"></div>
                        </div>
                        <span className="font-mono text-[9px] text-error/80 mt-1">Moderate Tissue Penetration</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                      <span className="font-mono text-[11px] text-on-surface-variant uppercase font-bold">Optical Segmentation Map</span>
                      <div className="relative h-48 rounded-xl overflow-hidden bg-inverse-surface border border-outline-variant/30">
                        <img className="w-full h-full object-cover opacity-90" alt="Segmentation map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLvvNmeiuJ1-wlekfGoAPFYpOIyKUfMqRR1sdUbnK5IjHlJJbPRNCl7E2PqJ4RVsmj-cl1gyjwSGb5ytyRgC8cel1Juj8cQWZrdqgfTiY-IKKb5eDDFXl9kAaYcZbLmitB2JQ6ohbmOcGaJVIauxHm8a00LSYFM1mOcSMt_YYrDjVXlhaeaMJeN7BTBwSdyB3K-H8PnJvR99k2rRdnWba2FhnmzOD-1jl0HdwFSR3UQtiQmxkdfc2a"/>
                        <div className="absolute top-1/4 left-1/4 w-32 h-24 border border-tertiary-fixed-dim bg-tertiary/20 backdrop-blur-[0.5px] rounded p-1.5 flex flex-col justify-between">
                          <span className="bg-tertiary text-on-tertiary text-[10px] font-mono px-1 rounded w-fit font-bold">Lesion Cluster A-1</span>
                          <span className="font-mono text-[10px] text-white self-end bg-inverse-surface/80 px-1 rounded">18.2 cm² Necrosis</span>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 bg-inverse-surface/85 backdrop-blur-md p-2 rounded-lg flex items-center justify-between text-white font-mono text-[10px]">
                          <span>Affected Foliage: <strong className="text-primary-fixed">5.8% Total Area</strong></span>
                          <span className="text-secondary-fixed">Spore Dispersal: Dormant</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 font-mono text-xs pt-4 border-t border-outline-variant/30">
                      <div className="flex justify-between py-1 border-b border-outline-variant/20 text-on-surface-variant">
                        <span>Incubation Estimate:</span>
                        <span className="text-on-surface font-semibold">4 to 7 days prior</span>
                      </div>
                      <div className="flex justify-between py-1 text-on-surface-variant">
                        <span>Risk of Crop Loss without SOP:</span>
                        <span className="text-error font-semibold">45% within 14 days</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: SOP */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-5 border border-outline-variant/30 h-full">
                    <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">medical_services</span>
                        <h3 className="text-xl font-bold text-on-surface">Remediation SOP &amp; Protocol</h3>
                      </div>
                      <span className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-mono text-[10px] font-bold uppercase border border-outline-variant/30">SOP: PHYTO-BAC-08</span>
                    </div>

                    <div className="flex flex-col gap-4">
                      {[
                        { 
                          num: 1, 
                          title: "Physical Batch Isolation & Routing", 
                          badge: "Mandatory", 
                          badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
                          desc: <>Immediately halt automated conveyor intake for <strong>Batch FL-9042-C</strong>. Route cart into <strong>Zone C - Quarantine Bay #04</strong>. Seal protective biosecurity canopy to inhibit splashing water transfer.</>,
                          extra: (
                            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-[11px] text-secondary font-semibold">
                              <span className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded"><span className="material-symbols-outlined text-[14px]">forklift</span> Carrier #08 Assigned</span>
                              <span className="flex items-center gap-1 text-error bg-error/10 px-2 py-1 rounded"><span className="material-symbols-outlined text-[14px]">timer</span> Deadline: Immediate (&lt; 15 mins)</span>
                            </div>
                          )
                        },
                        { 
                          num: 2, 
                          title: "Microclimate & Irrigation Modulation", 
                          badge: "Automated", 
                          badgeColor: "bg-secondary-fixed text-on-secondary-fixed-variant",
                          desc: <>Switch off overhead micro-sprinklers in Zone B Sector 2. Ramp up air circulators to reduce localized leaf surface moisture. Target microclimate: <strong>&lt;60% Relative Humidity</strong> at 21°C.</>,
                          extra: (
                            <div className="p-2 mt-2 rounded-lg bg-surface border border-outline-variant/30 flex items-center justify-between font-mono text-[11px]">
                              <span className="text-on-surface-variant">Automated HVAC Override:</span>
                              <span className="text-secondary font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">done_all</span> Signal Sent to Zone B PLC</span>
                            </div>
                          )
                        },
                        { 
                          num: 3, 
                          title: "Targeted Chemical & Biological Bactericide", 
                          badge: "Prescription", 
                          badgeColor: "bg-surface-container-high text-on-surface",
                          desc: <>Apply prescribed foliar treatment: <strong>Copper Octanoate 0.8% Solution</strong> (Soap formulation) combined with <em>Bacillus amyloliquefaciens</em> strain D747 for systemic immune bolstering.</>,
                          extra: (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 font-mono text-xs">
                              <div className="p-2 rounded bg-surface border border-outline-variant/30 text-on-surface-variant flex flex-col">
                                <span className="text-[10px] uppercase">Dosage Rate:</span>
                                <strong className="text-on-surface mt-0.5">15 mL / Liter spray water</strong>
                              </div>
                              <div className="p-2 rounded bg-surface border border-outline-variant/30 text-on-surface-variant flex flex-col">
                                <span className="text-[10px] uppercase">Treatment Interval:</span>
                                <strong className="text-on-surface mt-0.5">Every 5 days (3 cycles)</strong>
                              </div>
                            </div>
                          )
                        }
                      ].map(step => (
                        <div key={step.num} className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                          <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                            {step.num}
                          </div>
                          <div className="flex flex-col flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                              <h4 className="font-bold text-base text-on-surface">{step.title}</h4>
                              <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase ${step.badgeColor}`}>{step.badge}</span>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                              {step.desc}
                            </p>
                            {step.extra}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 mt-auto border-t border-outline-variant/20">
                      <button 
                        onClick={() => alert('Biosecurity SOP Dispatched!\n- Zone C Quarantine Holding Cell Reserved.\n- Chemical formulation sent to automated dosing cart.\n- Batch FL-9042-C marked for 5-day monitoring.')}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-container text-on-primary hover:opacity-95 font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                        <span>Acknowledge &amp; Dispatch SOP</span>
                      </button>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button 
                          onClick={() => alert('Generating Phytosanitary Export Certificate & Diagnostic Dossier (PDF)...\nDownload started: FL-9042-C_Pathology_Report.pdf')}
                          className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-surface-container-low text-on-surface border border-outline-variant/30 hover:bg-surface-container font-mono text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                          <span>Export PDF</span>
                        </button>
                        <button 
                          onClick={() => { setActiveTab("scan"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                          className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-surface-container-low text-secondary border border-outline-variant/30 hover:bg-surface-container font-mono text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                          <span>Scan Another</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* VIEW 3: Register */}
          {activeTab === "register" && (
            <section className="w-full flex flex-col gap-6 animate-[fadeIn_0.3s_ease-out]">
              <div className="p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 border border-outline-variant/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">potted_plant</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-on-surface text-base">Ornamental Nursery Pathogen &amp; Cultivar Profiling</span>
                    <span className="text-sm text-on-surface-variant mt-0.5">Submit novel symptom patterns and blights on high-value ornamental crops to the Central Agronomy Registry.</span>
                  </div>
                </div>
                <div className="flex items-center shrink-0">
                  <span className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-mono text-[11px] font-bold border border-outline-variant/20 shadow-sm">
                    Ornamental Registry: Tier-1 Live
                  </span>
                </div>
              </div>

              <form onSubmit={handleRegistrationSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Form */}
                <div className="lg:col-span-7 flex flex-col gap-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">edit_note</span>
                      <h2 className="text-xl font-bold text-on-surface">Ornamental Pathogen Registration Details</h2>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-outline uppercase tracking-wider bg-surface px-2 py-0.5 rounded border border-outline-variant/20">Form ISO-17025 / ORN-REG</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Plant Name (Botanical &amp; Cultivar) *</label>
                      <input required className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="Monstera deliciosa 'Albo Variegata'" type="text" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Suspected Scientific Genus</label>
                      <input className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface font-mono text-[13px] italic focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="Xanthomonas campestris pv. dieffenbachiae" type="text" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Originating Batch ID *</label>
                      <input required className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface font-mono text-[13px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="FL-ORN-9042" type="text" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Nursery Bay / Glasshouse Zone *</label>
                      <select defaultValue="Glasshouse B - Aroid & Foliage Propagation Bay" className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer appearance-none">
                        <option value="Glasshouse B - Aroid & Foliage Propagation Bay">Glasshouse B - Aroid &amp; Foliage Propagation Bay</option>
                        <option value="Greenhouse 3 - Variegated Cultivar Nursery (Mother Stock)">Greenhouse 3 - Variegated Cultivar Nursery (Mother Stock)</option>
                        <option value="Quarantine Misting Tunnel C (Biosecurity L2)">Quarantine Misting Tunnel C (Biosecurity L2)</option>
                        <option value="Glasshouse A - Ex-Vitro Plug Hardening Bay">Glasshouse A - Ex-Vitro Plug Hardening Bay</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Growth Stage *</label>
                      <select defaultValue="Potted Mother Stock (Clonal Propagation)" className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer appearance-none">
                        <option value="Potted Mother Stock (Clonal Propagation)">Potted Mother Stock (Clonal Propagation)</option>
                        <option value="Tissue Culture Ex-Vitro (Acclimatization)">Tissue Culture Ex-Vitro (Acclimatization)</option>
                        <option value="Plug Tray / Rooted Cutting (Tray Stage 2)">Plug Tray / Rooted Cutting (Tray Stage 2)</option>
                        <option value="Mature Specimen Foliage (Ready for Dispatch)">Mature Specimen Foliage (Ready for Dispatch)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Greenhouse Substrate &amp; EC</label>
                      <input className="w-full px-3 py-2.5 rounded-lg bg-surface border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" defaultValue="Chunky Aroid Mix (Orchid Bark/Perlite/Coco), EC 1.1" type="text" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-on-surface-variant uppercase font-semibold">Detailed Symptom Phenotype *</label>
                    <textarea required className="w-full p-3 rounded-lg bg-surface border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" rows={4} defaultValue="Variegation sector collapse accompanied by dark brown water-soaked margins along white chimeric tissue. Yellow chlorotic margins spreading into green blade areas. Unresponsive to preventive biofungicide drench; rapid progression under 78% RH overhead misting." />
                  </div>

                  <div className="pt-4 mt-auto">
                    <button type="submit" className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary hover:opacity-95 font-semibold text-base transition-all shadow-md flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      <span>Register New Pathogen Profile</span>
                    </button>
                  </div>
                </div>

                {/* Right Uploads */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-outline-variant/30 h-full">
                    <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">collections</span>
                        <h3 className="font-semibold text-on-surface text-base">Multi-Angle Image Evidence</h3>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-outline border border-outline-variant/30 px-2 py-0.5 rounded">3 Required Angles</span>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">1. Macro Foliar View (Primary)</span>
                        <div className="relative h-28 rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 flex items-center justify-between p-3 shadow-sm">
                          <img className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Macro foliar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Y7dVQzi7mHLIGPtWE9qxznotbVAGvemPoR6P6Inckx59iGw90662s_6WY6j66TrG9vMecXp-sjX9xzTXzUP7Sb7xDNTy4XtNl4vFnLOunHAjz3x6vhHGM3XcPJ2pA0LWieglApXV3q5IU_oQiNv7pDGw0831CNtipCf1C80ZrlYts1Klr7DxjWVdiDuzAbyF5H1NpEpiFmwTYzYBqJdgLgBFvE4R_6WDYb4hSgKlkrzjwjRVqaVu"/>
                          <div className="relative z-10 flex items-center gap-1.5 bg-inverse-surface/85 backdrop-blur-md px-2 py-1 rounded text-white font-mono text-[10px]">
                            <span className="material-symbols-outlined text-[13px] text-secondary-fixed">check_circle</span>
                            <span>Foliar_Macro_01.raw</span>
                          </div>
                          <button type="button" className="relative z-10 p-1.5 rounded bg-inverse-surface/75 text-white hover:bg-inverse-surface transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">cached</span>
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">2. Stem &amp; Petiole Junction</span>
                        <div className="relative h-28 rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 flex items-center justify-between p-3 shadow-sm">
                          <img className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Petiole junction" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh2AFo_sJSWrxq6tIyBPyN2ETTI7CpUEiLxtrDSPtmO2aJJwaeyo7GZchT2Qws0ffmG3TdloGFGjSb49kfTKAS6LRWSBj3joPNv14AxhhuY8cVWKLNcVtTMoQNZR_aTFgVZExU83Xh8v0VWaouzQ7Y5aOdi65TDNRfqKb6dGee4y76gH15lq-CPcrNXVdgHEhbCO9oGfUbTkfdAreSTyEAwhA6kHaYEeh7ZkfQCSquDNWx_OOYpxwM"/>
                          <div className="relative z-10 flex items-center gap-1.5 bg-inverse-surface/85 backdrop-blur-md px-2 py-1 rounded text-white font-mono text-[10px]">
                            <span className="material-symbols-outlined text-[13px] text-secondary-fixed">check_circle</span>
                            <span>Petiole_Junction_02.raw</span>
                          </div>
                          <button type="button" className="relative z-10 p-1.5 rounded bg-inverse-surface/75 text-white hover:bg-inverse-surface transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">cached</span>
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">3. Abaxial Underside or Root Matrix</span>
                        <div className="h-28 rounded-xl border-2 border-dashed border-outline-variant hover:border-secondary transition-colors bg-surface-container-low flex flex-col items-center justify-center p-3 cursor-pointer text-center group">
                          <span className="material-symbols-outlined text-[24px] text-secondary group-hover:scale-110 transition-transform">add_a_photo</span>
                          <span className="font-semibold text-sm text-on-surface mt-1">Upload Abaxial / Root Photo</span>
                          <span className="font-mono text-[9px] text-outline mt-0.5 uppercase tracking-wider">Drag &amp; drop or click to browse</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto p-4 rounded-lg bg-surface-container-high border border-outline-variant/30 text-on-surface flex items-start gap-3 shadow-inner">
                      <span className="material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5">biotech</span>
                      <div className="flex flex-col text-sm">
                        <span className="font-bold">Lab PCR Routing</span>
                        <span className="text-on-surface-variant mt-0.5 leading-relaxed">Submitting this form dispatches a physical sampling kit to Zone C. Tissue cultures will undergo high-throughput DNA sequencing.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          )}

        </div>
      </main>
    </>
  );
}
