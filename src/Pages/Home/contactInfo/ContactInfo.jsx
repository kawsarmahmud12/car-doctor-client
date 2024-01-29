/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCalendarDays, FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactInfo = () => {
    return (
        <div className='mt-8 md:flex  justify-between bg-black text-white p-24 '>
            <div className='flex'>
                <div className='mt-[12px] text-2xl'><FaCalendarDays/></div>
                <div className='ml-2'>
                    <p className='text-[12px]'>We are open monday-friday</p>
                    <h3 className='text-[20px] font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex'>
                <div className='mt-[12px] text-2xl'><FaPhone /></div>
                <div className='ml-2'>
                    <p className='text-[12px]'>Have a question?</p>
                    <h3 className='text-[20px] font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex'>
                <div className='mt-[12px] text-2xl'><FaLocationDot /></div>
                <div className='ml-2'>
                    <p className='text-[12px]'>Need a repair? our address</p>
                    <h3 className='text-[20px] font-bold'>Liza Street, New York</h3>
                </div>
            </div>
            
        </div>
    );
};

export default ContactInfo;