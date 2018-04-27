import React from 'react';
import { Button } from 'semantic-ui-react'


const Buttons = (props)=>{
    return (
        <div className="center">

    <Button  icon='play'  
    onClick={props.playBtn} disabled={props.played} />

    <Button  icon='pause'
    onClick={props.pauseBtn} disabled={props.paused}/>

        </div>
    )
}


export default Buttons;