import React from "react";
import ProfileLists from "./ProfileLists";

export default function ProfileLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProfileLists />
    </div>
  );
}
