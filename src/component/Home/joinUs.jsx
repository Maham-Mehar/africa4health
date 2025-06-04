const JoinUs = () => {
    return (
        <div>

            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-[32px] font-bold text-[#621843] mb-4">
                    Get Involved
                </h2>
                <p className="text-xl font-medium max-w-3xl mx-auto text-gray-700">
                    Join us in our mission to improve healthcare access across Africa. Whether through volunteering, partnerships, or donations, your support makes a difference.
                </p>
            </div>

       <div className="bg-[#FE9430] bg-[url('/images/joinUS.png')] bg-cover bg-no-repeat text-white rounded-[2rem] max-w-7xl mx-auto py-12 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
  {/* Text Section */}
  <div className="max-w-xl">
    <p className="text-[24px] md:text-[32px] font-semibold leading-snug">
      Your contribution helps us provide essential healthcare services, train medical professionals, and improve health outcomes for communities across Africa.
    </p>
  </div>

  {/* Button Section */}
  <div className="md:pe-[160px]">
    <button className="text-xl font-semibold bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition">
      Make a Donation
    </button>
  </div>
</div>

        </div>
    );
}
export default JoinUs;