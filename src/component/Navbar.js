import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import HandleUserDetails from '../redux/logincheck';
import { logout} from '../redux/useSlice';
import { useDispatch } from 'react-redux';

function Navbars() {
    var dispatch=useDispatch()
    var userinfo=HandleUserDetails()

    function handleLogout() {
        dispatch(logout());
        localStorage.removeItem('token')
    }

    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{minHeight:'7%'}}>
                <Navbar.Brand className='fontstyle'><h2><b>GMIT HR</b></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                    {/* <Nav.Link className='unav' as={Link} to="/">
                        Search
                    </Nav.Link> */}
                    {
                    userinfo?
                    <>
                    <Nav.Link as={Link} to="/studentdashboard">
                        {userinfo.name}
                    </Nav.Link>
                    <Button className='rounded-pill' size="sm" onClick={()=>{handleLogout()}}>Logout</Button>
                    </>
                    :
                    <>
                    <Nav.Link className='unav' as={Link} to="/login">
                    <i className='fa fa-sign-in'></i>
                      <b>LogIn</b>
                       
                    </Nav.Link>
                    <Nav.Link className='unav' as={Link} to="/signup">
                    <i className='fa fa-user-plus'></i>
                       <b>SignUp</b>
                        </Nav.Link>
                    </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
export default Navbars;