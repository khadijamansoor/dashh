import Header from '../components/Header/header'

import MoreLikeThis from './components/MoreLikeThis/MoreLikeThis'
import Showcase from './components/showcase/Showcase'


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
