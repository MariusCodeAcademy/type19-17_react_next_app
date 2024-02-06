import Header from '@/components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <>
      <Header />
      <div className='container bg-slate-200 p-10'>
        <h1 className='text-5xl my-4 font-semibold'>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus cumque officia
          officiis aspernatur debitis nostrum dignissimos fugiat tempora voluptatibus illo ratione
          repudiandae nihil, aliquid temporibus unde aliquam a aut? Animi placeat optio earum nemo
          asperiores dolores maiores suscipit doloremque ducimus saepe omnis nisi id, maxime
          perferendis accusantium repellat eos.
        </p>
      </div>
    </>
  );
}
