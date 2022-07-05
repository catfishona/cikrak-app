import react, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
export default class Modal extends Component{
    render(){
        let modalStyle={
            display : 'block',
            backgroundColor:'rgba(0,0,0,0.5)',
        }
        
        function success(){
          Swal.fire({
            title: 'Are you sure',
            text: "exchange with this voucher?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'succsess!',
                'Voucher Redeemed.',
                'success'
                
              ).then(function(){
                window.location=""
              })
            }
          })
      }
    
        return(
            <div className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full" style={modalStyle}>
            <div className="relative m-auto p-4 w-full max-w-lg h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h5 className="text-xl font-semibold text-gray-900 dark:text-white">Voucher Details</h5>
                  <button type="button" onClick={this.props.hide}><FontAwesomeIcon icon={faX} className="back cursor-pointer text-black fa-2x  float-left "/></button>
                </div>
                <div className="m-5 p-2">
                  <img src={this.props.image} className='rounded-xl'/>
                  <div className=' text-xs my-3'>
                  <p>{this.props.date}</p>
                  <h5 className='text-xl font-bold'>{this.props.voucher}</h5>
                  <h6 className='text-sky-700'><FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1 inline-block"/>{this.props.points}</h6>
                  
                  <button  onClick={success} className="absolute bottom-2 right-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">Reedem</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}