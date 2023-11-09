import React from 'react';
import {useRecoilState} from "recoil";
import {modalState} from "../../atom/modalAtom";
import Modal from "react-modal";
import {CameraIcon} from "@heroicons/react/solid";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const filePickerRef = React.useRef(null);
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
    console.log(selectedFile)
  }

  return (
    <>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className={"flex flex-col justify-center items-center h-[100%]"}>
            {selectedFile ? (
              <img onClick={()=>setSelectedFile(null)} className={"w-full max-h-[250px] object-cover cursor-pointer"} src={selectedFile} alt={"Selected Image"}/>
            ) : (
              <CameraIcon onClick={()=>filePickerRef.current.click()} className={"cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"}/>
            )}
            <input type={"file"} hidden={true} ref={filePickerRef} onChange={addImageToPost} />
            <input className={"flex-1 border-none outline-none"} type="text" maxLength={100} placeholder={"Please input caption"}/>
            <button disabled className={"text-blue-500 font-semibold "}>Upload</button>
          </div>
        </Modal>

      )}
    </>
  );
}
