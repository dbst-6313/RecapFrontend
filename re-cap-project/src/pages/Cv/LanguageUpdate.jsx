import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import JobSeekerService from '../../services/jobSeekerService';
import LanguageService from '../../services/languageService';
import { Button, Card, Form, Select } from "semantic-ui-react";
import swal from 'sweetalert';

export default function LanguageUpdate() {
    let languageService = new LanguageService;
  
    const validation = Yup.object().shape({
        languageName: Yup.string().required("languageName Alanı zorunlu"),
        languageLevel: Yup.number().required("languageLevel Alanı zorunlu").max(5),

    });
    const formik = useFormik({
        initialValues: {
            id:"",
            userId:"",
            languageName: "",
            languageLevel: "",
        },
        validationSchema: validation,
        onSubmit: (values) => {
            values.id = 4;
            values.userId=4;
            let languagesModel = {
                id: values.id,
                languageName: values.languageName,
                languageLevel: values.languageLevel,
                jobseeker: {
                    userId: values.userId
                }
            }
            swal("Başarılı","Dil  bilgileriniz güncellendi","success");
            languageService.updateLanguage(languagesModel);
        }
    })
    return (
        <div>
            <Card fluid>
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Field label="Dil" control="text">
                            <input type="text"
                                id="languageName"
                                name="languageName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.languageName}
                                placeholder="Dil" />
                            {formik.errors.languageName && formik.touched.languageName && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.languageName}
                                </div>
                            )}
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field  >
                            <label>Dil Seviyesi</label>
                            <select label="Dil seviyesi"
                                id="languageLevel"
                                onChange={formik.handleChange}
                                value={formik.values.languageLevel}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>


                            {formik.errors.languageLevel && formik.touched.languageLevel && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.languageLevel}
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
