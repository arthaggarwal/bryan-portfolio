
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageUrl2?: string; // Optional second image
  imageAlt2?: string; // Optional alt for second image
  imagePosition?: 'left' | 'right';
  aiHint?: string;
  aiHint2?: string; // Optional AI hint for second image
  children?: React.ReactNode; // For additional content like lists or buttons
}

export default function ContentSection({
  title,
  description,
  imageUrl,
  imageAlt,
  imageUrl2,
  imageAlt2,
  imagePosition = 'left',
  aiHint,
  aiHint2,
  children
}: ContentSectionProps) {
  const imageEl = (
    <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md group w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          data-ai-hint={aiHint}
        />
      </div>
      {imageUrl2 && imageAlt2 && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md group w-full">
          <Image
            src={imageUrl2}
            alt={imageAlt2}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={aiHint2}
          />
        </div>
      )}
    </div>
  );
  
  const textEl = (
    <div className="w-full md:w-2/3 space-y-3">
      <h3 className="text-xl lg:text-2xl font-bold text-primary">{title}</h3>
      <p className="text-card-foreground/90 leading-relaxed text-sm md:text-base">{description}</p>
      {children && <div className="pt-2">{children}</div>}
    </div>
  );

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-card">
      <CardContent className={cn(
        "flex flex-col md:flex-row gap-6 lg:gap-8 p-6 lg:p-8 items-center",
        imagePosition === 'right' ? 'md:flex-row-reverse' : ''
      )}>
        {imageEl}
        {textEl}
      </CardContent>
    </Card>
  );
}
