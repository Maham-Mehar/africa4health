interface AboutData {
  title: string;
  text: string;
  bg: string;
}

const HeroSection = ({ title, text, bg }: AboutData) => (
  <div className={`relative ${bg} bg-cover bg-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-end px-4 lg:px-6 xl:ps-30 text-white`}>
    <div className="relative z-10 pb-12 sm:pb-16 md:pb-24 max-w-7xl">
      <div className="border-l-4 border-[#FE9430] pl-4 sm:pl-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold max-w-2xl leading-tight mb-4">
          {title.split("").map((char, i) => (
            <span key={i} className={char.toLowerCase() === "o" ? "text-[#FE9430]" : ""}>
              {char}
            </span>
          ))}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl">{text}</p>
      </div>
    </div>
  </div>
);

export default HeroSection;
