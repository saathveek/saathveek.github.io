import React from "react";

const certifications = [
  {
    title: "Certificate in Data Science",
    certifier: "University of Illinois Urbana-Champaign",
    issued: "May 2026",
    imgSrc: "/Saathveek_Gowrishankar_cert_uiuc_ds.png",
    link: "/Saathveek_Gowrishankar_cert_uiuc_ds.pdf",
  },
  {
    title: "Google AI",
    certifier: "Google",
    issued: "May 2026",
    credentialId: "2HSYV74PHVM6",
    skills: ["Artificial Intelligence (AI)"],
    link: "https://www.coursera.org/account/accomplishments/specialization/2HSYV74PHVM6",
  },
  {
    title: "Google AI Essentials",
    certifier: "Coursera",
    issued: "May 2026",
    skills: ["Artificial Intelligence (AI)"],
    link: "https://www.credly.com/badges/cda7b5ad-d190-44b4-8769-35196c1018cf/linked_in_profile",
  },
  // {
  //   title: "Certification",
  //   certifier: "Coming soon",
  //   isPlaceholder: true,
  // },
];

function CertificationCard({ cert }) {
  if (cert.isPlaceholder) {
    return (
      <div className="w-full min-h-[220px] border border-dashed border-primary/50 rounded-2xl bg-background_muted/30 flex flex-col justify-center items-center text-center p-6 text-muted">
        <p className="text-2xl font-bold mb-2 text-text">{cert.title}</p>
        <p className="text-sm">{cert.certifier}</p>
        <span className="mt-3 text-2xs uppercase tracking-wider border border-primary/50 text-primary rounded-full px-2 py-1">
          In Progress
        </span>
      </div>
    );
  }

  if (!cert.imgSrc) {
    return (
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full min-h-[220px] border border-primary/40 rounded-2xl bg-background_muted/10 hover:bg-background_muted/20 transition-all duration-300 p-6 flex flex-col"
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-2xs sm:text-xs uppercase tracking-wide text-primary/90 border border-primary/60 rounded-full px-2 py-1">
            {cert.issued}
          </span>
          <span className="text-2xs sm:text-xs uppercase tracking-wide text-text/80 border border-background_muted rounded-full px-2 py-1">
            Credential
          </span>
        </div>

        <p className="text-2xl font-bold text-primary mb-1">{cert.title}</p>
        <p className="text-base sm:text-lg text-text font-semibold mb-3">{cert.certifier}</p>
        {cert.credentialId && (
          <p className="text-base sm:text-lg text-text/80 mb-2">Credential ID: {cert.credentialId}</p>
        )}
        {cert.skills?.length > 0 && (
          <p className="text-base sm:text-lg text-text/80 mb-4">Skills: {cert.skills.join(", ")}</p>
        )}
        <span className="mt-auto inline-flex items-center text-base sm:text-lg text-primary font-semibold">
          View credential
        </span>
      </a>
    );
  }

  // Regular card with image + hover overlay
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-2xl overflow-hidden border border-primary/40 transition-all duration-300 ease-in-out relative group hover:scale-[1.01]"
    >
      <div className="relative w-full h-full">
        {/* Image with dim effect on hover */}
        <img
          src={cert.imgSrc}
          alt={cert.title}
          className="w-full h-auto object-cover block transition duration-300 ease-in-out group-hover:brightness-90"
        />

        {/* Hover overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-background_muted bg-opacity-90 px-4 py-3"
        >
          <p className="font-semibold text-text text-sm mb-1">{cert.title}</p>
          <p className="text-text text-xs">{cert.certifier}{cert.issued ? ` • ${cert.issued}` : ""}</p>
        </div>
      </div>
    </a>

  );
}

function Certifications() {
  return (
    <section id="Certifications" className="bg-background px-6 py-12 sm:py-16 scroll-mt-8">
      <div className="max-w-6xl mx-auto w-full text-left">
        {/* Section Title */}
        <h1 className="text-4xl 
                       md:text-6xl
                       font-semibold text-primary mb-9">
          My Certifications
        </h1>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          {certifications.map((cert, idx) => (
            <CertificationCard key={idx} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default Certifications;
