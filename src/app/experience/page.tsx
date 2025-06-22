
import ContentSection from '@/components/shared/content-section';

const experiences = [
  {
    title: "NP-SUTD-SST Big-D Camp",
    description: "In this programme, my team was tasked to design a robot using Arduino to collect debris during earthquakes. Along the way, we faced many setbacks such as our components and code not working as intended and our physical design not being structurally sound. In the end, we managed to overcome these challenges and I contributed by providing a different perspective from my teammates as to how to address the structural soundness problem. We achieved the Outstanding Team Spirit award and I gained the valuable skill of resilience from this experience.",
    imageUrl: "/BigD.png",
    imageAlt: "Big-D Camp Robot Prototype",
    aiHint: "robot prototype",
    imageUrl2: "/BigD2.jpg",
    imageAlt2: "Big-D Camp Team Working",
    aiHint2: "students collaborating",
    imageUrl3: "/BigD3.jpg",
    imageAlt3: "Big-D Camp Presentation Slide",
    aiHint3: "project presentation",
    imageUrl4: "/BigD4.jpg",
    imageAlt4: "Big-D Camp Award Certificate",
    aiHint4: "certificate award",
  },
  {
    title: "A*STAR Bioinformatics Institute Work Attachment",
    description: "I spent 3 days with researchers at the A*STAR Bioinformatics Institute, where I learnt how they blend both biotechnology and computing to advance the medical industry. I observed firsthand how researchers would use Artificial Intelligence in order to detect diseases such as brain lesions and also what a researcher does in their typical day. The valuable practical insight I gained further solidified my aspiration to be a researcher in the future.",
    imageUrl: "/swrap.jpg", 
    imageAlt: "Web Wizards Inc. office or abstract software development",
    aiHint: "software development",
    descriptionClassName: "text-xs md:text-sm"
  },
  {
    title: "A*STAR Advanced Remanufacturing and Technology Centre (ARTC) Camp",
    description: "In this programme, my group was tasked to design a product to tackle the issue of food security in Singapore. I proposed the idea of a modular planter that would be easily expandable to accomodate vertical farming in any setting such as within houses in order to increase the yield of local produce and maximise space, while also having features such as an automated watering and lighting system depending on the environment. I mainly contributed with the electronic circuits for the product, and some basic C++ code. Our group achieved the Most Innovative Design award, and the experience taught me that good products do not have to be novel or groundbreaking, but rather improve on existing ones to solve a critical problem.",
    imageUrl: "/artc.jpg", 
    imageAlt: "Tech Start LLC abstract or learning environment",
    aiHint: "tech learning",
  },
  {
    title: "好人好事 Service Learning Food Drive - Lead In-Charge",
    description: "I volunteered to take up the Lead In-Charge position for my class service learning project, where I had to plan, procure, and carry out a food drive activity for the underprivileged and elderly in the community. Serving the community opened my eyes to the plight of the underprivileged and strengthened my want to help as many people as I can.",
    imageUrl: "/servicelearning.jpg",
    imageAlt: "Service learning food drive",
    aiHint: "community service",
  },
  {
    title: "SST Guitar Ensemble - Executive Commitee Member",
    description: "As an ExCo member, I was in charge of managing the CCA's social media accounts and planning events, while maintaining the wellbeing of my fellow guitarists. I learnt many leadership skills such as patience from having to work with people of different personalities and responsibility from managing an entire CCA in my 2 years in this position.",
    imageUrl: "/ge.png",
    imageAlt: "SST Guitar Ensemble",
    aiHint: "guitar music",
    imageFit: "contain",
  },
  {
    title: "Gresham-SST UK Overseas Learning Experience",
    description: "I participated in an overseas learning journey to the United Kingdom, where I worked with students from Gresham's School to design a product to combat flooding. I also visited places such as the Imperial College and the Natural History Museum, and immersed myself in the UK culture, expanding my horizons.",
    imageUrl: "/UK.jpg",
    imageAlt: "Gresham-SST UK Overseas Learning Experience",
    aiHint: "UK landscape",
    imageFit: "contain",
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
        {experiences.map((exp: any, index) => (
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
            imageUrl3={exp.imageUrl3}
            imageAlt3={exp.imageAlt3}
            aiHint3={exp.aiHint3}
            imageUrl4={exp.imageUrl4}
            imageAlt4={exp.imageAlt4}
            aiHint4={exp.aiHint4}
            descriptionClassName={exp.descriptionClassName}
            imagePosition="left"
            contentAlignment="center" // Apply vertical centering for content items
            imageFit={exp.imageFit}
          />
        ))}
      </div>
    </div>
  );
}
