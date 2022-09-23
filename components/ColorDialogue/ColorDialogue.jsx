import React from 'react'
import ColorCode from '../ColorCode/ColorCode'

const ColorDialogue = () => {
  return (
    <div style={{backgroundColor:"#e7e8fc"}}>
        <div className='flex flex-col justify-center p-4 align-middle'>
            <span className='font-semibold text-center '>
                Color Pallet
            </span>
            <span className='text-sm text-center text-gray-500'>Click on color to copy.</span>
            <div className='mt-3'>
                <ColorCode />
                <ColorCode />
                <ColorCode />
                <ColorCode />
                <ColorCode />

            </div>
        </div>
    </div>
  )
}

export default ColorDialogue