import React from 'react'
import Card from './Card'
import services from '../services.json'

const HomeCards = ({isHome =false}) => {
  const keyService = isHome? services.slice(0,3): services;
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
            {keyService.map((service)=>(
                <Card key={service.id} title={service.title} bodyText={service.description} destination={service.id} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default HomeCards




