import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResInput from "./ResInput";
import Reservation from "./Reservation";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <span>
          You have {this.props.RestaurantStore.openTables} open tables
        </span>
        <div id="restPopulation">
          There are {this.props.RestaurantStore.restPopulation} people in the
          restaurant
        </div>
        <div id="completedTables">
          There are {this.props.RestaurantStore.completedTables} completed
          tables
        </div>
        <ResInput />
        <button
          id="addRes"
          onClick={() => {
            this.props.RestaurantStore.addRes(
              this.props.GeneralStore.name,
              this.props.GeneralStore.numPeople,
            );
          }}
        >
          Add Reservation
        </button>
        {/* Make the Add Reservation button work */}
        <div className="reservations">
          {this.props.RestaurantStore.reservations.map((res) => (
            <Reservation key={res.id} res={res} />
          ))}
        </div>
      </div>
    );
  }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant));
