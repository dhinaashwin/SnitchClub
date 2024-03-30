import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../images/Hero.jpeg";
import DiscountImg from '../../images/Discount.jpeg';
import "./Hero.css";
import "./Discount.css";

const Hero = () => {
  return (
    <>
      <section className="Section-hero pt-8">
        <div className="Parent-hero flex md:items-center">
          <div className="hero-left flex items-center justify-center">
            <img src={HeroImg} className='w-[650px] h-auto' alt="" />
          </div>
          <div className="hero-right flex flex-col items-center gap-10">
            <h1 className="">Not cheap Just affordable</h1>
            <Link to='/allProducts'><button className="btn">Shop Now</button></Link> 
          </div>
        </div>
      </section>
      <section className="Section-discount pt-12">
        <div className="Parent-discount flex md:items-center flex-row-reverse">
          <div className="discount-left flex items-center justify-center">
            <img src={DiscountImg} className="w-[650px] h-auto" alt="" />
          </div>
          <div className="discount-right flex flex-col items-center gap-10">
            <h1 className="">Discount on selected products</h1>
            <Link to='/discount'><button className="btn">Check Now</button></Link>  
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
