import React, { useState, useEffect } from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';
import { getPets, searchPets } from '../services/api';

const HomePage = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = async () => {
        try {
            setLoading(true);
            const fetchedPets = await getPets();
            setPets(fetchedPets);
        } catch (err) {
            setError('Failed to fetch pets. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (searchParams) => {
        try {
            setLoading(true);
            const searchResults = await searchPets(searchParams);
            setPets(searchResults);
        } catch (err) {
            setError('Failed to search pets. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="text-center text-gray-500 mt-8 text-xl">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-8 text-xl">{error}</div>;

    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Find Your Perfect Pet</h1>
            <SearchForm onSearch={handleSearch} />
            <PetList pets={pets} />
        </div>
    );
};

export default HomePage;