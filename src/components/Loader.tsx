import loader_image from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="w-[100%] sm:w-[90%] h-[10vh] mx-auto p-4 flex items-center justify-center">
      <img src={loader_image} alt="Loading screen" className=" object-cover" />
    </div>
  );
};

export default Loader;
