import Mano from "../assets/mano.png";
import Burger from "../assets/burger.png";
import Cart from "../assets/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__firstline">
        <img src={Mano} alt="mano" className="header__firstline__mano" />
        <input
          type="text"
          placeholder="Rechercher un produit, une marque ou un conseil"
        />
        <p>
          Bonjour,
          <br /> identifiez-vous
        </p>
        <Link to="/cart">
          <img src={Cart} alt="cart" className="header__firstline__cart" />
        </Link>
      </div>
      <div className="header__link">
        <img src={Burger} alt="burger" className="header__link__burger" />
        <Link to="/">Menu</Link>
        <img
          src="https://www.manomano.fr/assets/img/themes/default/svg/link-icons/sales-gear-icon.svg"
          alt="soldes"
          className="header__link__soldes"
        />
        <Link to="/">Soldes</Link>
        <Link to="/">Bon plans</Link>
        <Link to="/">Meilleures ventes</Link>
        <Link to="/">Perceuse, visseuse...</Link>
        <Link to="/">Aménagement d'atelier</Link>
        <Link to="/">Radiateur électrique</Link>
        <Link to="/">Bibliothèque et étagère</Link>
        <Link to="/">Suspension, lustre et accessoires</Link>
        <Link to="/">Made in Italy</Link>
        <Link to="/projet">Votre projet en un clic</Link>
      </div>
    </div>
  );
};

export default Header;
