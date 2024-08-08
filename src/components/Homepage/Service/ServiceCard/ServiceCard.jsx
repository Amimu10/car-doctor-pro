import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const {img, title, price} = service;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image height={400} width={400} src={img}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex justify-between items-center">
         <p className="text-[#FF3811]">Price ${price}</p>
        <Link href=""><FaArrowRight className="text-[#FF3811]"/>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
