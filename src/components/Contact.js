import React, { useState } from 'react';
import axios, { Axios } from "axios"
import Swal from 'sweetalert2';


function Contact() {

  const [inputs, setInputs] = useState({})

      const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}));
      }
      const handleSubmit = (event) => {
          event.preventDefault();
      
          axios.post('http://localhost:80/lskk/user/save', inputs);
          console.log(inputs);
          Swal.fire({  
            title: 'Berhasil',  
            text: 'Pesan Terkirim',
            icon: 'success',
            timer: 1000,
          }); 
      }
    return(

      
    <>  
    <div className='tentang pt-12 text-white text-[50px]'>
        <h1 className='text-center mt-[140px] '>Hubungi</h1>
        <h1 className='text-center text-[15px]'>Tetap terhubung dengan kami</h1>
    </div>

<div className=" flex w-full min-h-screen justify-center items-center bg-white mt-20">
  <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  w-full max-w-[80%] p-8 sm:p-12  shadow-lg text-black overflow-hidden bg-gray rounded-xl">
    <div className="flex flex-col space-y-8 justify-between mb-32">
      <div>
        <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
        <p className="pt-2 text-gray-400 text-sm">
          For all your non-existant company needs Fake Corp are here to help, do
          not hesitate to contact us!
        </p>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="inline-flex space-x-2 items-center w-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a5b4fc"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>(022) 7351 6650</span>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a5b4fc"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>pt.lskk@gmail.com</span>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={68}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a5b4fc"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx={12} cy={10} r={3} />
          </svg>
          <span>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263 Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264 Indonesia</span>
        </div>
      </div>

      
    </div>

    <div className="relative">
      <div className="absolute z-0 w-40 h-40 bg-indigo-400 rounded-full -left-28 -bottom-16" />
      <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-[500px]">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label  className="text-sm">
              First Name
            </label>
            <input
            required onChange={handleChange}
            name='nama_depan'
              type="text"
              placeholder="first Name"
              className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
          <div>
            <label  className="text-sm">
              Last Name
            </label>
            <input
            required onChange={handleChange}
            name='nama_belakang'
              type="text"
              placeholder="last Name"
              className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
          <div>
            <label  className="text-sm">
              Email
            </label>
            <input
            required onChange={handleChange}
            name='email'
              type="email"
              placeholder="Your Email"
              className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
          <div>
            <label  className="text-sm"/>
             <select   required onChange={handleChange} placeholder="subject line" name="option" id="subject_input" className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300">
              <option disabled hidden selected >  saya memiliki proposal kerja sama </option>
              <option value='saya memiliki proposal kerja sama<'>saya memiliki proposal kerja sama</option>
              <option value='saya ingin berkolaborasi dengan PT LSKK'>saya ingin berkolaborasi dengan PT LSKK</option>
              <option value='saya ingin bergabung dengan PT LSKK'>saya ingin bergabung dengan PT LSKK</option>
              
             </select>
            
          </div>
          <div>
            <label  className="text-sm">
              Message
            </label>
            <textarea
            required onChange={handleChange}
              placeholder="Message"
              name='pesan'
              rows={4}
              className="resize-none ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
              defaultValue={""}
            />
          </div>
          <button className="inline-block self-end bg-indigo-600 font-bold rounded-lg px-6 py-4 uppercase text-sm text-white hover:bg-black">
              Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col items-center mt-10 mb-20">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6748222718834!2d107.62455901468964!3d-6.9294157949933615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e87f3af10001%3A0x30abc10f9f62e149!2sPT%20LSKK!5e0!3m2!1sid!2sid!4v1678756585398!5m2!1sid!2sid"
  width={1300}
  height={300}
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>


    </>  
    );
}

export default Contact;