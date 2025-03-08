"use client";

import Image from "next/image";

const topRowPartners = [
  { name: "Tori", logo: "/images/tori.png" },
  { name: "CDG Kigali", logo: "/images/gdg.png" },
  { name: "The Education Collaborative", logo: "/images/education.png" },
  { name: "Kepler", logo: "/images/kepler.png" },
  { name: "HiiL", logo: "/images/hill.png" },
  { name: "CIB", logo: "/images/CIBA1.png" },
];

const bottomRowPartners = [
  { name: "ARED", logo: "/images/Ared1.png" },
  { name: "IGIHE", logo: "/images/igihe.png" },
  { name: "Viamo", logo: "/images/viamo1.png" },
  { name: "Kepler", logo: "/images/kepler.png" },
  { name: "Laterite", logo: "/images/laterite.png" },
  { name: "Digital Umuganda", logo: "/images/SokoFund.png" },
];

export default function PartnersMarquee() {
  return (
    <div className="w-full py-12 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Join a few Educational Institutions using
          <br />
          Skills Challenges by Umurava
        </h2>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Top Row Marquee */}
          <div className="flex overflow-hidden mb-8 group">
            <div className="flex animate-marquee group-hover:pause">
              {[...topRowPartners, ...topRowPartners, ...topRowPartners].map(
                (partner, idx) => (
                  <div
                    key={`top-${idx}`}
                    className="flex items-center justify-center mx-12 w-[150px] h-[60px] relative"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="object-contain cursor-pointer"
                    />
                  </div>
                )
              )}
            </div>
            <div className="flex animate-marquee group-hover:pause">
              {[...topRowPartners, ...topRowPartners, ...topRowPartners].map(
                (partner, idx) => (
                  <div
                    key={`top-duplicate-${idx}`}
                    className="flex items-center justify-center mx-12 w-[150px] h-[60px] relative"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="object-contain cursor-pointer"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Bottom Row Marquee (Reverse Direction) */}
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee-reverse group-hover:pause">
              {[
                ...bottomRowPartners,
                ...bottomRowPartners,
                ...bottomRowPartners,
              ].map((partner, idx) => (
                <div
                  key={`bottom-${idx}`}
                  className="flex items-center justify-center mx-12 w-[150px] h-[60px] relative"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee-reverse group-hover:pause">
              {[
                ...bottomRowPartners,
                ...bottomRowPartners,
                ...bottomRowPartners,
              ].map((partner, idx) => (
                <div
                  key={`bottom-duplicate-${idx}`}
                  className="flex items-center justify-center mx-12 w-[150px] h-[60px] relative"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
