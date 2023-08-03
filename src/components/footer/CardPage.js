import React from 'react';
import {useEffect, useState} from "react";
import {Col, Card, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { getCards } from '../../store/slices/authSlice';

function PostPage() {
    const [visible, setVisible] = useState(8)
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.authReducer)
    const showMoreItems = () => {
      setVisible((value)=> value + 8)
    }
    useEffect( ()=>{
        dispatch(getCards())
    },[])
    return (
        <Row  xs={2} md={4} style={{margin:'30px 10px', padding:'30px 280px'}} >
            {items.slice(0, visible).map(item => (
                <Col>
                    <Card style={{ width: '200px',height:'380px',borderRadius:'15px', margin:'10px'}}>
                        <Card.Img variant="top" src={item.url} style={{borderRadius:'15px'}}/>
                        <Card.Body>
                            <Card.Title>{item.id}</Card.Title>
                            <Card.Text>{item.title}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            {
                visible < items.length &&(
                    <button onClick={showMoreItems}>Показать все места</button>
                )
            }


        </Row>


    );
}

export default PostPage;