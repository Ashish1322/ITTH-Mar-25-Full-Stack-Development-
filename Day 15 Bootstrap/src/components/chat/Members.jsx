import React from "react";
import useGroup from "../../context/hooks/useGroup";
export default function Members() {
  const { selectedGroup } = useGroup();
  console.log(selectedGroup);
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {selectedGroup?.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>
                <b>Members:</b>
                {selectedGroup?.participants.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex gap-2 align-items-center border-bottom p-2 m-2"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                      alt="avatar"
                    />
                    <p>{item.user.name}</p>
                  </div>
                ))}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
