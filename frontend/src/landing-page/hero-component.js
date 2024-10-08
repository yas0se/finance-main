import { useState } from "react";
import NavbarConnected from "../general-component/navbarConnected";
import NavbarNotConnected from "../general-component/navbarNotConnected";

function Hero() {
  const [authenticated,setAuthenticated]=useState(localStorage.getItem('token'));
  
  return (
    <>
    {authenticated?<NavbarConnected setAuthenticated={setAuthenticated}/>: <NavbarNotConnected/>}
 
      <div className="pt-2 gradient">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full text-white">Simplifiez votre gestion financière avec MyFinance</p>
            <h1 className="my-4 text-5xl font-bold leading-tight text-white">
            Gérez vos dépenses, suivez vos revenus
            </h1>
            <p className="leading-normal text-2xl mb-8 text-white">
            Avec SmartFinance, prenez le contrôle de votre budget facilement et efficacement.
                        </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Tutorial
            </button>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="image/dollar.png" alt="Hero" />
          </div>
        </div>
      </div>
  
    </>
  );
}

export default Hero;
