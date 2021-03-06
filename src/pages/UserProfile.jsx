import { useState, useEffect } from "react";
import { Form, Select, Button, Input, InputNumber } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const { Option } = Select;
const { TextArea } = Input;

const UserProfile = () => {
  const defaultFormData = {
    name: "",
    age: 0,
    gender: "",
    about: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const navigateTo = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState();

  const getProfileDetails = async () => {
    const { data } = await axios.get(`http://localhost:5005/api/user/${id}`);
    setUser(() => data);
    setFormData(() => data);
  };


  const updateProfile = async () => {
    const { data } = await axios.post(
      `http://localhost:5005/api/user/${id}`,
      formData
    );
    setUser(data);
    
  };

  useEffect(() => {
    try {
      getProfileDetails();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeNumber = (value) => {
    setFormData({
      ...formData,
      age: value,
    });
  };

  const onChangeSelect = (value) => {
    setFormData({
      ...formData,
      gender: value,
  });
  };


  const onSubmit = () => {
    try {
      updateProfile();
      navigateTo("/dog/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Hooman Profile</h1>
      <Form onFinish={onSubmit}>
       <label htmlFor="input-name">Name: </label>
          <Input allowClear placeholder="Vending machine" 
          label="Name"
          name="name"
          value={formData.name}
          onChange={onChange}
          />

        <label htmlFor="input-age">Age: </label>
        <InputNumber
          type="number"
          name="age"
          value={formData.age}
          placeholder="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
          onChange={onChangeNumber}
        />
        <label htmlFor="input-gender">Gender: </label>
        <Select
          style={{
            width: 120,
          }}
          name="gender"
          value={formData.gender}
          allowClear
          onChange={onChangeSelect}
        >
          <Option value="female">Female</Option>
          <Option value="male">Male</Option>
        </Select>
        <label htmlFor="input-text">About my hooman: </label>
        <TextArea
          allowClear
          showCount
          maxLength={100}
          name="about"
          value={formData.about}
          placeholder="My hooman is the best..."
          onChange={onChange}
        />
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default UserProfile;
