import { createSlice } from "@reduxjs/toolkit"

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        lat: 28.6517178,
        lon: 77.2219388,
        city: 'Delhi',
        country: 'IN',
        Error:false,
    },
    reducers:{
        setLocation: (state, action) =>{
            state.lat = action.payload.lat
            state.lon = action.payload.lon
            state.city = action.payload.name || action.payload.city
            state.country = action.payload.country
        },
        toggleError: (state) =>{
            state.Error = !state.Error
        }
    }
})

export const {setLocation,toggleError} = locationSlice.actions
export default locationSlice.reducer