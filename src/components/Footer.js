import '../css/footer.css';
function Footer() {
    return(
<>
<footer className="footer-distributed ">
  <div className="footer-left">
    <p className="footer-links">
      <a className="link-1" href="/">
        Home
      </a>
      <a href="/Tentang">tentang</a>
      <a href="/Layanan">layanan</a>
      <a href="/tekido">tekido</a>
      <a href="/hubungi">Contact</a>
    </p>
    
    <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263
      Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264
      Indonesia</p>
    <p>Nomer Telpon (Kantor Utama): (022) 7351 6650</p>
    <p>Email: pt.lskk@gmail.com</p>  
    
  </div>
  
</footer>
  <div >
    <p className='copyright pt-4 pb-4 text-center text-white'>© Copyright PT. LSKK. All Rights Reserved</p>    
  </div>
  </>

      


);
}

export default Footer;