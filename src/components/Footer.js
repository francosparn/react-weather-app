import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Author = styled.p`
    font-family: Raleway;
    margin-top: 8rem;
    text-align: center;
    font-size: 1.3rem;
    letter-spacing: 2px;
    font-weight: 600;
`;

const Span = styled.span`
    color: #0a6dc9;
`;

const Footer = ({ name }) => {
    return ( 
        <Author>developed by <Span>{name}</Span> &copy; 2020</Author>
     );
}

Footer.propTypes = {
    name: PropTypes.string.isRequired
}
 
export default Footer;
