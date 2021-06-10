import React from 'react'
import { Button, Menu} from 'semantic-ui-react'
export default function SignOut(props) {
    
    return (
        <div>
            <Menu.Item>
            <Button.Group>
                <Button onClick={props.signIn}>Giriş yap</Button>
                <Button.Or text='ve' />
                <Button positive>Kayıt ol</Button>
            </Button.Group>
            </Menu.Item>
        </div>
    )
}
