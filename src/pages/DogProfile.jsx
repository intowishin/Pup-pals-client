import React from "react";
import { Form, Select, Button, Input, InputNumber, Space, Card } from "antd";
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
const DogProfile = () => {
  return (
    <div>
    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
    <Card title="Pup Profile" size="large">
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
          <Input allowClear placeholder="" />
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
         <label htmlFor="input-size">Size: </label>
        <Select
          style={{
            width: 120,
          }}
          allowClear
        >
          <Option value="miniature">Miniature</Option>
          <Option value="small">Small</Option>
          <Option value="medium">Medium</Option>
          <Option value="large">Large</Option>
          <Option value="verylarge">Very Large</Option>

        </Select>
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
        <Form.Item
          label="Breed"
          name="breed"
         
        >
          <Input allowClear placeholder="" />
        </Form.Item>
        <label htmlFor="input-text">About me: </label>
        <TextArea
          allowClear
          showCount
          maxLength={100}
          placeholder="I love to eat"
          onChange={onChange}
        />
        <Button>Submit</Button>
      </Form>
      </Card>
      </Space>

    </div>
  );
};

export default DogProfile;


