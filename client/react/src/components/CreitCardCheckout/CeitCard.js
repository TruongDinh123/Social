import React, { useEffect, useState } from "react";
import creitCard from "../CreitCardCheckout/creitCard.css";
import img1 from "../../assets/Tour1.jpg";
const CeitCard = () => {
  return (
    <div className="small-container cart-page">
      <table>
        <tr>
          <th>Tour</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img src={img1} alt="" />
              <div>
                <p>Ha Noi</p>
                <small>Price: 50$</small>
                <br />
                <small>3 ngày 2 đêm</small>
                <br />
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" value={1} />
          </td>
          <td>$50.00</td>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img src={img1} alt="" />
              <div>
                <p>Ha Noi</p>
                <small>Price: 50$</small>
                <br />
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" value={1} />
          </td>
          <td>$50.00</td>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img src={img1} alt="" />
              <div>
                <p>Ha Noi</p>
                <small>Price: 50$</small>
                <br />
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" value={1} />
          </td>
          <td>$50.00</td>
        </tr>
      </table>

      <div className="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>tax</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$50.00</td>
          </tr>
          <button className="btn">Đặt Ngay</button>
        </table>
      </div>
    </div>
  );
};

export default CeitCard;
