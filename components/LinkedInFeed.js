"use client";

import { useEffect } from "react";

export default function LinkedInFeed({ companyId = "amasandrhodlaw" }) {
  useEffect(() => {
    // Load Tagembed script
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-blue-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold font-sans tracking-[0.3em] uppercase mb-12 text-white text-center">
          Latest Feed
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Tagembed Widget Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            {/* Method 1: Iframe (Most Reliable) */}
            <div
              className="tagembed-widget"
              style={{
                width: "100%",
                height: "100%",
                overflow: "auto"
              }}
              data-widget-id="308793"
              data-website="1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
