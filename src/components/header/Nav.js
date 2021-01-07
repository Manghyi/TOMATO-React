import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const NavMain = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

const AddTodo = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 60px;
  height: 40px;
  padding-top: 40px;
  margin: auto;
  border-radius: 20px;
  /* background: url("../img/ico_plus_white.png") no-repeat center; */
  background-size: 24px 24px;
  background-color: #ff551f;
  box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 12px 0 16px;
`;

const Nav = () => {
  return (
    <NavMain>
      <AddTodo>할일 추가하기</AddTodo>
      <NavList>
        <li>
          <a to="./">할일</a>
        </li>
        <li>
          <a to="./">목표</a>
        </li>
        <li>
          <a to="./">통계</a>
        </li>
        <li>
          <a to="./">스케줄</a>
        </li>
      </NavList>
    </NavMain>
  );
};

export default Nav;
