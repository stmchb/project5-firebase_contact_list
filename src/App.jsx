import { useEffect, useRef, useState } from "react";
import "./App.css";
import ContactLists from "./components/ContactLists";
import NavInput from "./components/NavInput";
import NotFound from "./components/NotFound";
import { db } from "./config/firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [searchContactList, setSearchContactList] = useState(null);
  const [update, setIsUpdate] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          setSearchContactList(contactLists);
          return { contactLists };
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const searchList = (value) => {
    setSearchContactList(
      contacts.filter((contact) =>
        contact.Name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleModal = () => {
    setIsOpen(true);
    setIsUpdate(false);
  };

  const isUpdate = () => {
    handleModal();
    setIsUpdate(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    let contact = {
      Name: nameRef.current.value,
      Email: emailRef.current.value,
    };

    if (!contact.Name || !contact.Email) return;

    addContact(contact);
    toast.success("Contact Added Successfully");
    onClose();
  };

  return (
    <>
      <NavInput searchList={searchList} handleModal={handleModal} />
      {searchContactList && searchContactList.length > 0 ? (
        <ContactLists
          toast={toast}
          isUpdate={isUpdate}
          handleModal={handleModal}
          onClose={onClose}
          contacts={searchContactList}
        />
      ) : (
        <NotFound />
      )}
      <Modal
        nameRef={nameRef}
        emailRef={emailRef}
        handleSubmit={handleSubmit}
        update={update}
        onClose={onClose}
        isOpen={isOpen}
      >
        Hello
      </Modal>
      <ToastContainer />
    </>
  );
}

export default App;
