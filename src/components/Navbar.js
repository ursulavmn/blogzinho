import { NavLink } from "react-router-dom"

// css 
import styles from './Navbar.module.css'


const navbar = () => {
  return (
    <nav className={styles.navbar}  >
      <NavLink to="/" className={styles.brand}  >
        <span>Blogzinho</span>
      </NavLink>
      <ul className={styles.link_list}   >
      <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active:"")}>Home</NavLink>
      </li>
      <li>
          <NavLink to="/login" className={({isActive}) => (isActive ? styles.active:"")}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({isActive}) => (isActive ? styles.active:"")}>cadastrar</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active:"")}>Sobre</NavLink>
        </li>
        
      </ul>
    </nav> 
  )
}

export default navbar