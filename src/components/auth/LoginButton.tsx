'use client';
import { Button } from '../ui/button';
import { signInWithDiscord } from '@/app/auth/auth';

const LoginButton = () => {
  console.log('next_base_url', process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <Button
      onClick={signInWithDiscord}
      className="bg-[#588157] hover:bg-[#476947]"
    >
      로그인
    </Button>
  );
};

export default LoginButton;
