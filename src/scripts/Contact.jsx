import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Slider } from "./Slider";
import slides from './mock.json';

export default function Contact(){
    return(
        <div className=" ">
        <Header></Header>
        <Footer></Footer>
        <Slider className= 'mySwiper' slides={slides}></Slider>
        </div>
    )
}
