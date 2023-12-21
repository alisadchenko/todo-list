import { Pages } from '@/src/pages'

import { Providers } from './providers'
import './theme/styles/global/index.css'

function App() {
  return (
    <Providers>
      <Pages />
    </Providers>
  )
}

export default App
