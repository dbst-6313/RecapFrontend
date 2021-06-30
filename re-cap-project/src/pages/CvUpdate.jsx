import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import CvCoverLetterUpdate from './Cv/CvCoverLetterUpdate';
import JobExperienceUpdate from './Cv/JobExperienceUpdate';
import LanguageUpdate from './Cv/LanguageUpdate';
import LinkUpdate from './Cv/LinkUpdate';
import ProgrammingSkillUpdate from './Cv/ProgrammingSkillUpdate';
import SchoolUpdate from './Cv/SchoolUpdate';
import {GridColumn, GridRow,Grid} from "semantic-ui-react";

export default function CvUpdate() {

    return (
        <div>
            <Grid>
                <GridRow>
               
           <GridColumn width={16}>
                <CvCoverLetterUpdate></CvCoverLetterUpdate>
                <br />
                <br />
              
                <JobExperienceUpdate></JobExperienceUpdate>
                <br />
                <br />
               
                <LanguageUpdate></LanguageUpdate>
                <br />
                <br />
                
                <LinkUpdate></LinkUpdate>
                <br />
                <br />
                <ProgrammingSkillUpdate></ProgrammingSkillUpdate>
                <br />
                <br />
                <SchoolUpdate></SchoolUpdate>
                </GridColumn>
                </GridRow>
            </Grid>
          
        </div>
    )
}
