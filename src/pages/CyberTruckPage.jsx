import React from 'react'
import ModelSections from '../components/ModelSections/ModelSections'
import CybertruckImage from"../components/Assets/cybertruck.jpg"
const featureItems = [
  {title: '2.3s 0-60', description: 'Very Fast'},
  {title: '2.3s 0-60', description: 'Very Fast'},
  {title: '2.3s 0-60', description: 'Very Fast'},
  {title: '2.3s 0-60', description: 'Very Fast'},

]
export default function CyberTruckPage() {
  return( 
    <div className='container'>
      <section className='section' id="section4">
        <ModelSections
            header={"CyberTruck"}
            description={"Explore Inventory"}
            backgroundImage={CybertruckImage}
            featureItems={featureItems}
        />
        </section>

    </div>
  )
}

