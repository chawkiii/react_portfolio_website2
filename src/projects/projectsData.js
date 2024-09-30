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
    title: "B.Broderie",
    image: projectTwo,
    description: (
      <>
        <p>
          e-commerce web page, using HTML, CSS, JavaScript... fonctionnal cart, animated and designed carousel... 
        </p>
      </>
    ),
    github: "https://github.com/chawkiii/b.broderie",
    demo: "https://chawkii-bbroderie.netlify.app",
  },
  3: {
    title: "Portfolio",
    image: projectThree,
    description: (
      <>
        <p>
          another version of my potfolio with other projects such as, todo list in react...
        </p>
      </>
    ),
    github: "https://github.com/chawkiii/react-portfolio-website",
    demo: "https://chawkii-react-portfolio1.netlify.app",
  },
};

export default projects;
