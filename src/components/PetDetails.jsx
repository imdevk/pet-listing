import React from 'react';

const PetDetails = ({ pet }) => {
    if (!pet) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={pet.images[0]} alt={pet.name} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{pet.name}</h1>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <p><span className="font-semibold">Animal:</span> {pet.animal}</p>
                    <p><span className="font-semibold">Breed:</span> {pet.breed}</p>
                    <p><span className="font-semibold">Age:</span> {pet.age}</p>
                    <p><span className="font-semibold">Gender:</span> {pet.gender}</p>
                </div>
                <p><span className="font-semibold">Location:</span> {pet.city}, {pet.state}</p>
                <p className="mt-4"><span className="font-semibold">Description:</span> {pet.description}</p>
            </div>
        </div>
    );
};

export default PetDetails;