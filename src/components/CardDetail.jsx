import Data from "../data.json"
import { useParams } from "react-router-dom";
import "../App.css"
function CardDetail(){
    let {index} = useParams();
    let name = Data[index].username;
    let title = Data[index].title;
    let location = Data[index].location;
    let price = Data[index].price;
    let description = Data[index].description;
    return(
        <>
        <div className="aboutUser">
            <h1>Hello, This is {name}</h1>
            <p>{name} is a {title}. who works a lot at {location}, {name} charges 
                {price} but a worthy person in our platform by which we can save our lot of 
                time Basically, {description}.
                <br></br>
                So, atlast it is your decision to accept or reject his name for our project
                one more thing there is another option for you<br></br><br></br> i.e you can first go through the 
                CV of {name} before selecting that may give you better information about {name}.
            </p>
        </div>
        </>
    )
}
export default CardDetail;