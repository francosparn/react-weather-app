import React from 'react';
import styled from 'styled-components';
import myLogo from '../logo.png';
import PropTypes from 'prop-types';

const MainHeader = styled.header`
    background: rgba(26,128,224,1);
    background: -moz-linear-gradient(left, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(26,128,224,1)), color-stop(100%, rgba(113,32,153,1)));
    background: -webkit-linear-gradient(left, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    background: -o-linear-gradient(left, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    background: -ms-linear-gradient(left, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    background: linear-gradient(to right, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a80e0', endColorstr='#712099', GradientType=1 );
    padding: 10px;
`;

const HeaderTitle = styled.h4`
    color: #FFF;
    margin: 0 auto;
    font-weight: 600;
`;

const Logo = styled.img`
    background-image: ${myLogo};

    @media(max-width: 549px){
        width: 28px;
        height: 25px;
    }
`;

const Header = ({ title }) => {
    return ( 
    <MainHeader className="">
        <HeaderTitle>
            <Logo src={myLogo} alt="Logo" /> {title}
        </HeaderTitle>
    </MainHeader>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header;
