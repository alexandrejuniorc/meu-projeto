import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.itens}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.itens}>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li className={styles.itens}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
