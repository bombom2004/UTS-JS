import React from 'react';
import '../assets/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">WebsiteLogo</div>
      <nav>
        <a href="#beranda">Beranda</a>
        <a href="#produk">Produk</a>
        <a href="#tentang">Tentang</a>
      </nav>
      <p>&copy; Website Bisnis @ 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
