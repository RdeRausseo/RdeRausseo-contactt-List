import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactList from "../components/ContactList.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container text-center p-5">
      <Link to="/addContact">
        <button className="btn btn-primary my-2"> Añadir contacto </button>
      </Link>
        <h1> Lista de contactos de: RdeR </h1>
        <ContactList />
    </div>
  );
};
