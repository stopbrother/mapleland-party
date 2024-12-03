'use client';
import { Button } from './ui/button';
import { signInWithDiscord } from '@/app/auth/auth';

const LoginButton = () => {
  return <Button onClick={signInWithDiscord}>로그인</Button>;
};

export default LoginButton;
