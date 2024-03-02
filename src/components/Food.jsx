import React, { useState } from 'react';
import { data } from '../data/Data'

const Food = () => {
    const [foods, setFoods] = useState(data);

    const filterTypeFoods = (category) => {
        setFoods(
            data.filter(item => {
                return item.category == category
            })
        )
    }

    const filterPrice = (price) => {
        setFoods(
            data.filter(item => item.price === price)
        )
    }
    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center mb-6'>Top Rated Menu Items</h1>
            {/* filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* fitler type  */}
                <h1 className='font-bold text-gray-700 '>Filter Type</h1>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className='  px-4 lg:py-0 mr-2 rounded border text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 '>All</button>
                    <button onClick={()=>filterTypeFoods("burger")} className='  px-4 lg:py-0 mr-2 rounded border text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 '>Burgers</button>
                    <button onClick={()=>filterTypeFoods("pizza")} className='  px-4 lg:py-0 mr-2 rounded border text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 '>Pizza</button>
                    <button onClick={()=>filterTypeFoods("salad")} className='  px-4 lg:py-0 mr-2 rounded border text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 '>Salads</button>
                    <button onClick={()=>filterTypeFoods("chicken")} className='  px-4 lg:py-0 mr-2 rounded border text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 '>chicken</button>
                </div>
                {/* filter price  */}
                <div className='font-bold text-gray-700 mt-4 lg:mt-8 md:mt-6'>
                    <p>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=>filterPrice('$')} className="px-4 rounded m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                        <button  onClick={()=>filterPrice('$$')} className="px-4 rounded m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                        <button   onClick={()=>filterPrice('$$$')} className="px-4 rounded m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                    </div>
                </div>
            </div>
            {/* display food  */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {
                    foods.map((item, index) => (
                        <div className='shadow-lg border hover:scale-105 duration-300 rounded-lg' key={index}>
                            <img className="w-full h-[200px] object-cover rounded-t-lg " src={item.image} alt="" />
                            <div className='flex justify-between items-center px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <p className='bg-orange-600 text-white p-1 rounded-full px-2 lg:w-[80px] w-[60px] md:w-[70px] text-center'>
                                    <span>{item.price}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Food;