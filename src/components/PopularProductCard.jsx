import { star } from "../assets/icons";
// import ProductImg from "./ProductImg";

const PopularProductCard = ({ imgURL, productName, productPrice }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full rounded-2xl shadow-lg hover:-translate-y-2 px-4 py-2 transition-all duration-300 ease-in-out">
      {/* <ProductImg imgURL={imgURL} /> */}
      <img src={imgURL} alt={productName} className="w-[280px] h-[280px] " />
      <div className="mt-8 flex flex-col items-start justify-start gap-2.5">
        <div className="flex justify-between items-center gap-2">
          <span>
            <img src={star} alt="rating" width={24} height={24} />
          </span>
          <p className="text-xl leading-normal font-montserrat text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
          {productName}
        </h3>
        <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">
          {productPrice}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
