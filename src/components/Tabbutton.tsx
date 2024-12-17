//tabbutton.tsx
import React from 'react'

const TabButton = ({ active, selectTab ,children}:any) => {
const buttonClasses = active ? ' text-white border-b border-yellow-700' : 
' text-[#e6eaec]' //button classes

  return (
    <button onClick={selectTab} className={buttonClasses} type='button'>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}

        </p>
        
    </button>
  )
}

export default TabButton