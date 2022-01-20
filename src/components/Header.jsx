import Mano from "../assets/mano.png";
import Burger from "../assets/burger.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__firstline">
        <img src={Mano} alt="" />
        <input
          type="text"
          placeholder="Rechercher un produit, une marque ou un conseil"
        />
        <p>
          Bonjour
          <br /> Identifiez-vous
        </p>
      </div>
      <div className="header__link">
        <img src={Burger} alt="burger" />
        <Link to="/">Menu</Link>
        <Link to="/">Soldes</Link>
        <Link to="/">Bon Plans</Link>
        <Link to="/">Meilleures ventes</Link>
        <Link to="/">Perceuse, visseuse...</Link>
        <Link to="/">Aménagement d'atelier</Link>
        <Link to="/">Radiateur électrique</Link>
        <Link to="/">Bibliothèque et étagère</Link>
        <Link to="/">Suspension, lustre et accesoires</Link>
        <Link to="/">Made in italy</Link>
        <Link to="/projet">Votre projet en un click</Link>
      </div>
    </div>
  );
};

export default Header;
