import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollReveal = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll(
      "main section, main .card, main h1, main h2, main h3, main p, main table, main li",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target, index) => {
      target.classList.add("reveal-ready");
      target.style.transitionDelay = `${Math.min((index % 8) * 60, 360)}ms`;
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname, search]);

  return null;
};
