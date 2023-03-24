import '../css/beranda.css'
import lskk from '../assets/logodeal.png'

function Beranda() {
    return(
    <>
    <div className='konten'> 
       <div className='pt-4 pl-16  text-white text-[50px]'>
         <h1 className='ml-16 mt-[180px]'>PT. Langgeng Sejahtera Kreasi Komputasi</h1>
         <button className="button_slide slide_down ml-16 mb-16 my-5 text-lg bg-transparent hover:bg-white font-semibold hover:text-slate-800 py-2 px-2 border-white border-2 hover:border-transparent rounded">
            <a href="">  Download PDF Company Profile PT.LSKK</a>
         </button>
       </div>
    </div>
    <div className='konten2'> 
        <div className='pt-4 pl-16  text-white text-[30px] flex items-center justify-between'>
            <div>
                <h1 className='ml-16 mt-[140px] text-black'>TENTANG KAMI</h1>
                <p className='text-black ml-16 text-[18px] text-justify w-[450px] '>PT. Langgeng Sejahtera Kreasi Komputasi (PT.LSKK) merupakan perusahaan yang berkedudukan di Bandung yang didirikan pada tahun 2016. Berawal dari sebuah grup yang dimulai pada tahun 2008 sebagai subkontraktor Industri Pertahanan dan TI.</p>
            </div>
            <div className='mr-[200px] mt-[150px]'>
                <img src={lskk} alt="" width={600}/>
            </div>
        </div>
    </div>
 </>
    );
}

export default Beranda;