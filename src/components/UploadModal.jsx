import React from 'react';
import {useRecoilState} from "recoil";
import {modalState} from "../../atom/modalAtom";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);


  return (
    <>
      {open && (
        <div className={"fixed z-10 inset-0 overflow-y-auto"}>
          <div className={"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"}>
            <div className={"fixed inset-0 transition-opacity"} aria-hidden={"true"}>
              <div className={"absolute inset-0 bg-gray-500 opacity-75"}></div>
            </div>
            <span className={"hidden sm:inline-block sm:align-middle sm:h-screen"} aria-hidden={"true"}>&#8203;</span>
          </div>
        </div>

      )}

    </>
  );
}
