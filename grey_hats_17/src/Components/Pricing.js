import image1 from"../assests/image9.jpg";
import image2 from"../assests/image5.jpg";
import image3 from"../assests/image8.jpg";
import image4 from"../assests/image2.jpg";

import image5 from"../assests/image10.jpg";
import image6 from"../assests/image13.jpg";
import image7 from"../assests/image1.jpg";
import image8 from"../assests/image15.jpg";
import { Link } from "react-router-dom";
import  "../Style/PricingStyle.css";
function Pricing() {
    return (

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image1}></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">BRASS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Brass Horse</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-cover w-full h-full block" src={image2} height="100" width="100"></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">HANDLOOM</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Embroided Umbrella</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image3}></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">BRASS</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Brass antique cow</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image4}></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">POTTERY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Painted Vase</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image5}></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">WOODEN</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Ship</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image6}></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">POTTERY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Coaster Set</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image7}></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">POTTERY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Painted Pots</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image8}></img>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">JUTE</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Jute rug</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
    </div>
    <Link to="/viewall">
    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cen">View All</button>
    </Link>
    </div>
</section>


);
  }
  
export default Pricing;
  