import React from 'react';
import { Link } from 'react-router-dom';

const PetList = ({ pets }) => {
    if (!pets.length) {
        return <div className="text-center text-gray-500 mt-8 text-xl">No pets found</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {pets.map((pet) => (
                <Link key={pet.id} to={`/pet/${pet.id}`} className="bg-white rounded-lg shadow-md overflow-hidden pet-card-transition">
                    <div className="relative h-64">
                        <img src={pet.images[0]} alt={pet.name} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h2 className="text-xl font-bold text-white mb-1">{pet.name}</h2>
                            <p className="text-gray-200 text-sm">{pet.animal} - {pet.breed}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600 text-sm flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            {pet.city}, {pet.state}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PetList;