import axios from "axios";
// const url = "https://rentify-dev.onrender.com/api";
const url = "http://localhost:5000/api";

export const userRegister = async (payload) => {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            url: `${url}/auth/register`,
            data: payload
        })
        return response
    } catch (error) {
        console.error(error);
    }
}

export const userLogin = async (payload) => {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            url: `${url}/auth/login`,
            data: payload
        })
        return response
    } catch (error) {
        console.error(error);
    }
}

export const getAllProperties = async (query_data) => {
    console.log(query_data);
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            url: `${url}/properties/get_properties`,
            data: query_data
        })
        return response
    } catch (error) {
        console.error(error);
    }
}

export const addNewProperties = async (payload) => {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            url: `${url}/properties/add_properties`,
            params: payload
        })
        return response
    } catch (error) {
        console.error(error);
    }
}



