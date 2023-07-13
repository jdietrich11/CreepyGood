import React from "react";

interface DropdonwProps {
  name: string;
  options: string[];
}

const Dropdown: React.FC<DropdonwProps> = (props) => {
  const { name, options } = props;

  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default Dropdown;
