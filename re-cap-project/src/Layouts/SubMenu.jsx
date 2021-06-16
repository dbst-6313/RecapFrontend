import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Input, Menu,Button } from 'semantic-ui-react'

export default function SubMenu() {

    return (
  <div>
      <Button.Group>
      <Link to="/jobadvert"><Button color="google plus">JobAdvertList</Button></Link>
      <Button.Or text="ve"/>
     <Link to="/jobseeker"> <Button color="facebook">JobSeekerList</Button></Link>
    </Button.Group>
    <Button.Or text="ve"/>
    <Button.Group>
      <Link to="/employer"><Button color="linkedin">Employer List</Button></Link>
    </Button.Group>
    </div>
      
    )
  }
