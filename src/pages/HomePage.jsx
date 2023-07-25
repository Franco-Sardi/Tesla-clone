import React from 'react'
import HomeSectionVideo from '../components/HomeSectionVideo/HomeSectionVideo'
import ModelSections from '../components/ModelSections/ModelSections'
import Model3Image from "../components/Assets/Model-3.jpg"
import CybertruckImage from "../components/Assets/cybertruck.jpg"
import ModelXImage from "../components/Assets/Model-X.jpg"

export default function HomePage() {
return( 
    <div className='container'>
        <section className='section' >
            <HomeSectionVideo/>
        </section>
        <section className='section' >
        <ModelSections
            header={"Model 3"}
            description={"Starting at $32,740"}
            backgroundImage={Model3Image}
        />
        </section>
        <section className='section' >
        <ModelSections
            header={"Model X"}
            description={"Explore Inventory"}
            backgroundImage={ModelXImage}
        />
        </section>
        <section className='section' >
        <ModelSections
            header={"Cybertruck"}
            description={"Explore Inventory"}
            backgroundImage={CybertruckImage}
        />
        </section>

    </div>
)
}


