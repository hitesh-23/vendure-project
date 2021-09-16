import React, { useState } from "react";
import { data } from "../data.js";
import "./products.css";

const Products = () => {
  const [fp, setFp] = useState(true);
  const [sp, setSp] = useState(false);
  const [tp, setTp] = useState(false);

  const firstPage = data.filter((pageOne) => {
    const { prodId } = pageOne;
    if (fp) {
      return prodId < 9;
    } else if (sp) {
      return prodId > 8 && prodId < 17;
    } else if (tp) {
      return prodId > 16;
    }
  });

  return (
    <main>
      <div className="search-top">
        <input
          type="text"
          placeholder="search by product name or brand"
          className="searchbar"
        ></input>
        <button className="search-btn">+ New Product</button>
        <p className="search-group">
          <input type="checkbox"></input>Group by product
        </p>
      </div>

      {firstPage.map((product) => {
        const { prodImg, prodName } = product;

        return (
          <div className="prod-line">
            <img className="inside-img" src={prodImg} alt="prodImg"></img>
            <div className="first">
              <ul>
                <li className="space">{prodName}</li>
              </ul>
            </div>
            <div className="second">
              <ul>
                <li className="space">
                  <button>Edit</button>
                </li>
                <li className="space">
                  <button>Actions</button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}

      <div className="indexes">
        <button
          className="index-btn"
          onClick={() => {
            setFp(true);
            setSp(false);
            setTp(false);
          }}
        >
          1
        </button>
        <button
          className="index-btn"
          onClick={() => {
            setSp(true);
            setTp(false);
            setFp(false);
          }}
        >
          2
        </button>
        <button
          className="index-btn"
          onClick={() => {
            setFp(false);
            setSp(false);
            setTp(true);
          }}
        >
          3
        </button>
      </div>
    </main>
  );
};

export default Products;
