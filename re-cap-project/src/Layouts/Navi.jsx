import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Dropdown, Grid, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

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
                <Menu.Item link>
                    <Dropdown text="İş veren girişi" pointing="right">
                        <Dropdown.Menu >
                          <Dropdown.Item>
                           Giriş Yap
                          </Dropdown.Item>
                         
                          <Dropdown.Item>
                           Kayıt ol
                          </Dropdown.Item>
                         
                          
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
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
