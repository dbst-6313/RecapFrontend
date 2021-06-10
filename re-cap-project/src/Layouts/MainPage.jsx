import React from 'react'
import { Button, GridColumn, GridRow, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Grid } from 'semantic-ui-react'
import SubMenu from './SubMenu.jsx'
import JobAdvertList from '../pages/JobAdvertList.jsx'
import EmployerList from '../pages/EmployerList.jsx'
import JobSeekerList from '../pages/JobSeekerList.jsx'
export default function Dashboard() {
    return (
        <div>
            <Grid >
                <GridRow>
                    <GridColumn  width={4}>
                   <SubMenu></SubMenu>
                    </GridColumn>
                    <GridColumn width={12}>
                      <JobSeekerList></JobSeekerList>
                    </GridColumn>
                </GridRow>
            </Grid>
           
        </div>

    )
}
