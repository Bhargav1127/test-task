import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type InputWithLabelProps = React.ComponentProps<"input"> & {
  label?: string;
  labelNote?: string;
  className?: string;
  id?: number | string;
  name?: string;
  placeholder?: string;
  mainClassName?: string;
  icon?: React.ReactNode;
  labelClassName?: string;
};

// eslint-disable-next-line react/display-name
const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      label,
      className,
      id,
      mainClassName,
      name,
      icon,
      labelNote,
      placeholder,
      labelClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cn(`space-y-2`, mainClassName)}>
        {label && (
          <label
            className={cn(
              "text-sm font-medium leading-normal text-foreground",
              labelClassName
            )}
            htmlFor={id as string}
          >
            {label}
            <span className="ps-1.5 text-xs text-muted">{labelNote}</span>
          </label>
        )}
        <div
          className={cn(
            "items-center gap-1 overflow-hidden",
            icon ? "flex" : ""
          )}
        >
          {icon && icon}
          <Input
            {...rest}
            id={id as string}
            name={name}
            ref={ref}
            placeholder={placeholder}
            className={cn(
              `text-foreground border px-4 font-medium border-border bg-background text-sm leading-[36px] focus:outline-none md:text-sm`,
              className
            )}
          />
        </div>
      </div>
    );
  }
);

export default InputWithLabel;
