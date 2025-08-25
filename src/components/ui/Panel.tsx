import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./sheet";
import React, { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface IProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  titleClassName?: string;
  contentClassName?: string;
  closeButtonClassName?: string;
}

function Panel({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  contentClassName = "sm:max-w-xs",
  titleClassName,
  closeButtonClassName,
}: IProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className={contentClassName}>
        {title && (
          <SheetHeader>
            <CloseButtonPanel closeButtonClassname={closeButtonClassName} />
            <SheetTitle {...(titleClassName && { className: titleClassName })}>
              {title}
            </SheetTitle>
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
        )}
        {children}
        {footer && <SheetFooter>{footer}</SheetFooter>}
      </SheetContent>
    </Sheet>
  );
}

export default Panel;
interface ICloseButtonProps {
  closeButtonClassname?: string;
}
export function CloseButtonPanel({ closeButtonClassname }: ICloseButtonProps) {
  return (
    <SheetClose
      className={cn(
        "w-6 h-6 bg-transparent rounded-full text-gray-700 border-2 border-gray-700 flex justify-center items-center absolute top-4 right-4",
        closeButtonClassname && closeButtonClassname
      )}
    >
      <X className="size-4" />
    </SheetClose>
  );
}
