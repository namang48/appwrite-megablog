import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import React from "react";

const Postcard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 ">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt="featuredImg"
            className="rounded-xl "
          />
        </div>
        <h2 
            className='text-xl font-bold text-gray-700'
            >{title}</h2>
      </div>
    </Link>
  );
};

export default Postcard;
