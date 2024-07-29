import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPetById } from '../services/api';

const PetDetailsPage = () => {
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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

    if (loading) return <div className="text-center text-gray-500 mt-8 text-xl">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-8 text-xl">{error}</div>;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to="/" className="inline-block m-4 text-blue-600 hover:underline">&larr; Back to all pets</Link>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{pet.name}</h1>
                <img src={pet.images[0]} alt={pet.name} className="w-full h-96 object-cover rounded-lg mb-6" />
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="text-gray-600"><span className="font-semibold">Animal:</span> {pet.animal}</p>
                        <p className="text-gray-600"><span className="font-semibold">Breed:</span> {pet.breed}</p>
                    </div>
                    <div>
                        <p className="text-gray-600"><span className="font-semibold">Age:</span> {pet.age}</p>
                        <p className="text-gray-600"><span className="font-semibold">Gender:</span> {pet.gender}</p>
                    </div>
                </div>
                <p className="text-gray-600 mb-4"><span className="font-semibold">Location:</span> {pet.city}, {pet.state}</p>
                <p className="text-gray-700"><span className="font-semibold">Description:</span> {pet.description}</p>
            </div>
        </div>
    );
};

export default PetDetailsPage;