
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="py-12 md:py-16 relative h-full flex flex-col justify-center"> {/* Adjusted for vertical centering if content allows */}
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="md:w-3/5 space-y-5 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight flex items-center justify-center md:justify-start">
            Hi, I'm Bryan
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
            I am passionate about doing research that is meaningful in improving lives and advancing science. I aspire to use my knowledge and love for STEM to create a substantial impact on the world and help as many people as I can.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/experience">
                View My Experience <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-card text-card-foreground hover:bg-card/90 shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href="/achievements">
                See Achievements
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0 relative">
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] z-10">
            <Image
              src="/pfp.jpeg"
              alt="Bryan's profile picture"
              fill
              sizes="(max-width: 639px) 300px, (max-width: 1023px) 350px, 400px"
              className="rounded-xl shadow-lg object-cover"
              data-ai-hint="profile picture"
              priority
            />
            {/* Decorative Frame - using primary purple */}
            <div className="absolute -top-[5px] -left-[5px] w-2.5 h-2.5 border-t-2 border-l-2 border-[hsl(var(--primary))] rounded-tl-sm z-10" aria-hidden="true"></div>
            <div className="absolute -top-[5px] -right-[5px] w-2.5 h-2.5 border-t-2 border-r-2 border-[hsl(var(--primary))] rounded-tr-sm z-10" aria-hidden="true"></div>
            <div className="absolute -bottom-[5px] -left-[5px] w-2.5 h-2.5 border-b-2 border-l-2 border-[hsl(var(--primary))] rounded-bl-sm z-10" aria-hidden="true"></div>
            <div className="absolute -bottom-[5px] -right-[5px] w-2.5 h-2.5 border-b-2 border-r-2 border-[hsl(var(--primary))] rounded-br-sm z-10" aria-hidden="true"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
