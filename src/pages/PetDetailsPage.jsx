import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPetById } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const PetDetailsPage = () => {
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        fetchPetDetails();
    }, [id]);

    const fetchPetDetails = async () => {
        try {
            setLoading(true);
            const fetchedPet = await getPetById(id);
            setPet(fetchedPet);
        } catch (err) {
            setError('Failed to fetch pet details. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-center text-red-500 mt-8 text-xl">{error}</div>;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">&larr; Back to all pets</Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="relative h-96 mb-4">
                            <img
                                src={pet.images[activeImage]}
                                alt={pet.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                <h1 className="text-3xl font-bold text-white">{pet.name}</h1>
                            </div>
                        </div>
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                            {pet.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${pet.name} thumbnail ${index + 1}`}
                                    className={`w-20 h-20 object-cover rounded-md cursor-pointer 
                              ${index === activeImage ? 'ring-2 ring-blue-500' : ''}`}
                                    onClick={() => setActiveImage(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h2 className="text-xl font-semibold mb-2">Quick Info</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-600"><span className="font-semibold">Animal:</span> {pet.animal}</p>
                                    <p className="text-gray-600"><span className="font-semibold">Breed:</span> {pet.breed}</p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Location:</span> {pet.city}, {pet.state}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">About {pet.name}</h2>
                            <p className="text-gray-700">{pet.description}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Adoption Information</h2>
                            <p className="text-gray-700 mb-4">
                                Interested in adopting {pet.name}? Contact the shelter to learn more about the adoption process.
                            </p>
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                                Contact Shelter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetailsPage;