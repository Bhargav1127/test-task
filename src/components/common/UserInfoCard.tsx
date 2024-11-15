import UserImage from "@/assets/images/Person.png";

type UserInfoCardProps = {
  name: string;
  role: string;
};
const UserInfoCard = ({ name, role }: UserInfoCardProps) => {
  return (
    <div className="py-4 px-6 bg-secondary_background rounded-2xl w-[247px] hidden md:flex gap-4 items-center">
      <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden">
        <img
          src={UserImage}
          alt="User profile photo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full">
        <h2 className="font-bold">{name}</h2>
        <p className="text-muted text-xs">{role}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
