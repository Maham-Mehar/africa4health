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
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 px-6 items-stretch">
        {/* Left: Form Section (4/12 columns) */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col justify-between col-span-12 md:col-span-5 mt-[55px]"
        >
          <div>
            <div className="border-l-4 border-l-[#FE9430]">
              <h2 className="text-4xl font-extrabold text-[#621843] mb-4 ms-2">
                C<span className="text-[#FE9430]">o</span>ntact Us
              </h2>
            </div>
            {contactFormData.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-[#621843] font-bold text-lg mb-2"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.id}
                    id={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id as keyof FormData]}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border-b-2 border-[#621843] outline-none py-2 px-1 text-gray-700"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.id}
                    id={field.id}
                    placeholder={field.placeholder}
                    value={form[field.id as keyof FormData]}
                    onChange={handleChange}
                    className="w-full border-b-2 border-[#621843] outline-none py-2 px-1 text-gray-700 mb-4"
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#621843] text-white py-2 px-12 rounded-full shadow hover:bg-[#4e1334] transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Right: Image Section (8/12 columns) */}
        <div className="col-span-12 md:col-span-7  h-full relative">
          <div className="relative w-[780px] h-full rounded overflow-hidden">
            <Image
              src={PngIcons.contact1}
              alt="Contact Us Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
