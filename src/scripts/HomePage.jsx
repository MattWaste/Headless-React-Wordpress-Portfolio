import {React, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";




export default function HomePage(){

    // useEffect(() => {
    //     var canvas = document.getElementById("myCanvas");
    //     var ctx = canvas.getContext("2d");
    //     var legDirection = 1;
    //     var legAngle = 0;
    //     var xPosition = 0;
    
    //     function drawStickFigure() {
    //       ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    
    //       // Draw the head
    //       ctx.beginPath();
    //       ctx.arc(xPosition + 100, 50, 30, 0, 2 * Math.PI);
    //       ctx.stroke();
    
    //       // Draw the body
    //       ctx.beginPath();
    //       ctx.moveTo(xPosition + 100, 80);
    //       ctx.lineTo(xPosition + 100, 130);
    //       ctx.stroke();
    
    //       // Draw the arms
    //       ctx.beginPath();
    //       ctx.moveTo(xPosition + 100, 90);
    //       ctx.lineTo(xPosition + 60, 110);
    //       ctx.moveTo(xPosition + 100, 90);
    //       ctx.lineTo(xPosition + 140, 110);
    //       ctx.stroke();
    
    //       // Draw the legs
    //       ctx.beginPath();
    //       ctx.moveTo(xPosition + 100, 130);
    //       ctx.lineTo(xPosition + 100 + 40 * Math.sin(legAngle), 170 + 40 * Math.cos(legAngle));
    //       ctx.moveTo(xPosition + 100, 130);
    //       ctx.lineTo(xPosition + 100 - 40 * Math.sin(legAngle), 170 + 40 * Math.cos(legAngle));
    //       ctx.stroke();
    //     }
    
    //     function animate() {
    //       drawStickFigure();
    //       legAngle += 0.1 * legDirection;
    //       if (legAngle > Math.PI / 4) {
    //         legDirection = -1;
    //       } else if (legAngle < -Math.PI / 4) {
    //         legDirection = 1;
    //       }
    //       xPosition += 2; // Move the stick figure to the right
    //       if (xPosition > canvas.width) {
    //         xPosition = -200; // Reset the position to the left when the stick figure goes off the canvas
    //       }
    //       requestAnimationFrame(animate);
    //     }
    
    //     animate();
    //   }, []);
    








    return(
        <div className="gap-5 pl-14 font-display home-container blurg">
        <video className="py-40 pr-4 home-container-main2 video-container" src="http://mawtestsite.local/wp-content/uploads/2023/07/greenportal4.mp4"   autoPlay loop muted width="400px" height="300px" ></video>
        <Header></Header>
        <img src=""></img>
        <div className="home-container-intro py-44">
        <h3 className="py-5 text-2xl ">HELLO THERE</h3>
        <h2 className="py-3 text-7xl text-gradient font-poppinsmedium text-violet-700" >I'm Matt West</h2>
        <h2 className="py-3 text-3xl">  Creative technologist, developer & <br></br>  brand extoller</h2>
        <p className="py-3 text-xl "> I wear many hats both figuratively and literally. I code and design modern web applications, music tools, and a few things in-between. I've been involved in music production for 10+ years and love to champion the tools that help me each day.
        </p>
        <button className= "focus:outline-none txt-yellow-400 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" onClick= {()=>{window.location.href = 'http://mawtestsite.local/contact'}}>Work with me</button>
        </div>
        {/* <canvas id="myCanvas" width="200" height="200"></canvas> */}
        <Footer></Footer>
        </div>
    )
}