import React from "react";
import "./MaterialSelection.css";

const MaterialSelection = ({ material, setMaterial }) => {
  const materials = [
    {
      title: "ALU - Classic Matt",
      features: [
        { description: "Hohe Farbbrillanz (7/10)" },
        { description: "Pflegeleicht & schnelle Reinigung (7/10)" },
        { description: "Sehr hohe Hitze-, Kratz" },
        { description: "Pflegeleicht & schnelle Reinigung (7/10)" },
      ],
      image: {
        src: "/img/image-design.png",
        alt: "Image d'un caméléon sur un panneau ALU",
      },
      badge: {
        text: "Robust & Günstig",
        color: "#008000", 
      },
      borderStyle: {
        color: "#008000",
        width: "2px",
        radius: "8px", 
      },

    },
    {
      title: "ALU - Classic Matt",
      features: [
        { description: "Hohe Farbbrillanz (7/10)" },
        { description: "Pflegeleicht & schnelle Reinigung (7/10)" },
        { description: "Sehr hohe Hitze-, Kratz" },
        { description: "Pflegeleicht & schnelle Reinigung (7/10)" },
      ],
      image: {
        src: "/img/product.png",
        alt: "Image d'un caméléon sur un panneau ALU",
      },
      badge: {
        text: "Robust & Günstig",
        color: "#008000", 
      },
      borderStyle: {
        color: "#008000",
        width: "2px",
        radius: "8px", 
      },

    }

  ];

  return (
    <div className="material-selection">
      <div className="materials">
        {materials.map((mat) => (
          <div
            key={mat}
            className={`material ${material === mat ? "selected" : ""
              }`}
            onClick={() => setMaterial(mat)}
          >
            <div className="material-container">
              <div className="img-section">
                <img src={mat.image.src} alt={mat.image.alt} />
              </div>
              <div className="list-section">
                <h5>    {mat.title}   </h5>

                <ul className="list">
                  {mat.features.map((item) => (
                    <li className="item">
                      <i class="fas fa-check"></i>
                      <span className="icon"> ✔</span>
                      <p>{item.description} </p>
                    </li>
                  ))}
                </ul>

              </div>
              <div className={`tag ${mat.badge.text === "Robust & Günstig" ? "tag-green" : ""}`}>
              <img src="/img/Check.svg"  />
                  <span>Robust & Günstig</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialSelection;
