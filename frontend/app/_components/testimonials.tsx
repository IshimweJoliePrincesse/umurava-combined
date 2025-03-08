"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    id: 2,
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    id: 3,
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    id: 4,
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
  {
    id: 5,
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    emblaApi && emblaApi.scrollTo(index);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-2xl font-bold mb-2 leading-tight">
          Users are in Love with Skills
          <br />
          Challenges Program
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          See what our clients say about working with us.
          <br />
          Their success speaks for our dedication and expertise.
        </p>
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] min-w-0 p-1 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="relative aspect-video bg-blue-600 rounded-[8px] mb-6 group cursor-pointer overflow-hidden">
                      <div className="w-full h-full bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                        {/* Placeholder for image */}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-600">
                        <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                selectedIndex === index
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
