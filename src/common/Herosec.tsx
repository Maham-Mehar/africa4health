interface AboutData {
  title: string;
  text: string;
  bg: string;
}
function HeroSection(props: AboutData) {
  const styledTitle = props.title.split("").map((char, index) =>
    char.toLowerCase() === "o" ? (
      <span key={index} className="text-[#FE9430]">
        {char}
      </span>
    ) : (
      <span key={index}>{char}</span>
    )
  );
  return (
    <div
      className={`relative ${props.bg} bg-cover bg-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-end justify-start px-4 lg:px-6 xl:px-24 text-white`}>
      <div className="relative z-10 pb-12 sm:pb-16 md:pb-24">
        <div className="border-l-4 border-[#FE9430] pl-4 sm:pl-5">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4">
            {styledTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
