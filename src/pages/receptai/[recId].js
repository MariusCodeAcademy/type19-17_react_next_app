import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

// /receptai/:recId

export default function SingleRecept({ item }) {
  const router = useRouter();
  console.log('router.query ===', router.query);
  const recId = router.query.recId;
  console.log('item ===', item);
  // gauti objekta su useEffect ir parsiusti cia
  // sugeneruoti html recepta

  console.log('recId ===', recId);
  return (
    <>
      <Header />
      <div className='container'>
        <Image
          className='h-96 object-cover'
          width={500}
          height={500}
          src={item.image}
          alt={item.name}
        />
        {/* <img className='h-96' src={item.image} alt={item.name} /> */}
        <h1 className='text-5xl my-4 font-semibold'>{item.name}</h1>

        <h2>Ingrediantai</h2>
        <ul>
          {item.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
const rUrl = 'https://dummyjson.com/recipes';

// si funkcija sugeneruoja visas galimas recId reiksmes kaip specialu parameru masyva
export async function getStaticPaths() {
  function getData() {
    return fetch(rUrl)
      .then((resp) => resp.json())
      .then((atsObj) => {
        // console.log('atsObj ===', atsObj);
        return atsObj.recipes;
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  const allData = await getData();

  const paths = allData.map((rObj) => {
    return {
      params: {
        recId: rObj.id.toString(),
      },
    };
  });

  console.log('paths ===', paths);

  return {
    paths,
    fallback: false,
  };
}

// gauti objekta su getStaticProps
export async function getStaticProps(context) {
  console.log('context ===', context);
  console.log('context.params ===', context.params.recId);
  const recId = context.params.recId;

  function getData() {
    return fetch(rUrl + '/' + recId)
      .then((resp) => resp.json())
      .then((singleRObj) => {
        console.log('singleRObj ===', singleRObj);
        return singleRObj;
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  const currentObj = await getData();
  console.log('currentObj ===', currentObj);
  return {
    props: {
      item: currentObj,
    },
  };
}
