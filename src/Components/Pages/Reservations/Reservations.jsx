import React from "react";
import './Reservations.scss';
import { ContentWrapper } from "../../ContentWrapper/ContentWrapper";

const Reservations = () => {
  return (
    <ContentWrapper title="Reservation">
      <div>
        <h2>Reservation</h2>
        <p>
          Udfyld nedenstående formular for at reservere et af vores værelser.
        </p>
      </div>

      <form className="reservation-form">
        <div className="DH">
          <select>
            <option>Vælg destination & hotel</option>
            <option value="hotel1">Hotel 1</option>
            <option value="hotel2">Hotel 2</option>
            <option value="hotel3">Hotel 3</option>
          </select>
        </div>
        <div className="RoomType">
          <select>
            <option>Vælg værelsestype</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="People">
          <select>
            <option>Vælg antal personer</option>
            <option value="1">1 person</option>
            <option value="2">2 personer</option>
            <option value="3">3 personer</option>
            <option value="4">4 personer</option>
            <option value="5">5 personer</option>
          </select>
        </div>
        <div className="Price">
          <label>Valg af prisklasse:</label>
          <div>
            <label>
              <input type="radio" value="Normal" />
              Normal
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="Flex" />
              Flex
            </label>
          </div>
        </div>
        <div>

        </div>
      </form>
    </ContentWrapper>
  );
};

export default Reservations;
