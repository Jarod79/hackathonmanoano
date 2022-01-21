import React from "react";
import bck from "../assets/bck.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__description">
        <h1>Construisez la douche de vos rêves en quelques clics !</h1>
        <h2>
          Besoin d'équipement pour un projet de rénovation ou de construction
          mais vous ne savez pas ce dont vous avez besoin ?
        </h2>
        <h2>Respirez, on s'occupe de tout !</h2>
        <p>
          Finies les heures interminables à la recherche des outils et matériaux
          dont vous aurez besoin. Nos super experts ont conçu des packs prêts à
          l'emploi contenant tout le nécessaire pour mener votre mission à bien.{" "}
        </p>{" "}
        <p>
          Sélectionnez la catégorie correspondant à votre projet, sélectionnez
          un pack, ajoutez-le à votre panier. <br />{" "}
          <strong>À vos marteaux, prêts ? Partez ! 🔨</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
