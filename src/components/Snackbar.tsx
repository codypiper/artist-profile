import type Snackbar from "@/types/Snackbar";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface SnackbarProps extends Omit<Snackbar, "id"> {
  close: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, type, close }) => (
  <li
    className={clsx(
      "text-md drop-shadow-dark pointer-events-auto flex w-fit items-center gap-4 rounded-md p-4 align-middle font-medium text-balance",
      type === "success"
        ? "bg-success-bg text-success-dark"
        : "bg-error-bg text-error-dark",
    )}
  >
    <span className="px-2">{message}</span>
    <button
      type="button"
      onClick={close}
      className={clsx(
        "cursor-pointer font-bold transition duration-200",
        type === "success"
          ? "hover:text-success-darker"
          : "hover:text-error-darker",
      )}
    >
      <FontAwesomeIcon icon={faXmark} size="lg" />
    </button>
  </li>
);

export default Snackbar;
