import Item from "./components/item"
import  Card  from './components/card'
const App = () =>{
  // <></< evita poluicao do codigo 
  //className para evitar erro de sintaxe
return (
  <> 
     <h1>MY FIRST APLICATION ON REACTJS</h1>
     <ul>
       <Item >
         item 1
         </Item>
         <Item >
         item 2
         </Item>
         <Item >
         item 3
         </Item>
     </ul>
     <Card/>
    </>
  )
}

export default App