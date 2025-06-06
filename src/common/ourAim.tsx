import Link from 'next/link';
interface aboutData {
    title?: string;
    titleText?: string;
    text: string;
    buttonText: string;
    buttonText2?: string;
    heading?: string;
}

function JoinUs(props: aboutData) {
    return (
        <div className="py-15">
            <div className="text-center mb-12">
                {/* ✅ Conditionally Render Title */}
                {props.title && (
                    <h2 className="text-3xl md:text-[32px] font-bold text-[#621843] mb-4">
                        {props.title}
                    </h2>
                )}
                {props.titleText && (
                    <p className="text-xl font-medium max-w-3xl mx-auto text-gray-700">
                        {props.titleText}
                    </p>
                )}
            </div>

            <div className="bg-[#FE9430] bg-[url('/images/joinUS.png')] bg-cover bg-no-repeat text-white rounded-[2rem] max-w-7xl mx-auto py-12 px-8 md:px-12 gap-6">
                {/* Text Section */}
                <div className="max-w-5xl mx-auto text-center">
                      {props.heading && (
                      <p className="text-[32px] md:text-[32px] font-bold text-[#621843] leading-snug mb-2">
                        {props.heading}
                    </p>
                          )}
                    <p className="text-[24px] md:text-[32px] font-semibold leading-snug">
                        {props.text}
                    </p>
                </div>

                {/* Button Section */}
                <div className='flex justify-center'>
                <Link href="/donate">
                    <div className="flex text-center justify-center mt-7">
                        <button className="text-xl font-semibold bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition">
                            {props.buttonText}
                        </button>
                    </div>
                </Link>
                {props.buttonText2 && (
                 <Link href="/donate">
                    <div className="flex text-center justify-center mt-7 ms-4">
                        <button className="text-xl border-2 font-semibold bg-transparent text-black px-8 py-3 rounded-full hover:bg-gray-100 transition">
                            {props.buttonText2}
                        </button>
                    </div>
                </Link>
                )}
                </div>
            </div>
        </div>
    );
}

export default JoinUs;