import { Button, Form } from "react-bootstrap";
import Listatareas from "./Listatareas";
import { useEffect, useState  } from "react";

const FormularioTareas = () => {
  const [nombreTarea, SetnombreTarea] = useState("");

  const [tareas, setTareas] = useState( JSON.parse(localStorage.getItem('listaTareasKey')) || [] );

useEffect (() => {
  console.log('se actualizo el componente')
  localStorage.setItem('listaTareasKey', JSON.stringify(tareas))
}, [tareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, nombreTarea]);
//tareas.push(nombreTarea)
    SetnombreTarea("");
    //limpiar el input
    SetnombreTarea('')
  };

  const borrarTarea = (nombre) => {
    const tareasActualizadas = tareas.filter((itemTarea) => itemTarea !== nombre);
    //actualizar el state tareas
    setTareas(tareasActualizadas);
 
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
      <Listatareas tareasProps={tareas} borrarTarea={borrarTarea}></Listatareas>

    </section>
  );
};

export default FormularioTareas;
