import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Button, Card, Form, Select } from "semantic-ui-react";
import swal from 'sweetalert';
import CvCoverLetterService from '../../services/cvCoverLetterService';
import JobSeekerService from '../../services/jobSeekerService';


export default function CvCoverLetterUpdate() {
 
    let cvCoverLetterService =new CvCoverLetterService;
    const validation = Yup.object().shape({
        coverLetter: Yup.string().required("Ön yazı alanı zorunlu")
    });
    const formik = useFormik({
        initialValues: {
            id:"",
            userId:"",
            coverLetter: "",
        },
        validationSchema: validation,
        onSubmit: (values) => {
            values.id = 4;
            values.userId=4;
            let cvCoverLetterModel = {
                id: values.id,
                description: values.coverLetter,
                jobseeker: {
                    userId: values.userId
                }
            }
            swal("Başarılı","Ön yazı  bilgileriniz güncellendi","success");
            cvCoverLetterService.updateCvCoverLetter(cvCoverLetterModel);
        }
    })
    return (
        <div>
         <Card fluid>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field label="Ön Tanıtma" control="text">
                <input type="text"
                  id="coverLetter"
                  name="coverLetter"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.coverLetter}
                  placeholder="İş açıklaması" />
                {formik.errors.coverLetter && formik.touched.coverLetter && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.coverLetter}
                  </div>
                )}
              </Form.Field>

            </Form.Group>
            <Button type='submit'>Güncelle</Button>
            </Form>
          </Card.Content>
         
          </Card>   
        </div>
    )
}
