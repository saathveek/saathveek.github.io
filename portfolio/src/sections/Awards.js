import React from "react";

const awards = [
  {
    title: "Outstanding Research Presentation",
    issuer: "University of Illinois Urbana-Champaign",
    date: "May 2026",
    link: "https://undergradresearch.illinois.edu/events/research-week/award-winners/2026-urs-awards/",
    linkLabel: "View Award",
    description:
      "Recognized at the 2026 Undergraduate Research Symposium at UIUC, highlighting an outstanding presentation with high-quality research work and exceptional presentation and communication skills.",
  },
  {
    title: "2024 Premier Student Chapter Award",
    issuer: "Engineers Without Borders USA",
    date: "Dec 2024",
    link: "https://volunteer.ewb-usa.org/s/article/Volunteer-Awards",
    linkLabel: "View Award",
    description:
      "Awarded to EWB-UIUC during my term as president, recognizing exceptional chapter impact, service, and sustainable development work led by 22 student leaders and 170+ members.",
  },
];

function Awards() {
  return (
    <section id="Awards" className="bg-background px-6 py-12 sm:py-16 scroll-mt-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-primary mb-9">
          My Awards
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {awards.map((award) => (
            <article
              key={`${award.title}-${award.date}`}
              className="border border-primary/40 rounded-2xl bg-background_muted/10 p-6 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-2xs sm:text-xs uppercase tracking-wide text-primary/90 border border-primary/60 rounded-full px-3 py-1">
                  {award.date}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-1">{award.title}</h2>
              <p className="text-text font-semibold mb-3">{award.issuer}</p>
              <p className="text-base sm:text-lg leading-relaxed text-text/90 mb-5">
                {award.description}
              </p>

              {award.link ? (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm sm:text-base px-4 py-2 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-background transition-colors duration-200"
                >
                  {award.linkLabel || "View Source"}
                </a>
              ) : (
                <span className="inline-flex items-center text-xs sm:text-sm text-muted border border-dashed border-primary/50 rounded-full px-3 py-2">
                  Source available on request
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
