import { styled } from "styled-components";

import type { ComponentPropsWithoutRef } from "react";

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #76c0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #c2e9e0;
  font-size: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

interface Props extends ComponentPropsWithoutRef<"input"> {
  label: string;
  labelFor: string;
}

const CustomInput = ({ label, labelFor, ...props }: Props) => {
  return (
    <p>
      <Label htmlFor={labelFor}>{label}</Label>
      <Input type="number" min="0" required {...props} />
    </p>
  );
};

export default CustomInput;
