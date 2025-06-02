import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [formData, setFormData] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formdata")) || [];
    setFormData(storedData);
  }, []);

  const getData = (noteData) => {
    if (editUserId) {
      const updatedData = formData.map((item) =>
        item.id === editUserId ? { ...noteData, id: editUserId } : item
      );
      setFormData(updatedData);
      localStorage.setItem("formdata", JSON.stringify(updatedData));
      setEditUserId(null);
    } else {
      const newUser = { ...noteData, id: uuidv4() };
      const updatedData = [...formData, newUser];
      setFormData(updatedData);
      localStorage.setItem("formdata", JSON.stringify(updatedData));
    }
  };

  const deleteHandler = (id) => {
    const filteredData = formData.filter((item) => item.id !== id);
    setFormData(filteredData);
    localStorage.setItem("formdata", JSON.stringify(filteredData));
  };

  return (
    <div className="wrapper">
      <Form
        formData={formData}
        getData={getData}
        editUserId={editUserId}
        setEditUserId={setEditUserId}
      />
      <UserDetails
        formData={formData}
        deleteHandler={deleteHandler}
        setEditUserId={setEditUserId}
      />
    </div>
  );
};

export default App;
