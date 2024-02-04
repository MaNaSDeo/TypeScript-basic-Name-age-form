// Import the type for component props without ref from React
import { type ComponentPropsWithoutRef } from "react";

// Define a type for the input component props
type InputProps = {
  // The prop 'label' is a string that represents the input label
  label: string;
  // The prop 'id' is a string that represents the input id
  id: string;
} & ComponentPropsWithoutRef<"input">;

// Define an input component that takes the input props
function Input({ label, id, ...props }: InputProps) {
  // Return a paragraph element that contains a label and an input element
  return (
    <p>
      // Render a label element with the 'htmlFor' attribute set to the input id
      <label htmlFor={id}>{label}</label>
      // Render an input element with the 'id' attribute set to the input id and
      the rest of the props spread
      <input id={id} {...props} />
    </p>
  );
}

// Export the input component as a default export
export default Input;
