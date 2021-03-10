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
export const JoinBoard = styled.div `
  {
    width: 50%;
    height: 21vh;
    position: absolute;
    top: 35vh;
    left: 23vw;
  }
`

export const Messages = styled.div `
  {
    width:90%;
    display:block;
    background-color: white;
    height:55vh;
    margin:3vh auto;
    padding: 1vw;
    font-size:1.2rem;
    overflow: scroll;
    white-space: nowrap;
  }
`

export const PMessagesDisplay = styled.div `
  {
    width: 90%;
    display:block;
    background-color:white;
    height: 30vh;
    margin: 1.5vh auto;
    padding: 0.5vw;
    font-size: 1rem;
    overflow: scroll;
    white-space: nowrap;
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
    letter-spacing: 0.1em;
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

export const PMwindow = styled.div`
  {
    width: 22%;
    height: 52vh;
    margin-left: 5vw;
    margin-top: 15vh;
  }
`

export const PMessageInput = styled.textarea`
  {
    display:block;
    width: 90%;
    margin: 0 auto;
    height: 8vh;
    resize: none;
    padding: 0.3vw;
    margin-bottom: 0.5vh;
    font-size: 0.8rem;
    letter-spacing: 0.07em;
  }
`
