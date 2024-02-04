// Import the type for component props without ref from React
import { type ComponentPropsWithoutRef } from "react";

// Define a type for the button component props
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  // The prop 'href' is optional and can only be undefined
  href?: never;
};

// Define a type for the anchor component props
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  // The prop 'href' is optional and can be a string
  href?: string;
};

// Define a type guard function that checks if the props are of the anchor type
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  // Return true if the props have the 'href' property
  return "href" in props;
}

// Define a button component that takes either the button or the anchor props
function Button(props: ButtonProps | AnchorProps) {
  // If the props are of the anchor type, render an anchor element
  if (isAnchorProps(props)) {
    return <a {...props} className="button"></a>;
  }

  // Otherwise, render a button element
  return <button {...props} className="button"></button>;
}

// Export the button component as a default export
export default Button;
