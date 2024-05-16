import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import AdminMenu from "../Admin/AdminMenu";
import { Select, Input, Button, Table, Space, Modal } from "antd";
import { Option } from "antd/es/mentions";

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [products, setProducts] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch categories from the API or any data source
    const fetchCategories = async () => {
      // Mock data for testing (replace with actual API call)
      const mockCategories = [
        { _id: "1", name: "Mobiles" },
        { _id: "2", name: "Kids collections" },
        { _id: "3", name: "Home Decor" },
      ];
      setCategories(mockCategories);
    };

    fetchCategories();
  }, []);

  const handleCreateProduct = () => {
    // Implement logic to create a new product
    const newProduct = { name, description, category, quantity, shipping };
    setProducts([...products, newProduct]);
    resetForm();
  };

  const handleUpdateProduct = () => {
    // Implement logic to update an existing product
    const updatedProducts = products.map((p) =>
      p === selectedProduct ? { ...p, name, description, category, quantity, shipping } : p
    );
    setProducts(updatedProducts);
    resetForm();
  };

  const handleDeleteProduct = (record) => {
    // Implement logic to delete an existing product
    const updatedProducts = products.filter((p) => p !== record);
    setProducts(updatedProducts);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setCategory("");
    setQuantity("");
    setShipping("");
    setIsUpdateMode(false);
    setSelectedProduct(null);
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Shipping Details",
      dataIndex: "shipping",
      key: "shipping",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditProduct(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDeleteProduct(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEditProduct = (record) => {
    setIsUpdateMode(true);
    setSelectedProduct(record);
    setName(record.name);
    setDescription(record.description);
    setCategory(record.category);
    setQuantity(record.quantity);
    setShipping(record.shipping);
  };

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Products</h1>
            <div className="m-1">
              <Input
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input.TextArea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Select
                bordered={false}
                placeholder="Select a Category"
                size="large"
                showSearch
                className="form-select"
                onChange={(value) => setCategory(value)}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c.name}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <Input
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Input
                placeholder="Shipping Details"
                value={shipping}
                onChange={(e) => setShipping(e.target.value)}
              />
              {isUpdateMode ? (
                <Button type="primary" onClick={handleUpdateProduct}>
                  Update Product
                </Button>
              ) : (
                <Button type="primary" onClick={handleCreateProduct}>
                  Create Product
                </Button>
              )}
              <Table dataSource={products} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
