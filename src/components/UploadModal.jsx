import React from 'react';
import {useRecoilState} from "recoil";
import {modalState} from "../../atom/modalAtom";
import Modal from "react-modal";
import {CameraIcon} from "@heroicons/react/solid";
import {addDoc, collection, doc, serverTimestamp, updateDoc} from "firebase/firestore";
import {db, storage} from "@/lib/firebase";
import {useSession} from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const {data: session} = useSession()

  const uploadPost = async () => {
    if(loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, 'posts'), {
      'username': session.user.username,
      'caption': captionRef.current.value,
      'profileImg': session.user.image,
      'timestamp': serverTimestamp(),
    })
    const imageRef = ref(storage, `posts/${docRef.id}/image`)
    await uploadString(imageRef, selectedFile, 'data_url').then(async snapshot => {
      const downloadURL = await getDownloadURL(imageRef)
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      })
    })

    setOpen(false);
    setLoading(false);
    setSelectedFile(null)
  }
  const filePickerRef = React.useRef(null);
  const captionRef = React.useRef(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
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
            <input
              className={"flex-1 border-none outline-none"}
              type="text"
              maxLength={100}
              placeholder={"Please input caption"}
              ref={captionRef}
            />
            <button
              disabled={!selectedFile || loading}
              onClick={uploadPost}
              className={"text-blue-500 font-semibold"}
            >
              Upload
            </button>
          </div>
        </Modal>

      )}
    </>
  );
}
