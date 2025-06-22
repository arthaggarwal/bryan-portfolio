
import ContentSection from '@/components/shared/content-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const mainAchievement = {
  title: "Project: Investigation of the Transmission Ratio of Different Fluids",
  description: "I undertook this project in secondary 2, where I had to design an experiment and write a report for the first time. My aim for this project was to find a way to determine if a fluid was suitable to be used in hydraulic systems by testing its ability to transfer forces, thus aligning with the UN Sustainable Development Goal 9: Industry, Innovation and Infrastructure. Participating in various events with this project allowed me to network with other like-minded individuals and professionals, and improve my science communication skills. The experiences taught me how to better improve my research work and what I was lacking in, while also fuelling my passion to improve and do more research work.",
  awards: [
    "Singapore Youth Science Fair 2023 - Distinction and Best School award",
    "Opportunity X Fair - Participation award",
    "Elementz Science Fair - Participation award",
    "NJC STaR Symposium 2024",
    "Singapore Science and Engineering Fair Junior Category 2024 - Participation award"
  ],
  imageUrl: "/ssef.jpg",
  imageAlt: "Singapore Science and Engineering Fair award",
  aiHint: "engineering award",
  imageUrl2: "/starsymposium.png",
  imageAlt2: "NJC STaR Symposium presentation",
  aiHint2: "symposium presentation",
  imageUrl3: "/Elementz.jpg",
  imageAlt3: "Elementz Science Fair participation",
  aiHint3: "science fair",
  imageUrl4: "/sysf.jpeg",
  imageAlt4: "Singapore Youth Science Fair award",
  aiHint4: "science award"
};

const otherAchievementsData = [
   {
    title: "National STEM Championship 2024 - Grand Final 3rd Runner-up",
    description: "This competition involved various stages that tested my team's science conceptual knowledge and our creativity. I contributed by planning out our presentations to make them more engaging, while also providing different perspective when we met with roadblocks such as in the semi-finals stage. I learnt a lot from meeting many talented individuals that were very knowledgeable about STEM, while also learning adaptability and quick-thinking, which has aided me in my school work by allowing me to find different solutions whenever I am met with a setback in my tasks.",
    imageUrl: "/NSTEMC.jpg",
    imageAlt: "National STEM Championship team photo",
    aiHint: "team photo",
    imageUrl2: "/NSTEMC2.png",
    imageAlt2: "National STEM Championship certificate",
    aiHint2: "award certificate"
  },
  {
    title: "Science Castle Singapore 2025 - Grand Winner",
    description: "In this competition, my team and I gave a verbal presentation about our research project: \"Investigation of how the colour of online study materials affects Singaporean adolescents' memory retention rates\", which aims to improve students' revision and education in Singapore as an issue that is close to us. The conference allowed us to meet many students from overseas who are also passionate about research and changing humanity, showcasing their meaningful projects which even include cancer research and quantum computing. Ultimately, my team's passion for research and improving students' lives led to us winning the grand winner award.",
    imageUrl: "/sciencecastle.jpeg",
    imageAlt: "Science Castle conference presentation",
    aiHint: "science conference",
    imageUrl2: "/sciencecastle2.png",
    imageAlt2: "Science Castle award certificate",
    aiHint2: "award certificate"
  }
];

const otherAchievementsList = [
  "NUS Illustratum 2023 - Participation award",
  "Singapore Raffles International Music Festival 2024 - Gold with Honours award",
  "Singapore Youth Festival 2023, 2025 - Certificate of Distinction",
  "Istana Open House 2024 Arts Presentation",
  "Edusave Certificate of Academic Achievement - 2017, 2021, 2023",
  "Edusave Scholarship Award - 2020",
  "Edusave Award for Achievement, Good Leadership and Service (EAGLES) - 2020, 2024",
  "Edusave Merit Bursary Award - 2016, 2019, 2023",
];

export default function AchievementsPage() {
  return (
    <div className="space-y-12 md:space-y-16 py-8 relative">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight flex items-center justify-center">
          Milestones & Recognitions
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
          Highlighting some of my significant achievements and contributions.
        </p>
      </header>

      <div className="max-w-7xl mx-auto space-y-8 lg:space-y-12">
        {/* Main Full-Width Achievement */}
        <ContentSection
          title={mainAchievement.title}
          awards={mainAchievement.awards}
          description={mainAchievement.description}
          imageUrl={mainAchievement.imageUrl}
          imageAlt={mainAchievement.imageAlt}
          aiHint={mainAchievement.aiHint}
          imageUrl2={mainAchievement.imageUrl2}
          imageAlt2={mainAchievement.imageAlt2}
          aiHint2={mainAchievement.aiHint2}
          imageUrl3={mainAchievement.imageUrl3}
          imageAlt3={mainAchievement.imageAlt3}
          aiHint3={mainAchievement.aiHint3}
          imageUrl4={mainAchievement.imageUrl4}
          imageAlt4={mainAchievement.imageAlt4}
          aiHint4={mainAchievement.aiHint4}
          imagePosition="left"
          titleLayout="fullWidth"
          contentAlignment="center"
        />

        {/* Other Achievements in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {otherAchievementsData.map((ach: any, index) => (
            <ContentSection
              key={index}
              title={ach.title}
              description={ach.description}
              imageUrl={ach.imageUrl}
              imageAlt={ach.imageAlt}
              aiHint={ach.aiHint}
              imageUrl2={ach.imageUrl2}
              imageAlt2={ach.imageAlt2}
              aiHint2={ach.aiHint2}
              titleLayout="fullWidth"
              vertical
            />
          ))}
        </div>
      </div>

      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mt-16 bg-card overflow-visible max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl font-bold text-primary text-center flex items-center justify-center">
            Further Accomplishments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-card-foreground/90">
            {otherAchievementsList.map((item, idx) => (
              <li key={idx} className="flex items-start text-sm md:text-base">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
