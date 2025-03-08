import Image from "next/image";

export default function CTASection() {
  return (
    <div className="bg-white p-4 md:p-8">
      <div className=" max-w-6xl mx-auto pb-6 relative overflow-hidden rounded-3xl bg-blue-600">
        <div className="absolute -bottom-24 left-0 w-40 h-40">
          <Image
            src="/images/e5.png"
            alt="Decorative element"
            width={200}
            height={100}
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
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue/20 blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative px-4 py-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold max-w-xl mx-auto mb-8">
            Ready to transform your
            <br />
            learning institution?
          </h2>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-[8px] font-medium hover:bg-blue-700 hover:text-white transition-colors">
            Let's Partner
          </button>
        </div>
      </div>
    </div>
  );
}
