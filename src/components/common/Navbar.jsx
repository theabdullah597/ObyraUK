import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { ObyraLogo } from "../../assets/logo";
import { navItems } from "../../data/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="container-custom">
        <div className="h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <ObyraLogo className="h-11 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className={`nav-link ${item.label === "Contact" ? "nav-contact" : ""}`}
                >
                  {item.label}
                  {item.columns && <ChevronDown size={16} />}
                </Link>

                {item.columns && (
                  <div
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200"
                    style={{ width: item.width }}
                  >
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl p-6">
                      <div
                        className={`grid gap-6 ${item.columns.length > 1 ? "lg:grid-cols-2" : "grid-cols-1"} ${
                          item.label === "Services"
                            ? "max-h-[420px] overflow-y-auto pr-1"
                            : ""
                        }`}
                      >
                        {item.columns.map((column) => (
                          <div key={column.title}>
                            <h4 className="text-xs uppercase tracking-wide text-slate-500 mb-3">
                              {column.title}
                            </h4>
                            <div className="space-y-1">
                              {column.links.map((link) => (
                                <Link
                                  key={link.label}
                                  to={link.path}
                                  className="dropdown-link"
                                >
                                  <ChevronRight
                                    size={14}
                                    className="text-indigo-500 flex-shrink-0"
                                  />
                                  <span>{link.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-5 border-t border-slate-200 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-y-contain">
            <div className="pt-3 space-y-1">
              {navItems.map((item) => {
                const hasDropdown = Boolean(item.columns);
                return (
                  <div key={item.label} className="rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex-1 px-4 py-3 text-slate-700 font-medium hover:text-indigo-700 hover:bg-indigo-50"
                      >
                        {item.label}
                      </Link>
                      {hasDropdown && (
                        <button
                          className="px-4 py-3 text-slate-700"
                          onClick={() =>
                            setOpenMobileDropdown((prev) =>
                              prev === item.label ? null : item.label,
                            )
                          }
                          aria-label={`Toggle ${item.label} links`}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              openMobileDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {hasDropdown && openMobileDropdown === item.label && (
                      <div className="bg-slate-50 px-4 py-3 space-y-3">
                        {item.columns.map((column) => (
                          <div key={column.title}>
                            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                              {column.title}
                            </p>
                            <div className="grid gap-1">
                              {column.links.map((link) => (
                                <Link
                                  key={link.label}
                                  to={link.path}
                                  className="text-sm text-slate-700 hover:text-indigo-700 py-1"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenMobileDropdown(null);
                                  }}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
