"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    logo: "/images/sf.png",
    title: [
      "The Embedded Finance Platform",
      "and Payroll Management Software Solutions",
      "for your organization and Workforce.",
    ],
    image: "/images/dashboard.png",
  },
  {
    logo: "/images/sf.png",
    title: [
      "The Embedded Finance Platform",
      "and Payroll Management Software Solutions",
      "for your organization and Workforce.",
    ],
    image: "/images/dashboard.png",
  },
  {
    logo: "/images/sf.png",
    title: [
      "The Embedded Finance Platform",
      "and Payroll Management Software Solutions",
      "for your organization and Workforce.",
    ],
    image: "/images/dashboard.png",
  },
];

export default function SaasCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                  <div className="bg-[#F1F1F1] rounded-[8px] p-8">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                      <div className="space-y-6">
                        <div className="h-12 w-12 overflow-hidden rounded-[8px] bg-white">
                          <Image
                            src={slide.logo || "/placeholder.svg"}
                            alt="Logo"
                            width={48}
                            height={48}
                            className="h-full w-full object-contain p-2"
                          />
                        </div>
                        <h2 className="text-lg font-medium leading-tight lg:text-lg">
                          {slide.title.map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < slide.title.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </h2>
                        <Button
                          variant="link"
                          className="group px-0 text-blue-500 hover:text-blue-600/90"
                        >
                          Learn more
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ml-2">
                            <ArrowRight className="h-4 w-4 text-white transition-transform group" />
                          </span>
                        </Button>
                      </div>
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={slide.image || "/placeholder.svg"}
                          alt="Dashboard preview"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  selectedIndex === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
