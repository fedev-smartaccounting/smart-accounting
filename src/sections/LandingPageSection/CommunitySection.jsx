import flagImage from "@/assets/images/flag.png";

export default function CommunitySection() {
  return (
    <section className="relative w-full pb-30 bg-gradient-to-b from-[#3417b3] to-[#50b0dd] sm:min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* content */}
      {/* Flag Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={flagImage}
          alt="Community Flags"
          className="w-full h-[full] object-cover object-center"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#3d4a99]/10"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-c enter justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-40 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
          {/* Tag */}
          <p className="text-white sm:text-lg md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 md:mb-4 tracking-wide">
            Driven By Purpose
          </p>

          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight sm:leading-tight md:leading-tight mb-4 sm:mb-5 md:mb-6">
            Rooted In
            <br />
            Community
          </h2>

          {/* Description */}
          <p className="text-white text-base leading-relaxed max-w-lg mx-auto opacity-95">
            We champion small businesses and elevate voices from within the
            community.
          </p>
        </div>
      </div>
    </section>
  );
}
