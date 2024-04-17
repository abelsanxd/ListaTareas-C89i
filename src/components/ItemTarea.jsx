import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
          tarea 1
          <Button variant="danger" className="mx-2" type="submit">Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;