"use client";
/* eslint-disable react/display-name */
import { cn } from "@/lib/utils";
import React, { forwardRef, useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";

type InputWithLabelProps = React.ComponentProps<"textarea"> & {
  label?: string;
  error?: string;
  className?: string;
  id?: number | string;
  name?: string;
  maxLength?: number | undefined; // Maximum character limit
  isLength?: boolean;
  onChange?:
    | (React.ChangeEventHandler<HTMLTextAreaElement> &
        ((event: React.ChangeEvent<HTMLTextAreaElement>) => void))
    | undefined;
  value?: string;
  mainClassName?: string;
};

const TextAreaWithLabel = forwardRef<HTMLTextAreaElement, InputWithLabelProps>(
  (
    {
      label,
      className,
      id,
      name,
      error,
      maxLength,
      onChange,
      isLength = false,
      value,
      mainClassName,
      ...rest
    },
    ref
  ) => {
    const [charCount, setCharCount] = useState<number>(0);

    useEffect(() => {
      if (value) {
        setCharCount(value?.length || 0);
      }
    }, [value]);
    const handleInputChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const inputValue = event.target.value;
      setCharCount(inputValue?.length);
      onChange && onChange(event);
    };

    return (
      <div className={cn(`space-y-2`, mainClassName)}>
        {label && (
          <label
            className={`font-medium text-sm text-foreground`}
            htmlFor={id as string}
          >
            {label}
          </label>
        )}
        <div className={`relative grid items-center gap-1 overflow-hidden`}>
          <Textarea
            id={id as string}
            name={name}
            ref={ref}
            rows={3}
            value={value}
            maxLength={maxLength}
            className={`resize-none font-medium overflow-hidden text-foreground border border-border bg-background ${className}`}
            onChange={handleInputChange}
            {...rest}
          />
          {isLength && (
            <div className="absolute bottom-[10px] right-[10px] font-primary text-[14px] leading-[14px] text-[#AAACB0]">
              {charCount}/{maxLength}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default TextAreaWithLabel;
