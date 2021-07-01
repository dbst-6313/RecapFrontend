import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import VerificationPendingEmployerService from '../services/verificationPendingEmployerService'
import * as Yup from 'yup';
import { Button, Card, Form, Select } from "semantic-ui-react";
import swal from 'sweetalert';
import EmployerService from '../services/employerService';
export default function EmployerUpdate() {
    const [employer,setEmployer] = useState({});
    useEffect(() => {
        let employerService = new EmployerService;
        employerService.getEmployerById(13).then(result=>setEmployer(result.data.data))
    }, [])
    const validationYup = Yup.object().shape({
          companyName:Yup.string().required("companyName ALANI ZORUNLU"),
          email:Yup.string().required("Email alanı zorunlu"),
          password:Yup.string().required("password alanı zorunlu"),
          passwordCheck:Yup.string().required("passwordCheck alanı zorunlu"),
          webAdress:Yup.string().required("Web addres alanı zorunlu"),
          phoneNumber:Yup.string().required("Phonenumber alanı zorunlu")
    })
    const formik = useFormik({
        initialValues: {
            userId: "",
            companyName: "",
            email: "",
            password: "",
            passwordCheck:"",
            webAdress: "",
            phoneNumber: "",
        },
        validationSchema: validationYup,
        onSubmit: (values) => {
            let verificationPendingEmployerService = new VerificationPendingEmployerService;
            employer.verified = false;
            let employerService = new EmployerService;
            employerService.updateEmployer(employer);
            values.userId = 13;
            let VerificationPendingEmployerModel={
                companyName: values.companyName,
                email: values.email,
                password: values.password,
                passwordCheck:values.passwordCheck,
                phoneNumber: values.phoneNumber,
                userId: values.userId,
                webAdress: values.webAdress
            }
            
           verificationPendingEmployerService.add(VerificationPendingEmployerModel).then(swal("Başarılı","Kayıt alındı bilgileriniz personellerimiz tarafından onaylandığında güncellenecektir","success"))
        }
    })
    return (
        <div>
            <Card fluid>
                <Card.Content header="Firma bilgilerini güncelle"></Card.Content>
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Field control="text">
                                <input type="text"
                                    id="companyName"
                                    name="companyName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.companyName}
                                    placeholder="Firma ismi" />
                                {formik.errors.companyName && formik.touched.companyName && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.companyName}
                                    </div>
                                )}
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Field control="text">
                                <input type="email"
                                    id="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    placeholder="Email" />
                                {formik.errors.email && formik.touched.email && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.email}
                                    </div>
                                )}
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Field control="text">
                                <input type="text"
                                    id="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    placeholder="Şifre" />
                                {formik.errors.password && formik.touched.password && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.password}
                                    </div>
                                )}
                            </Form.Field>
                            <Form.Field control="text">
                                <input type="text"
                                    id="passwordCheck"
                                    name="passwordCheck"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passwordCheck}
                                    placeholder="Şifre tekrarı" />
                                {formik.errors.passwordCheck && formik.touched.passwordCheck && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.passwordCheck}
                                    </div>
                                )}
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Field control="text">
                                <input type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phoneNumber}
                                    placeholder="Telefon numarası" />
                                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.phoneNumber}
                                    </div>
                                )}
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Field control="text">
                                <input type="text"
                                    id="webAdress"
                                    name="webAdress"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.webAdress}
                                    placeholder="Web Adresi" />
                                {formik.errors.webAdress && formik.touched.webAdress && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.webAdress}
                                    </div>
                                )}
                            </Form.Field>
                        </Form.Group>
                        <Button type="submit">Güncelle</Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}
