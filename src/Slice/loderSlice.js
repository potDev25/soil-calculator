import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    properties: {
        container_load: false,
        void_load : false,    
        porosity_load : false,    
        degSat_load : false,    
        conent_load : false,    
        bulk_load : false,    
        dry_load : false,    
        saturated_load : false,    
        effective_load : false,
        critical_load: false    
    }
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.properties.container_load = true
        },
        setOffLoader: (state, action) => {
            state.properties = {
                container_load: false,
                void_load : false,    
                porosity_load : false,    
                degSat_load : false,    
                conent_load : false,    
                bulk_load : false,    
                dry_load : false,    
                saturated_load : false,    
                effective_load : false,
                critical_load: false 
            }
        }
    }
})

export const {
    setLoader,
    setOffLoader
} = loaderSlice.actions
export default loaderSlice.reducer