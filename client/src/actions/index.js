// import * as actionTypes from '../constants/products'
// import * as api from '../api/index'

export const date = (data) => ({ type: "DATE_PICKER", data });
export const room = (data) => ({ type: "ROOM_VALUE", data });
export const adult = (data) => ({ type: "ADULT_VALUE", data });
export const child = (data) => ({ type: "CHILD_VALUE", data });
export const property = (data) => ({ type: "GET_LIST_PROPERTY", data });
export const emptyProperty = (data) => ({ type: "EMPTY_LIST_PROPERTY", data });
export const roomDetails = (data) => ({ type: "GET_ROOM_DETAILS", data });
export const roomTypesRate = (data) => ({ type: "GET_ROOM_TYPES_RATE", data });
export const propRoomType = (data) => ({ type: "GET_PROPROOM_TYPE", data });
export const hotelDetails = (data) => ({
  type: "HOTEL_CUSTOMER_DETAILS",
  data,
});
export const bookingDetails = (data) => ({ type: "ROOM_BOOKING_DETAIL", data });
export const additionOfPrices = (data) => ({ type: "TOTAL_PRICE_ROOMS", data });
