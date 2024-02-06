import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-gray-900 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h2 className='font-bold text-2xl p-4 tracking-wider'>
            Next<span className='font-normal uppercase'>App</span>
          </h2>
        </Link>
        <nav className='flex'>
          <Link className='block p-4 hover:bg-gray-800' href='/'>
            Home
          </Link>
          <Link className='block p-4 hover:bg-gray-800' href='/about'>
            About
          </Link>
          <Link className='block p-4 hover:bg-gray-800' href='/receptai'>
            Receptai
          </Link>
        </nav>
      </div>
    </header>
  );
}
