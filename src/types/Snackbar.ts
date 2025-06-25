export type SnackbarType = "success" | "error";

interface Snackbar {
  id: string;
  type: SnackbarType;
  message: string;
}

export default Snackbar;
