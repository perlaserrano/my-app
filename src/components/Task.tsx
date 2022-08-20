import React from "react";
import ITask from "../interface/lista.interface";

interface Iprops {
    item: ITask
}

const Task = (props: Iprops) => {
    return(
  
        <div className="container-task">
            <div className="header-task">
                <div className="title-user">
                    <div className="name-container-task">
                        <p className="name-task">{props.item.name}</p>
                        <p className="title-tast">{props.item.titulo}</p>

                    </div>

                </div>
                <span className='date-task'>{props.item.date.toLocaleString()}</span>

            </div>
            <p>{props.item.text}</p>
          
        </div>
    )
        
}

export default Task;