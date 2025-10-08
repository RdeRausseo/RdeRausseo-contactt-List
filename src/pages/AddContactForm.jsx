import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function AddContactForm() {
  const { dispatch } = useGlobalReducer();

  const { formData, setFormData } = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const {errors, setErrors} = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((olddata) => ({
      ...olddata,
      [name]: value,
    }));
  };

  const validateField = (name, value) =>{
    if(name === "name"){
      
    } 
  }

  const addContact = async () => {

    try {
      const request = await fetch("", {
        method: "POST",
        header: {
          accept: "application/json",
        },
        body: JSON.stringify()
      });

      if(!request.ok){
        throw new Error('error: ' + request.status + " - " + request.statusText)
      }

    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPhone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
