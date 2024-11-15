import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OptionsType } from "@/lib/types/common";
import { ReactNode } from "react";

type SelectType = React.ComponentPropsWithoutRef<typeof Select>;
interface SelectMenuProps extends SelectType {
  onChange?: (val: string) => void;
  options: OptionsType[];
  placeholder?: string | ReactNode;
  className?: string;
  contentClassName?: string;
  itemClassName?: string;
  placeholderPrefix?: string;
  align?: "center" | "start" | "end";
}

const SelectMenu = ({
  options,
  onChange = () => {},
  placeholder,
  contentClassName,
  itemClassName,
  className,
  align,
  disabled,
  placeholderPrefix,
  ...props
}: SelectMenuProps) => {
  return (
    <Select disabled={disabled} onValueChange={onChange} {...props}>
      <SelectTrigger
        className={`gap-1 h-auto leading-[36px] px-4 py-2 text-base ${className}`}
        disabled={disabled}
      >
        {placeholderPrefix && placeholderPrefix}{" "}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent align={align} className={`${contentClassName}`}>
        <div className="flex flex-col gap-2 md:gap-4">
          {options.map((option, index) => {
            return (
              <SelectItem
                key={`${option.value}-${index}`}
                value={option.value}
                className={`text-xs md:text-base ${itemClassName}`}
              >
                {option.label}
              </SelectItem>
            );
          })}
        </div>
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
