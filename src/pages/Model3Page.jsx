import React from 'react'
import ModelSections from '../components/ModelSections/ModelSections'
import Model3Image from"../components/Assets/Model-3.jpg"

const featureItems = [
  {title: '258 Horsepower', description: '317 lb-ft (torque'},
  {title: '5.3s 0-100', description: '225 km/h (maximum)'},
  {title: '448km', description: 'Autonomy'},
  {title: '$40,240', description: 'Price'},

]

export default function Model3Page() {
  return( 
    <div className='container'>
       <section className='section' id="section3">
        <ModelSections
            header={"Model 3"}
            description={"Explore Inventory"}
            backgroundImage={Model3Image}
            featureItems={featureItems}
        />
        </section>
    </div>
)
}