import React from "react";
import { Link } from "react-router-dom";
import "./PricingStyles.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="currency"></p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Extra -</h3>
          <span className="bar"></span>
          <p className="currency"></p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="currency"></p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
