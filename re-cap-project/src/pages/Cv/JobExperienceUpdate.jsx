import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import JobExperienceService from '../../services/jobExperienceService';
import JobSeekerService from '../../services/jobSeekerService';
import swal from 'sweetalert';
import { Button, Card, Form, Select } from "semantic-ui-react";

export default function JobExperienceUpdate() {

    let jobExperienceService = new JobExperienceService;
    const validation = Yup.object().shape({
        companyExperience: Yup.string().required("İş tecrübesi alanı zorunlu"),
        experienceStartDate: Yup.date().required("ExperienceStart Alanı zorunlu"),
        experienceEndDate: Yup.date(),
        experiencePosition: Yup.string().required("experiencePosition Alanı zorunlu"),
    });
    const formik = useFormik({
        initialValues: {
            id:"",
            userId:"",
            companyExperience: "",
            experienceStartDate: "",
            experienceEndDate: "",
            experiencePosition: "",
        },
        validationSchema: validation,
        onSubmit: (values) => {
            values.id = 4;
            values.userId=4;
            let jobExperienceModel = {
                
                id: values.id,
                companyName: values.companyExperience,
                startDate: values.experienceStartDate,
                endDate: values.experienceEndDate,
                position: values.experiencePosition,
                jobseeker: {
                    userId: values.userId
                }
            }
            swal("Başarılı","İş tecrübesi  bilgileriniz güncellendi","success");
            jobExperienceService.updateJobExperience(jobExperienceModel);
        }
    })
    return (
        <div>
            <Card fluid>
            <Card.Content>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Field label="Firma ismi" control="text">
                            <input type="text"
                                id="companyName"
                                name="companyName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.companyName}

                                placeholder="Firma adi" />
                            {formik.errors.companyName && formik.touched.companyName && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.companyName}
                                </div>
                            )}
                        </Form.Field>

                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field label="İş Başlangıç Tarihi" control="date">
                            <input type="date"
                                id="startDate"
                                name="startDate"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.startDate}
                                placeholder="İş Başlangıç Tarihi" />
                            {formik.errors.startDate && formik.touched.startDate && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.startDate}
                                </div>
                            )}
                        </Form.Field>
  
                        <Form.Field label="İş Bitiş  Tarihi" control="date">
                            <input type="date"
                                id="endDate"
                                name="endDate"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.endDate}
                                placeholder="İş Bitiş  Tarihi" />
                            {formik.errors.endDate && formik.touched.endDate && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.endDate}
                                </div>
                            )}
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field label="İş pozisyonu" control="text">
                        <input type="text"
                                id="position"
                                name="position"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.position}
                                placeholder="İş Pozisyonu" />
                            {formik.errors.position && formik.touched.position && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.position}
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
