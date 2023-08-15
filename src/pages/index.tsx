import Head from 'next/head'
import { Header, Row } from '@/components'


export default function Home() {
  return (
    <div className='relative h-[200vh]'>
    <Head>
      <title>Home - Usman</title>
      <meta name='description' content='Generated create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <link rel='icon' href='logo.svg'/>
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
