import Header from '../components/header'
import ImgSlider from '../components/imgSlide'
import Section1 from '../components/section1'
import Patet from '../components/patet'
import Beewhithucom from '../components/beewhithucom'
import InfoCard from '../components/infocard'
import MobileIdBanner from '../components/mobileidbanner'
import UcomLogin from '../components/ucomlogin'
import ServiceCards from '../components/servisecard'
import NewsSection from '../components/newssection'
import Footer from '../components/footer'

import React from 'react'

export default function Home() {
    return (
        <>
            <Header />
            <ImgSlider />
            <Section1 />
            <Patet />
            <Beewhithucom />
            <InfoCard />
            <MobileIdBanner />
            <UcomLogin />
            <ServiceCards />
            <NewsSection />
            <Footer />

        </>
    )
}
