import Link from 'next/link';

interface AboutData {
    title?: string;
    titleText?: string;
    text: string;
    buttonText: string;
    buttonText2?: string;
    heading?: string;
}

function JoinUs(props: AboutData) {
    return (
        <div className="py-12 md:py-16 lg:py-20 px-4">
            {/* Section Header */}
            <div className="text-center mb-6 md:mb-9 lg:mb-12">
                {props.title && (
                    <h2 className="text-3xl sm:text-3xl md:text-[32px] font-bold text-[#621843] mb-4">
                        {props.title}
                    </h2>
                )}
                {props.titleText && (
                    <p className="text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto text-gray-700">
                        {props.titleText}
                    </p>
                )}
            </div>

            {/* Main Join Box */}
            <div className="bg-[#FE9430] bg-[url('/images/joinUS.png')] bg-cover bg-no-repeat text-white rounded-3xl max-w-7xl mx-auto py-6 md:py-8 lg:py-10 px-3 md:px-9 lg:px-12">
                {/* Text Section */}
                <div className="max-w-5xl mx-auto text-center">
                    {props.heading && (
                        <p className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#621843] leading-snug mb-2">
                            {props.heading}
                        </p>
                    )}
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                        {props.text}
                    </p>
                </div>

                {/* Button Section */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 md:mt-6 lg:mt-8">
                    <Link href="/donate">
                        <button className="text-[15px] sm:text-lg font-semibold bg-white text-black px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-100 transition">
                            {props.buttonText}
                        </button>
                    </Link>
                    {props.buttonText2 && (
                        <Link href="/donate">
                            <button className="text-[15px] sm:text-lg font-semibold border-2 border-white bg-transparent text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition">
                                {props.buttonText2}
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JoinUs;
