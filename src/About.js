//import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/ProductContext'

export const About = () => {

    const { myName } = useProductContext()

    const data = {
        name: 'Beauty Products Details'
    }

    return (
        <>
            {myName}
            <HeroSection myData={data} />
        </>

    )
}
