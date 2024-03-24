const MarketData = ({ imageSrc, title, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden sm:w-70 sm:h-60 md:w-70 md:h-70 ">
        <img className="w-full h-40 object-cover object-center" src={imageSrc} alt={title} />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default MarketData;
  