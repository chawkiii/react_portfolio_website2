import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Template Website Lawyer",
    image: projectOne,
    description: (
      <>
        <p>
          Using "HTML, CSS, JavaScript, Json":
          SEO, Contact Form, Maps link, Responsive...
          Designed to represent a lawyer specializing in business law and international law. Its main objective is to provide clear and accessible information about the legal services offered, while allowing users to easily contact him.
        </p>
      </>
    ),
    github: "https://github.com/chawkiii/avocat",
    demo: "https://chawkii-avocat-temp.netlify.app/",
  },
  2: {
    title: "Productivity App",
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
