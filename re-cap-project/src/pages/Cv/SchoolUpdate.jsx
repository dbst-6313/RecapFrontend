import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import SchoolService from '../../services/schoolService';
import JobSeekerService from '../../services/jobSeekerService'
import { Button, Card, Form, Select } from "semantic-ui-react";
import swal from 'sweetalert';
export default function SchoolUpdate() {
    const [school,setSchool] = useState([]);
    const [cv, setCv] = useState({});
    let schoolService = new SchoolService;
    let jobSeekerService = new JobSeekerService;
    useEffect(() => {
        schoolService.getById(4).then(result => setSchool(result.data.data))
        jobSeekerService.getCvById(4).then(result => setCv(result.data.data));
    }, [])
    const validation = Yup.object().shape({
        schoolDepartment: Yup.string().required("schoolDepartment Alanı zorunlu"),
        schoolStartDate:Yup.date().required("schoolStartDate Alanı zorunlu"),
        schoolGraduationDate:Yup.date(),
        schoolName: Yup.string().required("schoolName Alanı zorunlu"),
    });
    const formik = useFormik({
        initialValues: {
            id:"",
            userId:"",
            schoolGraduationDate:"",
            schoolStartDate:"",
            schoolDepartment:"",
            schoolName:"",
        },
        validationSchema: validation,
        onSubmit: (values) => {
            values.id=4;
            values.userId=4;
            let schoolModel = {
                id:values.id,
                schoolName:values.schoolName,
                schoolDepartment:values.schoolDepartment,
                startDate:values.schoolStartDate,
                graduationDate:values.schoolGraduationDate,
                jobseeker:{
                    userId: values.userId
                }
            }
            swal("Başarılı","Okul bilgileriniz güncellendi","success");
            schoolService.updateSchool(schoolModel);
        }
    })
    return (
        <div>
  <Card fluid>
            <Card.Content>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Field label="Okul Ismı" control="text">
                            <input type="text"
                                id="schoolName"
                                name="schoolName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.schoolName}

                                placeholder="Okul Ismı" />
                            {formik.errors.schoolName && formik.touched.schoolName && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.schoolName}
                                </div>
                            )}
                        </Form.Field>

                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field label="Okul Başlama Tarihi" control="date">
                            <input type="date"
                                id="schoolStartDate"
                                name="schoolStartDate"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.schoolStartDate}
                                placeholder="Okul Başlama Tarihi" />
                            {formik.errors.schoolStartDate && formik.touched.schoolStartDate && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.schoolStartDate}
                                </div>
                            )}
                        </Form.Field>
  
                        <Form.Field label="Okul Bitiş Tarihi" control="date">
                            <input type="date"
                                id="schoolGraduationDate"
                                name="schoolGraduationDate"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.schoolGraduationDate}
                                placeholder="İş Bitiş  Tarihi" />
                            {formik.errors.schoolGraduationDate && formik.touched.schoolGraduationDate && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.schoolGraduationDate}
                                </div>
                            )}
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field label="Okul departmanı" control="text">
                        <input type="text"
                                id="schoolDepartment"
                                name="schoolDepartment"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.schoolDepartment}
                                placeholder="Okul departmanı" />
                            {formik.errors.schoolDepartment && formik.touched.schoolDepartment && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.schoolDepartment}
                                </div>
                            )}
                        </Form.Field>
                    </Form.Group>
                    <Button type='submit' style={{width:"100%"}}>Güncelle</Button>
                </Form>
            </Card.Content>
            
           
            </Card>
        </div>
    )
}
