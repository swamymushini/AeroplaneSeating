import Seat from './Seat'
import './styles/Seat.css'
import { useEffect } from 'react';


import React, { Component } from 'react';

class SeatMatrix extends Component{

    constructor(props){
        super(props)

        this.state = {
			seatMat:[],
			arrangement:[]
        }
    }



//[[3,2], [4,3], [2,3], [3,4]]
GenerateSeats(seatNumbers) {
	
	if(!seatNumbers){
		return;
	}
	var array =[]
	try {
		 array = JSON.parse(seatNumbers);
		
	} catch (error) {
		console.log("input error");
		return;
	}  
	
	let piv = 0;
	return (
		<div className="row">
			{
				
    array.map((seatNumber,index) => {
		
		if(index>0){
			piv = piv+array[index-1][0];
			
		}
		
	let col = new Array(seatNumber[0]).fill(1)
    let row = new Array(seatNumber[1]).fill(1)
	return (
			 <table className="tableStyle">
			 <tbody>
			{		
				row.map((r,rowind) => {	
					return( 
					<tr>
					{
						col.map((c,colindex)=>{

							
							let no = 0;
							if(this.props.arrangement!=null
								&&this.props.arrangement[rowind]!=null){
							 		no = this.props.arrangement[rowind][piv+colindex]
							}
							
							if(no==0){
								no = '';
							}
								let colr = "seat-red"
								if((index==0&&colindex ==0)||(colindex == col.length-1&&
									index==array.length-1)){								
									colr = "seat-green"
								}else if(colindex == col.length-1||colindex ==0){
									colr = "seat-blue"
								}

						
						return <td><Seat seatno={no} color={colr} />  </td>	
						}
						)
						
						}
					</tr>
						)
				})


			}
			 </tbody>
			</table>
		
	)

	
})		
	}
</div>

)}

render(){
	return (
		<div className="movie-complex">
	
			<div >
				<div >
					{ this.GenerateSeats(this.props.seatMat)}
				</div>
			</div>
		</div>
	)}
}




export default SeatMatrix
