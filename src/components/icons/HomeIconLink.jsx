import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function HomeIconLink() {
  return (
    <div className="about-link">
      <Link to="/">
        <FaHome size={40} />
      </Link>
    </div>
  )
}

export default HomeIconLink