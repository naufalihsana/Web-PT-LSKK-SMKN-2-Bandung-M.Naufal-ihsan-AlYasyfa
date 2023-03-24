import alat3 from '../assets/alat3.jpg'

const Artkl3 = () => {
    return ( 
    <>
    <div className='tentang pt-12 pl-16 text-white text-[50px]'>
        <h1 className='text-center mt-[140px] '>Artikel</h1>
    </div>

    <div className='pt-32 pl-10 pb-16  ' >
        <div>
            <h1 className='pl-52 text-[35px]'>HOME AUTO </h1>
        </div>
        <div className="grid-cols-2 grid w-[40%] ml-52 gap-2">
          <img src={alat3} alt=""  className="w-[100%]"/>
                <p className="w-[250%] text-justify text-[17px]"> 
                <span className='text-blue-900 font-bold text-[20px]'> Home Auto </span> adalah otomatisasi bangunan untuk rumah, yang disebut rumah pintar. Sistem otomasi rumah akan memantau dan/atau mengontrol atribut rumah seperti pencahayaan, iklim, sistem hiburan, dan peralatan. Ini juga dapat mencakup keamanan rumah seperti kontrol akses dan sistem alarm. Saat terhubung dengan Internet, perangkat rumah merupakan konstituen penting dari Internet of Things ("IoT").
                
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
          <a href="/artikel2" className='text-gray-700'>
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
          <a href="/artikel3" className='text-teal-700 '> 3</a>
          
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
        <a href="" className='text-blue-700 '> 4</a>
          
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
        <a href="" className='text-teal-700 '> 5</a>
          
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
        <a href="/artikel4" className='text-gray-700'>
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
 
export default Artkl3;