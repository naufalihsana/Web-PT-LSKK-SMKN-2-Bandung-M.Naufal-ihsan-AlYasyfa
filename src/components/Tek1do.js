import alat from '../assets/smart water.jpg'
import alat2 from '../assets/alat2.png'
import alat3 from '../assets/alat3.jpg'
import alat4 from '../assets/alat4.jpeg'
import alat5 from '../assets/alat5.png'
import alat6 from '../assets/alat6.jpg'
import alat7 from '../assets/alat7.jpg'
import alat8 from '../assets/alat8.jpg'
import alat9 from '../assets/alat9.jpg'
import alat10 from '../assets/alat10.jpg'
import alat11 from '../assets/alat11.png'
import alat12 from '../assets/alat12.png'
import alat13 from '../assets/alat13.png'
import alat14 from '../assets/alat14.png'
import alat15 from '../assets/alat15.png'
import '../css/beranda.css'
import { Link } from 'react-router-dom'

function Tekdo() {
    

    
    return(
    <>
   <div className='tentang pt-12 pl-16 text-white text-[50px]'>
        <h1 className='text-center mt-[140px] '>TeKido</h1>
    </div>

<div>
    <div class=" flex justify-center pt-10">
        <div class="inline-flex shadow-sm rounded-md mb-5 h-[40px]" role="group">
            <button type="button" class="rounded-l-lg border border-gray-200 bg-white text-sm font-medium  text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 px-1">

             <Link to="/tekido" className='rounded-l-lg  text-sm font-medium px-2 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>SEMUA PRODUCT</Link>

            </button>

            <button type="button" class="border border-gray-200 bg-white text-sm font-medium  text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 px-2">

             <Link to="/tekido2" className=' text-sm font-medium px-2 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>IOT ALAT PERAGA</Link>

            </button>

            <button type="button" class=" border border-gray-200 bg-white text-sm font-medium  text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 px-2">

             <Link to="/tekido3" className=' text-sm font-medium px-2 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>IOT WORKSHOP KIT</Link>

            </button>

            <button type="button" class="rounded-r-lg border border-gray-200 bg-white text-sm font-medium  text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                
             <Link to="/tekido4" className=' text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>IOT STATER KIT</Link>
            </button>
        </div>    
    </div>        
</div>

<div className='pb-[150px] pt-4 text-center'>
    <div className=" flex items-center justify-center pt-10 gap-10 ">
    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel1">
        <img
        src={alat}
        className="rounded-t-lg "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
                lot alat peraga
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        SMART WATERING
        </p>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel2"><img
        src={alat2}
        className="rounded-t "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
                lot starter kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        HOME AUTO LAMP
        </p>
        </div>
    </div>

        <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel3"><img
        src={alat3}
        className="rounded-t-lg "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
                IoT alat peraga
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        HOME AUTO
        </p>
        </div>
    </div>
    </div>

    <div className=" flex items-center justify-center pt-20 gap-10">
    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel4">
        <img
        src={alat4}
        className="rounded-t-lg "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Workshop Kit

            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        ENVIROMENTAL SENSOR
        </p>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel5"><img
        src={alat5}
        className="rounded-t "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Stater Kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        HOME AUTO STECKER
        </p>
        </div>
    </div>

        <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel6"><img
        src={alat6} 
        className="rounded-t " 
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
                Iot alat peraga
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        SMART PJU
        </p>
        </div>
    </div>
    </div>

    <div className=" flex items-center justify-center pt-20 gap-10">
    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel7"><img
        src={alat7}
        className="rounded-t-lg "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            Iot Alat Peraga
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        SMART PARKING
        </p>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel8"><img
        src={alat8}
        className="rounded-t "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Workshop Kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        HOME AUTOMATION
        </p>
        </div>
    </div>

        <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel9"><img
        src={alat9} 
        className="rounded-t-lg "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Workshop Kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        SMART WATERING
        </p>
        </div>
    </div>
    </div>

    <div className=" flex items-center justify-center pt-20 gap-10 ">
    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel10"><img
        src={alat10}
        className="rounded-t-lg "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Workshop Kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        SMARTCARD SAGA
        </p>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel11"><img
        src={alat11}
        className="rounded-t "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
                lot starter kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        SOIL MOISTURE
        </p>
        </div>
    </div>

        <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel12"><img
        src={alat12}
        className="rounded-t-lg "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Stater Kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        WATER FLOW SMART WATERING
        </p>
        </div>
    </div>
    </div>
    <div className=" flex items-center justify-center pt-20 gap-10 ">
    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel13"><img
        src={alat13}
        className="rounded-t-lg "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Stater Kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        WATER LEVEL FLOAT
        </p>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel14"><img
        src={alat14}
        className="rounded-t "
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Stater Kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        HOME AUTO WATER PUMP
        </p>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg  w-[25%] zoom">
        <a href="/artikel15"><img
        src={alat14}
        className="rounded-t object-fit: cover;"
        /></a>
        <div className="p-6">
            <h2 className="font-bold mb-2 text-[14px] text-black ">
            IoT Stater Kit
            </h2>
        <p className="text-gray-600 mb-2 text-[15px]">
        HOME AUTO WATERING RELAY
        </p>
        </div>
    </div>

     
    </div>
</div>











</>
    );
}

export default Tekdo;