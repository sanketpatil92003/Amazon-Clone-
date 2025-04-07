import { useEffect } from "react";

import "./Home.css";
import Products from "../Products/Product";
const Home = () => {
    useEffect(() => Slider(0), []);
return (
    
        
        <div className="Home">
            <div className="HomeContainer"></div>
            <div className="HomeSliderContainer"></div>
            {/* New Home Row */}
            <div className="HomeRow"></div>
             <Products
               rating =  {4.5}
             title={"The Only One Left: A Novel"} 
             price= {18.42} 
        

            
            image ={
                "https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"  
            }
            />
              
              

            
        
        <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"

            }/>
            
            <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"

            }/>

         <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"
            }/>
            
            <div className="HomeRow"></div>
            <Products title={"The Only One Left: A Novel"} price= {18.42} image={"https://m.media-amazon.com/images/I/41XN+xyVEwl._AC_SY200.JPG"}/>
     
             {/* Second Row */}
             <div className="HomeRow"></div>

             
            <Products 
        rating= {4.5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"

            }/>

         <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"

            }/>
             <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"

            }/>

         <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"

            }/>
            <div className="HomeRow"></div>
            <Products title={"The Only One Left: A Novel"} price= {18.42} image={"https://m.media-amazon.com/images/I/41XN+xyVEwl._AC_SY200.JPG"}/>
         
            {/* third Row */}
             
            <div className="HomeRow"></div>
             <Products
               rating =  {4.5}
             title={"The Only One Left: A Novel"} 
             price= {18.42} 
        

            
            image ={
                "https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"  
            }
            />
              
              

            
        
        <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"

            }/>
            
            <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"

            }/>

         <Products 
        rating= {5}
         title={"The Only One Left: A Novel"} price= {18.42}
       
           
           image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"
            }/>
            
            
            
            <div className="HomeRow"></div>
            <Products title={"The Only One Left: A Novel"} price= {18.42} image={"https://m.media-amazon.com/images/I/41XN+xyVEwl._AC_SY200.JPG"}/>
              
             
           </div>
           
           
)
}


            
           
        
        
      
            


            

            
           
            

    
       


//Function For Home Img Slider
function Slider(Counter) {
    const slides = document.querySelectorAll(".HomeImg");
    slides.forEach((slide, index) => {
        if (index !== Counter) {
            slide.computedStyleMap.visibility = 'hidden';
            slide.classList.add('image-$(index}')

        }
    })
};

// Function For Home Img Slider

function moveCarousel(Counter, Slides, len) {
    if(slides){
        if(Counter >=len - 1) Counter = 0;
        else Counter +=1;
        slides.forEach((slide, index) => {
            if(index  === Counter){
               slide.style.visibility = 'visible';
            }else {
                slide.style.visibility = 'hidden';
            }

            })

        }
    }
    setTimeout(() => {
        moveCarousel(Counter, slides, len);
    


    }, 2000);

    export default Home;
