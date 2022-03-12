import React, { useEffect, useMemo, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function Map ({latitude = 0, longitude = 0, zoom = 11, ...props}) {
  const ref = useRef()
  const loader = useMemo(() => {
    return new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });
  }, [])

  useEffect(()=>{
    loader.load().then((google) => {
      const map = new google.maps.Map(ref.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom
      })

      new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map
      })
    })
  }, [loader, latitude, longitude, zoom])

  return <div ref={ref} style={{ height: '500px', width: '100%' }} {...props} />
}
