import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Row, Col, Container } from 'reactstrap';
import { getCall } from '../services/api';
import RefreshIndicator from 'material-ui/RefreshIndicator';

var padding = {
    padding: '20px 0px 30px 50px'
};

var padding2 = {
    padding: '20px 0px 30px 0px'
};
const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};

export default class extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            userdata: []
        }
        this.auth = localStorage.getItem('Auth');
    }





    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.getProfile();
        });
    }

    getProfile() {
        // var headers = {
        //     'Auth': this.auth
        // }
        var url = 'fundraisers/' + this.props.details.user_data.id;
        getCall(url)
            .then((response) => {
                console.log('response ::::::::', response.data);
                this.setState({ userdata: response.data, loading: false });
                console.log('yooooooooooooooooo', this.state.userdata);
            }
            )
            .catch((error) => {

                console.log('error:::::::', error);
                this.setState({ loading: false });
            }
            )
    }


    render() {
        if (this.state.loading)
            return (
               
                    <div style={style.container} className="margin-indicator">
                        <RefreshIndicator
                            size={150}
                            left={150}
                            top={50}
                            loadingColor="#FF9800"
                            status="loading"
                            style={style.refresh}
                        />
                    </div>
            
            )

        return (
            <Container className="font-size">
                <Row>
                    <Col sm="1"></Col>
                    <Col sm="10">

                        <Card
                            style={padding}
                        >
                            <Row className="margin-top">
                                {/* <Container> */}
                                <Col md="3">
                                    <img src="https://statics.sportskeeda.com/wp-content/uploads/2016/03/lionel-messi-1458300272-800.jpg" class="rounded" alt="Cinque Terre" width="200" height="250" />

                                </Col>
                                <Col md="8">
                                    <h2>{this.state.userdata.first_name} {this.state.userdata.last_name} </h2>
                                    <h6><i>{this.state.userdata.organization_name}
                                    </i></h6>
                                    <hr />

                                    <Row className="margin-top">
                                        <Col sm="3" className="headings">DOB</Col>
                                        <Col sm="9">{this.state.userdata.dob}</Col>
                                    </Row>

                                    <Row className="margin-top">
                                        <Col sm="3" className="headings">Address</Col>
                                        <Col sm="9">{this.state.userdata.street} , {this.state.userdata.city},{this.state.userdata.zip}</Col>
                                    </Row>

                                    <Row className="margin-top">
                                        <Col sm="3" className="headings">Email</Col>
                                        <Col sm="9">{this.state.userdata.email}</Col>
                                    </Row>

                                    <Row className="margin-top">
                                        <Col sm="3" className="headings">Phone</Col>
                                        <Col sm="9">{this.state.userdata.country_code} {this.state.userdata.phone}</Col>
                                    </Row>





                                </Col>
                                {/* </Container> */}
                            </Row>
                        </Card>
                        <Card
                            className="green"
                            style={padding2}
                        >
                            <div className="text-center">
                                <a href={this.state.userdata.facebook_link}>    <span className="fab fa-facebook-f"></span></a>
                                <a href={this.state.userdata.twitter_link}>     <span className="fab fa-twitter margin-left"></span></a>
                                <a href={this.state.userdata.google_link}>     <span className="fab fa-google margin-left"></span></a>
                            </div>

                        </Card>
                    </Col>
                    <Col sm="1"></Col>
                </Row>
            </Container>

        )
    }
}
