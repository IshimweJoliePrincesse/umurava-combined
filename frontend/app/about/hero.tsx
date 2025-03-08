"use client";
import { useState } from "react";
import { Play } from "lucide-react";
export default function StorySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B71F0] text-center md:text-left">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed text-center md:text-left">
              With 3 years of experience matching African digital talents to
              local and global job markets, we still remain with a big number of
              jobs that remain unfilled due to the lack of experienced African
              Talents.
            </p>
            <p className="leading-relaxed text-center md:text-left">
              Driven by our mission to place skilled and professional digital
              talent, we created Skills Challenges as a project-based learning
              solution for talents to gain real-world experience, solve
              problems, and build portfolios so that they become ready for
              global job markets.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative aspect-video bg-[#1D4ED8] rounded-[8px] overflow-hidden">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full flex items-center justify-center group"
              aria-label="Play video"
            >
              {/* Thumbnail */}
              {/* <img
                src=""
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              /> */}

              {/* Play Button */}
              <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 text-[#1D4ED8] ml-1" />
              </div>

              {/* Video Title Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold tracking-wider absolute bottom-8">
                  UMURAVA SKILLS CHALLENGES
                </h3>
              </div>
            </button>
          ) : (
            <video
              className="w-full h-full"
              controls
              autoPlay
              src="/your-video.mp4"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
