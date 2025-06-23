import { thumbnailBackground } from "../assets/images";
const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
        ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div
        className={`flex justify-center items-center 
        
        bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4`}
        style={{ backgroundImage: `url("${thumbnailBackground}")` }}
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
