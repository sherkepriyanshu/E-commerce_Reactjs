import axios from "axios";
import {useEffect, useState} from "react";
import "../Styles/AdminView.css";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {useNavigate} from "react-router-dom";

const AdminView = () => {
    let [data, setdata] = useState([]);
    let [force, setforce] = useState(true);
    let navigate = useNavigate("");

    useEffect(() => {
        axios
        .get("http://localhost:1000/Product")
        .then((res) => {
            console.log(res.data);
            setdata(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [force]);

    let removeDish = (id, dishname) => {
        axios
        .delete(`http://localhost:1000/Product/${id}`)
        .then((res) => {
            alert(`${id} &{name} has been deleted succesfully`);
            setforce(!force);
        })
        .catch((error) => {
            alert(`Failed to delete &{dishname}`);
        });
    };

    function editpage(id) {
        navigate(`/Adminhomepage/editproduct/${id}`);
    }

    return (
        <div className="adminviewpage">
            {data.map((x, index) => (
                <div className="displayproducts" key={index}>
                    <img src={x.thumbnail} alt="" />
                    <div className="resturant">
                        <h5>{x.restaurant}</h5>
                        <b>
                            {x.ratings} <StarIcon id="star" />
                        </b>
                    </div>
                    <h4>{x.name} </h4> {/* Assuming 'restaurant' is the correct property name */}
                    <div className="edt">
                        <h6>{x.desc}</h6>
                        <button
                            onClick={() => {
                                editpage(x.id);
                            }}>
                            edit <EditIcon />
                        </button>
                        <button
                            onClick={() => {
                                removeDish(x.id, x.disname);
                            }} >
                            delete
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminView;
