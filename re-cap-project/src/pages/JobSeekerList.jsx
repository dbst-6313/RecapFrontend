import React, { useState, useEffect } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService'
export default function JobSeekerList() {
    const [jobSeekers, setjobSeekers] = useState([])

    useEffect(() => {
        let jobSeekerService = new JobSeekerService;
        jobSeekerService.getJobSeekers().then(result => setjobSeekers(result.data.data));
    }, [])
    return (
        <div>
            <Card.Group>
                {
            jobSeekers.map(jobSeeker=>(
                    <Card>
                    
                    <Card.Content>
                    <Card.Header>{jobSeeker.firstName} {jobSeeker.lastName}</Card.Header>
                    <Card.Meta>
                         <span className='date'>Birth Year:{jobSeeker.birthDate}</span>
                    </Card.Meta>
                   <Card.Description>
                   <Card.Content extra>
                   <a>
                      <Icon name='user' />
                      İletişim {jobSeeker.email}
                    </a>
                    </Card.Content>
                   </Card.Description>
                  </Card.Content>

                 </Card>
                ))
            }
            </Card.Group>
        </div>
    )
}
