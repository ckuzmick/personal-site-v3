import React from "react"
import SideNav from "./sidenav"
import { Flex, Box } from 'theme-ui'
import "../default.css"

export default function Layout({children}) {
  return (
    <Flex>
    <Box>
    <Flex>
        <Box p={2} bg="background" sx={{ minWidth: '150px', display: "flex", alignItems: 'flex-end', flexDirection: 'column' }}>
            <SideNav sx={{ alignItems: 'right' }}/>
        </Box>
        <Box p={2} bg="background" sx={{ flexGrow: '1' }} class="container">
            {children}
        </Box>
    </Flex>
    </Box>
    </Flex>
  );
}