import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class nav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        console.log('asdfg',this.props);
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">fundraiser.com</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    {console.log(this.props)}
                                    {this.props.details.user_data.email}
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Profile
                              </DropdownToggle>
                                <DropdownMenu >
                                <Link
                                 to={{ pathname: '/view',
                                     state: {udata:this.props.details}}}>
                                    <DropdownItem>
                                 
                                        View
                                       
                                    </DropdownItem>
                                </Link>
                                  
                                    <DropdownItem divider />
                                    <Link
                                          to={{ pathname: '/create',
                                            state: {udata:this.props.details}}}>
                                    <DropdownItem>
                                  
                                        Update
                                       
                                  </DropdownItem>
                                  </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <Link to="/login">
                                    <NavLink><span className="fa fa-sign-in-alt"></span> Log Out</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default withRouter(nav);