import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserAvatar({
  name,
  image,
  className,
}: {
  name: string;
  image: string;
  className?: string;
}) {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
