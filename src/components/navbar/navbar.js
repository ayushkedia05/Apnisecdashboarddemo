import { Navbar } from "@mantine/core"
import './navbar.css'
const SideNavbar=()=>{
    return (
<div class="sidebar">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>)
}

export default SideNavbar;