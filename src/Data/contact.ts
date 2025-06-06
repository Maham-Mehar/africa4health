// src/data/contactFormData.ts

export interface ContactField {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

export const contactFormData: ContactField[] = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter Your Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter Your Email",
    type: "email",
  },
  {
    id: "message",
    label: "Message",
    placeholder: "Write Your Message",
    type: "textarea",
  },
];
