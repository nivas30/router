import styled from "styled-components"
import { Link } from "react-router-dom"

export const MainContainer = styled.div`
display:flex;`

export const List = styled.ul`
position:fixed;
box-sizing:border-box;
margin:0;
padding :0;
width: 95px;
height:655px;
border:1px solid green;`

export const Home = styled.img`
position:absolute;
top:98px;
left:15px;`

export const SearchIcon = styled(Home)`
left: 28px;
top: 205px;`

export const Trend = styled(SearchIcon)`
top: 290px;`

export const CreateIcon = styled(Trend)`
top: 516px;`

export const SearchingLink = styled(Link)`
position: absolute;
font-size: 16px;
left: 26px;
top: 245px;
text-decoration: none;
color: #101010;`

export const TrendingLink = styled(SearchingLink)`
top:325px;`

export const CreateLink = styled(TrendingLink)`
top:556px`

export const ReadMoreLink = styled(Link)`
text-decoration: none;
color:#006711;`

export const WholeBlog = styled.div`
display:flex;
flex-direction:column;`

export const Latest = styled.div`
margin:2rem 0 0 10rem;`

export const Latesttext = styled.div`
margin:0;`

export const Division = styled.div`
margin:3rem 0 0 10rem`

export const Details = styled.div`
display:flex;
height:200px`

export const DateMonth = styled.div`
width:73px;`

export const Date = styled.div`
font-size: 32px;
color: #1E1E1E;`

export const Id = styled.div`
transform: rotate(-90deg);
margin-top: 4rem;
font-size: 16px;
color: #101010;`

export const Topic = styled(DateMonth)`
width:900px;
display:flex;
flex-direction:column;
row-gap:1rem;`

export const Title = styled.div`
font-size: 30px;
color: #006711;`

export const TagContainer = styled.div`
display : flex;
column-gap:1rem;
margin: 5px 0 0 4.5rem`

export const Tag = styled.div`
width:90px;
text-align:center;
border: 1px solid #006711;
padding:5px;
border-radius: 100px;
font-size: 13px;
color: #006711;`

export const Form = styled.form`
 display:flex;
 flex-direction:column;
 row-gap:1rem;
 margin : 4rem 0 0 15rem;
 border: 2px solid grey;
 background-color:whitesmoke`

 export const FormTitle = styled.h1`
 text-align:center`
 
export const InputField = styled.div`
 display:grid;
 grid-template-columns:200px 200px 200px;
 padding:1rem;`

export const Mandatory = styled.span`
 color:red;`

export const Error = Mandatory;

export const Button = styled.button`
 width:30px;
 display:flex;
 margin:0 0 1rem 13rem;
 border:none;
 gap:5px;`
