import { cookies } from "next/headers";

export const FLAGS = {
  VIEW_LOCAL_RESUME: "boolean",
  STRING_VALUE: "string",
  NUMBER_VALUE: "number",
  BOOLEAN_VALUE: "boolean",
} as const;

type ConfigurationType = typeof FLAGS;
type KeyType = keyof ConfigurationType;
type DerivedType<T extends KeyType> =
  ConfigurationType[T] extends "boolean" ? boolean :
  ConfigurationType[T] extends "string" ? string :
  ConfigurationType[T] extends "number" ? number : unknown;

export const getFlag = async <Key extends KeyType, Type = DerivedType<Key>>(flag: Key): Promise<Type> => {
  const store = await cookies();
  const value = store.get(flag)?.value;
  const type = FLAGS[flag];

  switch (type) {
    case "boolean":
      return (value === "true") as Type;
    case "number":
      return (Number(value ?? 0)) as Type;
    case "string":
    default:
      return (value ?? "") as Type;
  }
}