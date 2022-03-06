import { useEffect, useState } from "react";

type Props = {
  message: string;
};

export default function Toast(props: Props): JSX.Element {
  // const { toastList } = props;
  // const [list, setList] = useState(toastList);
  // useEffect(() => {
  //   setList(toastList);
  // }, [toastList, list]);

  return (
    <>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          id="liveToast"
          className="toast show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-danger text-white">
            <strong className="me-auto">Foutmelding</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">{props.message}</div>
        </div>
      </div>
    </>
  );
}
