import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Card, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import JobAdvertService from '../services/jobAdvertService';

export default function JobAdvertDetail() {
    let { id } = useParams();
    const [jobAdvert, setJobAdvert] = useState({})

    useEffect(() => {
        let jobAdvertService = new JobAdvertService;
        jobAdvertService.getById(id).then(result => setJobAdvert(result.data.data));
    })
    return (
        <div>
            {jobAdvert.id}
        </div>
    )
}
