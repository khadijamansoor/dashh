import Header from '@/app/components/Header/header.jsx'

import MoreLikeThis from '@/app/home/components/MoreLikeThis/moreLikeThis.jsx'
import Showcase from '@/app/home/components/showcase/showcase.jsx'


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
      
        <Showcase /> 
        <MoreLikeThis />
        
      </main>
      
    </>
  )
}
