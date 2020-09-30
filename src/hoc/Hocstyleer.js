import React from 'react';

const Hocstyleer=(Wrappercomponent)=>{

    const colorarray = ['prink','yellow','green'];
    const color=colorarray[Math.floor(Math.random()*5)];
    const classname=color+'-text';
    console.log(classname)
    return (props)=>{
        return (
            <div className={classname}>
                <Wrappercomponent {...props}/>
            </div>
        )
    }
}

export default Hocstyleer;