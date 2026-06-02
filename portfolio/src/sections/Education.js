import React from "react";

const educationItems = [
  {
    title: "B.S. in Computer Engineering",
    school: "University of Illinois Urbana-Champaign",
    date: "May 2026",
    detail: "Focused on systems, software engineering, and computer architecture.",
  },
  {
    title: "Minor in Data Science",
    school: "University of Illinois Urbana-Champaign",
    date: "May 2026",
    detail: "Coursework in machine learning, statistics, and applied analytics.",
  },
  {
    title: "Study Abroad in Singapore",
    school: "Nanyang Technological University, Singapore",
    date: "Jan - May 2025",
    detail: "Completed machine learning and AI coursework in an international academic environment.",
  },
];

function Education() {
  return (
    <section id="Education" className="bg-background px-6 py-12 sm:py-16 scroll-mt-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-primary mb-9">
          My Education
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationItems.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="border border-primary/40 rounded-2xl bg-background_muted/10 p-6 transition-all duration-300"
            >
              <div className="mb-3">
                <span className="text-2xs sm:text-xs uppercase tracking-wide text-primary/90 border border-primary/60 rounded-full px-3 py-1">
                  {item.date}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-1">{item.title}</h2>
              <p className="text-text font-semibold mb-3">{item.school}</p>
              <p className="text-base sm:text-lg leading-relaxed text-text/90">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
