// src/components/Header.js
import React from 'react';
import '../assets/header.css';

function Header() {
  return (
    <header className='header' style={styles.header}>
      <h1 style={styles.title}>My React App</h1>
      <nav className='nav' style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
      <div className='btn-auth'>
        <button className='login' style={styles.login}>Login</button>
        <button className='register' style={styles.register}>Register</button>
      </div>
    </header>
  );
}

const styles = {
  login:{
    backgroundColor: 'blue',
    color: 'white',
    padding: '11px 20px',
    },
  title: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Header;
