import { useState, useEffect } from "react"; 
import cloud from "./cloud.png"; 
import sun from "./sun.png"; 
import rain from "./rain.png"; 
function Weathermood({ pic: selectedEmoji }) { 
  const [image, setImage] = useState(null); 
  const [count, setCount] = useState(0); 
 
  useEffect(() => { 
    const Weathermood = { 
      cloud, 
      sun, 
      rain, 
    }; 
 
    setImage(Weathermood[selectedEmoji] || null); 
  }, [selectedEmoji]); 
 
  const handleClick = () => { 
    setCount((prevCount) => prevCount + 1); 
  }; 
 
  return ( 
    <div className="App">  
      <p> 
        {selectedEmoji} 
        <button type="button" onClick={handleClick}> 
          {count} 
          <img src={image}
  alt={selectedEmoji}
  style={{
    width: "120px",
    height: "120px",
    objectFit: "contain"
  }}/> 
        </button> 
      </p> 
 
  <p>&nbsp;</p> 
    </div> 
  ); 
} 

export default Weathermood; 