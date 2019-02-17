import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from './../components/header';

const Router = ({children}) => (
    <Fragment>
        <Header/>
        {children}
    </Fragment>
);

Router.propTypes = {
    children: PropTypes.element
};

export default Router;

