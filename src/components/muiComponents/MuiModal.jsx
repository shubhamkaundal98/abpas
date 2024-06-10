import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";

export default function MuiModel({
  open,
  handleClose,
  children,
  modelHeading,
  className,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto rounded-md ${className}`}
        >
          <div className="flex justify-between items-center bg-blue-base rounded-t-sm py-2 px-3 text-white text-xl font-medium">
            <h1 id="modal-modal-title">{modelHeading}</h1>
            <RxCross2
              onClick={handleClose}
              className="hover:cursor-pointer text-2xl font-semibold"
            />
          </div>
          <div id="modal-modal-description" className="my-3 mx-5">
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
}
