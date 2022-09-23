import React, {useState} from 'react'
import Toast from '../Toast/Toast'



const ColorCode = () => {

    const [toast, settoast] = useState(false);
    const copyColor = (color) => {
        navigator.clipboard.writeText(color);
        settoast(true)
    }

  return (
    <div className='inline-block m-1 '>
        <Toast visible={toast} setVisible={settoast} text="Color Copied."/>
        <button className='flex justify-center gap-1 p-2 align-middle duration-500 ease-in-out bg-white border border-gray-400 rounded-full cursor-pointer hover:border-red-400 active:scale-90' onClick={()=>copyColor("#393A62")}>
            <span className='w-5 h-5 rounded-xl' style={{background:"#393A62"}}></span>
            <span className='text-sm'>#393A62</span>
        </button>
    </div>
  )
}

export default ColorCode