import "../App.css"
import Button from "@mui/material/Button";
import {Link} from "react-router-dom"
function Card({profile,title,price,username,location,description,status,isOnline,index}){
return (
    <>
    <div className="card">
          <div className="card-header">
            <img src={profile} alt="profile" height="100" width="100"/>
            <Link to={`/cards/${index}`} className="noStyle"><h1 className="card-title">{title}</h1></Link>
            <h4 className="card-price">{price}</h4>
          </div>
          <div className="card-body">
            <h2 className="card-username">{username}</h2>
            <h3 className="card-location"><i className="fas fa-map-marker-alt"></i>{location}</h3>
            <h3 className="card-description">{description}</h3>
            <div className="btns">
              <Button  variant="outlined" className="btn-outline">VIEW CV</Button>
              <Button variant="contained" className="btn-filled">MAKE OFFER</Button>
            </div>
            <p className="card-status">
              {isOnline?(<>
                <span className="dot"></span>
                Online
              </>)
              :(status)}
            </p>
          </div>
        </div> 
    </>
)
}
export default Card;