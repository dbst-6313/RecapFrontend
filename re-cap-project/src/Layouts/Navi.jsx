import React,{useState} from 'react'
import { Button, Container, Dropdown, Grid, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut(){
     setIsAuthenticated(false);
    
    }
    function handleSignIn(){
        setIsAuthenticated(true);
   
       }
    return (
        <div>
            <Grid>
            <Menu inverted fixed="top" size='huge'>
                <Container>
                <Menu.Item name='home' link/>
                <Menu.Item name='messages' link/>

                <Menu.Menu position='right'>
                   
                    {isAuthenticated?<SignedIn signOut={handleSignOut}></SignedIn>: <SignedOut signIn={handleSignIn}></SignedOut>}
                </Menu.Menu>
                </Container>
            </Menu> 
            </Grid>

       

        </div>
    )
}
