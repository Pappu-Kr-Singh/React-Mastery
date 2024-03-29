import React, { useContext } from "react";
import { ProductList } from "../store/product-list-store";

function Product({ product }) {
  // const { deleteProduct } = useContext(ProductList);
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 product">
        <div className="col main-card">
          <div className="card shadow-sm">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                {product.images.map((img, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`Slide ${index}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h4 className="card-title">{product.title}</h4>
            <div className="card-body">
              <p className="card-text">{product.description}</p>
              <div className="prbc">
                <p className="card-text">Price: {product.price} </p>
                <p className="card-text">Rating: {product.rating}</p>
                <p className="card-text">Brand: {product.brand} </p>
                <p className="card-text">Category: {product.category} </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
