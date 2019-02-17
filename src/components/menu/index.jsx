import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './styles.css'

const Menu = () => (
    <Nav className="justify-content-center">
        <Nav.Item className="p-3">
            <NavLink exact to="/">Главная</NavLink>
        </Nav.Item>
        <Nav.Item className="p-3">
            <NavLink  exact to="/book/add">Добавить книгу</NavLink>
        </Nav.Item>
    </Nav>
);

export default Menu;