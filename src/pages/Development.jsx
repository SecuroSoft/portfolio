import React from 'react'
import Section1 from '../components/Developement/Section1'
import Section2 from '../components/Developement/Section2'
import Section3 from '../components/Developement/Section3'
import SendANote from '../components/Home/SendANote'
import Footer from '../components/Home/Footer'

const Development = () => {
  return (
    <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <div className="footer-bg service-bg">
        <SendANote />
        <Footer />
        </div>
    </div>
  )
}

export default Development