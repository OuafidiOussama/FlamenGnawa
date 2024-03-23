import React from "react";
import Card from "../../components/admin/cards/Card";

export default function Dashboard() {
  return (
    <div className="px-10 py-5 h-full">
      <div className="bg-border/20 h-full rounded-xl overflow-clip p-3">
        <div className="border-b-4 border-border pb-2 flex justify-between">
          <p className="font-bold text-4xl capitalize">Dashboard</p>
        </div>
        <div className="flex justify-between p-2 pb-5">
          <Card

            bg="bg-dark-purple/70"
            circleB="bg-dark-purple"
            circleS="bg-dark-purple/50"
            income="500"
            label="Products"
            icon="mdi:cart"
          />
          <Card
            bg="bg-pink/70"
            circleB="bg-pink"
            circleS="bg-pink/50"
            income="10"
            label="articles"
            icon="dashicons:welcome-write-blog"
          />
          <Card
            bg="bg-red/70"
            circleB="bg-red"
            circleS="bg-red/50"
            income="3"
            label="events"
            icon="mdi:events-check"
          />
          <Card
            bg="bg-purple/70"
            circleB="bg-purple"
            circleS="bg-purple/50"
            income="6"
            label="members"
            icon="ic:baseline-people"s
          />
        </div>
        <div className="w-full h-2/3 bg-black/10 rounded-xl">
          
        </div>
      </div>
    </div>
  );
}
