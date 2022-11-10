import { useState } from "react"
import {useNavigate} from 'react-router-dom';

export const Header = ()=>{

  const [text, setText] = useState('')
  const navigate = useNavigate()

  return(
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="navbar-brand">Toko Buku Asadel</div>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">New Arrival</a>
      </li>
      <li class="nav-item">
        <form action="" class="search-form">
            <input onChange={(typing)=>setText(typing.target.value)} type="search"  placeholder="search here..." id="search-box" ></input>
            <button onClick={()=>{navigate("/"+text)}} type="submit" >search</button>
            <script>console.log(text)</script>
          </form>
      </li>
    </ul>
  </div>
</nav>
    </> 
  )
}