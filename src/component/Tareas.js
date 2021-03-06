//@ts-check
import React, { useState,useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import './Tareas.css'
import Button from 'react-bootstrap/Button'


const Tareas = () => {

    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const handleChangeTarea = event => setTarea(event.target.value);

    const handleSubmit = () => {
        setTareas([...tareas, tarea])
        setTarea("");
        localStorage.setItem('lista', JSON.stringify([...tareas, tarea]))
    }

    useEffect(()=>{
        const listado = JSON.parse(localStorage.getItem('lista'))
        setTareas(listado)
    }, [])



    return (

        <>
            <div className="Tareas">
                <h1>Bienvenido</h1>
                <h3>Ingresa tus Tareas</h3>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Ingrese una tarea"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleChangeTarea} value={tarea}
                    />
                </InputGroup>

                <ListGroup>{
                    tareas.map((tarea, i) => {
                        return  <ListGroup.Item key={i}>{tarea}</ListGroup.Item>
                    })
                }
                </ListGroup>

                <br></br>
                <Button variant="primary" onClick={handleSubmit}>Agregar</Button>
            </div>
        </>
    )
}

export default Tareas;