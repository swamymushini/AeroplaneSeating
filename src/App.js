import React, {useState} from "react"
import "./App.css"
import SeatMatrix from "./components/SeatMatrix"
import  axios from 'axios';

const App = () => {

	
	const [seatMat, setseatMat] = useState(null)
	const [arrangement, setarrangement] = useState(null)
	const [passCnt, setpassCnt] = useState(null)


	const setSeats = (event) => {
		var dims = document.getElementById("layout");
		var totalPass = document.getElementById("totalPass");
		setpassCnt(totalPass.value)
		appendData(dims.value,totalPass.value)
		setseatMat(dims.value)
		
    }

	const appendData = (seatMat,passCnt) => {

		if(!seatMat||!passCnt){
			alert("invalid input");
			return;
		}
		var array =[]
		try {
			 array = JSON.parse(seatMat);
			
		} catch (error) {
			alert("invalid input");
			return;
		}  

		let headers = new Headers();
	
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
	
		const ret = { 
			"seatAllignment" : array,
			"totPassengers" : passCnt
			}
			console.log(ret);
		axios.post("http://seating-env.eba-ssqdfivk.us-east-2.elasticbeanstalk.com/",ret,headers)
		  .then(res => {
			  if(res.data!=null){   
			setarrangement(res.data)}
		  })
	
	  }
	
	return (
		<div className="main">
			<SeatMatrix seatMat={seatMat} arrangement={arrangement} />
			<div  className="elem" >
			<div  className="elem" >		
				<input id="layout" type="text" placeholder = "Enter seats Allignment" 
				/>
				<input id="totalPass" type="text" placeholder = " Total Passengers"  />
			</div>

			<div  className="elem" >
			<input type="submit" onClick={setSeats} />
				</div>
				</div>
		</div>			
	)
}

export default App
