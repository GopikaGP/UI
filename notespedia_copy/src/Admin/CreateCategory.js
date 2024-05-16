import Layout from "../components/Layout/Layout";
import DashBoard from "./AdminMenu";
import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CategoryForm from "../../src/components/Form/CategoryForm";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");


  const openEditModal = () => {
    if (selected) {
      setVisible(true);
      setUpdatedName(selected.name);
    }
  };
  // Function to create a new category
  const createCategory = () => {
    const newCategory = {
      _id: new Date().getTime().toString(), // Generating a unique ID (replace with a better approach)
      name: name,
    };
    setCategories([...categories, newCategory]);
    setName(""); // Clear the input field
  };

  // Function to update an existing category
  const updateCategory = () => {
    const updatedCategories = categories.map((c) =>
      c._id === selected._id ? { ...c, name: updatedName } : c
    );
    setCategories(updatedCategories);
    setVisible(false); // Close the modal after updating
  };

  // Function to delete an existing category
  const deleteCategory = () => {
    const updatedCategories = categories.filter((c) => c._id !== selected._id);
    setCategories(updatedCategories);
    setVisible(false); // Close the modal after deleting
  };

  useEffect(() => {
    // Mock data for testing, replace with actual data fetching logic
    const mockCategories = [
      { _id: "1", name: "Category 1" },
      { _id: "2", name: "Category 2" },
      { _id: "3", name: "Category 3" },
    ];
    setCategories(mockCategories);
  }, []);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <DashBoard />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className="p-3 w-50">
              {/* CategoryForm for creating categories */}
              <CategoryForm
                handleSubmit={(e) => {
                  e.preventDefault();
                  createCategory();
                }}
                value={name}
                setValue={setName}
              />
            </div>
            {/* table */}
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <tr key={c._id}>
                      <td>{c.name}</td>
                      <td>
                        {/* Edit button */}
                        <button
                          className="btn btn-primary ms-2"
                          onClick={() => {
                           
                          
                            setSelected(c);
                            openEditModal();
                          }}
                        >
                          Edit
                        </button>
                        {/* Delete button */}
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => {
                            deleteCategory();
                          }}
                        >
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    {/* Modal for updating categories */}
    <Modal show={visible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryForm
            handleSubmit={(e) => {
              e.preventDefault();
              updateCategory();
            }}
            value={updatedName}
            setValue={setUpdatedName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default CreateCategory;
