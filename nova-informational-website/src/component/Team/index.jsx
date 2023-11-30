import React from "react";
import "./style.css";

const teamMembers = [
  {
    name: "Bridget Mutesi",
    role: "Software Developer",
    imageSrc: "img/image/bridget copy.jpeg",
  },
  {
    name: "Serah Wanjiru",
    role: "Software Developer",
    imageSrc: "img/image/sera.jpeg",
  },
  {
    name: "Faith Mwamkinga",
    role: "Software Developer",
    imageSrc: "img/image/faith.jpeg",
  },
  {
    name: "Maureen Ougo",
    role: "Software Developer",
    imageSrc: "img/image/maureen.jpeg",
  },
  {
    name: "Rita Khaseyi",
    role: "Software Developer",
    imageSrc: "img/image/rita.jpeg",
  },
];

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="team-member">
    <img src={imageSrc} alt={name} className="team-img" />
    <div>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="team-container">
      <div>
        <h2 className="meet">Meet the Team</h2>
        <p className="team-intro">
          We are a team of great engineers aimed to provide great services and
          experience with the app
        </p>
      </div>
      <div id="team">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <TeamMember {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
