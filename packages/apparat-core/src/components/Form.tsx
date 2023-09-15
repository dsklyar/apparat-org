import tw, { styled } from "twin.macro";
import { useForm, UseFormRegister, Path } from "react-hook-form";

type FieldType = "input" | "textarea" | "select";

interface IField<T> {
  type: FieldType;
  label: string;
  validation?: RegExp;
  defaultValue?: T | Array<T>;
  placeholder?: string;
}

interface ISchema {
  layout: string[];
  properties: Record<string, IField<string | number>>;
}

const schema: ISchema = {
  layout: ["name", "age"],
  properties: {
    name: {
      type: "input",
      label: "Name of user",
      placeholder: "Daniel Sklyar",
    },
    age: {
      type: "input",
      label: "Age of user",
      defaultValue: 18,
    },
  },
};

export const Form = () => {
  const { register } = useForm();
};

export default Form;

interface IInputProps {
	name: string;
  label: string | JSX.Element;
}

function Input({ name, label }: IInputProps) {
  return (
    <>
      <label>{label}</label>
      <input />
    </>
  );
}
