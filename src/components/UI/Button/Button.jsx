import { But } from "./Button.styled";

export default function Button({text, type}) {
  return <But type={type}>{text}</But>;
}
