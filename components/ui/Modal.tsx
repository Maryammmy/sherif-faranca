import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  closeButtonClassname?: string;
}

function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  contentClassName,
  titleClassName,
  descriptionClassName,
  closeButtonClassname,
}: IProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={contentClassName}>
        {title && (
          <DialogHeader>
            <CloseButtonModal closeButtonClassname={closeButtonClassname} />
            <DialogTitle className={titleClassName}>{title}</DialogTitle>
            {description && (
              <DialogDescription className={descriptionClassName}>
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
interface ICloseButtonProps {
  closeButtonClassname?: string;
}
export function CloseButtonModal({ closeButtonClassname }: ICloseButtonProps) {
  return (
    <DialogClose
      className={cn(
        "w-6 h-6 bg-transparent rounded-full text-gray-700 border-2 border-gray-700 flex justify-center items-center absolute top-4 right-4",
        closeButtonClassname && closeButtonClassname
      )}
    >
      <X className="size-4" />
    </DialogClose>
  );
}
