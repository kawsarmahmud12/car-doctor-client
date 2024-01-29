/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../assets/images/products/1.png'
import img2 from '../../assets/images/products/2.png'
import img3 from '../../assets/images/products/3.png'
import img4 from '../../assets/images/products/4.png'
import img5 from '../../assets/images/products/5.png'
import img6 from '../../assets/images/products/6.png'
import { FaRegStar } from 'react-icons/fa6';

const Product = () => {
    return (
        <div className='mt-4 mb-4'>
            <div className='text-center'>
                <h3 className="text-2xl font-bold text-orange-600">Popular Products</h3>
                <h2 className='text-5xl'>Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl w-48 h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-500'>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className="card-actions">
                            <button className="text-[#FF3811] text-2xl">$20</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl w-48 h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-500'>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className="card-actions">
                            <button className="text-[#FF3811] text-2xl">$20</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl w-48 h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-500'>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className="card-actions">
                            <button className="text-[#FF3811] text-2xl">$20</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl w-48 h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-500'>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className="card-actions">
                            <button className="text-[#FF3811] text-2xl">$20</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl w-48 h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-500'>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className="card-actions">
                            <button className="text-[#FF3811] text-2xl">$20</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl w-48 h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-500'>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                            <p><FaRegStar /></p>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <div className="card-actions">
                            <button className="text-[#FF3811] text-2xl">$20</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;