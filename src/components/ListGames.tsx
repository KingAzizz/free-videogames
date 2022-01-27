import { useEffect, useState } from "react";
import axios from "axios";
const ListGames = () => {
  const [games, setGames] = useState(Array);
  const [catgory, setGatgory] = useState("shooter");
  let catgoryGames = ["Shooter", "MMORPG", "Strategy",'Sandbox','Fighting','Social','MOBA','MMO','Card']; 
  useEffect(() => {

      const options: any = {
          method: "GET",
          url: "http://localhost:5000/catgory",
          params: { category: catgory },
        };
        
        axios
        .request(options)
        .then((response) => {
            setGames(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    },[catgory])
        
        
        return (
    <div>
    
    <div className="header">
        
        <h1>Free Games </h1>
      <select id="select-catgory"
       onChange={(e) => setGatgory(e.target.value)}
       >
        {catgoryGames.map((opt, index) => (
            <option key={index}>
            {opt}
          </option>
        ))}
      </select>
        </div>      
      <ul>
        {games.map((arr: any, index) => (
            
                <li className="game-card" key={index}>
              <img src={arr.thumbnail} alt="games thumbnail" style={{width:'402px'}} /> &nbsp;
            <a href={arr.game_url}>
              {arr.title}
            </a> 
          </li>
              
        ))}
      </ul>
        </div>
  
  );
};

export default ListGames;
