import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSubtitle from "../CommonComponents/TitleSubtitle";
import CardWithIcon from "../CommonComponents/CardWithIcon";

import profileIcon from "../../Assets/profile-icon.png";
import peopleIcon from "../../Assets/people-icon.png";

function EdenPlan() {
  const [selectedCard, setSelectedCard] = useState("Myself");
  const selectCard = (card) => {
    setSelectedCard(card === selectedCard ? "" : card);
  };

  const cardArray = [
    {
      id: "Myself",
      icon: profileIcon,
      title: "For myself",
      text: "Write better. Think more clearly. Stay organized.",
    },
    {
      id: "Team",
      icon: peopleIcon,
      title: "With my team",
      text: "Wikis, docs, tasks & projects, all in one place",
    },
  ];

  return (
    <>
      <Row className="py-4">
        <TitleSubtitle
          title="How are you planning to use Eden?"
          subtitle="We'll streamline your setup experience accordingly."
        />
      </Row>
      <Row className="pb-3">
        {cardArray.map((cardObj) => (
          <Col md={6}>
            <CardWithIcon
              isActive={selectedCard === cardObj.id}
              onClick={() => selectCard(cardObj.id)}
              icon={cardObj.icon}
              title={cardObj.title}
              text={cardObj.text}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default EdenPlan;
