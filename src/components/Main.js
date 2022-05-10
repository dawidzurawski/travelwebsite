import React from "react"
import { ImLocation2 } from 'react-icons/im'

export default function Main(props){
  return(
    <div>
      <div className="main--section">
        <img src={props.mainInfo.imageUrl}></img>
        <div className="main--info">
          <div className="location--info">
            <ImLocation2 color="#f55a5a"/>
            <a className="main--country" href = {props.mainInfo.googleMapsUrl} target="_blank">{props.mainInfo.location}</a>
            <a className="main--link" href = {props.mainInfo.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="main--title">{props.mainInfo.title}</h1>
          <p className="main--dates">{props.mainInfo.startDate} - {props.mainInfo.endDate}</p>
          <p>{props.mainInfo.description}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
