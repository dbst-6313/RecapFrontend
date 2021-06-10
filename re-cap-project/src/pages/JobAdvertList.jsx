import React, { useState, useEffect } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import JobAdvertService from '../services/jobAdvertService'
import '../App.css';
export default function JobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService;
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data));
    }, [])
    return (
        <div>
            <Card.Group>
                {
                    jobAdverts.map(jobAdvert=>(
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
                            <div className='contact-card' style={{marginTop:"15px"}}>
                                <Card.Description>
                                     Iletişim {jobAdvert.employer.email}
                                </Card.Description>
                            </div>
                        </Card.Content>
                    </Card>
                    ))
                }
               
            </Card.Group>
        </div>
    )
}
