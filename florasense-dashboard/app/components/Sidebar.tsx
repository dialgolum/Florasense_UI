"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Overview", icon: "potted_plant" },
  { href: "/plant-id", label: "Plant ID & Chat", icon: "psychology" },
  { href: "/disease-scanner", label: "Disease Scanner", icon: "center_focus_strong" },
  { href: "/export-quality", label: "Export Quality", icon: "verified" },
  { href: "/supply-forecast", label: "Supply Forecast", icon: "trending_up" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest border-r border-outline-variant/40 z-50 flex flex-col justify-between select-none">
      {/* Top Section */}
      <div className="flex flex-col">
        {/* Brand Header */}
        <div className="h-20 px-6 flex items-center gap-3 border-b border-outline-variant/30">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-xl">eco</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary leading-tight tracking-tight font-sans">
              Florasense
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant/80 font-mono">
              Commercial Nursery Portal
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <span className="px-1 text-[11px] font-semibold uppercase tracking-wider text-secondary font-mono">
            Operations
          </span>
          <nav className="flex flex-col gap-1 mt-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-[15px] font-medium ${
                    isActive
                      ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      isActive ? "text-on-primary-container" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col border-t border-outline-variant/30 p-4">
        {/* User Profile */}
        <div className="flex items-center gap-3 mb-4 px-1">
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary-container rounded-full ring-2 ring-surface-container-lowest" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sm font-semibold text-on-surface truncate">Jane Doe</span>
            <span className="text-[11px] text-secondary truncate font-mono">Nursery Manager</span>
          </div>
        </div>

        {/* Utility Links */}
        <nav className="flex flex-col gap-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface transition-colors font-medium text-[13px]"
          >
            <span className="material-symbols-outlined text-[18px]">settings</span>
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface transition-colors font-medium text-[13px]"
          >
            <span className="material-symbols-outlined text-[18px]">help</span>
            <span>Support</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}
