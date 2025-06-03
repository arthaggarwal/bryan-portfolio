
import ContentSection from '@/components/shared/content-section';

const experiences = [
  {
    title: "NP-SUTD-SST Big-D Camp",
    description: "In this programme, my team was tasked to design a robot using Arduino to collect debris during earthquakes. Along the way, we faced many setbacks such as our components and code not working as intended and our physical design not being structurally sound. In the end, we managed to overcome these challenges and I contributed by providing a different perspective from my teammates as to how to address the structural soundness problem. We achieved the Outstanding Team Spirit award and I gained the valuable skill of resilience from this experience.",
    imageUrl: "/BigD.jpg",
    imageAlt: "Image related to NP-SUTD-SST Big-D Camp",
    aiHint: "robotics camp",
    imageUrl2: "/BigD2.jpg",
    imageAlt2: "Additional image from NP-SUTD-SST Big-D Camp",
    aiHint2: "teamwork robotics"
  },
  {
    title: "Full-Stack Developer at Web Wizards Inc.",
    description: "Developed and maintained full-stack applications for diverse clients across various industries. Proficient in React, Node.js, Express, and PostgreSQL. Specialized in implementing RESTful APIs, integrating third-party services, and ensuring application security. Actively contributed to code reviews, sprint planning, and continuous improvement of development processes.",
    imageUrl: "/swrap.jpg",
    imageAlt: "Image related to Full-Stack Developer role",
    aiHint: "software development"
  },
  {
    title: "Junior Developer at Tech Start LLC",
    description: "Gained foundational experience in web development, working on front-end tasks using HTML, CSS, and JavaScript. Assisted senior developers in bug fixing, feature implementation, and testing. Quickly learned new technologies and adapted to a fast-paced startup environment.",
    imageUrl: "/artc.jpg",
    imageAlt: "Image related to Junior Developer role",
    aiHint: "tech learning"
  }
];

export default function ExperiencePage() {
  return (
    <div className="space-y-12 md:space-y-16 py-8 relative">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight flex items-center justify-center">
          My experience
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
          A showcase of my key roles and competencies
        </p>
      </header>
      
      <div className="grid grid-cols-1 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <ContentSection
            key={index}
            title={exp.title}
            description={exp.description}
            imageUrl={exp.imageUrl}
            imageAlt={exp.imageAlt}
            aiHint={exp.aiHint}
            imageUrl2={exp.imageUrl2}
            imageAlt2={exp.imageAlt2}
            aiHint2={exp.aiHint2}
            imagePosition="left" // Consistent layout for experience page
          />
        ))}
      </div>
    </div>
  );
}
