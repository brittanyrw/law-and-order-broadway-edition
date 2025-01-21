import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000
});

api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        throw error;
    }
);

export default {
    async getTotalStats() {
        try {
            const response = await api.get('/stats/total-stats');
            return response.data;
        } catch (error) {
            console.error('Error getting total stats:', error);
            throw error;
        }
    },

    async getTopActors() {
        try {
            const response = await api.get('/stats/top-actors');
            return response.data;
        } catch (error) {
            console.error('Error getting top actors:', error);
            throw error;
        }
    },

    async getTopCrimeShows() {
        try {
            const response = await api.get('/stats/top-crime-shows');
            return response.data;
        } catch (error) {
            console.error('Error getting crime shows:', error);
            throw error;
        }
    },

    async getTopCrimeShowActors() {
        try {
            const response = await api.get('/stats/top-crime-show-actors');
            return response.data;
        } catch (error) {
            console.error('Error getting top crime show actors:', error);
            throw error;
        }
    },

    async getShowSpecificStats() {
        try {
            const response = await api.get('/stats/show-specific');
            return response.data;
        } catch (error) {
            console.error('Error getting show-specific stats:', error);
            throw error;
        }
    },

    async getMultipleActorEpisodes() {
        try {
            const response = await api.get('/stats/multiple-actor-episodes');
            return response.data;
        } catch (error) {
            console.error('Error getting multiple actor episodes:', error);
            throw error;
        }
    },

    async getCharacterTypeStats() {
        try {
            const response = await api.get('/stats/character-types');
            return response.data;
        } catch (error) {
            console.error('Error getting character type stats:', error);
            throw error;
        }
    },

    async getRepeatCharacters() {
        try {
            const response = await api.get('/stats/repeat-characters');
            return response.data;
        } catch (error) {
            console.error('Error getting repeat characters:', error);
            throw error;
        }
    }
};