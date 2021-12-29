import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"

const CardItems = () => {
  const [information, setInformation] = useState([])
  const [visible, setVisible] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      setInformation(data)
    }
    fetchData()
  }, [])

  const handleVisible = () => {
    setVisible(visible + 10)
  }

  return (
    <>
      <Row>
        {information.slice(0, visible).map((post) => (
          <Col lg={4}>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {visible < information.length && (
        <Row>
          <Col className="text-center">
            <Button
              onClick={handleVisible}
              className="m-3"
              variant="primary"
              size="lg"
            >
              Browse
            </Button>{" "}
          </Col>
        </Row>
      )}
    </>
  )
}

export default CardItems
