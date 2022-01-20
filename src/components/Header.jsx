import Mano from "../assets/mano.png";
import Burger from "../assets/burger.png";

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
        <a href="/">Menu</a>
        <a href="/">Soldes</a>
        <a href="/">Bon PLans</a>
        <a href="/">Meilleures ventes</a>
        <a href="/">Perceuse, visseuse...</a>
        <a href="/">Aménagement d'atelier</a>
        <a href="/">Radiateur électrique</a>
        <a href="/">Bibliothèque et étagère</a>
        <a href="/">Suspension, lustre et accesoires</a>
        <a href="/">Made in italy</a>
        <a href="/">Votre projet en un click</a>
      </div>
    </div>
  );
};

export default Header;
