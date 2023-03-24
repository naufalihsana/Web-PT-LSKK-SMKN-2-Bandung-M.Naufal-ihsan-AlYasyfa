import alat3 from '../assets/alat3.jpg'

const Artkl15 = () => {
    return ( 
    <>
    <div className='tentang pt-12 pl-16 text-white text-[50px]'>
        <h1 className='text-center mt-[140px] '>Artikel</h1>
    </div>

    <div className='pt-32 pl-10 pb-16  ' >
        <div>
            <h1 className='pl-52 text-[35px]'>HOME AUTO WATERING RELAY </h1>
        </div>
        <div className="grid-cols-2 grid w-[40%] ml-52 gap-2">
          <img src={alat3} alt=""  className="w-[100%]"/>
                <p className="w-[250%] text-justify text-[17px]"> 
                <span className='text-blue-900 font-bold text-[20px]'> Home Auto Watering Relay </span> adalah perangkat yang berfungsi untuk Proses penyiraman tanaman umumnya dilakukan secara manual berapapun volume air yang dibutuhkan oleh tanaman. Penelitian ulang ini membahas tentang prototipe otomatis dan sistem yang memiliki fungsi menyiram tanaman berdasarkan tingkat kelembaban tanah. Metode yang digunakan adalah prototyping yang disesuaikan dengan tujuan penelitian. Prototipe dan sistem dibangun dengan mikrokontroler, sensor kelembaban tanah, relay dan solenoid valve, yang terintegrasi dengan platform IoT aplikasi Blynk dan Thingspeak.
                
                </p>

                     
        </div>  
    </div>





    <div className="mb-10">
  <div className="flex justify-center items-baseline flex-wrap">
    <div className="flex m-2">
      <button
        className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-gray-200  
  bg-gray-100 
  text-gray-700 
  border duration-200 ease-in-out 
  border-gray-600 transition"
      >
        <div className="flex leading-5">
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
            className="feather feather-chevron-left w-5 h-5"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <a href="/artikel14" className='text-gray-700'>
          Back</a>
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
          <a href="/artikel13" className='text-teal-700 '> 13</a>
          
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
        <a href="/artikel14" className='text-blue-700 '> 14</a>
          
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
        <a href="/artikel15" className='text-teal-700 '> 15</a>
          
        </div>
      </button>



    </div>
  </div>
</div>



    </>
     );
}
 
export default Artkl15;