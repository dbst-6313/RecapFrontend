import React, { useState } from 'react'
import { Button, GridColumn, GridRow, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import SubMenu from './SubMenu.jsx'
import JobAdvertList from '../pages/JobAdvertList.jsx'
import EmployerList from '../pages/EmployerList.jsx'
import JobSeekerList from '../pages/JobSeekerList.jsx'
import Register from './Register.jsx'
import JobAdvertAdd from '../pages/JobAdvertAdd.jsx'
import StaffVerification from '../pages/StaffVerification.jsx'
import StaffJobAdvertPanel from '../pages/StaffJobAdvertPanel.jsx'
import JobAdvertDetail from '../pages/JobAdvertDetail.jsx'
import CvUpdate from '../pages/CvUpdate.jsx'
import CvCoverLetterUpdate from '../pages/Cv/CvCoverLetterUpdate.jsx'
import MainPage from './MainPage.jsx'




export default function Dashboard() {
   
    return (
        <div>
            <Grid >
                <GridRow>
                   
                    <GridColumn width={16}>
                    <Route exact path="/" component={MainPage} ></Route>
                      <Route exact path="/jobseeker" component={JobSeekerList}></Route>
                      <Route exact path="/employer" component={EmployerList}></Route>
                      <Route exact path="/jobadvert" component={JobAdvertList}></Route>
                      <Route exact path="/register" component={Register}></Route>
                      <Route exact path="/jobadvert/add" component={JobAdvertAdd}></Route>
                      <Route exact path="/staff/verification" component={StaffVerification}></Route>
                      <Route exact path="/staff/jobadvertpanel" component={StaffJobAdvertPanel}></Route>
                      <Route exact path="/jobadvert/:id" component={JobAdvertDetail}></Route>
                      <Route exact path="/cv/update" component={CvUpdate}></Route>
                    </GridColumn>
                </GridRow>
            </Grid>
           
        </div> 

    )
}
