"use client";
import { contactFormData } from "@/Data/contact";
import PngIcons from "@/Icons/pngIcons";
import Image from "next/image";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}
const ContactUs = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", form);
  };
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left: Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between col-span-12 md:col-span-6 lg:col-span-5 md:pe-0 pe-5" >
          <div>
            <div className="border-l-4 border-l-[#FE9430] mb-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#621843] ms-2">C<span className="text-[#FE9430]">o</span>ntact Us</h2>
            </div>
            {contactFormData.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-[#621843] font-bold text-base sm:text-lg mb-0 xl:mb-2">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea name={field.id} id={field.id} placeholder={field.placeholder} value={form[field.id as keyof FormData]} onChange={handleChange} rows={3}
                    className="w-full border-b-2 border-[#621843] outline-none py-2 px-1 text-gray-700" />
                ) : (
                  <input type={field.type} name={field.id} id={field.id} placeholder={field.placeholder} value={form[field.id as keyof FormData]} onChange={handleChange}
                    className="w-full border-b-2 border-[#621843] outline-none py-2 px-1 text-gray-700 mb-4" />
                )}
              </div>
            ))}
          </div>
          <div>
            <button type="submit" className="bg-[#621843] text-white py-2 px-10 rounded-full shadow hover:cursor-pointer hover:bg-[#4e1334] transition"> Submit </button>
          </div>
        </form>
        {/* Right: Image Section */}
        <div className="col-span-12 md:col-span-6 lg:col-span-7 flex items-center justify-center hidden md:block">
          <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden">
            <Image src={PngIcons.contact1} alt="Contact Us Image" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
