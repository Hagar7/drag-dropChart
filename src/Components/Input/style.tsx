import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = motion(styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 40px 0 20px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`);

export const InputName = styled.h5`
  width: 20%;
  font-size: 17px;
  @media screen and (max-width: 991px) {
    margin: 15px 0;
  }
`;

export const InputFieldContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const InputField = styled.div`
  height: 40px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid #f9004d;
  width: 75%;
  display: flex;
  gap: 5px;
`;

export const InputBtn = styled.button`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  width: 60px;
  background-color: #212428;
  color: #fff;
  border: 1px solid #212428;
`;
