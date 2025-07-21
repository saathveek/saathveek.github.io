import React from "react";

const certifications = [
  {
    title: "Certificate in Data Science",
    certifier: "University of Illinois Urbana-Champaign",
    imgSrc: "/Saathveek_Gowrishankar_Cert_uiuc_ds.png",
    link: "/Saathveek_Gowrishankar_Cert_uiuc_ds.pdf",
  },
  {
    title: "AWS Cloud Practitioner Certification",
    certifier: "Coming soon",
    isPlaceholder: true,
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
      <div className="max-w-[305px] w-full border border-dashed border-primary rounded-xl shadow bg-background_muted flex flex-col justify-center items-center text-center p-6 text-muted">
        <p className="text-2xl font-bold mb-2">{cert.title}</p>
        <p className="text-sm">{cert.certifier}</p>
      </div>
    );
  }

  // Regular card with image + hover overlay
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-[305px] w-full rounded-xl overflow-hidden border border-primary shadow transition-transform duration-300 ease-in-out relative group hover:scale-[1.03]"
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
          <p className="text-text text-xs">{cert.certifier}</p>
        </div>
      </div>
    </a>

  );
}

function Certifications() {
  return (
    <section id="Certifications" className="bg-background p-8 scroll-mt-8">
      <div className="max-w-5xl mx-auto w-full text-left">
        {/* Section Title */}
        <h1 className="text-4xl 
                       md:text-6xl
                       font-semibold text-primary mb-6">
          My Certifications
        </h1>

        {/* Certificate Cards */}
        <div className="grid grid-cols-3 gap-10 justify-items-center max-w-5xl w-full mx-auto">
          {certifications.map((cert, idx) => (
            <CertificationCard key={idx} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default Certifications;
