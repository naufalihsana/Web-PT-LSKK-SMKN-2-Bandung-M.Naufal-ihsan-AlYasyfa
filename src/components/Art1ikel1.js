import alat from '../assets/smart water.jpg'

const Artkl = () => {
    return ( 
    <>
    <div className='tentang pt-12 pl-16 text-white text-[50px]'>
        <h1 className='text-center mt-[140px] '>Artikel</h1>
    </div>

    <div className='pt-32 pl-10 pb-16  ' >
        <div>
            <h1 className='pl-52 text-[35px]'>SMART WATERING</h1>
        </div>
        <div className="grid-cols-2 grid w-[40%] ml-52 gap-2">
          <img src={alat} alt=""  className="w-[100%]"/>
          <p className="w-[250%] text-justify text-[17px]"> 
          <span className='text-blue-900 font-bold text-[20px]'> Smart Watering </span> adalah prototipe 
                sistem perawatan tanaman secara otomatis, 
                dimana sistem monitoringnya dirancang 
                melalui Web Perancangan prototipe ini 
                dimaksudkan untuk membantu pengontrolan 
                sistem perawatan tanaman berjenis tomat pada 
                tingkat perorangan (personal user). 
                Harapannya, prototipe ini dapat 
                dikembangkan lagi untuk membantu 
                meningkatkan produktivitas para petani tomat 
                ataupun penggunaan yang lebih luas lagi pada 
                masa yang akan datang. Dipilihnya tanaman 
                tomat sebagai media ujicoba penelitian ini 
                didasari dari data yang dipero-
                
                </p>

                <p className="w-[355%] text-justify text-[17px]"> 
                -leh dari Kepala 
                Dinas Pangan, Tanaman Pangan, dan 
                Holtikultura (DPTPH), Ibrahim. (2017), 
                bahwa tomat lokal hanya mampu memberikan 
                sumbangsih sebesar 30%, dan sisanya 
                kebutuhan 70% didatangkan dari luar daerah, 
                hal ini disebabkan karena pengaruh harga 
                tomat yang sempat turun dan susahnya 
                membudidayakan tomat di daerah yang 
                bercuaca ekstrem, sehingga memengaruhi 
                minat petani lokal untuk menanam tomat.
                
                
                 Smart Watering merupakan solusi 
                untuk pengambilan tindakan yang tepat disaat 
                cuaca ekstrem dan mengurangi kesalahan 
                pada manusia (human error). Oleh sebab itu, 
                akan dibuat prototipe Smart Watering yang 
                dapat melakukan penyiraman secara otomatis 
                dengan melihat kondisi pada tanah sebagai 
                media tanamnya. Sebuah prototipe Smart 
                Watering berbasis IoT (Internet of Thing) 
                dengan menggunakan Web sebagai Graphic 
                User Interface (GUI) pada sistem monitoring, 
                dan menggunakan Raspberry 3+ sebagai 
                pemrosesan input kondisi dengan data kondisi 
                baik (ideal) tanaman, dimana hasil proses 
                tersebut dikirim melalui modul Raspberry ke 
                WebServer untuk ditampilkan pada sistem 
                monitoring dan sebagai tindakan output yang 
                akan dilakukan oleh Raspberry. Dengan 
                demikian diharapkan tanaman tomat akan 
                mendapatkan penyiraman secara proporsional, 
                serta menjadi sebuah acuan dalam 
                perkembangan teknologi di Indonesia 
                khususnya bagi petani tomat untuk 
                memudahkan pembudidayaan tomat dicuaca 
                yang ekstrem rumusan masalah sesuai latar 
                belakang yang telah diuraikan diatas. </p>         
        </div>  
    </div>





    <div className="mb-10">
  <div className="flex justify-center items-baseline flex-wrap">
    <div className="flex m-2">
      

      <button
        className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-200  
        bg-blue-100
        text-blue-700 
        border duration-200 ease-in-out 
        border-blue-600 transition"
      >
        <div className="flex leading-5">
          <a href="/artikel1" className='text-teal-700 '> 1</a>
          
        </div>
      </button>

      <button
        className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-200  
        bg-blue-100 
        text-blue-700 
        border duration-200 ease-in-out 
        border-blue-600 transition"
      >
        <div className="flex leading-5">
        <a href="/artikel2" className='text-blue-700 '> 2</a>
          
        </div>
      </button>

      <button
        className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-200  
        bg-blue-100
        text-blue-700 
        border duration-200 ease-in-out 
        border-blue-600 transition"
      >
        <div className="flex leading-5">
        <a href="/artikel3" className='text-teal-700 '> 3</a>
          
        </div>
      </button>




      <button
        className="text-base  rounded-l-none   hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
      >
        <div className="flex leading-5">
            <a href="/artikel2" className='text-gray-700'>
          Next</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right w-5 h-5 ml-1"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </button>
    </div>
  </div>
</div>



    </>
     );
}
 
export default Artkl;