import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import avatar from "../assets/img/avatar.png";
import ContactList from "../components/ContactList.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center">
			<h1> Lista de contactos de: RdeR </h1>
			<ContactList />
		</div>
	);
}; 