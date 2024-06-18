'use client'
import Image from "next/image";
import React from "react";


type UserCardType = {
  user_name: string;
  user_id: string;
  avatar_url: string;
};

const UserCard = ({ user_name, user_id, avatar_url }: UserCardType) => {
  return (
    <div className="grid rounded-xl px-4 py-2">
      <Image src={avatar_url} alt="user image" />
      <span>{user_name}</span>
      <span>{user_id}</span>
    </div>
  );
};

export default UserCard;
