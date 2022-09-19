import React from 'react'
import { Hero, AboutSection, SideIndicator, AboutCardWrapper, AboutCard, ProductSection, TestimonialSection, TestimonialCardWrapper} from '../components/Landing/LandingStyles'
import heroImage from '../assets/images/HeroImage.png'
import rechargeImage from '../assets/images/Recharge.png'
import loginIcon from '../assets/icon/Login.svg'
import DashboardIcon from '../assets/icon/Dashboard.svg'
import Spinning from '../assets/icon/Spinning.svg'
import StyleButton from '../components/Button.styles.jsx'
import SliderItem from '../components/Landing/SliderItem.jsx'
import { Navbar} from '../components/Landing/Navbar'
import { Footer } from '../components/Landing/Footer'

export const LandingPage = () => {
 const slideData = [
    {
      name: 'Adekola Johnson',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      name: 'King David',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      name: 'Paul James',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
  ]

  return (
    <div>
      {/* HEOR SECTION  */}
      <Navbar />
    <Hero> 
      <div className='heroText'>
        <p><b>Surplus Airtime? Don’t worry we got you covered</b></p>
        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada quam malesuada in ultrices augue ac maecenas.</small>
        <StyleButton height='48px' width='185px'>Get Started</StyleButton>
      </div>
      <div className='heroImage'><img src={heroImage} alt="" /></div>
    </Hero>

    {/* ABOUT SECTION */}
    <AboutSection id='about'>
      <SideIndicator/>
      <div className='aboutDescription'>
        <h2>Change Surplus Airtime to Real Cash</h2>
        <small>In three simple steps, change airtime to cash</small>
      </div>
    </AboutSection>

    <AboutCardWrapper>
      <AboutCard backgroundColor='#FFF1F3'>
        <img src={loginIcon} alt=""/>
        <h4>Login or Register</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada quam malesuada in ultrices augue ac maecenas.</p>
      </AboutCard>
      <AboutCard backgroundColor='#FFF1F3'>
        <img src={DashboardIcon} alt=""/>
        <h4>Deposit From Dashboard</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada quam malesuada in ultrices augue ac maecenas.</p>
      </AboutCard>
      <AboutCard backgroundColor='#F5FCF5'>
        <img src={Spinning} alt=""/>
        <h4>Convert</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada quam malesuada in ultrices augue ac maecenas.</p>
      </AboutCard>
    </AboutCardWrapper>

    {/* PRODUCT SECTION */}
    <ProductSection id="product">
      <div className='productDescription'>
        <h2>The best platform for your convenient airtime exchange</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada quam malesuada in ultrices augue ac maecenas.</p>
        <StyleButton height='48px' width='185px'>Get Started</StyleButton>
      </div>
      <div className='productImage'><img src={rechargeImage} alt=""/></div>
    </ProductSection>


    {/* TESTIMONIAL SECTION */}
    <TestimonialSection id='contactUs'>
      <h1>Hear what our customers are saying</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.</p>
    </TestimonialSection>

    <TestimonialCardWrapper> 
        <SliderItem slideData={slideData}/>
    </TestimonialCardWrapper>
    <Footer />
    </div>
  )
}


