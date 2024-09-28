'use client'

import React, { useEffect, useState } from 'react'

const Page = () => {
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(position => {
            const { latitude, longitude } = position.coords;
            // Show a map centered at latitude / longitude.
            setLongitude(longitude)
            setLatitude(latitude)
        });
        console.log("watch Id - ", watchId);

    }, [])

    return (
        <div>
            <h3>longitude : {longitude}</h3>
            <h3>latitude : {latitude}</h3>
        </div>
    )
}

export default Page

