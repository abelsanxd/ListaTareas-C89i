import { Button, Form } from "react-bootstrap";
import Listatareas from "./Listatareas";
import { useState } from "react";

const FormularioTareas = () => {
  useState;
  const [nombreTarea, SetnombreTarea] = useState("");

  const [tareas, setTareas] = useState([nombreTarea]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, nombreTarea]);
//tareas.push(nombreTarea)
    SetnombreTarea("");
    //limpiar el input
    SetnombreTarea('')
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => SetnombreTarea(e.target.value)}
            value={nombreTarea}
          />
          <Button variant="primary" className="mx-2" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <Listatareas></Listatareas>
    </section>
  );
};

export default FormularioTareas;
