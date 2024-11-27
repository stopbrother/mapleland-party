import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="w-full sticky top-0 bg-[#588157]">
      <div className="max-w-[1200px] w- h-[60px] flex justify-between items-center mx-auto">
        <nav className="space-x-6 text-[#333333] font-bold">
          <Link href={'/'} className="hover:text-[#E63946]">
            홈
          </Link>
          <Link href={'/'} className="hover:text-[#E63946]">
            파티찾기
          </Link>
          <Link href={'/'} className="hover:text-[#E63946]">
            내 모집글
          </Link>
        </nav>
        <div className="space-x-6">
          <Button className="bg-[#FFD700] text-[#333333] font-bold w-[120px] h-[40px]">
            구인 하기
          </Button>
          <Button>로그인</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
