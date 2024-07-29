import React, { useState, useEffect } from 'react';
import { getBreeds } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const SearchForm = ({ onSearch }) => {
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');
    const [location, setLocation] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (animal) {
            fetchBreeds(animal);
        } else {
            setBreeds([]);
            setBreed('');
        }
    }, [animal]);

    const fetchBreeds = async (animalType) => {
        try {
            setLoading(true);
            setError(null);
            const fetchedBreeds = await getBreeds(animalType);
            setBreeds(fetchedBreeds);
        } catch (err) {
            console.error('Error fetching breeds:', err);
            setError('Failed to fetch breeds. Please try again.');
            setBreeds([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ animal, breed, location });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label htmlFor="animal" className="block text-sm font-medium text-gray-700 mb-1">Animal</label>
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Animal</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Breed</option>
                        {breeds.map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                    {loading && <LoadingSpinner />}
                    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter city, state"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Search
            </button>
        </form>
    );
};

export default SearchForm;