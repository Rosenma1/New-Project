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
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaStar, FaStarHalfAlt, FaRegHeart } from 'react-icons/fa';



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
         <p>Welcome to the Worlds Biggest University that brings to you several opportunities to learn, interact and connect with great minds across the world, <br/> A place of excellence</p>
         <a href="" className="hero-btn">Visit us to Know more</a>
        
        </div>

      

</section>
  <section className="course">  
    <h1>Courses we Offer</h1> 
    <p>Explore the different courses we offer, the intersection of technology and society. Learn about engineering, nursing, social work etc. Our innovative courses inspire and invite you to help solve some of today's most pressing local, national and global issues.</p>
    
   <div className="row">
    <div className="course-col">
        <h3>Intermediate</h3>
        <p>For years, we have improved the health of our communities, one graduate at a time. Offering wide array of fully accredited nursing, social work and engineering programs, with guaranteed placements after study.</p>

    </div>
    <div className="course-col">
        <h3>Degree</h3>
        <p>Our Degree programs builds on our strong roots in leadership, health care and education,and we are proud to offer an array of coed graduate programs for women and men who are ready to advance their careers and grow as leaders.</p>

    </div>
    <div className="course-col">
        <h3>Post Graduation</h3>
        <p> We operate  one of the largest nursing schools in the World, offering a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.This Master's program will help you to meet your goals of becoming a Licensed Professional Counselor.</p>

    </div>


   </div>
    
</section>


  <section className="campus">
    <h1>Our Global Campus</h1>
    <p>The World biggest University of Garret's main campus is located on Doughstard Avenue. Surrounded by green space, the main campus is divided into residential and academic buildings connected by a bridge that overlooks the north branch of the Sky Hill, known to us as Mount Lyra. </p>
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
    <p>We are commited to meet the needs of every admitted undergraduate and graduate student. We are not focused on your abilities as we are here to grow your weak areas.We provide facilities that helps in building your weak areas and once you are accepted, you belong here.</p>
     <div className="row">
        <div className="facilities-col">
            <img src= {library} alt="library" />
            <h3>World Class Library</h3>
            <p>A standard library that include books, digital tools, study desks, and helpful staff. It supports students and offers free access to information.</p>
        </div>
     
        <div className="facilities-col">
            <img src={basketball} alt="basketball" />
            <h3>Largest Play Ground</h3>
            <p>Touted as the world's largest play structure of its kind, L&F at The Artwick Garden is a massive, fantasy themed playground. The structure is made with natural timber and includes 10 massive towers etc. It is equipped with advanced play structures with the best safety measures put in place.</p>
        </div>
     
        <div className="facilities-col">
            <img src= {cafeteria} alt="Cafeteria" />
            <h3>Tasty and Healthy Food</h3>
            <p>We do  not compromise on the standard of food served to our students. We focus on nutrient dense, whole ingredients and smart cooking techniques, thereby creating delicious meals that naturally fuel your body.</p>
        </div>
    </div>

  </section>

  {/* <!-- TESTIMONIALS --> */}
  <section className="testimonials">
    <h1>What Our Students Say</h1>
    <p>Testimonies from some of our students and what they have to say. Being accepted her gives you the freedom to interact, review and also give your honest opinions and feedback on your personal experiences. </p>
    <div className="row">
        <div className="testimonial-col">
            <img src={student1} alt="Student1" />
            <div>
                <p>“WBU is home to me not because of the fancy buildings like Pearl Hall, or its prestigious reputation, but rather because of the university's care for the whole person as each of us attempts to live our lives for others.”</p>
                <h3>Christine Berkley</h3>
                <FaStar color="#ff0000" />
                <FaStar color="#ff0000" />
                <FaStar color="#ff0000" />
                <FaStar color="#ff0000" />
                <FaStarHalfAlt color="#fff" />
                
            </div>

        </div>
        <div className="testimonial-col">
            <img src= {student2} alt="Student2" />
            <div>
                <p>“It's likely that you will come to love some of the most amazing souls this campus has to offer. That love may come in the form of friendships that you know will last forever.</p>
                <h3>David Byer</h3>
              <FaStar color="#ff0000" />
              <FaStar color="#ff0000" />
              <FaStar color="#ff0000" />
              <FaStar color="#ff0000" />
              <FaStar color="#ff0000"/>
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
    <p>We are the top World research University with a heart for people. Founded in 1908, we are the nations hope for integrity, dedicated and devoted to social justice, respect for each individuals needs and talents. We're a community of people who bridge our disparate experiences and identities. Meet the people and places that make WBU home.</p>
     <div className="icons">
        <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
     </div>
     <p>Made with <FaRegHeart color = "red" /> by Nma</p>


  </section>
    </div>
  )
}

export default App
