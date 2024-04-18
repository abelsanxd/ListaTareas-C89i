import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Listatareas = ({tareasProps, borrarTarea}) => {
    return (
        <ListGroup>
          {
            tareasProps.map((tarea, indice)=> <ItemTarea key={indice} itemTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
          }
          <ItemTarea></ItemTarea>
        </ListGroup>
    );
};

export default Listatareas;