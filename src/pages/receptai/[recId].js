import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

// /receptai/:recId

export default function SingleRecept() {
  const router = useRouter();
  console.log('router.query ===', router.query);
  const recId = router.query.recId;

  // gauti objekta su useEffect ir parsiusti cia
  // sugeneruoti html recepta

  console.log('recId ===', recId);
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='text-5xl my-4 font-semibold'>SingleRecept</h1>
      </div>
    </>
  );
}

// gauti objekta su getStaticProps
// export async function getStaticProps(context) {
//   console.log('context ===', context);

//   return {
//     props: {
//       item: '',
//     },
//   };
// }
