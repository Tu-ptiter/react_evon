import React, {useState} from 'react';

function Toggle(){
    //1.enabling state: useState(init value)
    //2.initialize state: useState(false)
    //3.reading state: 
    //4.update state

    const [on, setOn]= useState(false);
    console.log(on);
    
    return <div className='toggle'></div>
}

export default Toggle;