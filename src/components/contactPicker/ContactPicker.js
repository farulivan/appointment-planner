import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value="" key={-1} defaultValue="selected">
        No Contact Selected
      </option>
      {
        contacts.map((contact, index) => (
          <option value={contact} key={index}>
            {contact}
          </option>
        ))
      }
    </select>
  );
};
