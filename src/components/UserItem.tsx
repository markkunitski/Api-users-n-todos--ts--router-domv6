import React, { FC, PropsWithChildren, useState } from "react";
import { IUser } from "../types/types";

interface IUserItemProps {
  user: IUser;
  fakeClick: (user: IUser) => void;
}

const UserItem: FC<IUserItemProps> = ({ user, fakeClick }) => {
  return (
    <div
      onClick={() => fakeClick(user)}
      style={{ padding: "15px", border: "2px solid gray" }}
    >
      <a style={{textDecoration: 'underline', cursor: 'pointer'}}>
        {user.id}. {user.name} lives in a town {user.address.city} on a street{" "}
        {user.address.street}
      </a>
    </div>
  );
};

export default UserItem;
