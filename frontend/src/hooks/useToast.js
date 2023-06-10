import { toast } from "react-toastify";

export const toastSuccess = (msg, option) => {
  toast.success(msg, {
    ...option,
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const toastError = (msg, option) => {
  toast.error(msg, {
    ...option,
    position: toast.POSITION.TOP_RIGHT,
  });
};
