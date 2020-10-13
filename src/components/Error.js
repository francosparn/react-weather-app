import React from 'react';
import styled from 'styled-components';
import imgError from '../alert.png';
import PropTypes from 'prop-types';

const ErrorStyle = styled.div`
    background: rgba(248,80,50,1);
    background: -moz-linear-gradient(left, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(231,56,39,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(248,80,50,1)), color-stop(0%, rgba(241,111,92,1)), color-stop(100%, rgba(231,56,39,1)));
    background: -webkit-linear-gradient(left, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(231,56,39,1) 100%);
    background: -o-linear-gradient(left, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(231,56,39,1) 100%);
    background: -ms-linear-gradient(left, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(231,56,39,1) 100%);
    background: linear-gradient(to right, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(231,56,39,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827', GradientType=1 );
    padding: 1rem;
    color: #FFF;
    font-weight: 600;
    text-align: center;
    margin-top: 3rem;
`;

const ErrorImg = styled.img`
    background-image: ${imgError};
    margin-right: .5rem;
`;


const Error = ({ message }) => {
    return ( 
            <ErrorStyle className="error">
                <ErrorImg src={imgError} alt="" />
                    { message }
            </ErrorStyle> 
     );
}

Error.propTypes = {
    message: PropTypes.string.isRequired
}
 
export default Error;