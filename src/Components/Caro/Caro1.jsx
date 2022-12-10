import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";
import {data} from "./data"




export default function Caro1() {  
    const navigate= useNavigate()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div style={{width:"87%",margin:"auto"}}>
     
      <div >
      <p style={{fontSize:"30px",fontWeight:"700",marginBottom:"25px",textAlign:"start"}}>In the Spotlight: Partnerships</p>
        <Carousel responsive={responsive}>
            
            {data.map((item)=>(
              <div key={item.cost} style={{paddingBottom:"15px",backgroundColor:"white",width:"89%",border:"1px solid white",margin:"auto",borderRadius:"10px"}}>
                <div style={{height:"60%",width:"80%",margin:"auto"}} key={item.para}>
                    <img  style={{backgroundColor:"lightgray",width:"100%"}} src={item.img} alt="" />
                    <p style={{fontWeight:"600",fontSize:"20px",letterSpacing:"1px",textAlign:"start",margin:"10px"}}>{item.title}</p>
                    <p style={{fontSize:"17px",textAlign:"start"}}>{item.star}</p>
                    <hr />
                    <div style={{display:"flex"}}>
                      <p style={{marginRight:"15px",color:"rgb(255,0,0)",fontSize:"18px"}}>₹ {item.cost}</p>
                      <p style={{textDecoration:"line-through"}}>₹ {item.cutcost}</p>
                    </div>
                    <p style={{fontSize:"15px",textAlign:"start"}}>{item.save}</p>
                    <button style={{backgroundColor:"rgb(255,0,0)",color:"white",border:"none",padding:"10px 35px",borderRadius:"5px"}}>ADD TO CART</button>
                </div>
                </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
