import React, { useState, useEffect } from 'react'
import { Button, Card, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import JobAdvertService from '../services/jobAdvertService'
import '../App.css';
import swal from 'sweetalert';
export default function StaffVerification() {
    const [jobAdverts, setJobAdverts] = useState([])
   
    const activateAdvert=function(id){
        let jobAdvertService = new JobAdvertService;
        jobAdvertService.activateJobAdvert(id).then(swal("Başarılı","İş ilanı aktif edildi","success"));
        
    }
    useEffect(() => {
        let jobAdvertService = new JobAdvertService;
        jobAdvertService.getNotActiveAdverts().then(result => setJobAdverts(result.data.data));
    }, [])
    return (
        <div>
            <Card.Group>
                {
                    jobAdverts.map(jobAdvert => (
                        <Card fluid>
                            <Card.Content>

                                <Card.Header>{jobAdvert.employer.companyName} firması iş ilanı</Card.Header>
                                <Card.Meta>{jobAdvert.job.title}</Card.Meta>
                                <Card.Description>
                                    {jobAdvert.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        En yüksek Maaş {jobAdvert.maxSalary}
                                    </Button>
                                    <Button basic color='red'>
                                        En düşük Maaş {jobAdvert.minSalary}
                                    </Button>
                                </div>
                                <div className='contact-card' style={{ marginTop: "15px" }}>
                                    <Card.Description>
                                        Iletişim {jobAdvert.employer.email}
                                    </Card.Description>
                                </div>
                                <Card.Description style={{marginTop:"15px"}}>
                                    <Label as='a' color='teal' tag>
                                        {jobAdvert.workTime.name}
                                    </Label>
                                    <Label as='a' color='red' tag>
                                    {jobAdvert.workType.name}
                                    </Label>
                                </Card.Description>
                                <Button floated='right' onClick={e=> activateAdvert(jobAdvert.id)}>Aktifleştir</Button>
                            </Card.Content>
                        </Card>
                    ))
                }

            </Card.Group>
        </div>
    )
}
