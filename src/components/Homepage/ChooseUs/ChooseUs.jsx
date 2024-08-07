
import React from 'react';
import check from "../../../../public/assets/icons/check.svg";
import group from "../../../../public/assets/icons/group.svg";
import delivery from "../../../../public/assets/icons/deliveryt.svg";
import Wrench from "../../../../public/assets/icons/Wrench.svg";
import person from "../../../../public/assets/icons/person.svg";
import Image from 'next/image';
import { GoStopwatch } from "react-icons/go";

const ChooseUs = () => {
    return (
 <div className="container my-14">
    <div className="text-center space-y-2">
        <h5 className="text-[20px] text-[#FF3811]">Core Features</h5>
        <h3 className="lg:text-[45px] md:text-[32px] font-bold text-[#151515]"> Why Choose Us</h3>
        <p className="text-[16px] text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which don't look even slightly believable. </p>
    </div>
    <div className="my-14 grid lg:grid-cols-5 justify-between md:grid-cols-3 grid-cols-2  ">
        <div className="mx-auto">
            <Image className="mx-auto mb-4" src={group}></Image>
            <h5 className="text-[#444444] text-[18px]">Expert Team</h5>
        </div>
        <div className="mx-auto">
            <Image className="mx-auto mb-4" src={delivery}></Image>
            <h5 className="text-[#444444] text-[18px]">Expert Team</h5>
        </div>
        <div className="mx-auto">
            <Image className="mx-auto mb-4" src={person}></Image>
            <h5 className="text-[#444444] text-[18px]">Expert Team</h5>
        </div>
        <div className="mx-auto">
            <Image className="mx-auto mb-4" src={Wrench}></Image>
            <h5 className="text-[#444444] text-[18px]">Expert Team</h5>
        </div>
        <div className="mx-auto">
            <Image className="mx-auto mb-4" src={check}></Image>
            <h5 className="text-[#444444] text-[18px]">Expert Team</h5>
        </div>
    </div>
 </div>
    );
};

export default ChooseUs;