import React from 'react'
import If from './if'
import styled from 'styled-components'

const Bot = styled.button`
  margin-right:5px;
`;

export default props =>(
  <If test={!props.hide}>
      <Bot type="submit" className={"btn btn-"+props.style}
      onClick={props.onClick}>
      <svg class={"bi bi-"+props.icon}  width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d={props.d} clip-rule="evenodd"/>
      </svg>
      </Bot>
  </If>
)
