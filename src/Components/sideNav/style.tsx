import { motion } from "framer-motion";
import styled from "styled-components";

export const Side = motion(styled.div`
  width: 20%;
  height: 100vh;
  background-color: #212428;
  max-width: 20%;
`);

export const TitleContainer = styled.div`
  border: 1px solid #f9004d;
  padding: 30px 20px;
`;

export const Title = styled.div`
  color: #fff;
`;

export const Lists = styled.div`
  padding: 30px 20px;
`;
