import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../ComponentsCSS/AdminLogin.css"

const AdminLogin = () => {
  let [uname, setuname] = useState("");
  let [password, setpassword] = useState("");

  let [admin, setadmin] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:1000/Manager')
      .then((res) => {
        console.log(res.data);
        setadmin(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  function login(e) {
    e.preventDefault();
    let a = false;

    admin.map((x) => {
      if (uname == x.name && password == x.password) {
        alert("logged in succesfullt");
        navigate('/Adminhomepage');
        a = true;
      }
    })
    if (!a) {

      alert('Invald User');
    }
  }

  return (
    <div>
      <h1>Admin Login</h1>

      {/* <form action="">
        <li>Name</li>
        <input
          type="text"
          value={uname}
          onChange={(e) => setuname(e.target.value)}
          placeholder="Enter the name"
        />

        <li>Password</li>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={login}>Login</button>
      </form>

      <Link to="/AdminSignUp">New Admin? Sign Up Here</Link> Link to AdminSignUp component */}
   

    
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address or Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={uname} onChange={(e) =>setuname(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setpassword(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={login} variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <Link to="/AdminSignUp">New Admin? Sign Up Here</Link> {/* Link to AdminSignUp component */}
    </div>

   
  );
};

export default AdminLogin;
