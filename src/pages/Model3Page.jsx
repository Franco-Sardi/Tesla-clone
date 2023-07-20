import React from 'react'
import ModelSections from '../components/ModelSections/ModelSections'
import Model3Image from"../components/Assets/Model-3.jpg"

export default function Model3Page() {
  return( 
    <div className='container'>
       <section className='section' id="section3">
        <ModelSections
            header={"Model 3"}
            description={"Explore Inventory"}
            backgroundImage={Model3Image}
        />
        </section>
    </div>
)
}