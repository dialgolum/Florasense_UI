"use client";

import { useState } from "react";

export default function OverviewPage() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);

  function sendPrompt(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setChatInput("");

    setTimeout(() => {
      let reply =
        "I've pulled the relevant nursery records. Quarantining protocol B-3 is active for Zone B. Bench 12 misting lines have been isolated to reduce bacterial spread.";
      if (text.toLowerCase().includes("eu") || text.toLowerCase().includes("checklist")) {
        reply =
          "Shipment #8849 documentation has cleared all phytosanitary checks. Batch Lot: NL-EX-991 has zero detected Ralstonia or Xanthomonas.";
      } else if (text.toLowerCase().includes("supply") || text.toLowerCase().includes("variance")) {
        reply =
          "Q3 supply tracking at 88% capacity. Mid-February drop of 7.5% in Ficus can be countered by raising supplemental PAR lighting by 15% in Bay C.";
      }
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 600);
  }

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 h-20 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 px-8 flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-on-surface">
            Good morning, Jane. Here is your daily nursery operations overview.
          </span>
          <span className="text-[11px] text-secondary font-mono">Bay telemetry synced 2 mins ago</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-surface-container-low border border-outline-variant/40">
            <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
            <span className="text-[11px] font-semibold text-on-surface font-mono tracking-wide">
              Tuesday, Oct 24 • 08:45 AM EDT
            </span>
          </div>
          <button className="relative p-1 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-surface-container-lowest" />
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex flex-col w-full gap-6">
          {/* HERO SECTION */}
          <section className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 bg-surface-container-lowest group">
            <div className="relative w-full h-80 sm:h-96 md:h-[420px] overflow-hidden">
              <img
                alt="Mike Flora Pvt Ltd Rambukkana Sri Lanka Nursery Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO0wiMPE22yvNDYeEZOCg4c9ssC-BD5OWGPgmcp8NWP20tZnKwm9XZ3sv7oz3nSpqsz5M9ajbeiF2QAiD6MzW3UWSh0UDX4ZxL-UBsnFD6nWroLF0MBYHJ34WQS8zf_ZasNewcvOcxXwli70BqH7FL2-HXT0qFdHqPH_7MFEkWNC9A4ZYJpAlJZ-6iIE6lfsHTVMw6if6-KGbYI3-xaJ0ME26yKbFin922QvewdyhcpY1g0sicKuwH"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/90 via-[#0b1c30]/40 to-transparent" />

              {/* Top-left badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1 px-4 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/30 text-on-surface shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">eco</span>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-primary font-mono">
                  Flagship Nursery Facility
                </span>
                <span className="text-secondary">•</span>
                <span className="text-[11px] text-secondary font-medium font-mono">Rambukkana, Sri Lanka</span>
              </div>

              {/* Bottom overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
                <div className="max-w-2xl flex flex-col gap-1">
                  <div className="inline-flex items-center gap-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-primary text-on-primary text-[11px] font-bold uppercase tracking-wider font-mono">
                      Mike Flora Pvt Ltd
                    </span>
                    <span className="text-surface-container-high text-[11px] font-mono">Commercial Export Plantation</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-1 leading-tight">
                    Smart Horticultural Operations &amp; Nursery Intelligence
                  </h1>
                  <p className="text-sm text-surface-container-high leading-relaxed mt-1">
                    Cultivating premium tropical foliage with high-tech automated climate regulation, precision pathology
                    monitoring, and European export-grade quality assurance.
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="px-4 py-2 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/30 text-on-surface flex items-center gap-3 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-secondary font-semibold font-mono">
                        Facility Status
                      </span>
                      <span className="text-xs font-bold text-primary font-mono">Optimal Growth Cycles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI ASSISTANT CHATBOT */}
          <section className="w-full bg-surface-container-lowest rounded-2xl p-6 md:p-10 shadow-sm border border-outline-variant/30 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-on-primary shadow-sm text-2xl">
                  <span>🌱</span>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-primary-fixed rounded-full ring-2 ring-surface-container-lowest flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-on-surface">Florasense AI Assistant</h2>
                    <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold tracking-wide uppercase font-mono">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-secondary">RAG Intelligent Nursery Copilot • Real-time Agronomy &amp; Compliance</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[11px] text-secondary flex items-center gap-1 font-mono">
                  <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
                  Phytosanitary &amp; Export Data Synced
                </span>
              </div>
            </div>

            {/* Chat Display */}
            <div className="rounded-xl bg-surface-container-low/50 p-4 flex flex-col gap-4 min-h-[140px]">
              {/* Welcome message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  🤖
                </div>
                <div className="flex flex-col gap-1 max-w-2xl">
                  <div className="p-4 rounded-2xl rounded-tl-none bg-surface-container-lowest text-on-surface text-sm shadow-xs border border-outline-variant/30 leading-relaxed">
                    Welcome to Florasense AI. How can I assist with your nursery operations or export queries today?
                  </div>
                  <span className="text-[11px] text-secondary px-1 font-mono">Just now • Florasense Knowledge Engine</span>
                </div>
              </div>

              {/* Dynamic Messages */}
              {messages.map((msg, i) =>
                msg.role === "user" ? (
                  <div key={i} className="flex items-start justify-end gap-2">
                    <div className="flex flex-col items-end gap-1 max-w-[85%]">
                      <div className="p-3 rounded-xl rounded-tr-none bg-primary-container text-on-primary text-sm shadow-xs leading-relaxed">
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-secondary px-1 font-mono">Just now</span>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">psychology</span>
                    </div>
                    <div className="flex flex-col gap-1 max-w-[88%]">
                      <div className="p-3 rounded-xl rounded-tl-none bg-surface-container text-on-surface text-sm shadow-xs leading-relaxed">
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-secondary px-1 font-mono">Just now • Automated Assistant</span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Quick Inquiries */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
              <span className="text-[11px] text-secondary font-semibold uppercase tracking-wider whitespace-nowrap font-mono">
                Quick Inquiries:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => sendPrompt("Check disease symptoms and quarantine protocols")}
                  className="px-4 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[11px] font-medium border border-outline-variant/30 transition-all hover:border-primary active:scale-[0.98] flex items-center gap-1.5 font-mono"
                >
                  <span className="material-symbols-outlined text-[15px] text-error">coronavirus</span>
                  <span>Check Disease Protocols</span>
                </button>
                <button
                  onClick={() => sendPrompt("Inspect EU export compliance checklists")}
                  className="px-4 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[11px] font-medium border border-outline-variant/30 transition-all hover:border-primary active:scale-[0.98] flex items-center gap-1.5 font-mono"
                >
                  <span className="material-symbols-outlined text-[15px] text-primary">fact_check</span>
                  <span>EU Export Compliance</span>
                </button>
                <button
                  onClick={() => sendPrompt("Review Q3 yield predictions and shipment schedule")}
                  className="px-4 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[11px] font-medium border border-outline-variant/30 transition-all hover:border-primary active:scale-[0.98] flex items-center gap-1.5 font-mono"
                >
                  <span className="material-symbols-outlined text-[15px] text-secondary">trending_up</span>
                  <span>Yield &amp; Sales Forecast</span>
                </button>
              </div>
            </div>

            {/* Chat Input */}
            <form
              className="relative flex items-center w-full mt-1"
              onSubmit={(e) => {
                e.preventDefault();
                sendPrompt(chatInput);
              }}
            >
              <input
                className="w-full pl-4 pr-28 py-3.5 rounded-xl bg-surface-container-low text-on-surface placeholder:text-secondary text-sm focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary border border-outline-variant/30 transition-all"
                placeholder="Ask Florasense AI about plant health, export certifications, batch yields..."
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <div className="absolute right-2 flex items-center gap-1">
                <button type="button" className="p-2 text-secondary hover:text-primary rounded-lg hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold flex items-center gap-1 hover:bg-primary-container transition-all active:scale-[0.98] shadow-xs font-mono"
                >
                  <span>Send</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                </button>
              </div>
            </form>
          </section>

          {/* CORE FACILITIES & CAPABILITIES */}
          <section className="flex flex-col gap-4 w-full pt-1">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-secondary font-semibold font-mono">
                  Integrated Operations
                </span>
                <h2 className="text-xl font-bold text-on-surface tracking-tight mt-0.5">Core Facilities &amp; Capabilities</h2>
              </div>
              <span className="text-[11px] text-secondary font-mono">Mike Flora Commercial Nursery Infrastructure</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {/* System 1: Disease Detection */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md hover:border-primary/40 transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-error-container/40 text-error flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[26px] icon-fill">biotech</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-secondary text-[11px] font-semibold font-mono">
                      AI Spectral Imaging
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">Disease Detection System</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Automated leaf pathology diagnostics and early pathogen detection. Instantly flags Xanthomonas, Ralstonia, and
                      fungal blights with automated zone isolation protocols.
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-[11px] text-secondary font-mono">Quarantine Readiness</span>
                  <span className="text-[11px] font-semibold text-primary flex items-center gap-0.5 font-mono">
                    Active Guard
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  </span>
                </div>
              </div>

              {/* System 2: Quality Assessment */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md hover:border-primary/40 transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[26px] icon-fill">verified</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-primary text-[11px] font-semibold font-mono">
                      Dutch &amp; EU Standard
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">Quality Assessment System</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Phytosanitary export grade compliance and inspection readiness verification. Analyzes foliage vigor, root
                      structural density, and export certification standards.
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-[11px] text-secondary font-mono">Compliance Status</span>
                  <span className="text-[11px] font-semibold text-primary flex items-center gap-0.5 font-mono">
                    92% Cleared Grade A
                    <span className="material-symbols-outlined text-[16px]">task_alt</span>
                  </span>
                </div>
              </div>

              {/* System 3: Sales Forecasting */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md hover:border-primary/40 transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">trending_up</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-secondary text-[11px] font-semibold font-mono">
                      Predictive Supply
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">Sales Forecasting System</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Multi-seasonal yield prediction, export harvest scheduling, and European market demand modeling. Optimizes bench
                      space allocation and shipping commitments.
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-[11px] text-secondary font-mono">Harvest Trajectory</span>
                  <span className="text-[11px] font-semibold text-primary flex items-center gap-0.5 font-mono">
                    135k Units On Track
                    <span className="material-symbols-outlined text-[16px]">insights</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
