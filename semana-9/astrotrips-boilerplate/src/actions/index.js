import axios from "axios";

const setTrips = (trips) => ({
    type: "SET_TRIPS",
    payload: {
      trips: trips,
    }
  });

// const setDetailTrip = (trip) => ({
//     type: "SET_TRIPS",
//     payload: {
//     trip: trip,
//     }
// });

  export const getTrips = () => async (dispatch) => {
    const response = await axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/brunna/trips"
    );
    dispatch(setTrips(response.data.trips));
  };

//   export const getTripsDetail = (id) => async (dispatch) => {
//     const response = await axios.get(
//       `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/brunna/trips/${id}`
//     );
//     dispatch(setDetailTrip(response.data.trip));
//   };