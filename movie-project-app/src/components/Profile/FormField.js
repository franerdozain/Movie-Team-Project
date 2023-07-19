import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

export default function FormField({ label, icon, value, onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onChange(inputValue)
        setIsEditing(false);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="form-group text-center">
                    <label htmlFor={label} className="form-label">
                        {label}
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">{icon}</span>
                        </div>
                        {isEditing ? (
                            <input
                                type="text"
                                className="form-control"
                                id={label}
                                value={inputValue}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type="text"
                                className="form-control"
                                id={label}
                                value={value}
                                readOnly
                            />
                        )}
                        <div
                            className="input-group-append"
                            onClick={isEditing ? handleSaveClick : handleEditClick}
                            role="button"
                        >
                            <span className="input-group-text">
                                {isEditing ? "Save" : <FaRegEdit />}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
