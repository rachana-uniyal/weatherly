import { createSlice } from "@reduxjs/toolkit"

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        lat: 0,
        lon: 0,
        city: '',
        country: '',
    },
    reducers:{
        setLocation: (state, action) =>{
            state.lat = action.payload.lat
            state.lon = action.payload.lon
            state.city = action.payload.name || action.payload.city
            state.country = action.payload.country
        }
    }
})

export const {setLocation} = locationSlice.actions
export default locationSlice.reducer