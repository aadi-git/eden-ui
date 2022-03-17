import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

import TitleSubtitle from "../CommonComponents/TitleSubtitle";
import CardWithIcon from "../CommonComponents/CardWithIcon";

import profileIcon from "../../Assets/profile-icon.png";
import peopleIcon from "../../Assets/people-icon.png";
import { UPDATE_EDEN_PLAN } from "../Reducer/actions";

function EdenPlan({ data, dispatch }) {
  const selectCard = (card) => {
    dispatch({
      type: UPDATE_EDEN_PLAN,
      payload: { plan: card === data.plan ? "" : card },
    });
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
              isActive={data.plan === cardObj.id}
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

EdenPlan.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func,
};

EdenPlan.defaultProps = {
  data: {},
  dispatch: () => {},
};

export default EdenPlan;
