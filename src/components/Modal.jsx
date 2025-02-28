import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  nameRef,
  emailRef,
  handleSubmit,
  isOpen,
  onClose,
  update,
}) => {
  return (
    isOpen && (
      <>
        <div className="flex justify-center items-center relative z-50 h-full w-full">
          <div className="min-w-[20%] h-[340px] bg-white p-5 py-5 gap-3 flex flex-col absolute ">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="text-3xl flex justify-end cursor-pointer"
              />
            </div>

            <label>Name</label>
            <input
              ref={nameRef}
              className="h-13 p-[10px] border-[1px] mt-1"
              type="text"
              placeholder="Enter Name"
            />
            <label>Email</label>
            <input
              required
              ref={emailRef}
              className="p-[10px]  border-[1px] mt-1"
              type="email"
              placeholder="Enter Email"
            />

            <div className="flex justify-end mt-2 ">
              <button
                onClick={handleSubmit}
                className=" cursor-pointer bg-[#FCCA3F] rounded-sm text-black px-3 font-semibold border-[1px] py-2 max-w-[120px] item-center"
              >
                {update ? "Update" : "Add"} Contact
              </button>
            </div>
          </div>
        </div>
        <div className="backdrop-blur absolute top-0 h-screen w-screen z-40" />
      </>
    )
  );
};

export default Modal;
