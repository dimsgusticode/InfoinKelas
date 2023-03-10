import Head from 'next/head'
import { BiPlus } from 'react-icons/bi';
import Table from '../components/table';
import Form from '../components/form';
import { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';

export default function CRUD() {

  const [visible,setVisible] = useState(false)

  const handler = () =>{
    setVisible(visible ? false : true)
  }

  return (
    <section>
      <Head>
        <title>InfoinKelas - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
          <div className='flex items-center justify-center border-b-2'>
            <ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <a href="../" className='aria-current="page"'>Home</a>
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
      <main className='py5'>
        <h1 className='text-xl md:text-3xl text-center font-bold py-10'>Infoin Kelas</h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className="left flex gap-3">
            <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'>
              Tambah Berita <span className='px-1'><BiPlus size={23}></BiPlus></span>
            </button>
          </div>
        </div>
        {/* collapsable form */}
            {visible ? <Form></Form> : <></>}
        {/* table */}
        <div className='container mx-auto'>
            <Table></Table>
        </div>
      </main>
    </section>
  )
}
