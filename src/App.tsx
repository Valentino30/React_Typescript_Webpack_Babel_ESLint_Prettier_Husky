import './styles.css'

import logo from './assets/webpack-logo.svg'
import image from './assets/webpack-logo.jpeg'
import Counter from './components/Counter'

export default function App() {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img src={logo} alt="webpack-logo" width={50} height={50} />
        <h1>{`Welcome to Webpack by ${process.env.author}: "${process.env.NODE_ENV}"`}</h1>
        <img src={image} alt="webpack-image" width={50} height={50} />
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Counter />
      </div>
    </div>
  )
}
