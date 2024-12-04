'use client';
import { signOut } from '@/app/auth/auth';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const UserDropdownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-[#588157] hover:bg-[#476947]">닉네임</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>프로필</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button onClick={signOut}>로그아웃</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownButton;
