/** @jsx jsx */
import { jsx } from 'theme-ui'
import { NavLink } from 'theme-ui'
import "./sidenav.css"

export default (props) => (
<ul class="sidebarList">
<li class="sidebarItem">
  <NavLink href="/" p={2} sx={{ paddingRight:"0", paddingLeft:"0px" }}>
    Home
  </NavLink>
</li>
<li class="sidebarItem">
  <NavLink href="/about/" p={2} sx={{ paddingRight:"0", paddingLeft:"0px" }}>
    About
  </NavLink>
</li>
<li class="sidebarItem">
  <NavLink href="/resources/" p={2} sx={{ paddingRight:"0", paddingLeft:"0px" }}>
    Resources
  </NavLink>
</li>
</ul>
)