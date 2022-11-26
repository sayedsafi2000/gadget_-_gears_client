import React from 'react';
import {useQuery} from "@tanstack/react-query";
const AdvertiseProducts = () => {

    const {data: advertisementProducts = []} = useQuery({
        queryKey:["advertisement"],
        queryFn:async() =>{
            const res = await fetch(`http://localhost:5000/advertise-products`)
            const data = res.json()
            return data
        }
    });

    return (
        <div>
            <h1>Adertise {advertisementProducts.length}</h1>
        </div>
    );
};

export default AdvertiseProducts;