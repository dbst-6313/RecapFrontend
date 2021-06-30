import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Icon, Image, Button, GridColumn, GridRow, Grid } from 'semantic-ui-react'
export default function MainPage() {
    let history = useHistory()
    function pushJobAdvert() {
        history.push("/jobadvert");
    }
    function pushJobSeeker() {
        history.push("/jobseeker");
    }
    function pushEmployer() {
        history.push("/employer");
    }
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={5}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>İş ilanları</Card.Header>
                                <Card.Meta>Aktif iş ilanlarını görüntüle</Card.Meta>
                                <Card.Description>
                                    Bir iş arıyorsan burası tam sana göre
                                </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Button onClick={e=>pushJobAdvert()}>İş ilanlarına git</Button>
                                </a>
                            </Card.Content>
                        </Card>

                    </GridColumn>
                    <GridColumn width={5}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>İş arayanlar</Card.Header>
                                <Card.Meta>İş Arayanları görüntüle</Card.Meta>
                                <Card.Description>
                                    İş yerin için bir kişi arıyorsan burası tam sana göre
                                </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Button  onClick={e=>pushJobSeeker()}>İş arayanlara git</Button>
                                </a>
                            </Card.Content>
                        </Card>
                    </GridColumn>
                    <GridColumn width={5}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>İş verenler</Card.Header>
                                <Card.Meta>İş Verenleri  görüntüle</Card.Meta>
                                <Card.Description>
                                    Bir iş arıyorsan burası tam sana göre
                                </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Button  onClick={e=>pushEmployer()}>İş verenlere git</Button>
                                </a>
                            </Card.Content>
                        </Card>
                    </GridColumn>
                </GridRow>
            </Grid>


        </div>
    )
}
