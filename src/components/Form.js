import React, { useState } from 'react';
import Error from './Error';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormStyle = styled.div`
    margin-top: 3rem;
    background-color: #FFF;
    padding: 3rem;
    -webkit-box-shadow: 0px 2px 9px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 9px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
`;

const Button = styled.button`
    color: #FFF;
    margin-top: 1rem;
    background: rgba(26,128,224,1);
    background: -moz-linear-gradient(left, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(26,128,224,1)), color-stop(100%, rgba(113,32,153,1)));
    background: -webkit-linear-gradient(left, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    background: -o-linear-gradient(left, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    background: -ms-linear-gradient(left, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    background: linear-gradient(to right, rgba(26,128,224,1) 0%, rgba(113,32,153,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a80e0', endColorstr='#712099', GradientType=1 );
    &:hover, :focus{
        color: #FFF;
        font-weight: 600;
    }

`;

const Form = ({ search, saveSearch, saveConsult }) => {

    const [ error, saveError ] = useState(false);

    // Extract city and country
    const { city, country } = search;

    // Function that enters the elements in the state
    const handleChange = e => {

        // Update the state
        saveSearch({
            ...search,
            [ e.target.name ] : e.target.value   
        });
    }

    // When we press the submit button of the form
    const handleSubmit = e => {
        e.preventDefault();

        // Validation
        if( city.trim() === '' || !isNaN(city) || country.trim() === '' || !isNaN(country) ){
            saveError(true);
            return;
        }

        saveError(false);

        saveConsult(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error message="Ambos campos son obligatorios" /> : null }

            <FormStyle className="form">

                <label>Ciudad:</label>
                <input 
                    className="u-full-width"
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Ingrese una ciudad"
                    value={city}
                    onChange={handleChange}
                />
                <label>País:</label>
                <select 
                    className="u-full-width"
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">Seleccione un país</option>
                    <option value="AR">Argentina</option>
                    <option value="BO">Bolivia</option>
                    <option value="BR">Brasil</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="EC">Ecuador</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Perú</option>
                    <option value="UY">Uruguay</option>
                    <option value="VE">Venezuela</option>
                </select>
                <Button 
                    className="button-search u-full-width" 
                    type="submit"
                >Buscar Clima</Button>    
            </FormStyle>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    saveConsult: PropTypes.func.isRequired
}
 
export default Form;