import { FaAngleUp } from 'react-icons/fa';
import './styles.css'
import { useState, useEffect } from 'react';

interface TopScrollerProps{
    clickHandler: () => void;
}

const TopScroller: React.FC<TopScrollerProps> = ({
    clickHandler
}) => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    
    return ( 
        <div className="top-to-btm">
            {
                showTopBtn &&
                <FaAngleUp className="icon-position icon-style" onClick={clickHandler}/>
            }
        </div>
     );
}
 
export default TopScroller;