import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/project-6.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an aspiring data and business enthusiast with a strong foundation in building analytical tools and user-focused platforms. My experience includes working with tools like Excel, Power BI, and SQL, as well as projects such as Code-Quest, a technical Q&A platform, and SummarizeX, an AI-powered article summarization tool with multilingual and text-to-speech support. I’ve developed dashboards and solutions that uncover key insights and support decision-making. My goal is to apply strategic thinking, analytical skills, and real-time communication tools to solve business problems and create meaningful, scalable solutions that drive growth and efficiency.`;

export const ABOUT_TEXT = `I am a Chemical Engineering graduate from NIT Karnataka, 
driven by a strong interest in data-driven decision-making and strategic analysis. I bring hands-on 
experience working on real-world data projects such as a Power BI-based HR Analytics Dashboard and a 
dynamic Excel-based Bike Sales Dashboard, both aimed at generating actionable insights and enhancing
 business outcomes. Additionally, I’ve built platforms like Code-Quest, a technical Q&A tool, and SummarizeX, 
 an AI-powered article summarization app, integrating features like multilingual 
 support and user interaction tools. My work during INCIDENT’25—South India’s 
 largest cultural fest—where I led event execution and secured sponsorships 
 worth ₹80,000, further reflects my ability to handle high-stakes, cross-functional initiatives. I aim to combine my skills in analysis, communication, and user-centric design to contribute meaningfully to data-driven roles and build impactful business solutions.`;


export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    role: "Full Stack Developer",
    company: "Nullclass-Nucleus Technology",
    description: `Developed Code-Quest, a Stack Overflow clone using React, JavaScript, and CSS, featuring a Gemini API-powered chatbot and integrated ads. Implemented a secure private chatroom for real-time communication and file sharing, with session-based data deletion. This project enhanced web development, real-time communication, and UX design skills, resulting in a sophisticated and user-friendly platform.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  {
    year: "Feb 2024 - March 2024",
    role: "Frontend Developer",
    company: "InternPixel",
    description: `Collaborated with a team to develop SparkTech, a website offering various online courses for developers and college students, focusing on creating a seamless and engaging front-end experience using React and CSS. This project enhanced front-end development and user interface design skills, enabling users to easily browse courses.`,
    technologies: ["HTML", "CSS", "React.js", "Javascript"],
  },

  {
    year: "Dec 2024 - Mar 2025",
    role: "Events Head",
    company: "INCIDENT'25 – NITK Surathkal",
    description: `Led a 5-member team in organizing South India’s largest cultural fest, overseeing end-to-end event planning, sponsorship acquisition, and execution. Successfully secured ₹80,000 in sponsorship from Krafton by co-designing a gaming event. Managed vendor coordination, logistics, and marketing collaborations to ensure smooth operations and high audience engagement, significantly boosting the fest's visibility and impact.`,
    technologies: ["Leadership", "Strategic Planning", "Event Management", "Marketing"]
  }

  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "SummarizeX",
    image: project1,
    description:
      "An AI powered tool for summarizing articles. Simplifies content consumption for busy professionals.",
    technologies: ["React", "Tailwind", "RapidApi", "Clerk"],
    link: "https://summarize-x.vercel.app/"
  },
  {
    title: "CodeQuest",
    image: project2,
    description:
      " Code-Quest, a Stack Overflow clone with a chatbot, ad integration, and secure real-time chat features using React, JavaScript, and CSS.",
    technologies: ["React", "CSS", "mongodb", "node.js"],
    link: "https://code-quest-webapp.vercel.app/"
  },
 {
  title: "HR Analytics Dashboard",
  image: project3,
  description:
    "Designed an interactive Power BI dashboard to visualize HR metrics like attrition rate and age-wise distribution. Enabled strategic decision-making through real-time insights using DAX and Power Query.",
  technologies: ["Power BI", "DAX", "Power Query", "Data Visualization"],
  link: "https://github.com/Krishna100604/HR-Analytics-Dashboard"
},
{
  title: "Bike Sales Dashboard",
  image: project4,
  description:
    "Built a dynamic Excel dashboard with Pivot Tables and Charts to analyze customer trends based on gender, income, and age. Included slicers and filters for real-time, interactive insights.",
  technologies: ["Excel", "Pivot Tables", "Charts", "Data Cleaning"],
  link: "https://github.com/Krishna100604/Bike-Sales-Dashboard"
}

];

export const CONTACT = {
  address: "Vadali,Gujarat,383235",
  phoneNo: "+919313060298 ",
  email: "rsp31577@gmail.com",
};


