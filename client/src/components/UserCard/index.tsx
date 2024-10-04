import { User } from "@/state/api";
import Image from "next/image";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  const { profilePictureUrl, username, email } = user;
  
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {profilePictureUrl && (
        <Image
          src={`/p1.jpeg`}
          alt="profile picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div>
        <h3>{username}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
