import React from "react";
import cover from "../../assets/flamengnawaNew.png";
import {useNavigate} from 'react-router-dom'

export default function BlogCard() {
    const navigate = useNavigate()
    const blogRedirect = () =>{
        navigate('/blog/1')
    }
  return (
    <div onClick={blogRedirect} className="w-80 h-96 border-2 border-red/20 overflow-clip rounded">
      <div className="w-full h-2/3">
        <img src={cover} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-2 pt-10 w-full h-1/3 flex flex-col justify-between">
        <p className="text-center text-xl truncate">Article Name</p>
        <p className="text-center text-sm text-white/50">author | 19-02-2024 | 22 comment</p>
      </div>
    </div>
  );
}
