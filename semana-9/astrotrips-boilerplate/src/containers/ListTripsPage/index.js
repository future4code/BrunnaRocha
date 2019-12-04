import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router"
import { getTrips } from "../../actions"
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";


 class ListTripsPage extends React.Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }
   
    componentDidMount() {
      this.props.searchTrips()
    }

    render() {
      const listTrips = this.props.tripsList.map((trip,index)=> {
        return <div> 
          <p> {trip.name} </p>
          <p> {trip.date} </p>
          <p> {trip.planet} </p>
          <p> {trip.description} </p>
          <p> {trip.durationInDays} </p>
        
        </div>
      }) 
      return (
        <div>
          {listTrips}
        </div>
      );
    } 
  }

  function mapDispatchToProps (dispatch) {
    return {
      searchTrips: () => dispatch(getTrips()),
      goToLogin: () => dispatch(push(routes.login))
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
