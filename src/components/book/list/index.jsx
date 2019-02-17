import React from 'react';
import Item from './../item';
import {Container, Col, Row} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const List = ({books = []}) => {
    return (
        books.length
            ?
            <Container>
                <Row>
                    {
                        books.map((item) => (
                            <Col xs={12} sm={6} md={4} className="my-3" key={item.id}>
                                <Link to={`/book/${item.id}`}>
                                    <Item item={item}/>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            :
            <h1>Книг нет</h1>
    );
};

List.propTypes = {
    books: PropTypes.array
};

export default List;