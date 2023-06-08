import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import SignUp from '../../pages/SignUp/SignUp';
import Login from '../../pages/Login/Login';


const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} infinite>
                <Login isFlipped={isFlipped} setIsFlipped={setIsFlipped}> </Login>
                <SignUp isFlipped={isFlipped} setIsFlipped={setIsFlipped}></SignUp>
            </ReactCardFlip>
        </div>
    );
};

export default FlipCard;