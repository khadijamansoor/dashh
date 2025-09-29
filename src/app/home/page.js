import Header from '../components/Header/Header'

import Showcase from './components/Showcase/Showcase'
import MoreLikeThis from './components/MoreLikeThis/MoreLikeThis'


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
