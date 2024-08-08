import React from 'react';
import person from "../../../../public/assets/images/about_us/person.jpg"; 
import parts from "../../../../public/assets/images/about_us/parts.jpg";
import Image from 'next/image';

const About = () => {
    return (
        <div className="hero mt-12">
        <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <Image src={person} className=" w-3/4 rounded-lg " />
        <Image src={parts} className="w-1/2 border-8 border-white rounded-lg absolute right-5 top-1/2" />
        </div>
          <div className=" lg:w-1/2 space-y-5">
            <h4 className="text-lg text-orange-600 font-bold">About Us</h4>
            <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;