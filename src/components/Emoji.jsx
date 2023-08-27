import { useState } from "react";

function Emoji() {
    const [isHappy, setIsHappy] = useState(true);
    return (
        <div>
            <span role="img" aria-label="emoji">{isHappy ? '😀' : '😞'}</span>
            <button onClick={() => setIsHappy(!isHappy)}>Change Mood</button>
        </div>
    );
  }
  
  export default Emoji;