import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-8">
            <ul className="flex justify-center">
                {pageNumbers.map(number => (
                    <li key={number} className="mx-1">
                        <button
                            onClick={() => paginate(number)}
                            className={`px-3 py-2 border rounded ${currentPage === number
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-blue-500 hover:bg-blue-100'
                                }`}
                        >
                            {number + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;