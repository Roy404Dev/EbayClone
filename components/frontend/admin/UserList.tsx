import { createClient } from "@/utils/supabase/server/server";
import { cookies } from "next/headers";
import React from "react";
import UserCard from "./UserCard";

const UserList = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: users, error } = await supabase.from("users").select();
  console.log(users);
  return (
    <>
      <div>UserList</div>
      {users &&
        users?.map((user) => (
          <UserCard
            user_name={user.name || ""}
            avatar_url={user.image || ""}
            user_id={user.id}
            key={user.id}
          />
        ))}
    </>
  );
};

export default UserList;
