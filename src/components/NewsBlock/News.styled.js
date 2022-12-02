import styled from "styled-components";

export const AllNews = styled.div`
display: none;

@media screen and (min-width: 1280px){
display: flex;
flex-direction: column;
justify-content: space-between;
width: 750px;
height: 250px;
margin-top: 20px;
margin-right: 100px;
overflow: hidden;
overflow-y: scroll;
scrollbar-width: none;
border: 2px solid #24CCA7;
border-radius: 20px;
background: #ffffff;
color: #000000;

&::-webkit-scrollbar {
   width: 5px;
}
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
&::-webkit-scrollbar-thumb {
  background: #24CCA7; 
  border-radius: 10px;
}
&::-webkit-scrollbar-thumb:hover {
  background: #24CCB7; 
}
}
`
export const News = styled.div`
  padding: 10px 10px 5px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
border-top: 1px solid #24CCA7;
border-bottom: 1px solid #24CCA7;  
`
export const NewsHeader = styled.h2`
color: #24CCA7;
text-align: center;
padding: 5px 0;
`

export const FireDiv = styled.div`
display: flex;
justify-content: space-around;
`
export const Fire = styled.span`
animation: fire 2s linear infinite alternate;
-webkit-animation: fire 2s linear infinite alternate;
#fire{
    animation-name: fire;
    animation-duration: 2s;
}

@keyframes fire {
        0% {
            transform: scale(0.9);
            -webkit-transform: scale(0.9);
        }
        100% {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
        }
    }

`
export const NewsTitle = styled.p`
margin-bottom: 5px;
font-size: 20px;
font-weight: 700;
text-align: center;
`

export const NewsDesc = styled.p`
display: flex;
flex-wrap: wrap;
  line-height: 25px;
  font-size: 14px;
  margin-left: 20px;
`

export const NewsPublished = styled.span`
argin-right: 10px;
display: inline-block;
  margin-top: 10px;
  color: rgb(122, 122, 122);
`
    
export const NewsSource = styled.span`
display: inline-block;
margin-top: 10px;
color: rgb(122, 122, 122);

&:hover, &:focus {
    color: #24CCA7;
    text-decoration: none;
}
`
export const NewsText = styled.div`
display: flex;
flex-direction: inline-row;
justify-content: space-between;
margin-top: 10px;
margin-bottom: 5px;
    align-items: center;
    font-family: Poppins;
    font-size: 18px;
    line-height: 1.5;
`
