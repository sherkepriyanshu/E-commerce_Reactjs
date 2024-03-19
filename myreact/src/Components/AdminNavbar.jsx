import { Link } from "react-router-dom";
import "../Styles/AdminNavbar.css";
const AdminNavbar = () => {
    return (
        <div className="AdminNavbar">
            <div className="logo">
                <h1>Food<span>Cart</span></h1>
            </div>
            <div className="options">
                <Link to="/Adminhomepage/adminview"><h1>View</h1></Link>
                <Link to="/Adminhomepage/adminaddproduct"><h1>Add Product</h1></Link>
            </div>
        </div>
    );
}

export default AdminNavbar;