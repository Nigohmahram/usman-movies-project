import { Header, Row } from '@/components'
import Head from 'next/head'


export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
    <Head>
      <title>Home - Usman</title>
      <meta name='description' content='Generated create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <Row/>
    <main>{
    /* Hero */}
    <section>
      {/* row */}
      {/* BigRow */}
      {/* row */}
      {/* BigRow */}
    </section>
    </main>
    </div>
  )
}
