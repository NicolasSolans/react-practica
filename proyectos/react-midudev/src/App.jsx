import './App.css'
import CardTwFollow from './CardTwFollow'

const users = [
  {
    userName: 'nicosolans',
    name: 'Nicolas Solans',
    isFollowing: true,
    image: 'https://unavatar.io/nicosolans'
  },
  {
    userName: 'pepitoperez',
    name: 'Pepito Perez',
    isFollowing: false,
    image: 'https://unavatar.io/sindresorhus@gmail.com'
  },
  {
    userName: 'agusraparo',
    name: 'Agustin Raparo',
    isFollowing: true,
    image: 'https://unavatar.io/kikobeats'
  },
  {
    userName: 'solansdiego',
    name: 'Diego Solans',
    isFollowing: false,
  image: 'https://unavatar.io/reddit.com'
  }
]

function App() {
  return (
    <section>
      {users.map(({userName, name, isFollowing, image}) => (
        <CardTwFollow  
        userName={userName}
        name={name}
        image={image}
        isFollowing={isFollowing}
        />
      ))
      }
    </section>
   )
}

export default App
