import { useState, useEffect } from "react";
import Modal from "./Modal";
import Input from "../Textinput";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  addContact,
  editContact,
  AppState,
  Contact,
} from "../../store";
import CheckBox from "../CheckBox";
interface Contactmodalpros {
  initialContact?: Contact | null;
}

const Contactmodal: React.FC<Contactmodalpros> = ({ initialContact }) => {
  const dispatch = useDispatch();
  const iscontactmodelopen = useSelector(
    (state: AppState) => state.isContactModalOpen
  );

  const [loading, Setisloading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    active: false,
  });

  // Load initial data if in edit mode
  useEffect(() => {
    if (initialContact) {
      setFormData({
        first_name: initialContact.first_name,
        last_name: initialContact.last_name,
        active: initialContact.status,
      });
    }
  }, [initialContact]);

  const handleChange = (key: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const generate_random_id = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const onSubmit = () => {
    Setisloading(true);
    let id_new = generate_random_id();
    const newContact: Contact = {
      id: id_new,
      first_name: formData.first_name,
      last_name: formData.last_name,
      status: formData.active,
    };

    if (initialContact) {
      // Edit existing contact
      newContact.id = initialContact.id;
      dispatch(editContact(newContact));
    } else {
      // Add new contact
      dispatch(addContact(newContact));
    }

    setFormData({
      first_name: "",
      last_name: "",
      active: false,
    });
    dispatch(closeModal());
    Setisloading(false);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="first_name"
        type="text"
        label="First Name"
        disabled={loading}
        handleChange={handleChange}
        required
        value={formData.first_name}
      />
      <Input
        id="last_name"
        type="text"
        label="Last Name"
        disabled={loading}
        handleChange={handleChange}
        required
        value={formData.last_name}
      />
      <div className="flex flex-row gap-6 justify-start items-center">
        <CheckBox
          id="active"
          isChecked={formData.active}
          handleChange={handleChange}
          label="Active"
        />
      </div>
    </div>
  );

  const title = initialContact ? "Edit Contact" : "Add Contact";
  const actionLabel = initialContact ? "Update" : "Submit";

  return (
    <Modal
      disabled={loading}
      isOpen={iscontactmodelopen}
      title={title}
      actionLabel={actionLabel}
      onclose={() => dispatch(closeModal())}
      onSubmit={() => onSubmit()}
      body={bodyContent}
    />
  );
};

export default Contactmodal;
