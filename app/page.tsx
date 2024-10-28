
import { Image } from 'next/image';
import { Logo } from '../assets/logo.svg';
import { LandingImg } from '../assets/main.svg';
import { Button } from '@/components/ui/button';
import { Link } from 'next/link';
import { Camera } from 'lucide-react';

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Button>default button</Button>
<Button variant='outline' size='icon'>
<Camera />
</Button>
    </div>
  );
}  