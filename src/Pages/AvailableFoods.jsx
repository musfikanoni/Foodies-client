import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodCard from './FoodCard';

const AvailableFoods = () => {
    const foods = useLoaderData();
    return (
        <div>
                        <div className="hero bg-base-200 min-h-screen -mt-2">
                <div className=''>
                    <h1 className='text-center pb-10 pt-20 font-extrabold text-4xl'>Available Foods</h1> 
                    <div className="max-w-7xl mx-auto pt-5 pb-14">
                        <div className='gap-y-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            {
                                foods.map(food => <FoodCard
                                key={food._id}
                                food={food} />)
                            }
                        </div>
                    </div>
                    <div className="flex justify-center pb-24">
                        <Link to="/foods">
                            <button className="btn font-bold text-lg btn-outline rounded-full text-[#ce8333] border-[#ff823f] hover:bg-gradient-to-r from-[#ce8333]  to-[#ff823f] hover:text-white hover:border-none">See all foods</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoods;