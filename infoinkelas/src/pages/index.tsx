import Head from 'next/head'
import styles from '@component/styles/Home.module.css'

export default function Home() {
  return (
    <section>
      <Head>
        <title>InfoinKelas - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='py5'>
        <h1 className='text-xl md:text-3xl text-center font-bold py-10'>Infoin Kelas</h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className="left flex gap-3">
            <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'>
              Tambah Berita
            </button>
          </div>

          {/* collapsable form */}

          {/* table */}

        </div>
      </main>
    </section>
  )
}
