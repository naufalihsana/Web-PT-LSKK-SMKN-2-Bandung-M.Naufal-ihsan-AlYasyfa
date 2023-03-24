import lskk from '../assets/logodeal.png'
import React from 'react';
import '../css/tentang.css'
import grup from '../assets/lskkgp.jpg'
import orang from '../assets/orang.jpg'
import orang2 from '../assets/orang2.jpg'
import orang3 from '../assets/orang3.jpg'
import orang4 from '../assets/orang4.jpg'
import orang5 from '../assets/orang5.png'
import orang6 from '../assets/orang6.jpg'
import orang7 from '../assets/orang7.jpg'
import orang8 from '../assets/orang8.jpg'
import orang9 from '../assets/orang9.jpg'
import orang10 from '../assets/orang10.jpg'
import orang11 from '../assets/orang11.jpg'





function Tentang() {
    return(
        <>
    <div className='tentang pt-12 pl-16 text-white text-[50px]'>
        <h1 className='text-center mt-[140px] '>tentang kami</h1>
        <h1 className='text-center text-[15px]'>Beberapa hal mengenai PT. LSKK</h1>
    </div>


    <div className='profil mt-10 pt-[80px]'>
        <div className="profiltentang_11">
        <img src={grup}  className='ml-30' alt="" height={200} width={400}/>
            <div className="kataa1">
            <h2 className='ml-4 pb-4 text-black'>PT. Langgeng Sejahtera Kreasi Komputasi</h2>
                <p className="kataa2 pb-2">
                Keahliah PT.LSKK dalam bidang Cyber-Physical System (CPS), integration between electromechanical system, advanced instrumentation and Information & Communication Technology yaitu Internet of Things, Big Data Analytic, Pemrosesan Sinyal Digital & Kecerdasan Buatan. Portofolio produk PT.LSKK terdiri dari produk pertahanan dan sipil yang sebagian telah digunakan dan disertifikasi di tingkat nasional
                </p>

                <p>
                Perusahaan ini didirikan sebagai wahana untuk ikut serta dalam memajukan industri teknologi dalam negeri agar dapat bersaing secara global. PT.LSKK didukung oleh sdm yang berkualitas yang masing-masing memiliki pengalaman beranekaragam didunia industri.
                </p>
            </div>
        </div>
    </div>

    <div className='judultim'>
        <h1 className='pt-7'>TIM KAMI</h1>
    </div>

<div className='pb-5'>
    <div className="maincard">
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang}/>
            </div>
            <div class="caption">
                <h3>Ferlin ashadi</h3>
                <p></p>
            </div>
        </div>
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang2}/>
            </div>
            <div class="caption">
                <h3>Ach. Maulana Habibi Yusuf</h3>
                <p></p>
            </div>
        </div>
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang3}/>
            </div>
            <div class="caption">
                <h3>M. Fahmi Nurfadilah</h3>
                <p></p>
            </div>
        </div>
  </div>
  <div className="maincard">
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang4}/>
            </div>
            <div class="caption">
                <h3>Nurman Hairyanto</h3>
                <p></p>
            </div>
        </div>
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang5}/>
            </div>
            <div class="caption">
                <h3>Asep Trisna Setiawan</h3>
                <p></p>
            </div>
        </div>
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang6}/>
            </div>
            <div class="caption">
                <h3>Adnan Darwantol</h3>
                <p></p>
            </div>
        </div>  
  </div>
  <div className="maincard">
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang7}/>
            </div>
            <div class="caption">
                <h3>Sintia Rahmawati</h3>
                <p></p>
            </div>
        </div>
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang8}/>
            </div>
            <div class="caption">
                <h3>Afanin Ryandana</h3>
                <p></p>
            </div>
        </div>
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang9}/>
            </div>
            <div class="caption">
                <h3>Faiza Kailani Kuswanto</h3>
                <p></p>
            </div>
        </div>
  </div>
  <div className="maincard">
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang10}/>
            </div>
            <div class="caption">
                <h3>Agung Yusuf Wibowo</h3>
                <p></p>
            </div>
        </div>
       
        <div className="profile-card">
            <div class="imgtim">
                <img src={orang11}/>
            </div>
            <div class="caption">
                <h3>Muhammad Rizki Fahreza</h3>
                <p></p>
            </div>
        </div>
  </div>
</div>

<div className='judultim'>
    <h1>VISI DAN MISI</h1>
</div>


<div className="container  px-20 w-[90%] ml-[80PX] flex flex-row justify-center">
  <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2 pt-0 pb-10 lg:pt-10 lg:pb-20"
      style={{ cursor: "auto" }}
    >
      <div className="p-6 bg-gray-100 rounded-lg">
        <div className="mb-5">
          <svg
            className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-2 ">VISI</h3>
        <p className="text-sm leading-6 text-gray-600">
        Menjadi perusahaan penyedia sistem berbasis teknologi canggih yang dapat diandalka
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg">
        <div className="mb-5">
          <svg
            className="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-2">MISI</h3>
        <p className="text-sm leading-6 text-gray-600">
        1. Memberikan sistem yang cukup baik bagi pengguna untuk berhasil menjalankan misi merek
        </p>
        <p className="text-sm leading-6 text-gray-600">
        2. Menjadi wahana bagi penerapan kepakaran di bidang teknik secara professional untuk meningkatkan daya saing global dan kesejahteraan Bangsa Indonesia
        </p>
      </div>
    </div>
  </div>
</div>




    
  
  </>

    );
}

export default Tentang;