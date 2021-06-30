import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import JobSeekerService from '../../services/jobSeekerService';
import LinkService from '../../services/linkService';
import { Button, Card, Form, Select } from "semantic-ui-react";
import swal from 'sweetalert';
export default function LinkUpdate() {

    let linkService = new LinkService;
  
    const validation = Yup.object().shape({
        githubLink: Yup.string().required("githubLink Alanı zorunlu"),
        linkedinLink:Yup.string().required("linkedinLink Alanı zorunlu"),

    });
    const formik = useFormik({
        initialValues: {
            id:"",
            userId:"",
            githubLink:"",
            linkedinLink:"",
        },
        validationSchema: validation,
        onSubmit: (values) => {
            values.id = 4;
            values.userId=4;
            let linkModel = {
                id: values.id,
                githubLink:values.githubLink,
                linkedinLink:values.linkedinLink,
                jobseeker:{
                    userId:values.userId
                }
        }
        swal("Başarılı","Link  bilgileriniz güncellendi","success");
        linkService.updateLink(linkModel);
        }
    })
    return (
        <div>
  <Card fluid>
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field label="Github Link" control="text">
                <input type="text"
                  id="githubLink"
                  name="githubLink"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.githubLink}
                  placeholder="İş açıklaması" />
                {formik.errors.githubLink && formik.touched.githubLink && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.githubLink}
                  </div>
                )}
              </Form.Field>

            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field label="Linkedin Link" control="text">
                <input type="text"
                  id="linkedinLink"
                  name="linkedinLink"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.linkedinLink}
                  placeholder="İş açıklaması" />
                {formik.errors.linkedinLink && formik.touched.linkedinLink && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.linkedinLink}
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
