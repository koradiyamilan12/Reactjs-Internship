import { useContext } from "react";
import "./About.css";
import { ModeContext } from "../context/mode-context";

const About = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div
      className={`about-wrapper ${mode === "dark" ? "darkmode" : "lightmode"}`}
    >
      <div className="about-container">
        <h2 className="about-heading">About ToDo</h2>
        <div className="about-line"></div>
        <p className="about-desc">
          A to-do list is a list of items that <span>need to be completed</span>
          . The items on the list can range from simple activities like replying
          to an email, to more complex tasks like creating project briefs.
        </p>
        <p className="about-desc">
          The items on a to-do list are usually <span>action-oriented</span>,
          such as “Schedule a meet with the R&D team” or “Call back customer X.”
          Some lists include more abstract goals, such as “improve your time
          management skills” or “learn how to use a new software program.”
        </p>
      </div>
    </div>
  );
};

export default About;
