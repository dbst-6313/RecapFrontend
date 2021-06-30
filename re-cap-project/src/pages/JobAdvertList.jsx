import React, { useState, useEffect } from 'react'
import { Button, Card, GridColumn, GridRow, Label, Grid, Rating, Select, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import JobAdvertService from '../services/jobAdvertService'
import FavoriteService from '../services/favoriteService'
import JobSeekerService from '../services/jobSeekerService'
import CityService from '../services/cityService';
import WorkTypeService from '../services/workTypeService';
import '../App.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
export default function JobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([])
    const [jobSeeker, setJobSeeker] = useState([])
    const [cities, setCities] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    useEffect(() => {
        let jobAdvertService = new JobAdvertService;
        let jobSeekerService = new JobSeekerService;
        let cityService = new CityService;
        let workTypeService = new WorkTypeService;

        workTypeService.getWorkType().then(result => setWorkTypes(result.data.data))
        cityService.getCities().then(result => setCities(result.data.data));
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data));
        jobSeekerService.getJobSeekerById(4).then(result => setJobSeeker(result.data.data));
    }, [])
    const cityOptions = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id,
    }));
    const workTypeOptions = workTypes.map((workType, index) => ({
        key: index,
        text: workType.name,
        value: workType.id,
    }));
    function addFavorite(jobAdvert) {
        let favoriteService = new FavoriteService;

        let favoriteModal = {
            jobSeeker: jobSeeker,
            jobAdvert: jobAdvert
        }

        favoriteService.addFavorite(favoriteModal);

    }
    const formik = useFormik({
        initialValues: {
            cityId: "",
            workTypeId: "",
        }
        ,
        onSubmit: values => {
            let jobAdvertService = new JobAdvertService;
           if(values.cityId == "" && values.workTypeId != ""){
            jobAdvertService.getByWorkTypeId(values.workTypeId).then(result => setJobAdverts(result.data.data));
           }
           else if(values.workTypeId == ""&& values.cityId != ""){
            jobAdvertService.getByCityId(values.cityId).then(result => setJobAdverts(result.data.data));
           }
           else{
            jobAdvertService.getByWorkTypeIdAndCityId(values.cityId,values.workTypeId).then(result => setJobAdverts(result.data.data));
           }
        }
    })
    function getJobAdverts(){
        let jobAdvertService = new JobAdvertService;
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data));
    }
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Form onSubmit={formik.handleSubmit}>
                            <Card>
                                <Label style={{ backgroundColor: "#333", color: "white" }}>Şehire göre filtrele</Label>
                                <select
                                    id="cityId"
                                    onChange={formik.handleChange}
                                    value={formik.values.cityId}
                                >
                                    <option value="">Şehrinizi seçin</option>
                                    {
                                        cities.map(city => (
                                            <option
                                                key={city.id}
                                                value={city.id}
                                            >
                                                {city.name}</option>
                                        ))
                                    }
                                </select>
                            </Card>
                            <Card>

                                <Label style={{ backgroundColor: "#333", color: "white" }} >İş türüne göre filtrele</Label>
                                <select
                                    id="workTypeId"
                                    onChange={formik.handleChange}
                                    value={formik.values.workTypeId}
                                >
                                    <option value="">Çalşma tipinizi seçin</option>
                                    {
                                        workTypes.map(workType => (
                                            <option
                                                key={workType.id}
                                                value={workType.id}
                                            >
                                                {workType.name}</option>
                                        ))
                                    }
                                </select>
                            </Card>
                            <Button color="vk" type='submit' fluid style={{ marginTop: "20px" ,marginBottom:"15px"}} >Filtrele</Button>
                            
                        </Form>
                        <Button content='Filtreleri sıfırla' icon='right arrow' labelPosition='left' onClick={e=>getJobAdverts()}  floated="left"/>
                    </GridColumn>
                    <GridColumn width={12}>
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
                                            <GridColumn floated="right">
                                                <a onClick={e => addFavorite(jobAdvert)}><Rating /></a>
                                            </GridColumn>

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
                                            <Card.Description style={{ marginTop: "15px" }}>
                                                <Label as='a' color='teal' tag>
                                                    {jobAdvert.workTime.name}
                                                </Label>
                                                <Label as='a' color='red' tag>
                                                    {jobAdvert.workType.name}
                                                </Label>
                                            </Card.Description>

                                        </Card.Content>
                                    </Card>
                                ))
                            }
                        </Card.Group>
                    </GridColumn>
                </GridRow>
            </Grid>

        </div>
    )
}
