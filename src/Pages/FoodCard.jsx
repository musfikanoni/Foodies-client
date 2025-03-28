
import { Link } from 'react-router-dom';

const FoodCard = ({food}) => {
    const {_id, photoUrl, title, category} = food;
    return (
        <div>

        <div>
            <div className="card card-compact min-h-full bg-base-100 lg:w-[305px] md:w-[340px] w-[340px] mx-auto shadow-xl border-gray-400 border-b-0">
                <figure className='pt-4 px-4'>
                    <img className='rounded-xl'
                    src={photoUrl}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex items-center gap-2">
                        <p className='font-bold text-md text-slate-700'>{category}</p>
                    </div>            
                    <div className="card-actions justify-center pt-3">
                        <Link to={`/foods/${_id}`}>
                        <button
                            className="py-2 px-7 font-semibold
                             rounded-full bg-gradient-to-r from-[#ce8333]  to-[#ff823f] border-none text-lg text-white">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default FoodCard;