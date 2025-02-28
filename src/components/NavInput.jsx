import React from "react";

const NavInput = ({ handleModal, searchList }) => {
  return (
    <>
      <div className="flex justify-center p-[40px] overflow-x-hidden">
        <div className="rounded-xl h-[60px] w-[361px] bg-white text-black font-bold flex justify-center gap-3 items-center ">
          <img src="vector.svg" alt="firebase-logo" />
          <h1>Firebase Contact App</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative left-0 top-3.5">
          <img src="search.png" alt="search-logo" />
        </div>
        <div className="z-4 relative right-10">
          <input
            onChange={(e) => searchList(e.target.value)}
            className="text-white w-[295px] rounded-xl border-1 px-12 py-3 p-2"
            type="text"
            placeholder="Search Contact..."
          />
        </div>
      </div>
      <div className="flex cursor-pointer relative justify-center left-40 bottom-12">
        <img onClick={handleModal} src="plus-icon.png" alt="plus image" />
      </div>
    </>
  );
};

export default NavInput;
