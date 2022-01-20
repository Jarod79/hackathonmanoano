import React from "react";

function SideBar() {
  return (
    <div className="side">
      <nav className="side__nav">
        <h1 className="budget-total" id="titles-input">
          Budget total
        </h1>
        <input
          type="text"
          className="budget"
          id="titles-input"
          placeholder="Renseignez votre budget"
        />
        <h3 className="thème" id="titles-input">
          Thème Projet
        </h3>

        <div className="categories">
          <input
            type="checkbox"
            className="salledebain"
            name="Salle de bain  / WC"
          />
          <label for="" className="salleDeBain-wc">
            Salle de bain wc
          </label>
        </div>
        <div className="categories">
          <input type="checkbox" className="cuisine" name="cuisines" />
          <label for="" className="cuisine-label">
            Cuisine
          </label>
        </div>
        <div className="categories">
          <input
            type="checkbox"
            className="chambre-à-Coucher"
            name="chambreC"
          />
          <label for="" className="chambre">
            Chambre
          </label>
        </div>
        <div className="categories">
          <input
            type="checkbox"
            className="mobilierInterieur"
            name="mobilierI"
          />
          <label for="" className="mobilier-interieur">
            Mobilier d'intèrieur
          </label>
        </div>
        <div className="categories">
          <input
            type="checkbox"
            className="mobilierExterieur"
            name="mobilierE"
          />
          <label for="" className="mobilier-Exterieur">
            Mobilier d'extèrieur
          </label>
        </div>

        <div className="categories">
          <input type="checkbox" className="jardin-P" name="jardin piscine" />
          <label for="" className="jardin-piscine">
            Jardin Piscine
          </label>
        </div>
        <div className="separtion"></div>
        <a href="#" className="bloc-link">
          <img src="" alt="" />
        </a>
        {/* <!-- </div> --> */}
      </nav>
    </div>
  );
}
export default SideBar;
