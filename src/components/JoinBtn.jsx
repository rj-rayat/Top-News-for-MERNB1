import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

export default function JoinBtn() {
  return (
    <div>
        <h3 className='font-bold text-xl'>Get in touch</h3>
        <div class="join join-vertical w-full mt-4">

            <button class="btn join-item w-full flex justify-start"><FaFacebook/>Facebook </button>
            <button class="btn join-item w-full flex justify-start"><BsTwitterX></BsTwitterX>Twitter</button>
            <button class="btn join-item w-full flex justify-start"><BsInstagram/>Instagram</button>
        </div>  
    </div>
  )
}
