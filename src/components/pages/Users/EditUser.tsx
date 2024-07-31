import { Card } from "react-bootstrap"
import DefaultTemplate from "../../templates/DefaultTemplate"

const EditUser = () => {
  return (
    <DefaultTemplate>
        <Card className="h-100 bg-dark">
            <Card.Header>Edit User</Card.Header>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    </DefaultTemplate>
  )
}

export default EditUser
