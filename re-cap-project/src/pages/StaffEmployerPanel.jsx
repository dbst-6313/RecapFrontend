import React, { useState, useEffect } from 'react'
import { Table, Button,Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EmployerService from '../services/employerService'
import VerificationPendingEmployerService from '../services/verificationPendingEmployerService'
import { useFormik } from 'formik'
import swal from 'sweetalert'

export default function StaffEmployerPanel() {
    const [verificationPendingEmployers, setVerificationPendingEmployers] = useState([])

    useEffect(() => {
        let verificationPendingEmployerService = new VerificationPendingEmployerService;
        verificationPendingEmployerService.getAll().then(result => setVerificationPendingEmployers(result.data.data));
    }, [])

    function activateEmployer(employer) {
        let employerService = new EmployerService;
        let verificationPendingEmployerService = new VerificationPendingEmployerService;
        verificationPendingEmployerService.delete(employer);
     
        let employerModel={
            userId: employer.userId,
            companyName: employer.companyName,
            email: employer.email,
            password: employer.password,
            passwordCheck:employer.passwordCheck,
            webAdress: employer.webAdress,
            phoneNumber: employer.phoneNumber,
            verified:true
        }
        employerService.updateEmployer(employerModel)
        verificationPendingEmployerService.getAll().then(result => setVerificationPendingEmployers(result.data.data));
        swal("Başarılı", "Aktive edildi", "success");
        setTimeout(function(){
            window.location.reload(false);
        },1500)
        
    }
    return (
        <div>
            <Card fluid>
               
                {
                verificationPendingEmployers.map(verificationPendingEmployer => (
                    <Table celled inverted selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Company Name</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Web Adress</Table.HeaderCell>
                                <Table.HeaderCell>Phone Number</Table.HeaderCell>
                                <Table.HeaderCell>Is Confirmed</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{verificationPendingEmployer.companyName}</Table.Cell>
                                <Table.Cell>{verificationPendingEmployer.email}</Table.Cell>
                                <Table.Cell>{verificationPendingEmployer.webAdress}</Table.Cell>
                                <Table.Cell>{verificationPendingEmployer.phoneNumber}</Table.Cell>
                                <Table.Cell><Button inverted onClick={e => activateEmployer(verificationPendingEmployer)}>Onayla</Button></Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                ))

            }

            </Card>
          
        </div>
    )
}
