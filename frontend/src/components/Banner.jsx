import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full sm:h-[70vh] h-[50vh] ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1551615218-33580b595050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1540018177157-957400dbd08a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1624485871361-65454b13edfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1758&q=80"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1619177383949-f03975e50b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;

{
  /* <Carousel>
<img
  src="https://images.unsplash.com/photo-1610566682120-a437b54135d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80"
  alt="tours pic"
/>
<img
  src="https://images.unsplash.com/photo-1540018177157-957400dbd08a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
  alt="tours pic"
/>
<img
  src="https://images.unsplash.com/photo-1551615218-33580b595050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
  alt="tours pic"
/>
<img
  src="https://images.unsplash.com/photo-1624485871361-65454b13edfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1758&q=80"
  alt="tours pic"
/>
<img
  src="https://images.unsplash.com/photo-1578599133584-d632fdcaa733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
  alt="tours pic"
/>
<img
  src="https://images.unsplash.com/photo-1608958435020-e8a7109ba809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
  alt="tours pic"
/>
<img
  src="https://images.unsplash.com/photo-1619177383949-f03975e50b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
  alt="tours pic"
/>
</Carousel> */
}
