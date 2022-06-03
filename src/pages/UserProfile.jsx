import React from "react";
import { Form, Select, Button, Input, InputNumber } from "antd";
const { Option } = Select;
const { TextArea } = Input;
const onChange = (e) => {
  console.log("Change:", e.target.value);
};
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 4,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const UserProfile = () => {
  return (
    <div>
      <h1>Hooman Profile</h1>
      <Form
        {...layout}
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input allowClear placeholder="Vending machine" />
        </Form.Item>

        <label htmlFor="input-age">Age: </label>
        <InputNumber
          type="number"
          name="age"
          placeholder="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        />
        <label htmlFor="input-gender">Gender: </label>
        <Select
          style={{
            width: 120,
          }}
          allowClear
        >
          <Option value="female">Female</Option>
          <Option value="male">Male</Option>
        </Select>
        <label htmlFor="input-text">About my hooman: </label>
        <TextArea
          allowClear
          showCount
          maxLength={100}
          placeholder="My hooman is the best..."
          onChange={onChange}
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default UserProfile;


