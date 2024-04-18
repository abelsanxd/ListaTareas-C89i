import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = (itemTarea, borrarTarea) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
          {itemTarea}
          <Button variant="danger" onClick={()=>borrarTarea(itemTarea)}className="mx-2" type="submit">Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;