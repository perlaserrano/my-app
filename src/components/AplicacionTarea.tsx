import { FormEvent, useState } from "react";
import ILista from "../interface/lista.interface";

const AplicacionTarea = () => {
    const initialValue = {
        date: new Date(),
        name: '',
        titulo: '',
        text: '',
        completado: false
    }

    const [listaTareas, setListaTareas] = useState<ILista[]>([{
        date: new Date(),
        name: 'Perla',
        titulo: 'Tak',
        text: 'Lo que sea.com',
        completado: false
    }]);
    const [tarea, setTarea] = useState<ILista>(initialValue);

    const handlerOnChange = (e: any) => {

        const { name, value } = e.target;
        setTarea((prev: ILista) => {

            return {
                ...prev,
                [name]: value
            };
        });

    }

    const handlerOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        setListaTareas((prev: ILista[]) => {
            let newState = [...prev, tarea]

            return newState;


        });

        setTarea(initialValue);
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
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.titulo}</p>
                                    <p>{item.text}</p>
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