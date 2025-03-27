import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const AddFood = () => {

    const [startDate, setStartDate] = useState(new Date());

    const handleAddService = e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        // const {quentity, ...newService} = initialData;
        // newService.quentity = {quentity};
        // console.log(newService);

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(initialData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            e.target.reset();
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Food added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div>


        <div className='flex justify-center bg-base-200 py-20'>

             <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
                <form onSubmit={handleAddService} className="card-body">
                    <h2 className='text-3xl font-bold text-center'>Add Food</h2>
                    {/* Service Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label><br />
                        <input type="text" name='photoUrl' placeholder="Food Image URL" className="w-full input input-bordered" required />
                    </div>
                    {/* Service Title */}
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Title</span>
                            </label><br />
                            <input type="text" name='title' placeholder="Food Title" className="w-full input input-bordered" required />
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label><br />
                        <textarea name='description' className="w-full textarea textarea-bordered" placeholder="Description"></textarea>
                    </div>
                    {/* category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Category</span>
                        </label>
                        <select name='category' className="select select-bordered w-full max-w-4xl">
                        <option disabled selected>Select a Category</option>
                            <option>Vegetable</option>
                            <option>Non vegetable</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 items-end md:grid-cols-2  lg:grid-cols-2 gap-x-3">
                    {/* Quentity */}
                        <div className="form-control mt-2">
                                <label className="label">
                                    <span className="label-text">Quentity</span>
                                </label><br />
                                <input type="text" name='quentity' placeholder="quentity" className="w-full input input-bordered" required />
                        </div>
                        {/* Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery date</span>
                            </label><br />
                            <DatePicker readOnly selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date" placeholder="Date" name='date' 
                            className='lg:w-[346px] max-w-sm outline-gray-300 border border-gray-300 py-[11px] px-2.5 rounded-md'/>
                        </div>
                    </div>

                    {/* Location */}
                    
                    <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label><br />
                            <input type="text" name='location' placeholder="location" className="w-full input input-bordered" required />
                    </div>
                        
                    <div className="form-control mt-6">
                    <button className="btn btn-block rounded-full bg-gradient-to-r from-[#ce8333]  to-[#ff823f] border-none text-lg text-white">Add Service</button>
                    </div>
                </form>
            </div>
        </div>

        </div>
    );
};

export default AddFood;