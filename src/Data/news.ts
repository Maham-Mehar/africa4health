// data/newsData.ts

export type NewsTab = {
  label: string;
  active: boolean;
};

export type NewsCard = {
  title: string;
  date: string;
  readTime: string;
  description: string;
  title1: string;
  detail1: string;
  title2: string;
  detail2: string;
  title3: string;
  detail3: string;
  title4: string;
  detail4: string;
  image: string;
  heading: string;
  alt: string;
};

export const newsTabs: NewsTab[] = [
  { label: "Education", active: true },
  { label: "Healthcare Access", active: false },
  { label: "Healthcare Initiative", active: false },
];

export const newsCard: NewsCard = {
  title: "Training Program Graduates 100 New Healthcare Workers",
  date: "May 30, 2025",
  readTime: "2 min read",
  heading:"Our latest cohort of community health workers completed their training, ready to serve their local communities.",
  description:
    "Africa for Health is proud to announce the graduation of 100 new healthcare workers, trained to serve communities across Africa...",

  title1: "Comprehensive Training with Real-World Impact",
  detail1:
    "The training program, which combines practical skills with essential healthcare knowledge, prepares these graduates to tackle pressing health challenges, from maternal and child health to disease prevention and emergency response. By empowering local individuals with these skills, we’re creating a sustainable, long-term impact on the health of their communities.",

  title2: "Why This Matters",
  detail2:
    "Many areas in Africa still face a shortage of qualified healthcare workers, particularly in rural regions. This program aims to close that gap by providing the tools and knowledge needed to offer better care and improve health outcomes. These new graduates will be vital in providing direct care, promoting health education, and advocating for healthier communities.",

  title3: "A Bright Future Ahead",
  detail3:
    "These graduates represent a new generation of health advocates, dedicated to improving access to healthcare in their communities. With ongoing training programs and your support, we are working toward a healthier future for Africa.",

  title4: "Get Involved",
  detail4:
    "Support the growth of healthcare in Africa by donating today. Your contribution helps fund training programs that create lasting change.",

  image: "/images/doctor.jpg", // Adjust the path based on your project structure
  alt: "Doctor",
};
