// import { useState } from "react";
// import CourseCards from "../CourseCards/CourseCards";
// import CourseCart from "../CourseCart/CourseCart";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Main = () => {
//   // useSate
//   const [courseCartData, setCourseCartData] = useState([]);

//   // handleClick Button function
//   const handleClickCartData = (cartData) => {
//     let isAlreadySelected = false;

//     for (const selectedCourse of courseCartData) {
//       if (selectedCourse.id === cartData.id) {
//         isAlreadySelected = true;
//         break; // Exit the loop when a matching course is found
//       }
//     }

//     if (isAlreadySelected) {
//       toast.error("Oops! You've already selected this course"); // Display an error toast
//     } else {
//       const newCardData = [...courseCartData, cartData];
//       setCourseCartData(newCardData);
//     }
//   };

//   return (
//     <>
//       <ToastContainer></ToastContainer>
//       <main className="md:max-w-2xl lg:max-w-4xl  xl:max-w-7xl 2xl:max-w-screen-2xl md:mx-auto my-8 md:my-12 mx-3">
//         <h1 className="text-center text-2xl md:text-4xl font-bold mb-8">
//           Course Registration
//         </h1>
//         <section className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
//           <CourseCards handleClickCartData={handleClickCartData}></CourseCards>
//           <CourseCart courseCartData={courseCartData}></CourseCart>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Main;

import { useState } from "react";
import CourseCards from "../CourseCards/CourseCards";
import CourseCart from "../CourseCart/CourseCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  // useSate
  const [courseCartData, setCourseCartData] = useState([]);

  const handleClickCartData = (cartData) => {
    let isAlreadySelected = false;

    for (const selectedCourse of courseCartData) {
      if (selectedCourse.id === cartData.id) {
        isAlreadySelected = true;
        break; // Exit the loop when a matching course is found
      }
    }

    if (isAlreadySelected) {
      toast.error("Oops! You've already selected this course"); // Display an error toast
    } else {
      const newCardData = [...courseCartData, cartData];
      setCourseCartData(newCardData);
    }
  };

  return (
    <main className="md:max-w-2xl lg:max-w-4xl  xl:max-w-7xl 2xl:max-w-screen-2xl md:mx-auto my-8 md:my-12 mx-3">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Course Registration
      </h1>
      <ToastContainer></ToastContainer>
      <section className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        <CourseCards handleClickCartData={handleClickCartData}></CourseCards>
        <CourseCart courseCartData={courseCartData}></CourseCart>
      </section>
    </main>
  );
};

export default Main;
