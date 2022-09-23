import React from "react";
import { BsDownload, BsCodeSlash } from "react-icons/bs";
import style from "./Card.module.css";
const Card = ({ type }) => {
  return (
    <div className="duration-300 ease-in rounded-none shadow-lg card bg-base-100 hover:scale-105 group">
      <div>
        <figure>
          <img
            src="https://uidesigndaily.fra1.digitaloceanspaces.com/uploads/1585/day_1585_thumb.png"
            alt="Shoes"
          />
        </figure>
        <div className={`${style.tagLogo} shadow-md`}>
          {type == "code" ? <BsCodeSlash style={{fontWeight:"bolder"}} /> : <img src="./figma.png" />}
        </div>
      </div>

      <div className="gap-0 p-3 card-body">
        <div className="flex items-center justify-between gap-0 align-middle">
          <h2 className="pt-5 card-title">Shoes!</h2>
          {type == "design" ? (
            <button className="px-2 group-hover:font-bold">
              <BsDownload />
            </button>
          ) : (
            ""
          )}
        </div>
        <span className="text-gray-400">April 20</span>
      </div>
    </div>
  );
};

export default Card;
