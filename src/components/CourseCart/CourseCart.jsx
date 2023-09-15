import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseCart = ({ courseCartData, credit }) => {
  return (
    <div className="col-span-1 ">
      <div className="shadow-xl rounded-lg px-2 md:px-4 xl:px-6">
        <h3 className="text-xs md:text-base xl:text-xl text-[#2F80ED] font-bold py-2 border-b md:border-b-2 text-center md:text-left">
          <ToastContainer></ToastContainer>
          <small className="">Credit Hour Remaining : {20 - credit} hr</small>
        </h3>
        <h3 className="text-xs md:text-xl lg:text-2xl font-bold px-1 py-2 ">
          <small>Course Name :</small>
        </h3>
        <ul className="list-decimal list-inside text-[#1C1B1B99] pb-4 border-b-2">
          {courseCartData.map((cartData) => {
            return (
              <li
                key={cartData.id}
                className="text-[7px] md:text-sm lg:text-base font-medium">
                {cartData.title}
              </li>
            );
          })}
        </ul>
        <h3 className="text-xs md:text-xl lg:text-2xl font-bold px-1 py-2 md:py-4 border-b-2 text-[#1C1B1B99]">
          <small className="">Total Credit Hour : {credit}</small>
        </h3>
        <h3 className="text-xs md:text-xl lg:text-2xl font-bold px-1 py-2 md:py-4 text-[#1C1B1B99]">
          <small className="">Total Price : USD</small>
        </h3>
      </div>
    </div>
  );
};

CourseCart.propTypes = {
  courseCartData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseCart;
