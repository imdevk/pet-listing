import axios from 'axios';

const API_BASE_URL = 'https://pets-v2.dev-apis.com';

export const getPets = async (page = 0) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pets?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching pets:', error);
        throw error;
    }
};

export const getPetById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pets?id=${id}`);
        return response.data.pets[0];
    } catch (error) {
        console.error('Error fetching pet details:', error);
        throw error;
    }
};

export const getBreeds = async (animal) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/breeds?animal=${animal}`);
        return response.data.breeds;
    } catch (error) {
        console.error('Error fetching breeds:', error);
        throw error;
    }
};

export const searchPets = async ({ animal, location, breed, page = 0 }) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/pets?animal=${animal}&location=${location}&breed=${breed}&page=${page}`
        );
        return response.data;
    } catch (error) {
        console.error('Error searching pets:', error);
        throw error;
    }
};