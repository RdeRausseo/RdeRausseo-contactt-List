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

  const validateField = (name, value) => {
    switch(name){
      case 'name':
        if(value.trim() === '')
          return 'El campo del nombre no puede estar vacío';
      case 'phone': 
        if(value.trim() === ''){
            return 'El campo del número telefónico no puede estar vacío';
        }else if(Number.isNan(value))
          return 'El numero solo debe tener valores númericos'
      case 'email':
        if(value.trim() === ""){
          return 'El email no puede estar vacío'
        }else if (!value.includes('@'))
          return 'El email debe ser escrito correctamente'
      case 'address':
        if(address.trim()==='')
          return 'El campo de dirección es obligatorio, no puede estar vacío'  
      return ''    
    }
  }

  const validateForm = (data) => {
    let errors = {}; 
    if(!data.name.trim())
      errors.name = 'El campo nombre no puede estar vacío'; 
    if(!data.phone.trim()){
      errors.phone = 'El campo teléfono no puede estar vacío'
    }else if(Number.isNaN(data.phone)){
      errors.phone = 'El número de telefono solo pueden ser caracteres del 0-9'
    }
    if(!data.email.trim()){
      errors.email = 'Debes colocar tu email correctamente'
    }else if(!data.email.includes('@')){
      errors.email = 'Debes colocar tu email correctamente'
    }
    if(!data.address.trim())
      errors.address = 'El campo con la dirección no puede estar vacío'

    return errors; 
  }

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((olddata) => ({
      ...olddata,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {

    const {name, value} = e.target; 

    const errorMsg = validateField(name, value); 

    setErrors(prevErrors => ({
      ...prevErrors,
      [name] : errorMsg
    }))
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

  const handleSubmit = (e) =>{

    e.prevenDefault()
    
    let newErrors = validateForm(formData)

    setErrors(newErrors); 

    if(Object.keys(errors).length === 0){
      e.submit()
    }else{
      alert('Datos en el formulario incorrectos, envío denegado'); 
    }

  }

  console.log('regreso al proyecto')

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
            onBlur={handleBlur}
          />
          {errors.name && ( <span className="text-danger"> {errors.name} </span>)}
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
            onBlur={handleBlur}
          />
          {errors.phone && (<span className="text-danger"> {errors.phone} </span>)}
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
            onBlur={handleBlur}
          />
          {errors.email && (<span className="text-danger"> {errors.email} </span>)}
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
            onBlur={handleBlur}
          />
          {errors.address && (<span className="text-danger"> {errors.address} </span>)}
        </div>

        <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
