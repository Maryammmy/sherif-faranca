import { LabelHTMLAttributes, ReactNode } from "react";

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}
function Label({ children, ...rest }: IProps) {
  return <label {...rest}>{children}</label>;
}

export default Label;
