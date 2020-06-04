import React from 'react';
// import './Person.css';
import Styled from 'styled-components';

const person = (props) => {
  const style = {
    '@media (min-width: 800px)': {
      width: '450px'
    }
  };


  const StyledDiv = Styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 800px) {
      width: 450px
    }
  `

  return (
    <StyledDiv>
      <div className="Person" style={style}>
        <p onClick={props.click}>Hi,I am {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </StyledDiv>
  )
}

export default person;
