import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignUp = () => {

    let navigate = useNavigate("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profile, setProfile] = useState("");
    const adminData = { name, email, password, phone, profile };

    function adminlogin()
    {
        navigate(`/admin`)
    }
    const addAdmin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:1000/Manager', adminData)
            .then((res) => {
                alert("admmin added succesfully");
                adminlogin();
            })
            .catch((err) => {
                alert("INvalid Data");
            });



        // fetch('http://localhost:1000/Manager', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(adminData)
        // })
        //     .then((res) => {
        //         if (res.ok) {
        //             alert("Admin added successfully");
        //         } else {
        //             alert("Failed to add admin");
        //         }
        //     })
        //     .catch((err) => {
        //         console.error("Error:", err);
        //         alert("Failed to add admin");
        //     });
    }

    return (
        <div id="AdminSignUp">
            <form onSubmit={addAdmin}>
                <label>
                    Name:
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                </label><br />
                <label>
                    Email:
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label><br />
                <label>
                    Password:
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label><br />
                <label>
                    Phone:
                    <input type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label><br />
                <label>
                    Profile Image:
                    <input type="text" placeholder="Enter the profile image URL" value={profile} onChange={(e) => setProfile(e.target.value)} />
                </label><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default AdminSignUp;
