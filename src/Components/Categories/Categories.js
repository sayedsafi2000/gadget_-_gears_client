import React, { useState, useEffect } from 'react';

const Categories = (category) => {
    const [categoriesProducts, setCategoriesProducts] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/category/${category}`)
            .then(res => res.json())
            .then(data => setCategoriesProducts(data))
    }
        , [])
    return (
        <div>
            <h2>Hehe {categoriesProducts?.length} </h2>
        </div>
    );
};

export default Categories;