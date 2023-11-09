import React from 'react';
import {useRecoilState} from "recoil";
import {modalState} from "../../atom/modalAtom";
import Modal from "react-modal";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <>
      {open && (
        <Modal
          className={"max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white shadow-2xl rounded-md"}
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className={"flex items-center justify-between h-[100%] p-5"}>
            <img
              src={'https://www.freeiconspng.com/uploads/camera-icon-circle-21.png'}
              alt={''}
              className={"object-contain h-12 items-center justify-center"}
            />
          </div>
        </Modal>

      )}

    </>
  );
}
