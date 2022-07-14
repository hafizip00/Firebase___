import { storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const FileUploading = (data) => {
  console.log(data.name);
  const storageRef = ref(storage, data.name);
  const uploadTask = uploadBytesResumable(storageRef, data);
  uploadTask.on(
    "state_changed",
    (snap) => {
      const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
      console.log(progress);
    },
    (err) => {
      console.log(err);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
      });
    }
  );
};
