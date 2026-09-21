import React from "react"
import gradcap from "./assets/logocopy.png"
import london from "./assets/londoncopy.png"
import newyork from "./assets/newyorkcopy.png"
import washington from "./assets/washingtoncopy.png"
import library from "./assets/librarycopy.png"
import basketball from "./assets/basketballcopy.png"
import cafeteria from "./assets/cafeteriacopy.png"
import student1 from "./assets/user1copy.jpg"
import student2 from "./assets/user2copy.jpg"
import './index.css';



const App = () => {
  return (
    <div>
        <section className="header">
       <nav>
         <a href=""><img src= {gradcap} alt="Graduation cap logo" /></a>
         <div className="nav-links">
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">COURSE</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">CONTACT US</a></li>
            </ul>
         </div>
    
        </nav>
     
      <div className="hero">
         <h2>World's Biggest University</h2>
         <p>Making website is one of the easiest things in the world. You just need to learn Html, Css, <br/>Javascript and you are good to go</p>
         <a href="" className="hero-btn">Visit us to Know more</a>
        
        </div>

      

</section>
  <section className="course">  
    <h1>Courses we Offer</h1> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sequi.</p>
    
   <div className="row">
    <div className="course-col">
        <h3>Intermediate</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde mollitia, ducimus accusantium ab porro doloremque odit recusandae harum aut officia.</p>

    </div>
    <div className="course-col">
        <h3>Degree</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde mollitia, ducimus accusantium ab porro doloremque odit recusandae harum aut officia.</p>

    </div>
    <div className="course-col">
        <h3>Post Graduation</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde mollitia, ducimus accusantium ab porro doloremque odit recusandae harum aut officia.</p>

    </div>


   </div>
    
</section>


  <section className="campus">
    <h1>Our Global Campus</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda officia eius dignissimos ex illum id?</p>
     <div className="row">
        <div className="campus-col">
            <img src= {london} alt="londonpic" />
            <div className="layer">
                <h3>LONDON</h3>
            </div>
        </div>
        <div className="campus-col">
            <img src= {newyork} alt="newyorkpic" />
            <div className="layer">
                <h3>NEWYORK</h3>
            </div>
            </div>
        <div className="campus-col">
            <img src= {washington} alt="washingtonpic"/>
            <div className="layer">
                <h3>WASHINGTON</h3>
            </div>
        </div>
     </div>
  </section>

{/* <!-- Facilities --> */}

<section className="facilities">
    <h1>Our Facilities</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cupiditate.</p>
     <div className="row">
        <div className="facilities-col">
            <img src= {library} alt="library" />
            <h3>World Class Library</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptates, necessitatibus vero odio obcaecati voluptatibus.</p>
        </div>
     
        <div className="facilities-col">
            <img src={basketball} alt="basketball" />
            <h3>Largest Play Ground</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptates, necessitatibus vero odio obcaecati voluptatibus.</p>
        </div>
     
        <div className="facilities-col">
            <img src= {cafeteria} alt="Cafeteria" />
            <h3>Tasty and Healthy Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptates, necessitatibus vero odio obcaecati voluptatibus.</p>
        </div>
    </div>

  </section>

  {/* <!-- TESTIMONIALS --> */}
  <section className="testimonials">
    <h1>What Our Students Say</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur ratione explicabo, ex inventore nesciunt nobis numquam at alias exercitationem hic laudantium expedita officia animi?</p>

    <div className="row">
        <div className="testimonial-col">
            <img src={student1} alt="Student1" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iure. Illum delectus natus eaque iusto, eum velit at tempora totam optio beatae asperiores omnis voluptatem unde sit iure eos ipsa?</p>
                <h3>Christine Berkley</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
                
            </div>

        </div>
        <div className="testimonial-col">
            <img src= {student2} alt="Student2" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iure. Illum delectus natus eaque iusto, eum velit at tempora totam optio beatae asperiores omnis voluptatem unde sit iure eos ipsa?</p>
                <h3>David Byer</h3>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
            </div>

        </div>

    </div>

  </section>

  {/* <!-- call To Action --> */}

  <section className="cta">
    <h1>Enroll for our various online classes anywhere from the world</h1>
    <a href="" className="hero-btn">CONTACT US</a>
  </section>

  {/* <!-- Footer --> */}

  <section className="footer">
    <h4>About Us</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus qui eos officia dolorem eaque aliquam adipisci, itaque porro soluta nisi quam mollitia, modi distinctio, <br/>alias vitae magni ea eligendi delectus dolores quos? Laborum adipisci fugiat animi, voluptatem a incidunt.</p>
     <div className="icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
     </div>
     <p>Made with <i className="fa-regular fa-heart"></i> by Nma</p>


  </section>
    </div>
  )
}

export default App
