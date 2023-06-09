import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";


const Card = ({ results, page }) => {
  let display;

  if (results) {

    display = results.map((x) => {
      let { id, image, name, location } = x;

      return (
        <Link
        
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Ubicación</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

        </Link>
      );
    });

  } else {
    display = "No se encontraron caracteres";
  }

  return <>{display}</>;
}

export default Card;
