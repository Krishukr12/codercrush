import axios from "axios";

const api=axios.create({
    baseURL: process.env.API_BASE_URL,
    headers:{
        Authorization: `Bearer ${process.env.API_TOKEN}`
    }
})

// Categories
export const  fetchCategories =async ()=>api.get("/category")