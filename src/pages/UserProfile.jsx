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
    const { data } = await axios.get(`http://localhost:5005/user/${id}`);
    setUser(() => data);
    setFormData(() => data);
  };


  const updateProfile = async () => {
    const { data } = await axios.post(
      `http://localhost:5005/user/${id}`,
      formData
    );
    setUser(data);
    navigateTo("/dog/profile");
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

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      updateProfile();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Hooman Profile</h1>
      <Form onSubmit={onSubmit}>
        <Form.Item
          label="Name"
          name="name"
          value={formData.name}
          onChange={onChange}
        >
          <Input allowClear placeholder="Vending machine" />
        </Form.Item>

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
          onChange={onChange}
        />
        <label htmlFor="input-gender">Gender: </label>
        <Select
          style={{
            width: 120,
          }}
          value={formData.gender}
          allowClear
          onChange={onChange}
        >
          <Option value="female">Female</Option>
          <Option value="male">Male</Option>
        </Select>
        <label htmlFor="input-text">About my hooman: </label>
        <TextArea
          allowClear
          showCount
          maxLength={100}
          value={formData.about}
          placeholder="My hooman is the best..."
          onChange={onChange}
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default UserProfile;
