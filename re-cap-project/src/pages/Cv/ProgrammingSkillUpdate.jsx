import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import swal from 'sweetalert';
import ProgrammingSkillService from '../../services/programmingSkillService';
import JobSeekerService from '../../services/jobSeekerService'
import { Button, Card, Form, Select } from "semantic-ui-react";
export default function ProgrammingSkillUpdate() {
    let programmingSkillService = new ProgrammingSkillService;
    const validation = Yup.object().shape({
        introductoryText: Yup.string().required("introductoryText Alanı zorunlu"),
    });
    const formik = useFormik({
        initialValues: {
            id:"",
            userId:"",
            introductoryText:"",
        },
        validationSchema: validation,
        onSubmit: (values) => {
            values.id = 4;
            values.userId=4;
            let programmingSkillsModel = {
                id:values.id,
                introductoryText:values.introductoryText,
                jobseeker:{
                    userId:values.userId
                }
            }
            swal("Başarılı","Programlama tecrübesi bilgileriniz güncellendi","success");
            programmingSkillService.updateProgrammingSkill(programmingSkillsModel);
        }
    })
    return (
        <div>
    <Card fluid>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field label="Programlama tecrübeleri" control="text">
                <input type="text"
                  id="introductoryText"
                  name="introductoryText"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.introductoryText}
                  placeholder="Programlama tecrübeleri" />
                {formik.errors.introductoryText && formik.touched.introductoryText && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.introductoryText}
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
