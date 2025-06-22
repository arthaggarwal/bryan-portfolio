
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import ImageModal from './image-modal'; // Ensure this path is correct
import { Award } from 'lucide-react';

interface ContentSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageUrl2?: string;
  imageAlt2?: string;
  imageUrl3?: string;
  imageAlt3?: string;
  imageUrl4?: string;
  imageAlt4?: string;
  imagePosition?: 'left' | 'right';
  titleLayout?: 'fullWidth' | 'inline';
  contentAlignment?: 'start' | 'center' | 'end'; // New prop for vertical alignment of content items
  vertical?: boolean;
  aiHint?: string;
  aiHint2?: string;
  aiHint3?: string;
  aiHint4?: string;
  children?: React.ReactNode;
  descriptionClassName?: string;
  imageFit?: 'cover' | 'contain';
  awards?: string[];
}

export default function ContentSection({
  title,
  description,
  imageUrl,
  imageAlt,
  imageUrl2,
  imageAlt2,
  imageUrl3,
  imageAlt3,
  imageUrl4,
  imageAlt4,
  imagePosition = 'left',
  titleLayout = 'inline',
  contentAlignment = 'start', // Default to 'start'
  vertical = false,
  aiHint,
  aiHint2,
  aiHint3,
  aiHint4,
  children,
  descriptionClassName,
  imageFit = 'cover',
  awards,
}: ContentSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');

  const handleImageClick = (url: string, alt: string) => {
    setSelectedImageUrl(url);
    setSelectedImageAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
        setSelectedImageUrl(null);
        setSelectedImageAlt('');
    }, 300); 
  };

  const renderClickableImage = (
    imgUrl: string | undefined,
    imgAlt: string | undefined,
    imgAiHint?: string,
    aspectRatioClass: string = "aspect-square",
    imgSizes: string = "(max-width: 768px) 50vw, (max-width: 1200px) 23vw, 23vw"
  ) => {
    if (!imgUrl || !imgAlt) return null;

    if (imageFit === 'contain') {
      return (
        <div
          className="group cursor-pointer"
          onClick={() => handleImageClick(imgUrl, imgAlt)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick(imgUrl, imgAlt)}}
          aria-label={`View larger image for ${imgAlt}`}
        >
          <Image
            src={imgUrl}
            alt={imgAlt}
            width={800} // Base width for aspect ratio to prevent layout shift
            height={600} // Base height for aspect ratio to prevent layout shift
            sizes={imgSizes}
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={imgAiHint}
          />
        </div>
      );
    }
    
    // Default 'cover' behavior
    return (
      <div
        className={cn(
          `relative overflow-hidden rounded-lg shadow-md group cursor-pointer`,
          aspectRatioClass
        )}
        onClick={() => handleImageClick(imgUrl, imgAlt)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick(imgUrl, imgAlt)}}
        aria-label={`View larger image for ${imgAlt}`}
      >
        <Image
          src={imgUrl}
          alt={imgAlt}
          fill
          sizes={imgSizes}
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          data-ai-hint={imgAiHint}
        />
      </div>
    );
  };

  const hasFourImages = !!(imageUrl && imageUrl2 && imageUrl3 && imageUrl4);
  const hasTwoImages = !!(imageUrl && imageUrl2 && !imageUrl3);
  
  const imageEl = (
    <div className={cn(
      "w-full flex-shrink-0",
      !vertical && !hasFourImages && "md:w-1/2"
    )}>
      {hasFourImages ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {renderClickableImage(imageUrl, imageAlt, aiHint, "aspect-square", "(max-width: 768px) 45vw, 23vw")}
          {renderClickableImage(imageUrl2, imageAlt2, aiHint2, "aspect-square", "(max-width: 768px) 45vw, 23vw")}
          {renderClickableImage(imageUrl3, imageAlt3, aiHint3, "aspect-square", "(max-width: 768px) 45vw, 23vw")}
          {renderClickableImage(imageUrl4, imageAlt4, aiHint4, "aspect-square", "(max-width: 768px) 45vw, 23vw")}
        </div>
      ) : hasTwoImages ? (
        <div className={cn(
          "grid gap-4",
          vertical ? "grid-cols-2" : "grid-cols-1"
        )}>
          {renderClickableImage(imageUrl, imageAlt, aiHint, "aspect-[4/3]", "(max-width: 768px) 90vw, (max-width: 1200px) 48vw, 48vw")}
          {renderClickableImage(imageUrl2, imageAlt2, aiHint2, "aspect-[4/3]", "(max-width: 768px) 90vw, (max-width: 1200px) 48vw, 48vw")}
        </div>
      ) : (
        renderClickableImage(imageUrl, imageAlt, aiHint, "aspect-[4/3]", "(max-width: 768px) 90vw, (max-width: 1200px) 48vw, 48vw")
      )}
    </div>
  );
  
  const hasAwardsAndDescription = awards && awards.length > 0 && description;
  
  const textEl = (
    <div className={cn(
      "w-full space-y-3",
       !vertical && !hasFourImages && "md:w-1/2"
    )}>
      {titleLayout === 'inline' && (
        <h3 className="text-xl lg:text-2xl font-bold text-primary">{title}</h3>
      )}
      {awards && awards.length > 0 && (
        <ul className="space-y-3 text-card-foreground/90 pt-2">
          {awards.map((award, idx) => (
            <li key={idx} className="flex items-start text-sm md:text-base">
              <Award className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>{award}</span>
            </li>
          ))}
        </ul>
      )}
      {!hasAwardsAndDescription && description && (
        <p className={cn("text-card-foreground/90 leading-relaxed text-sm md:text-base", descriptionClassName)}>{description}</p>
      )}
      {children && <div className="pt-2">{children}</div>}
    </div>
  );

  return (
    <>
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-card">
        {titleLayout === 'fullWidth' && (
          <div className="px-6 lg:px-8 pt-6 lg:pt-8 pb-3 md:pb-4">
            <h3 className="text-xl lg:text-2xl font-bold text-primary text-center">{title}</h3>
          </div>
        )}

        <CardContent className={cn(
          "flex gap-6 lg:gap-8",
          vertical || hasFourImages ? "flex-col" : "flex-col md:flex-row",
          titleLayout === 'fullWidth' ? "px-6 lg:px-8 pt-0" : "p-6 lg:p-8",
          hasAwardsAndDescription ? 'pb-4' : 'pb-6 lg:pb-8',
          // Vertical alignment for items within CardContent
          "items-start", // Default for mobile (flex-col)
          { // Apply specific alignment for md screens (flex-row)
            'md:items-start': contentAlignment === 'start',
            'md:items-center': contentAlignment === 'center',
            'md:items-end': contentAlignment === 'end',
          },
          !vertical && !hasFourImages && imagePosition === 'right' ? 'md:flex-row-reverse' : ''
        )}>
          {imageEl}
          {textEl}
        </CardContent>

        {hasAwardsAndDescription && (
            <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                <hr className="mb-4 border-border/40" />
                <p className={cn("text-card-foreground/90 leading-relaxed text-sm md:text-base", descriptionClassName)}>{description}</p>
            </div>
        )}
      </Card>
      {selectedImageUrl && (
         <ImageModal
            isOpen={isModalOpen}
            onClose={closeModal}
            imageUrl={selectedImageUrl}
            imageAlt={selectedImageAlt}
          />
      )}
    </>
  );
}
