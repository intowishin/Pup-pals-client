import React from "react";
import { Select } from "antd";
const { Option } = Select;


const UserProfile = () => {
  return (
    <div>
      <h1>Hooman Profile</h1>
      <form>
        <label htmlFor="input-name">Name</label>
        <input type="text" name="name" placeholder="Text" />
        <label htmlFor="input-age">Age</label>
        <input type="number" name="age" placeholder="Text" />
        <label htmlFor="input-gender">Gender</label>
        
        <Select
          style={{
            width: 120,
          }}
          allowClear
        >
          <Option value="female">Female</Option>
          <Option value="male">Male</Option>
        </Select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserProfile;
