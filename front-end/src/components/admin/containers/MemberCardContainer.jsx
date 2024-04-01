import React from "react";
import MembersCard from "../cards/MembersCard";

export default function MemberCardContainer({members}) {
  return (
    <tbody>
      {members.map(member=> <MembersCard member={member} key={member._id} />)}
    </tbody>
  );
}
