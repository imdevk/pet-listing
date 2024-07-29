import React, { useState, useEffect } from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';
import { getPets, searchPets } from '../services/api';

const HomePage = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useState(null);

    useEffect(() => {
        if (searchParams) {
            handleSearch(searchParams);
        } else {
            fetchPets();
        }
    }, [currentPage, searchParams]);

    const fetchPets = async () => {
        try {
            setLoading(true);
            const data = await getPets(currentPage);
            setPets(data.pets);
            setTotalPages(Math.ceil(data.numberOfResults / (data.endIndex - data.startIndex + 1)));
        } catch (err) {
            setError('Failed to fetch pets. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (params) => {
        try {
            setLoading(true);
            setSearchParams(params);
            const data = await searchPets({ ...params, page: currentPage });
            setPets(data.pets);
            setTotalPages(Math.ceil(data.numberOfResults / (data.endIndex - data.startIndex + 1)));
        } catch (err) {
            setError('Failed to search pets. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-center text-red-500 mt-8 text-xl">{error}</div>;

    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Find Your Perfect Pet</h1>
            <SearchForm onSearch={handleSearch} />
            <PetList pets={pets} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
            />
        </div>
    );
};

export default HomePage;