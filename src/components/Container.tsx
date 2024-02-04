// Import the ElementType type from React
import { type ElementType } from "react";

// Define a type for the container component props
type ContainerProps = {
  // The prop 'as' is an element type that can be rendered by React
  as: ElementType;
};

// Define a container component that takes the 'as' prop and renders it
function Container({ as }: ContainerProps) {
  // Assign the 'as' prop to a variable named 'Component'
  const Component = as;
  // Return the JSX element of the 'Component' type
  return <Component />;
}

// Export the container component as a default export
export default Container;
