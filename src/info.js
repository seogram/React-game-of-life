import React from 'react';
import { Statistic } from 'semantic-ui-react'


const Info = (props) => {
    return (
        <div className="center">

            <Statistic.Group>
                <Statistic color='green' size='mini'>
                    <Statistic.Value>{props.liveCell}</Statistic.Value>
                    <Statistic.Label>Live Cells</Statistic.Label>
                </Statistic>
                <Statistic color='orange' size='mini'>
                    <Statistic.Value> {props.deadCell}</Statistic.Value>
                    <Statistic.Label>Dead Cells</Statistic.Label>
                </Statistic>
            </Statistic.Group>

        </div>
    )
}


export default Info;