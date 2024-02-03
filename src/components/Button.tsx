import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

function Button(props: ButtonProps | AnchorProps) {
  //   const { el, ...otherProps } = props;
  if (props.el === "anchor") {
    return <a {...props} className="button"></a>;
  }

  return <button {...props} className="button"></button>;
}

export default Button;
