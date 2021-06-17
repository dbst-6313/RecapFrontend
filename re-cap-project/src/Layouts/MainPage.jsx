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



export default function Dashboard() {
   
    return (
        <div>
            <Grid >
                <GridRow>
                    <GridColumn  width={4}>
                        <SubMenu></SubMenu>
                    </GridColumn>
                    <GridColumn width={12}>
                    <Route exact path="/" component={JobAdvertList}></Route>
                      <Route exact path="/jobseeker" component={JobSeekerList}></Route>
                      <Route exact path="/employer" component={EmployerList}></Route>
                      <Route exact path="/jobadvert" component={JobAdvertList}></Route>
                      <Route exact path="/register" component={Register}></Route>
                      <Route exact path="/jobadvertadd" component={JobAdvertAdd}></Route>
                      <Route exact path="/staffverification" component={StaffVerification}></Route>
                      <Route exact path="/staffjobadvertpanel" component={StaffJobAdvertPanel}></Route>
                    </GridColumn>
                </GridRow>
            </Grid>
           
        </div> 

    )
}
