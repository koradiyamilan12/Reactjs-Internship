import reactlogo from "../assets/react.png";
import nodelogo from "../assets/node.png";
import jslogo from "../assets/javascript.png";
import gitlogo from "../assets/git.png";
import Card from "./Card";

const dummy = [
  {
    title: "React JS",
    description:
      "Flexible web app with highly responsive user-interfaces. React is a free and open-source front-end Js library.",
    logo: reactlogo,
  },
  {
    title: "Node JS",
    description:
      "Traffic intensive, framework driven and mobile-optimized web applications for industry-specific needs.",
    logo: nodelogo,
  },
  {
    title: "JavaScript",
    description:
      "Programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    logo: jslogo,
  },
  {
    title: "Git",
    description:
      "Git is a distributed version control system that tracks changes in any set of computer files.",
    logo: gitlogo,
  },
];

const CardTab = () => {
  return (
    <div className="card-tab-container">
      {dummy.length > 0 ? (
        dummy.map((item, index) => (
          <Card
            key={index}
            img={item.logo}
            heading={item.title}
            desc={item.description}
          />
        ))
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default CardTab;
