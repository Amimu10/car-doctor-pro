import React from "react";
import person1 from "../../../../public/assets/images/team/1.jpg"
import person2 from "../../../../public/assets/images/team/2.jpg"
import person3 from "../../../../public/assets/images/team/3.jpg"
import facebook from "../../../../public/assets/icons/facebook.png";
import twitter from "../../../../public/assets/icons/twitter.png";
import linkdin from "../../../../public/assets/icons/linkdin.png";
import instagram from "../../../../public/assets/icons/instagram.png";

import Image from "next/image";
const Team = () => {
  return (
    <div>
    <div className="text-center my-14">
    <h5 className="text-[#FF3811] text-[20px] ">Team</h5>
      <h3 className="text-[#151515] lg:text-[45px] md:text-[32px] font-bold">Meet Our Team</h3>
      <p className="text-[#737373] text-[18px]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised<br></br> words which don't look even slightly believable.{" "}
      </p>
    </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={person1}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Car Engine Plug
          </h2>
          <p>Engine Expert</p>
          <div className="card-actions">
           <div className="flex space-x-2">
            <Image className="w-[30px] h-[30px]" src={facebook}></Image>
            <Image className="w-[30px] h-[30px]" src={twitter}></Image>
            <Image className="w-[30px] h-[30px]" src={linkdin}></Image>
            <Image className="w-[30px] h-[30px]" src={instagram}></Image>
           </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={person2}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Car Engine Plug
          </h2>
          <p>Engine Expert</p>
          <div className="card-actions">
           <div className="flex space-x-2">
            <Image className="w-[30px] h-[30px]" src={facebook}></Image>
            <Image className="w-[30px] h-[30px]" src={twitter}></Image>
            <Image className="w-[30px] h-[30px]" src={linkdin}></Image>
            <Image className="w-[30px] h-[30px]" src={instagram}></Image>
           </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={person3}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Car Engine Plug
          </h2>
          <p>Engine Expert</p>
          <div className="card-actions">
           <div className="flex space-x-2">
            <Image className="w-[30px] h-[30px]" src={facebook}></Image>
            <Image className="w-[30px] h-[30px]" src={twitter}></Image>
            <Image className="w-[30px] h-[30px]" src={linkdin}></Image>
            <Image className="w-[30px] h-[30px]" src={instagram}></Image>
           </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Team;
