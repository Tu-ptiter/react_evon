import React, {useState} from 'react';
import './toggle.scss';

function Toggle(){
    //1.enabling state: useState(init value)
    //2.initialize state: useState(false)
    //3.reading state: 
    //4.update state

    const [on, setOn]= useState(false);
    const handleToggle = () =>{
        setOn((on) => {
            return !on;
        });
    }

    
    return (
        <>
            <div className={`toggle ${on ? 'active': ''}`} onClick={handleToggle}>
                <div className={`spinner ${on ? 'active': ''}`}></div>
            </div>
            {/* <div className='toggle-control'>
                <div className='toggle-on' onClick={() => setOn(true)}>On</div>
                <div className='toggle-off' onClick={() => setOn(false)}>Off</div>
            </div> */}
        </>
    )
}

export default Toggle;