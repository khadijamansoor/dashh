import Header from '../components/Header/header'

import Showcase from './components/MoreLikeThis/MoreLikeThis'
import MoreLikeThis from './components/showcase/Showcase'


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
