import React from 'react'
import ModelSections from '../components/ModelSections/ModelSections'
import ModelXImage from "../components/Assets/Model-X.jpg"
export default function ModelXPage() {
  return( 
    <div className='container'>
        <section className='section' id="section3">
        <ModelSections
            header={"Model X"}
            description={"Explore Inventory"}
            backgroundImage={ModelXImage}
        />
        </section>
    </div>
)
}