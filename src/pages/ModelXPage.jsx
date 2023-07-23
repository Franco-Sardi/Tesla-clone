import React from 'react'
import ModelSections from '../components/ModelSections/ModelSections'
import ModelXImage from "../components/Assets/Model-X.jpg"
const featureItems = [
    {title: '670 Horsepower', description: '773 lb-ft (torque)'},
    {title: '2.8s 0-100', description: '250 km/h (máximo)'},
    {title: '547km', description: 'Autonomy'},
    {title: '$43.990', description: 'Price'},
  
  ]
export default function ModelXPage() {
  return( 
    <div className='container'>
        <section className='section' id="section3">
        <ModelSections
            header={"Model X"}
            description={"Explore Inventory"}
            backgroundImage={ModelXImage}
            featureItems={featureItems}
        />
        </section>
    </div>
)
}