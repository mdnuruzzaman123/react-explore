import { useState } from "react";
import CourseCards from "../CourseCards/CourseCards";
import CourseCart from "../CourseCart/CourseCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  // useSate
  const [courseCartData, setCourseCartData] = useState([]);
  const [credit, setCredit] = useState(0);

  const handleClickCartData = (cartData) => {
    const findSelected = courseCartData?.find(
      (item) => item.id === cartData.id
    );

    if (findSelected) {
      toast.error("Oops! You've already selected this course");
      return;
    }

    let credit = 0;
    [...courseCartData, cartData].forEach((item) => {
      credit += item.credit;
    });

    console.log(credit);
    if (credit > 20) {
      toast.error("You do not select this course !");
      return;
    }

    const newCardData = [...courseCartData, cartData];
    setCourseCartData(newCardData);
    setCredit(credit);
  };

  return (
    <main className="md:max-w-2xl lg:max-w-4xl  xl:max-w-7xl 2xl:max-w-screen-2xl md:mx-auto my-8 md:my-12 mx-3">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Course Registration
      </h1>
      <ToastContainer></ToastContainer>
      <section className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        <CourseCards handleClickCartData={handleClickCartData}></CourseCards>
        <CourseCart
          courseCartData={courseCartData}
          credit={credit}></CourseCart>
      </section>
    </main>
  );
};

export default Main;
