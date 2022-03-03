import axios from "axios";

// const url = 'http://car-auction-beta.herokuapp.com/';
const url = 'http://192.168.254.182:8080'

// export const getAllVehicles = async () => {
//     try {
//         const res = await axios.get(`${url}vehicles`);
//         return res.data
//     } catch (error) {
//         console.log(error)
//     }
// }


export const getAllAuctions = async () => {
    try {
        const res = await axios.get(`${url}/auction/vehicles`);
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getVehicle = async (id: string) => {
    try {
        const res = await axios.get(`${url}/auction/vehicle/${id}`);
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const postBid = async (data: {}) => {
    console.log(data)
    try {
        const res = await axios.post(`${url}/bid/post`, data);
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const getBid = async (id: string) => {
    try {
        const res = await axios.get(`${url}/bid/${id}`);
        return res.data
    } catch (error) {
        console.error(error)
    };
};

export const getUser = async(id: string) => {
    try {
       const res = await axios.get (`${url}/user/${id}`);
       return res.data
    } catch (error) {
        console.error(error)
    }
}