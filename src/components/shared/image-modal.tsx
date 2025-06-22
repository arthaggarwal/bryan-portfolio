
'use client';

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
  DialogTitle, // Import DialogTitle
} from '@/components/ui/dialog';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  imageAlt: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
}: ImageModalProps) {
  if (!imageUrl || !isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="bg-black/80" />
        <DialogContent className="max-w-5xl w-auto h-auto p-1 bg-transparent border-none shadow-none outline-none flex items-center justify-center data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
          <DialogTitle className="sr-only">{imageAlt || 'Image Preview'}</DialogTitle>
          <div className="relative max-h-[90vh] max-w-[90vw] aspect-[auto]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={1920}
              height={1080}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
              className="rounded-lg"
            />
          </div>
          <DialogClose
            onClick={onClose}
            className="absolute top-2 right-2 rounded-full p-1.5 bg-card/80 text-card-foreground hover:bg-card focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-2 transition-opacity z-50"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
