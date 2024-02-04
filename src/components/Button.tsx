import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

function Button(props: ButtonProps | AnchorProps) {
  //   if (props.href) { //Will give error.
  if (isAnchorProps(props)) {
    return <a {...props} className="button"></a>;
  }

  return <button {...props} className="button"></button>;
}

export default Button;
