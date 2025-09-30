import Header from '@/app/components/Header/header.jsx'

import MoreLikeThis from '@/app/home/components/MoreLikeThis/MoreLikeThis'
import Showcase from '@/app/home/components/showcase/Showcase'


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
