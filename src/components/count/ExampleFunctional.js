import React, {useState, useEffect} from 'react';



const ExampleFunctional = () => {
    const [cnt, setCnt] = useState(0);
    const [action, setAction] = useState('');

    useEffect(()=>{
        document.title =`you clicked ${cnt} times`;
        console.log('get user')
    }, [cnt])
    
    useEffect(()=>{
        fetch(`https://reqres.in/api/${action}`)
            .then(res => console.log({res}))
            .catch(err => console.log(err))
    },[action])

    return (
        <div>
            <pre>Functional Components</pre>
            <p>You clicked {cnt} times</p>
            <button onClick={() => setCnt(cnt+1)}>Click</button>

            <button onClick={() => setAction('get user')}>Get users</button>
            <button onClick={() => setAction('get comments')}>Get comments</button>  
        </div>
    );
};

export default ExampleFunctional;