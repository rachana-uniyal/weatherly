import { createSlice } from "@reduxjs/toolkit"

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        lat: 0,
        lon: 0
    },
    reducers:{
        setLocation: (state, action) =>{
            state.lat = action.payload.lat
            state.lon = action.payload.lon
        }
    }
})

export const {setLocation} = locationSlice.actions
export default locationSlice.reducer