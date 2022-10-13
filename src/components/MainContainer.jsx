import React, { useState } from 'react'
import "./mainContainer.css"
import PropertyCard from './PropertyCard'
import SearchFilter from './SearchFilter'
import { properties } from '../rentProperty'

const MainConatiner = () => {

  const [property, setProperty] = useState(properties);
  // console.log("Property Main", property)

  return (
    <div className='container'>
      <div className="filter">
        <SearchFilter property={property} setProperty={setProperty} />
      </div>
      <div className="property-list">
        {property?.map((value, index) => {
          return <PropertyCard key={index} property={value}/>
        })}
        </div>
    </div>
  )
}

export default MainConatiner