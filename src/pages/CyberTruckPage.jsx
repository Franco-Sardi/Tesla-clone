import React from 'react'
import ModelSections from '../components/ModelSections/ModelSections'
import CybertruckImage from"../components/Assets/cybertruck.jpg"
const featureItems = [
  {title: '805 Horsepower', description: '1033 lb-ft (torque)'},
  {title: '6.5s 0-100', description: '177 km/h (maximum)'},
  {title: '700km', description: 'Autonomy'},
  {title: '$49.900', description: 'Price'},

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

