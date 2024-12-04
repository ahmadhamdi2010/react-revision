import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import PageTitle from '../components/Pagetitle'


const ServicePage = () => {
    const {id} = useParams();
    const [service, setService] = useState(null)
    const [loading, setLoading] =  useState(true);
    useEffect(()=>{
        const fetchServices = async ()=>{
            try {
                const res = await fetch(`/api/services/${id}`);
                const data = await res.json();
                setService(data);
                
              } catch (error) {
                console.log("error getting data", error);
              }finally{
                setLoading(false);
              }
        }
        fetchServices();
    },[])
  return loading? <Spinner/> : (
    <div>
      <PageTitle title={service.title}/>
      <section style={{margin:50}}>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Service name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{service.title}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Tags</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{service.tags.map((tag)=> tag +", ")}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {service.description}
            </dd>
          </div>
        </dl>
      </div>
      </section>
    </div>
  )
}

export default ServicePage
