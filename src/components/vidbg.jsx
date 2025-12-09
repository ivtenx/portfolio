import React from 'react'

const Videonaki = () => {
    return (
        <div>
            <video className='min-h-full min-w-full fixed object-cover' autoPlay muted loop src="/bg.mp4" />
            <div className='bg-black/60 min-h-full min-w-full absolute' />
        </div>
    )
}

export default Videonaki
