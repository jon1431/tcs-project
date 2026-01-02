
import React from 'react';
import RumahIbuImage from '../../../assets/rumah_penghulu.png'
const Hero = () => {
    return (
        <section className="text-center mb-10">
            <h1 className="font-serif text-4xl md:text-5xl font-normal leading-[1.1] mb-6 tracking-tight text-gray-900">
                Discover the Heritage of <br />
                Rumah Penghulu Abu Seman
            </h1>

            <p className="text-gray-500 font-medium text-sm md:text-base mb-8 max-w-sm mx-auto leading-relaxed">
                One of the oldest surviving traditional Malay houses, originally from Kedah.
            </p>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl max-w-[50%] m-auto">
                <img
                    src={RumahIbuImage}
                    alt="Rumah Penghulu Abu Seman"
                    className="w-full h-auto object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </section>
    );
};

export default Hero;
