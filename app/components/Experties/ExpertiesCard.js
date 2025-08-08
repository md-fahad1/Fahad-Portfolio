const ExpertiesCard = ({ lavel, experience }) => {
  return (
    <div className="skill-cart absolute z-10 p-3 -left-[30%] -top-[100%] bg-[#151030] w-32 opacity-0 invisible transition-opacity duration-500 text-[10px] rounded-br-3xl shadow-md shadow-[#70e0ff] md:-left-[150%]">
      <h6 className="text-left text-white">lavel</h6>
      <div className="flex gap-1 items-center text-white">
        <div className=" w-full h-1 bg-gray-500 overflow-hidden rounded-full text-white">
          <div
            className="bg-[#70e0ff] h-full text-white"
            style={{ width: `${lavel}` }}
          ></div>
        </div>
        <span>{lavel}</span>
      </div>

      <h6 className="text-left text-white">Experience</h6>
      <div className="flex gap-1 items-center text-white">
        <div className="lavel w-full h-1 bg-gray-500 overflow-hidden rounded-full">
          <div
            className="bg-[#F41587] h-full text-white"
            style={{ width: `${experience}` }}
          ></div>
        </div>
        <span>{experience}</span>
      </div>
    </div>
  );
};

export default ExpertiesCard;
