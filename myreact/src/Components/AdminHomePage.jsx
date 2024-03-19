import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminView from "./AdminView";
import AdminAddProduct from "./AdminAddProduct";
import EditProduct from "./EditProduct";


const AdminHomePage = () => {
    return (
        <div>

            <AdminNavbar />
            <Routes>
                <Route path="/adminview" element={<AdminView />} />
            
                <Route path="/adminaddproduct" element={<AdminAddProduct/>}/>
                <Route path="/editproduct" element={<EditProduct/>}/>
               
            </Routes>
            <h1> AdminHomePage</h1>
        </div>
    );
}

export default AdminHomePage;