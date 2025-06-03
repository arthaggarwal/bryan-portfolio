
import ContentSection from '@/components/shared/content-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const achievementsData = [
  {
    title: "Innovator of the Year Award 2023",
    description: "Received for developing a groundbreaking algorithm that improved system efficiency by 40%. This project involved complex problem-solving, cross-functional team collaboration, and presenting the solution to executive leadership, leading to its company-wide adoption.",
    imageUrl: "https://placehold.co/600x450.png", 
    imageAlt: "Abstract representation of innovation award",
    aiHint: "award trophy"
  },
  {
    title: "Published Research: 'AI in Modern Web'",
    description: "Co-authored a peer-reviewed paper on the ethical implications and practical applications of artificial intelligence in modern web development. Published in the 'International Journal of Advanced Computer Science' and presented findings at the Global Tech Summit 2022, sparking significant discussion.",
    imageUrl: "https://placehold.co/600x450.png",
    imageAlt: "Stylized image of a research paper or journal",
    aiHint: "research paper"
  },
   {
    title: "Top Performer Q4 2022",
    description: "Recognized as a top performer for consistently exceeding project goals and delivering high-quality software solutions ahead of schedule. Contributed significantly to a critical product launch which resulted in a 25% increase in user engagement.",
    imageUrl: "https://placehold.co/600x450.png",
    imageAlt: "Graphic representing performance or success",
    aiHint: "success chart"
  }
];

const otherAchievementsList = [
  "AWS Certified Solutions Architect - Associate",
  "Keynote Speaker at DevConnect Conference 2021",
  "Lead Contributor to 'NovaUI' Open Source Project",
  "Mentored 5+ junior developers, fostering their growth and technical skills.",
  "Completed Advanced TypeScript and Performance Optimization courses.",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {achievementsData.map((ach, index) => (
          <ContentSection
            key={index}
            title={ach.title}
            description={ach.description}
            imageUrl={ach.imageUrl}
            imageAlt={ach.imageAlt}
            aiHint={ach.aiHint}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
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
