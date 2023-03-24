import logo from '../assets/itbban.png'
import logo1 from '../assets/pptikitb.png'
import logo2 from '../assets/binari.png'
import logo3 from '../assets/pptikid.png'



function Service() {
    return(
    <>
    <div className='tentang pt-12 text-white text-[50px]'>
        <h1 className='text-center mt-[140px] '>Layanan</h1>
        <h1 className='text-center text-[15px]'>Layanan yang kami sediakan</h1>
    </div>



<div className="flex items-center justify-center mt-36 mb-16">
  <div className="  grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    {/* 1 card */}
    <div className="relative bg-white py-6 px-6 rounded-3xl w-[400px] my-4 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
        {/* svg  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">App Development</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          <p>Tim pengembangan kami adalah platform spesialis yang tidak takut menemukan solusi terbaik untuk setiap kebutuhan bisnis.</p>
        </div>
      </div>
    </div>


    {/* 2 card */}
    <div className="relative bg-white py-6 px-6 rounded-3xl w-[400px] my-4 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
        {/* svg  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">Software and Hardware</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          {/* svg  */}
          
          <p>Merupakan layanan perusahaan untuk menyediakan solusi di bidang pengadaan hardware seperti laptop (notebook & netbook) dengan berbagai merk, PC (Personal Computer), monitor, printer, LCD Projector, mesin absensi (fingerprint, face detector, proximity, dll), dan lain sebagainya.</p>
        </div>

      </div>
    </div>

    
    {/* 3 card */}
    <div className="relative bg-white py-6 px-6 rounded-3xl w-[400px] my-4 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
        {/* svg  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">Business Analytic</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          {/* svg  */}
          <p>Analisis bisnis mengacu pada keterampilan, teknologi, dan praktik untuk eksplorasi dan penyelidikan berulang yang berkelanjutan dari kinerja bisnis masa lalu untuk mendapatkan wawasan dan mendorong perencanaan bisnis</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="mitrabg">
  <div className='judulmitra ml-36'>
      <h1 className='pt-14  '>Mitra kami</h1>
      <p className="text-gray-400 text-[15px] w-[50%]">Kami telah bekerja sama dengan universitas nasional terpercaya yang terbaik di bidangnya.</p>
  </div>
</div>

<div>
    <div className='profilmitra pt-16 mb-0'>
        <div className="profiltentang_2">
        <img src={logo}  className='' alt="" height={100} width={150}/>
            <div className="pl-6 katamitra">
            <h2 className=' text-[20px] text-black pb-2'>Institut Teknologi Bandung</h2>
                <p className="katamitra border-t border-b p-0 text-gray-400 py-2">
                Institut Teknologi Bandung (disingkat ITB, aksara Sunda: ᮄᮔ᮪ᮞ᮪ᮒᮤᮒᮥᮒ᮪ ᮒᮦᮊ᮪ᮔᮧᮜᮧᮌᮤ ᮘᮔ᮪ᮓᮥᮀ) adalah sebuah perguruan tinggi negeri yang berkedudukan di Kota Bandung. 
                </p>
                <a href="https://www.itb.ac.id"><p className='text-blue-600 pt-4'>https://www.itb.ac.id</p></a>
            </div>
        </div>  
    </div>

    <div className='profilmitra'>
        <div className="profiltentang_2">
        <img src={logo1}  className='' alt="" height={100} width={150}/>
            <div className="pl-6 katamitra">
            <h2 className=' text-[20px] text-black pb-2'>PPTIK ITB</h2>
                <p className="katamitra border-t border-b p-0 text-gray-400 py-2">
                Pusat Penelitian Teknologi Informasi dan Komunikasi adalah salah satu pusat penelitian utama yang terdapat di ITB yang dibangun dengan tujuan agar masyarakat dapat memanfaatkan penyebaran TIK yang secara global telah meluas.  
                </p>
                <a href="https://pptik.itb.ac.id/"><p className='text-blue-600 pt-4'>https://pptik.itb.ac.id/</p></a>
            </div>
        </div>  
    </div>

    <div className='profilmitra'>
        <div className="profiltentang_2">
        <img src={logo2}  className='' alt="" height={100} width={150}/>
            <div className="pl-6 katamitra">
            <h2 className=' text-[20px] text-black pb-2'>Binari</h2>
                <p className="katamitra border-t border-b p-0 text-gray-400 py-2">
                Binari adalah Inkubator startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology"
                </p>
                <a href="http://binari.lskk.co.id/"><p className='text-blue-600 pt-4'>binari.lskk.co.id</p></a>
            </div>
        </div>  
    </div>

    <div className='profilmitra'>
        <div className="profiltentang_2">
        <img src={logo3}  className='' alt="" height={30} width={150}/>
            <div className="pl-6 katamitra">
            <h2 className=' text-[20px] text-black pb-2'>PPTIK ID</h2>
                <p className="katamitra border-t border-b p-0 text-gray-400 py-2">
                Institut Teknologi Bandung (disingkat ITB, aksara Sunda: ᮄᮔ᮪ᮞ᮪ᮒᮤᮒᮥᮒ᮪ ᮒᮦᮊ᮪ᮔᮧᮜᮧᮌᮤ ᮘᮔ᮪ᮓᮥᮀ) adalah sebuah perguruan tinggi negeri yang berkedudukan di Kota Bandung. 
                </p>
                <a href="https://www.itb.ac.id"><p className='text-blue-600 pt-4'>https://www.itb.ac.id</p></a>
            </div>
        </div>  
    </div>
</div>




    </>
    );
}

export default Service;