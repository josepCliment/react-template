import React, { MouseEventHandler } from "react";
import Button from "react-bootstrap/Button";
import {
  InlineVariants,
  OutlineVariants,
} from "../../../../constants/Boostrap";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: InlineVariants | OutlineVariants;
}
/**
 *
 * @param label - The text of the button
 * @param type - The type of the button. It can be button, submit or reset
 * @param className - The styles of the button
 * @param onClick - The callback function
 * @returns JSX.Element
 */
const ButtonCustom = ({
  label,
  type = "button",
  className = "",
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <Button
      className={className}
      variant={variant}
      type={type}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ButtonCustom;
