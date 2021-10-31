import React, {useContext} from 'react'


import './styles/Seat.css'

const Seat = (props) => {
  
    const seatNumber = props.seatno
    const seatStatus = props.color

    return (
        <div >
            <div className={`seat seat-${seatNumber} ${seatStatus}`}>
                        {seatNumber}
            </div>     
        </div>
    )
}

export default Seat