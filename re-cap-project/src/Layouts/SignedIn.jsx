import React from 'react'
import { useHistory } from 'react-router-dom'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SignIn(props) {
    let history = useHistory();
    function pushCvUpdate(){  
        history.push("/cv/update")
    }
    function pushEmployerUpdate(){  
        history.push("/employer/update")
    }
    return (
        <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://cdn.discordapp.com/attachments/690890890448732230/851932887112351744/sfasg.PNG"></Image>
          <Dropdown pointing="top right">
              <Dropdown.Menu>
                  <Dropdown.Item text="Bilgilerim" icon="info"/>
                  <Dropdown.Item text="Cv Güncelle" onClick={e=>pushCvUpdate()} icon="heart"/>
                  <Dropdown.Item text="Firma bilgilerini Güncelle" onClick={e=>pushEmployerUpdate()} icon="heart"/>
                  <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out"/>
              </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        </div>
    )
}