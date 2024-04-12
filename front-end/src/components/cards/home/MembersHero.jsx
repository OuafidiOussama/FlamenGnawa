import React, { useEffect } from "react";
import membersBackground from "../../../assets/membersBg.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getAllMembers } from "../../../redux/slices/memberSlice";
import Loading from "../../partials/Loading";
import MemberHeroContainer from "../../containers/home/MemberHeroContainer";

export default function MembersHero() {
  const dispatch = useDispatch();
  const { loading, members } = useSelector((state) => state.members);
  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);
  return (
    <div className="relative w-full uppercase overflow-clip font-description ">
      <div className="w-full h-screen opacity-5">
        <img
          src={membersBackground}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="absolute top-0 w-full h-full px-20 py-10 font-description">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-5 text-xl text-red">
              <hr className="w-80 border-[1px]" />
              <p>members</p>
              <hr className="w-80 border-[1px]" />
            </div>
            <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-3xl md:text-5xl xl:text-8xl tracking-wide">
              flamengnawa members
            </p>
          </div>
          {members.length === 0 ? (
            <div className="flex justify-center items-center h-2/3 text-3xl md:text-5xl lg:text-8xl">Coming Soon!</div>
          ) : (
            <MemberHeroContainer members={members} />
          )}
        </div>
      )}
    </div>
  );
}
