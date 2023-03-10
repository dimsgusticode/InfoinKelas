import Head from 'next/head'
import { BiLogIn } from 'react-icons/bi';

export default function Home() {

  return (
    <section>
      <Head>
        <title>InfoinKelas - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='py-5'>
        {/* navbar */}
        <nav>
          <div className='flex items-center justify-center border-b-2'>
            <ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <a href="" className='aria-current="page"'>Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="crud">CRUD</a>
              </li>
              <li>
                <a href=""><BiLogIn size={23}></BiLogIn></a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='mainPage py-5'>
          <div className='w-100 text-center border'>
            <h2 className='text-2xl'>Welcome</h2>
            <p>Description</p>
          </div>
        </div>
      </main>

    </section>
  )
}

{/* <h1 className='text-center'>
  <a href="crud">CRUD</a>
</h1> */}