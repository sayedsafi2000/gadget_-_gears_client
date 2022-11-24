import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';

const DisplayCategory = () => {
    const category = useLoaderData();
    console.log(category)
    return (
        <div>
        </div>
    );
};

export default DisplayCategory;