import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef(
  ({ className, ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input ref={ref} className={`outline-none ${className}`} {...rest} />
    );
  }
);
Input.displayName = "Input";
