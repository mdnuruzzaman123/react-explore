import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import CourseSingleCard from "../CourseSingleCard/CourseSingleCard";

const CourseCards = ({ handleClickCartData }) => {
  // useState
  const [courseCards, setCourseCards] = useState([]);

  //   useEffect
  useEffect(() => {
    fetch("./Course.json")
      .then((res) => res.json())
      .then((data) => setCourseCards(data));
  }, []);

  return (
    <div className="col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courseCards.map((card) => (
        <CourseSingleCard
          key={card.id}
          handleClickCartData={handleClickCartData}
          card={card}></CourseSingleCard>
      ))}
    </div>
  );
};

CourseCards.propTypes = {
  handleClickCartData: PropTypes.func.isRequired,
};

export default CourseCards;
