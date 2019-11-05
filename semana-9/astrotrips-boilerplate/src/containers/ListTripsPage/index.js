import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrips } from "../../actions"
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";


class ListTripsPage extends Component {
    componentDidMount() {
      this.props.searchTrips()
    }

    render() {
      return (
        <div>
          {
            this.props.tripsList.map((trip) => {
                return(<li>{trip.name}</li>)
            })
          }
        </div>
      );
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
      searchTrips: () => dispatch(getTrips()),
    }
  }

  function mapStateToProps (state) {
    return {
      tripsList: state.trips.trips
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ListTripsPage);
