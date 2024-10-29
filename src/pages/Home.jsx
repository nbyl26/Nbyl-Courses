import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { homeSection } from "../data/HomeSection"
import { coursesSection } from "../data/CoursesSection"
import { tutorsSection, tutorsList } from "../data/TutorsSection"
import { partnersSection, partnersList } from "../data/PartnersSection"
import { contactSection } from "../data/ContactSection"

import Tutors from "../components/Tutors"
import Partners from "../components/Partners"
import Contact from "../components/Contact"

import parse from 'html-react-parser'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
      <section id="home">
            <img src= {homeSection.image}/>
                
            <div className="kolom">
              {parse(homeSection.content)}
            </div>
        </section>

        {/* Online Courses */}
        <section id="courses">
            <div className="kolom">
              {parse(coursesSection.content)}
            </div>
            <img src={coursesSection.image}/>
        </section>

        {/* Tutors */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div>
                <Tutors tutorsList={tutorsList}/>
            </div>
        </section>
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                  {parse(partnersSection.content)}
                  <Partners partnersList={partnersList}/>
                </div>
            </div>
        </section>

      </div>
      <Contact contactSection={contactSection}/>
      <Footer/>
    </>
  );
}

export default Home;
