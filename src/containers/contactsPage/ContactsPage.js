import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm"
import { TileList } from "../../components/tileList/TileList"

export const ContactsPage = ({ contacts, addContact }) => {
  const [ name, setName ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ duplicateName, setDuplicateName ] = useState(false)

  useEffect(() => {
    const isNameDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name)
      if(found !== undefined){
        return true
      } else {
        return false
      }
    }

    if(isNameDuplicate()){
      setDuplicateName(true)
    } else {
      setDuplicateName(false)
    }
  }, [name, contacts, duplicateName])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicateName){
      addContact(name, phone, email);
      setName('')
      setPhone('')
      setEmail('')
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicateName ? " - Name Already Exists" : ""}
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
