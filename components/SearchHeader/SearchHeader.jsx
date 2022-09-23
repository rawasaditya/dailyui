import React from 'react'
import {BsSearch} from 'react-icons/bs'
import FilterBadges from '../FilterBadges/FilterBadges'
const SearchHeader = () => {
  return (
    <div className='items-center justify-between md:flex pt-11'>
       <div className={`flex items-center border-b md:max-w-fit focus-within:border-red-300 hover:border-red-300`}>
        <BsSearch className='ml-3'/>
       <input type="text" placeholder="Search" className={`py-2 mx-3 focus-within:outline-none w-72 `} />
       </div>
       <FilterBadges />
    </div>
  )
}

export default SearchHeader