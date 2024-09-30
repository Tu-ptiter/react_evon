import React from 'react';
import Cell from './Cell';
import './GameStyle.scss';
import { calculateWinner } from '../../helper';

const Board = (props) => {

    // console.log(props);
    // const show = () =>{
    //     console.log(props);
    //     const cells = [null,null,null,'o','x','x',null,null,null];
    // }
    return (
        <div className='game-boards'> 
            {props.cells
            .map((item,index)=>{
                return <Cell 
                key = {index} 
                value={item} 
                onClick={() => props.onClick(index)}
                className={item  === 'X' ? "is-x": item === 'O' ? "is-o": ""}
                ></Cell>;
            })}
        </div>
    );
};

export default Board;