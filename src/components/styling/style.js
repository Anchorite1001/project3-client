import styled from 'styled-components';

export const Body = styled.div`
  {
    max-width:500px;
    width:50%;
    height:95vh;
    display:inline-block
  }
`

export const SubBody = styled.div`
  {
    display:inline-block;
    height:95vh;
    max-width:200px;
    width:30%;
    margin-left:1vw;
  }
`
export const Messages = styled.div`
  {
    width:90%;
    display:block;
    background-color: white;
    height:55vh;
    margin:3vh auto;
    padding: 1vw;
    font-size:1.2rem;
  }
`

export const Textarea = styled.textarea`
  {
    display:block;
    width:90%;
    margin:0 auto;
    height:20vh;
    resize:none;
    padding: 1vw;
    margin-bottom: 1vh;
    font-size:1.2rem;
  }
`

export const Userslist = styled.ul`
  {
    width: 80%;
    margin: 0 auto;
    text-align:center;
    list-style-type: none;
    padding: 0;
    margin-top: 2vh;
  }
`
