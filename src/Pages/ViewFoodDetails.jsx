import React from 'react';
import { useLoaderData} from 'react-router-dom';



const ViewFoodDetails = () => {
    const food = useLoaderData();
    const {photoUrl, title, description, category, date, location, quentity} = food;
    return (
        <div>
        
        <div className='bg-base-200'>
        <h2 className='text-center text-4xl font-bold pt-7'>Our food Details</h2>
            <div className='max-w-7xl mx-auto py-10'>
            <div className="lg:flex lg:gap-5 lg:mx-0 mx-5">
                <div className="p-5 lg:flex-col rounded-xl border border-amber-400 bg-yellow-200 flex-col">
                    <img className='rounded-xl lg:max-w-xl mx-w-xs lg:h-[35vh]'
                    src={photoUrl} />
                    <div className='pt-3'>
                        <h2 className="text-xl font-bold pt-3">{title}</h2>
                        <p className="font-medium pt-2 text-base"><span className='font-bold text-base'>Description:</span> {description}</p>
                        <p className="font-medium pt-1 text-base"><span className='font-bold text-base'>Category:</span> {category}</p>
                        <p className="font-medium pt-1 text-base"><span className='font-bold text-base'>Location:</span> {location}</p>
                        <p className="font-medium pt-1 text-base"><span className='font-bold text-base'>Quentity:</span> {quentity}</p>
                        <p className="font-medium pt-1 text-base"><span className='font-bold text-base'><i>Delivery Time:</i></span><i> {date}</i></p>
                    </div>
                </div>
            </div>
            </div>
        </div>


        </div>
    );
};

export default ViewFoodDetails;