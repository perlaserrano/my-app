import { ChangeEvent, FormEvent, useState } from "react";
import ITask from "../interface/lista.interface";

const AplicacionTarea = () => {
    const initialValue = {
        date: new Date(),
        name: '',
        titulo: '',
        text: '',
        completado: false
    }

    const [listaTareas, setListaTareas] = useState<ITask[]>([
        {
            date: new Date(),
            name: 'Perla',
            titulo: 'Tak',
            text: 'Lo que sea.com',
            completado: false
        },
        {
            date: new Date(),
            name: 'Perla',
            titulo: 'Tak',
            text: 'Lo que sea.com',
            completado: false
        },
        {
            date: new Date(),
            name: 'Perla',
            titulo: 'Tak',
            text: 'Lo que sea.com',
            completado: false
        },
    ]);
    const [tarea, setTarea] = useState<ITask>(initialValue);

    const handlerOnChange = (e: any) => {

        const { name, value } = e.target;

        setTarea((prev: ITask) => {

            return {
                ...prev,
                [name]: value
            };
        });

    }

    const handlerOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        setListaTareas((prev: ITask[]) => {
            let newState = [...prev, tarea]

            return newState;


        });

        setTarea(initialValue);
    }


    const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { checked } = e.target;

        setListaTareas((prev: ITask[]) => {
            let newState = [...prev]

            newState[index].completado = checked;

            return newState;
        })


    }

    return (


        <div className="main-container">

            <h1>Tasks</h1>

            <div className="container-layout">


                <form onSubmit={handlerOnSubmit} >

                    <div>
                        <input placeholder="Nombre" name="name" value={tarea.name} onChange={handlerOnChange} />
                        <input placeholder="Titulo" name="titulo" value={tarea.titulo} onChange={handlerOnChange} />
                        <textarea placeholder="Descripcion" name="text" value={tarea.text} onChange={handlerOnChange}></textarea>
                    </div>

                    <button type="submit">Agregar</button>
                </form>

                <div className="container-tasks">
                    {
                        listaTareas.map((item, index) => {
                            return (
                               <div  key={index}>
                                    <div className="container-checkbox">
                                        <label htmlFor="completado-checkbox">Completado</label>
                                        <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            handleChangeCheckbox(e, index)
                                        }} name="completado" type="checkbox" checked={item.completado} id="completado-checkbox" />
                                    </div>


                                    <div>

                                    <p>{item.titulo}</p>
                                    <p>{item.name}</p>
                                    <p>{item.text}</p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default AplicacionTarea;