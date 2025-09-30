import Header from '../../components/Header/Header.jsx'

import Showcase from './components/Showcase/Showcase.jsx'
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
