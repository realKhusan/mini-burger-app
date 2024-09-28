import { useNavigate } from "react-router-dom";

function Modal({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  return (
    <>
      {open && (
        <div className="!z-30  modal-overlay" onClick={() => navigate(-1)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;
