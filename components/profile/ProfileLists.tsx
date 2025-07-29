import { developers, Developer } from "@/app/data";
import React from "react";
import ProfileCard from "./ProfileCard";

export default function ProfileLists() {
  return (
    <>
      {developers.map((developer: Developer) => (
        <ProfileCard key={developer.id} developer={developer} />
      ))}
    </>
  );
}
