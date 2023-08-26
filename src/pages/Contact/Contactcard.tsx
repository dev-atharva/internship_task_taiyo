import React, { useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { deleteContact, openModal } from "../../store";
import Contactmodal from "../../components/Modal/Contact_Modal"; // Import the Contactmodal component

interface Cardprops {
  first_name: string;
  last_name: string;
  active: boolean;
  id: string;
}

const Contactcard: React.FC<Cardprops> = ({
  first_name,
  last_name,
  active,
  id,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); // State for edit mode

  const handle_delete = () => {
    dispatch(deleteContact(id));
  };

  const handleEditClick = () => {
    setIsEditing(true);
    dispatch(openModal()); // Set edit mode
  };

  return (
    <div className=" flex flex-col rounded-lg shadow-md p-4 gap-2 justify-start ">
      <div className="text-xl font-semibold text-black">
        {first_name} {last_name}
      </div>
      {active ? (
        <div className="font-semibold rounded-full text-sm text-green-800 bg-green-400 flex items-center justify-center px-5 py-1">
          Active
        </div>
      ) : (
        <div className=" font-semibold rounded-full text-sm text-red-800 bg-red-400 flex items-center justify-center px-5 py-1">
          Inactive
        </div>
      )}

      {/* Edit and Delete buttons */}
      <div className="flex flex-row items-center gap-4 p-2">
        <Button
          small
          label="Edit"
          outline
          onClick={handleEditClick} // Update this line
        />
        <Button small label="Delete" onClick={handle_delete} />
      </div>

      {/* Render the Contactmodal conditionally */}
      {isEditing && (
        <Contactmodal
          initialContact={{ id, first_name, last_name, status: active }}
        />
      )}
    </div>
  );
};

export default Contactcard;
