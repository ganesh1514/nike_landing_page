import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-2xl p-6">
      <img
        src={imgURL}
        alt="cutomer"
        className="rounded-full object-contain w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text ">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5 mt-3">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-3 font-bold font-palanquin text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
