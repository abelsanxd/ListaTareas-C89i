import { Button, ListGroup } from "react-bootstrap";
import PropTypes from 'prop-types';

const ItemTarea = ({ itemTarea, borrarTarea }) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
          {itemTarea}
          <Button variant="danger" onClick={() => borrarTarea(itemTarea)} className="mx-2" type="submit">Borrar</Button>
        </ListGroup.Item>
    );
};

ItemTarea.propTypes = {
  itemTarea: PropTypes.string.isRequired,
  borrarTarea: PropTypes.func.isRequired // Aquí se define la validación PropTypes para borrarTarea
};

export default ItemTarea;
