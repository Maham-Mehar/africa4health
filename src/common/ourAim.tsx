import Link from "next/link";

interface AboutData {
  title?: string;
  titleText?: string;
  text: string;
  buttonText: string;
  buttonText2?: string;
  heading?: string;
}
export default function JoinUs({ title, titleText, text, buttonText, buttonText2, heading }: AboutData) {
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20 px-4">
      <div className="text-center mb-6 md:mb-9 lg:mb-12">
        {title && <h2 className="text-3xl md:text-[32px] font-bold text-[#621843] mb-4">{title}</h2>}
        {titleText && <p className="text-base md:text-xl font-medium max-w-3xl mx-auto text-gray-700">{titleText}</p>}
      </div>
      <div className="bg-[#FE9430] bg-[url('/images/joinUS.png')] bg-cover bg-no-repeat text-white rounded-3xl max-w-7xl mx-auto py-6 md:py-8 lg:py-10 px-3 md:px-9 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {heading && <p className="text-xl md:text-[32px] font-bold text-[#621843] leading-snug mb-2">{heading}</p>}
          <p className="text-lg md:text-2xl font-semibold leading-snug">{text}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 md:mt-6 lg:mt-8">
          <Link href="/donate">
            <button className="text-[15px] sm:text-lg font-semibold bg-white text-black px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-100 transition">{buttonText}</button>
          </Link>
          {buttonText2 && (
            <Link href="/contact">
              <button className="text-[15px] sm:text-lg font-semibold border-2 border-white bg-transparent text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition">
                {buttonText2}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
