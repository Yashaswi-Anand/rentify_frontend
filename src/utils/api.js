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

export const UpdateProperties = async (properties_id, payload) => {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            url: `${url}/properties/update_properties`,
            params: {properties_id},
            data: payload
        })
        return response
    } catch (error) {
        console.error(error);
    }
}

export const deleteProperties = async (properties_id) => {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            url: `${url}/properties/delete_properties`,
            params: {properties_id}
        })
        return response
    } catch (error) {
        console.error(error);
    }
}

export const getSellerDetails = async (seller_id) => {
    try {
        const response = await axios({
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            url: `${url}/auth/get_seller_details`,
            params: {seller_id}
        })
        return response
    } catch (error) {
        console.error(error);
    }
}




