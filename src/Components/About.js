import Title  from "./Title"

import aboutImg from "../images/about.jpeg"

const About = () => {
  return (
    <section className="section" id="about">
      About
      <Title title='about'subtitle='us'/>
      <div className="section-center about-center"> 
      <div className="about-img"> 
      <img src="{aboutImg}" alt="about"/>
      </div>

      </div>
    </section>
  )
}

export default About