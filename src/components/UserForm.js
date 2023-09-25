import React from "react";

const UserForm = () => {
  return (
    <div>
      <form>
        <label>User name</label>
        <input type="text" />
        <label>Age (years)</label>
        <input type="number" />
      </form>
    </div>
  );
};

export default UserForm;
