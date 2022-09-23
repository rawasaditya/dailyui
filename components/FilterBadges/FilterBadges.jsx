import React, { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import style from "./Filter.module.css";
const FilterBadges = () => {
  const [selected, setselected] = useState('all'); 
  return (
    <div className="flex items-center justify-center gap-2 align-middle">
      <span className={`flex items-center gap-2 px-3 py-2 align-middle rounded-full border ${selected === 'all' ? "border-red-300" : ""} hover:shadow-md hover:border-red-300 cursor-pointer  ease-in-out`} onClick={()=>setselected('all')} >
        All
      </span>
      <span className={`flex gap-2 px-3 py-2 align-middle  ease-in-out border  ${selected === 'design' ? "border-red-300" : ""} rounded-full cursor-pointer hover:shadow-md hover:border-red-300`} onClick={()=>setselected('design')} >
        <img src="/figma.png" className={style.filterImg} />
      </span>
      <span className={`flex items-center gap-2 px-3 py-2 align-middle  ease-in-out border  ${selected === 'code' ? "border-red-300" : ""} rounded-full cursor-pointer hover:shadow-md hover:border-red-300`} onClick={()=>setselected('code')} >
        <BsCodeSlash
          style={{ fontWeight: "bolder" }}
          className={style.filterImg}
        />
      </span>
    </div>
  );
};

export default FilterBadges;
