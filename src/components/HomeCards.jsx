import React from 'react'
import Card from './Card'
import { useState,useEffect } from 'react';
import Spinner from './Spinner';


const HomeCards = ({isHome =false}) => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchServices = async ()=>{

      try {
        const res = await fetch('http://localhost:8000/services');
        const data = await res.json();
        setServices(data);
        
      } catch (error) {
        console.log("error getting data", error);
      }finally{
        setLoading(false);
      }
      
    }
    fetchServices();
  },[])

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        
            {loading? (
              <Spinner loading={loading}/>
            ):(
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
              {services.map((service)=>(
                <Card key={service.id} title={service.title} bodyText={service.description} destination={service.id} />
            ))}
              </div>
            ) }
            
        
      </div>
    </div>
  )
}

export default HomeCards




