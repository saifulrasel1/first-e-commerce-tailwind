import React from 'react';

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <h1 className='font-bold text-2xl px-2 pt-4'>Sun,s Out, Bogos</h1>
                    <h1 className='px-2'>Through 8/26</h1>
                    <button className=' border-white p-2 rounded-xl text-black font-bold cursor-pointer bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[300px] w-full object-cover' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <h1 className='font-bold text-2xl px-2 pt-4'>Sun,s Out, Bogos</h1>
                    <h1 className='px-2'>Through 8/26</h1>
                    <button className=' border-white p-2 rounded-xl text-black font-bold cursor-pointer bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[300px] w-full object-cover' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <h1 className='font-bold text-2xl px-2 pt-4'>Sun,s Out, Bogos</h1>
                    <h1 className='px-2'>Through 8/26</h1>
                    <button className=' border-white p-2 rounded-xl text-black font-bold cursor-pointer bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] lg:max-h-[300px] w-full object-cover' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    );
};

export default HeadlineCards;