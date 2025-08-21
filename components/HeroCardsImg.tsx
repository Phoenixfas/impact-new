'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroCardsImg({ services, dark }: { services: any[], dark: any }) {
  const [newServices, setNewServices] = useState<any[]>([]);
  useEffect(() => {

    if (services && services.length > 0) {
      const repeatedServices = Array(2).fill(services).flat();
      setNewServices(repeatedServices);
    }
  }, [services]);
  return (
    newServices.map((service, i) => (
      <div key={i} className={"min-w-[150px] max-w-[150px] h-[200px] rounded-xl overflow-hidden shadow-[0_7px_20px_#00000088]"}>
        <Image src={service.main_img} className='w-full h-full object-cover' alt="service" width={350} height={500} priority />
      </div>
    ))
  )
}
