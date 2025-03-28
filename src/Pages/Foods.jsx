import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from './FoodCard';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div>
            <h1 className='font-bold text-3xl text-center pt-10 pb-10'>Our All Foods</h1>

            <div className="max-w-7xl mx-auto pt-5">
                <div className='gap-y-10 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        foods.map(food => (
                            <FoodCard key={food._id} food={food} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;