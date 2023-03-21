import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.a`
  cursor: pointer;
  margin-right: 20px;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 190px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const SubDropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #f9f9f9;
  min-width: 190px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItemWithSub = styled.div`
  position: relative;
  &:hover ${SubDropdownContent} {
    display: block;
  }
`;


const DropdownMenu = ({ title, items }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownMouseEnter = () => {
    setShow(true);
  };

  const handleDropdownMouseLeave = () => {
    setShow(false);
  };


  return (
    <DropdownContainer ref={dropdownRef} onMouseLeave={handleDropdownMouseLeave}>
      <DropdownButton onMouseEnter={handleDropdownMouseEnter}>
        {title}
        <FaAngleDown size={13} />
      </DropdownButton>
      <DropdownContent show={show}>
        {items.map((item, index) => (
          <DropdownItemWithSub
            key={index}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <DropdownItem href={item.link}>
              {item.name}
            </DropdownItem>
            {item.subItems && (
              <SubDropdownContent>
                {item.subItems.map((subItem, subIndex) => (
                  <DropdownItem key={subIndex} href={subItem.link}>
                    {subItem.name}
                  </DropdownItem>
                ))}
              </SubDropdownContent>
            )}
          </DropdownItemWithSub>
        ))}


      </DropdownContent>
    </DropdownContainer>
  );
};

export default DropdownMenu;
