
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import LandingImg from '../assets/main.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Camera } from 'lucide-react';

export default function Home() {
  return (
<main>
<header className="max-w-xl mx-auto px-4 sm:px-8 py-6">
<Image src={Logo} alt="logo" />
</header>
</main>
  );
}  