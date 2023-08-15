import Head from 'next/head'
import { Header, Hero, Row } from '@/components'
import { GetServerSideProps } from 'next'
import { API_REQUEST } from '@/services/api.service'
import { IMovie } from '@/interfaces/app.interface';
import { maxHeaderSize } from 'http';


export default function Home({trending}: HomeProps): JSX.Element {

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
      <Hero trending={trending}/>
  }
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
export const getServerSideProps: GetServerSideProps<HomeProps> = async() => {
  const trending =  await fetch(API_REQUEST.trending).then (res => res.json())

  return {
    props:{
      trending: trending.results,
    }
  }
}
interface HomeProps {
  trending: IMovie[];
}
