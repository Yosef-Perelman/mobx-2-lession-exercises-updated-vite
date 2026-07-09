import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Reservation extends Component {
  render() {
    const res = this.props.res;

    return (
      <div className={res.completed ? "conditional" : ""}>
        <p>Name: {res.name}</p>
        <p>Party Size: {res.numPeople}</p>
        <p>
          Status: {res.seated ? "Seated" : "Not Seated"} |{" "}
          {res.completed ? "Completed" : "Not Completed"}
        </p>
        <button onClick={() => this.props.RestaurantStore.seatRes(res.id)}>
          Seat Reservation
        </button>
        <button onClick={() => this.props.RestaurantStore.completeRes(res.id)}>
          Complete Reservation
        </button>
      </div>
    );
  }
}

//inject your store here
export default inject("RestaurantStore")(observer(Reservation));
