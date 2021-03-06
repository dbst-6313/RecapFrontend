import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Container, Dropdown, Grid, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
let history = useHistory();
    function handleSignOut(){
     setIsAuthenticated(false);
    
    }
    function handleSignIn(){
        setIsAuthenticated(true);
       }
       function pushStaffVerification(){
           history.push("/staff/verification")
       }
       function pushStaffAdvertPanel(){
        history.push("/staff/jobadvertpanel")
    }
    function pushCreateJobAdvert(){
        history.push("/jobadvert/add")
    }
    function pushMainPage(){
        history.push("/")
    }
    function pushStaffEmployerPanel(){
        history.push("/staff/employerpanel")
    }
    return (
        <div>
            <Grid>
            <Menu inverted fixed="top" size='huge'>
                <Container>
                    <Menu.Item name="Ana Sayfa" onClick={e=>pushMainPage()}/>
                <Menu.Item link>
                    <Dropdown text="Personel girişi" pointing="right">
                        <Dropdown.Menu >
                       
                        <Dropdown.Item onClick={e=>pushStaffVerification()}>
                           Personel Onay
                          </Dropdown.Item>
                          <Dropdown.Item onClick={e=>pushStaffEmployerPanel()}>
                           Personel İş veren Paneli
                          </Dropdown.Item>
                          <Dropdown.Item onClick={e=>pushStaffAdvertPanel()}>
                           Personel İş ilanı paneli
                          </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item onClick={e=>pushCreateJobAdvert()} name='İlan Ver' link/>
              
                <Menu.Menu position='right'>
                   
                    {isAuthenticated?<SignedIn signOut={handleSignOut}></SignedIn>: <SignedOut signIn={handleSignIn}></SignedOut>}
                </Menu.Menu>
                </Container>
            </Menu> 
            </Grid>

       

        </div>
    )
}
