import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const ContactLists = ({ contacts, isUpdate, toast }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.error("Contact has been Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="w-[360px] rounded-md mb-2 h-[80px] p-3 bg-[#FFEAAE] flex items-center justify-between"
        >
          <div className="w-[64px] h-[64px] flex justify-center items-center">
            <img
              className="w-full h-full object-contain"
              src="user.svg"
              alt="User"
            />
          </div>

          <div className="flex-1 px-3">
            <h1 className="font-bold text-lg">{contact.Name}</h1>
            <p className="text-md">{contact.Email}</p>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              onClick={isUpdate}
              className="w-8 h-8"
              src="edit.svg"
              alt="Edit"
            />
            <img
              onClick={() => deleteContact(contact.id)}
              className="w-8 h-8"
              src="trash.svg"
              alt="Delete"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactLists;
