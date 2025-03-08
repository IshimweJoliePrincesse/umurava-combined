import React from "react";
import Image from "next/image";
export default function MetricsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="bg-blue-600 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute -bottom-32 left-0 w-72 h-72">
          <Image
            src="/images/e3.png"
            alt="Decorative element"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="absolute top-0 right-0 w-36 h-36">
          <Image
            src="/images/e1.png"
            alt="Decorative element"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              1
            </div>
            <div className="text-white/90 text-sm md:text-base">Year</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              500+
            </div>
            <div className="text-white/90 text-sm md:text-base">
              Challenges Completed
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              10K+
            </div>
            <div className="text-white/90 text-sm md:text-base">users</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              6+
            </div>
            <div className="text-white/90 text-sm md:text-base">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
}
