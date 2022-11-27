import React, { useState, useEffect } from 'react';

const Categories = (category) => {
    const [categoriesProducts, setCategoriesProducts] = useState("");
    useEffect(() => {
        fetch(`https://gadget-and-gears-server.vercel.app/category/${category}`)
            .then(res => res.json())
            .then(data => setCategoriesProducts(data))
    }
        , [category])
    return (
        <div>
            <h2>Hehe {categoriesProducts?.length} </h2>
        </div>
    );
};

export default Categories;