import React from 'react';
import { categories } from '../data/Data';

const Categories = () => {
    return (
        <div>
            <div className='max-w-[1640px] mx-auto p-4 '>
                <h1 className='text-orange-600 text-center text-2xl md:text-4xl lg:text-5xl font-semibold'>Top Rated Menu</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {
                        categories.map((item, index) => (
                            <div className='border px-12 shadow-lg  mt-5 bg-gray-200 rounded flex justify-between  items-center' key={index}>
                                <h1 className='font-bold'>{item.name}</h1>
                                <img className='' src={item.image} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;