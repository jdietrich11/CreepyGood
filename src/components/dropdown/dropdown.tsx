import React, { useState } from "react";

import Icon from "../../helper/icon/icon";

import "./dropdown.styles.scss";

interface DropdonwProps {
  name: string;
  options: string[];
}

const Dropdown: React.FC<DropdonwProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, options } = props;

  return (
    <div className="dropdownContainer">
      <div className="dropdownNameContainer" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdownName">{name}</div>
        <Icon
          icon="cheveron-down"
          size="3rem"
          color="white"
          className={isOpen ? "icon flip" : "icon"}
        />
      </div>
      <div className={isOpen ? "optionsContainer" : "none"}>
        {isOpen ? (
          options.map((item) => {
            return <div className="option">{item}</div>;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
