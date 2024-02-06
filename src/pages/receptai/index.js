import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Receptai() {
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='text-5xl my-4 font-semibold'>Receptai</h1>
        <Link href={'/receptai/arhyvas'}>Arhyvas</Link>
      </div>
    </>
  );
}
