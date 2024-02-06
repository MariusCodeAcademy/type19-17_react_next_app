import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const rUrl = 'https://dummyjson.com/recipes';

export default function Receptai() {
  const [mainArr, setMainArr] = useState([]);
  console.log('mainArr ===', mainArr);

  useEffect(() => {
    fetch(rUrl)
      .then((resp) => resp.json())
      .then((atsObj) => {
        console.log('atsObj ===', atsObj);
        setMainArr(atsObj.recipes);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  // parsiusti receptus is dummy json
  // console log
  // sugeneruoti saraso ar korteliu pav
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='text-5xl my-4 font-semibold'>Receptai</h1>
        <Link href={'/receptai/arhyvas'}>Arhyvas</Link>

        <ul>
          {mainArr.map((rObj) => (
            <li key={rObj.id} className='border px-3 py-1 text-lg'>
              <span className='font-semibold'>{rObj.name}</span> -{' '}
              <span className='text-slate-500'>dificulty:</span> {rObj.difficulty}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
