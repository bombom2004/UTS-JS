// src/components/Header.js
import React from 'react';
import '../assets/slide.css';
import image from '../assets/bom.jpeg'
function Slide() {
    return (
      <>
        <div className="slide">
            <div className="text">
            <h2 className='h2'>BOMBOM BAIK<br />SISTEM INFORMASI</h2>    
                <p className='p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque, at provident sit necessitatibus autem eius aperiam minima blanditiis illum nulla repellendus itaque minus similique eveniet architecto magni tempora expedita. Qui, a tenetur! Beatae veniam nobis omnis quos eaque, dignissimos expedita et quae obcaecati debitis accusantium eos officiis voluptas quidem nesciunt, impedit maiores accusamus! Omnis cumque soluta id dolorum corporis reprehenderit distinctio ipsa magnam quam! Obcaecati molestiae ullam aliquid aut facere vitae voluptatibus quo iusto quia, amet magni tenetur et alias unde quisquam ipsam ducimus sit repudiandae cupiditate dolore fugit rerum perspiciatis quibusdam! Minus dolor, odit enim aut molestiae ipsa!
                </p>
            <div className="btn">
                <button className='btn1'>Produk Kami</button>
                <button className='btn2'>Pesan Sekarang</button>
            </div>
            </div>
            <img classNameName='img' src={image} alt="" width={500} />
        </div>
      </>
    );
  }
  export default Slide