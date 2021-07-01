import React, { useState, useEffect } from 'react'
import { Button, Card, Image ,Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EmployerService from '../services/employerService'

export default function EmployerList() {
    const [employer, setEmployer] = useState([])

useEffect(() => {
    let employerService = new EmployerService;
    employerService.getEmployers().then(result => setEmployer(result.data.data));
}, [])

    return (
        <div>
         <Card.Group>
               {
                employer.map(employer => (
                    <Card>
                    <Card.Content>
                    <Card.Header>{employer.companyName}</Card.Header>
                    <Card.Meta>
                         <span className='date'>{employer.webAdress}</span>
                    </Card.Meta>
                   <Card.Description>
                       Telefon Numarası : {employer.phoneNumber}
                   </Card.Description>
                  </Card.Content>
                   <Card.Content extra>
                     <a>
                      <Icon name='user' />
                    İletişim {employer.email}
                    </a>
                    </Card.Content>
                    <Card.Content extra>
                     {
                     employer.verified?(<a></a>):(<a>Güncelleme için onay bekleniyor</a>)
                     }
                    </Card.Content>
                 </Card>
                ))
               }
               </Card.Group>
           
        </div>
    )
}
