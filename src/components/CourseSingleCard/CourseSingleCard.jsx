import PropTypes from "prop-types";

const CourseSingleCard = ({ card, handleClickCartData }) => {
  // destructuring
  const { image, title, description, price, credit, credit_img, dollar_img } =
    card;
  return (
    <div className="p-3 xl:p-5 shadow-xl rounded-xl">
      <img className="w-full rounded-lg" src={image} alt="" />
      <h3 className="text-xl  xl:text-3xl font-semibold text-black mt-2 lg:mt-4">
        <small>{title}</small>
      </h3>
      <p className="2xl:w-11/12 text-xs md:text-sm xl:text-xl my-2 2xl:mt-4 text-[#1C1B1B99]">
        <small>{description}</small>
      </p>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-1 xl:gap-2 mb-2">
          <img className="w-4 xl:w-5" src={dollar_img} alt="" />
          <h3 className="text-xs xl:text-base 2xl:text-xl font-semibold  text-[#1C1B1B99]">
            Price : {price}
          </h3>
        </div>
        <div className="flex items-center gap-1 xl:gap-2 mb-2 ">
          <img className="w-4 xl:w-5" src={credit_img} alt="" />
          <h3 className="text-xs xl:text-base 2xl:text-xl font-semibold text-[#1C1B1B99]">
            Credit : {credit} hr
          </h3>
        </div>
      </div>
      <button
        onClick={() => handleClickCartData(card)}
        className="w-full text-white md:text-lg xl:text-xl font-medium bg-[#2F80ED] py-1 xl:py-2 rounded-lg "
      >
        Select
      </button>
    </div>
  );
};

CourseSingleCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired,
    credit_img: PropTypes.string.isRequired,
    dollar_img: PropTypes.string.isRequired,
  }).isRequired,
  handleClickCartData: PropTypes.func.isRequired,
};

export default CourseSingleCard;
