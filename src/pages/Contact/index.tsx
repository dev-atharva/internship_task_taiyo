import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppState, openModal } from "../../store";
import Contactcard from "./Contactcard";
import no_data_img from "../../assets/no_data.gif";

const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: AppState) => state.contacts);

  return (
    <div className="flex flex-col max-w-[90vw] items-center justify-between ml-10 pl-10 ">
      <div className="w-[40vw] sm:w-[20vw] flex items-center justify-center min-h-[20vh]">
        <Button label="Create Contact" onClick={() => dispatch(openModal())} />
      </div>
      {contacts.length !== 0 ? (
        <div
          className="w-[100%] pt-4 grid grid-cols-1 sm:grid-cols-2   
      md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 shadow-lg rounded-md "
        >
          {contacts?.map((contact) => (
            <Contactcard
              first_name={contact.first_name}
              last_name={contact.last_name}
              key={contact.id}
              active={contact.status}
              id={contact.id}
            />
          ))}
        </div>
      ) : (
        <img alt="No data found" className=" object-cover" src={no_data_img} />
      )}
    </div>
  );
};

export default Contact;
