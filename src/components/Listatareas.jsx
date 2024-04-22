import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import PropTypes from 'prop-types';

const Listatareas = ({ tareasProps, borrarTarea }) => {
    return (
        <ListGroup>
          {
            tareasProps.map((tarea, indice)=> <ItemTarea key={indice} itemTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
          }
        </ListGroup>
    );
};

// Define las PropTypes para tareasProps y borrarTarea
Listatareas.propTypes = {
  tareasProps: PropTypes.array.isRequired,
  borrarTarea: PropTypes.func.isRequired
};

export default Listatareas;
