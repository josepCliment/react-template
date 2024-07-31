import { Form } from "react-bootstrap";

type TextInputType = "text" | "email" | "password" | "textarea";
interface TextInputProps {
  label: string;
  value: string;
  className?: string;
  type?: TextInputType;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  label,
  value,
  className,
  type = "text",
  placeholder,
  onChange,
}: TextInputProps) => {
  return (
    <Form.Group className={`mb-3 ${className}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default TextInput;
