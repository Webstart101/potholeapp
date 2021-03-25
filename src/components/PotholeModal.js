import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { firestore, storage, timestamp } from '../auth/Firebase';



export const Modal = ({ showModal, setShowModal, coordLat, coordLng }) => {

    const { handleSubmit } = useForm()

    const [issueDesc, setIssueDesc] = useState("")
    const [loc, setLoc] = useState("");
    // const [lat, setLat] = useState("");
    // const [lng, setLng] = useState("");

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    function fileSelectedHandler(event) {

        let selected = event.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }

    function fileUploadHandler() {

    }

    async function onSubmit(data) {
        //alert("Clicked")
        //console.log(data)
        setShowModal(false)
        fileUploadHandler()

        const url = await storage.ref(file.name).getDownloadURL();
        const createdAt = timestamp();

        await firestore.collection("issues")
            .add({
                IssueDesc: issueDesc,
                Location: loc,
                Latitude: coordLat,
                Longitude: coordLng,
                ImageFile: url,
                CreatedAt: createdAt

            })
            .then(() => {
                alert("Uploaded")
            })
            .catch((error) => {
                alert(error)
            })

        setIssueDesc("")
        setLoc("")

    }


    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold ">Add Issue</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                           </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        
                                        <>
                                            <label class="block text-grey-darker text-sm font-bold mb-2">Location</label>
                                        </>
                                        <>
                                            <input
                                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                                name="location"
                                                type="text"
                                                value={loc}
                                                onChange={(e) => setLoc(e.target.value)}
                                            />
                                        </>

                                        <>
                                            <label class="block text-grey-darker text-sm font-bold mb-2">Latitude</label>
                                        </>
                                        <>
                                            <input
                                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-transparent"
                                                name="latitude"
                                                type="text"
                                                value={coordLat}
                                                readOnly
                                            // onChange={(e) => setLat(e.target.value)}
                                            />
                                            {/* <button type='button' onClick={getLat}>Get Lat</button> */}
                                        </>


                                        <>
                                            <label class="block text-grey-darker text-sm font-bold mb-2">Longitude</label>
                                        </>
                                        <>
                                            <input
                                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-transparent"
                                                name="longitude"
                                                type="text"
                                                value={coordLng}
                                                readOnly
                                            />
                                        </>

                                        <>
                                            <label class="block text-grey-darker text-sm font-bold mb-2">Brief Description of Issue</label>
                                        </>
                                        <>
                                            <input
                                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                                name="issueDescription"
                                                type="text"
                                                value={issueDesc}
                                                onChange={(e) => setIssueDesc(e.target.value)}
                                            />
                                        </>

                                        <>
                                            <label class="block text-grey-darker text-sm font-bold mb-2">Upload Image</label>
                                        </>
                                        <>
                                            <input
                                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                                name="image"
                                                type="file"
                                                onChange={fileSelectedHandler}
                                            />
                                        </>
                                        <div className="output">
                                            {error && <div className="error">{error}</div>}


                                        </div>

                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >Close</button>
                                            <button
                                                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            // onClick={() => setShowModal(false)}
                                            >Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default Modal;


// import React from "react";

// export default function Modal() {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       {showModal ? (
        // <>
        //   <div
        //     className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        //   >
        //     <div className="relative w-auto my-6 mx-auto max-w-3xl">
        //       {/*content*/}
        //       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        //         {/*header*/}
        //         <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        //           <h3 className="text-3xl font-semibold">
        //             Modal Title
        //           </h3>
        //           <button
        //             className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        //             onClick={() => setShowModal(false)}
        //           >
        //             <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
        //               ×
        //             </span>
        //           </button>
        //         </div>
        //         {/*body*/}
        //         <div className="relative p-6 flex-auto">
        //           <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        //             I always felt like I could do anything. That’s the main
        //             thing people are controlled by! Thoughts- their perception
        //             of themselves! They're slowed down by their perception of
        //             themselves. If you're taught you can’t do anything, you
        //             won’t do anything. I was taught I could do everything.
        //           </p>
        //         </div>
        //         {/*footer*/}
        //         <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        //           <button
        //             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //             type="button"
        //             onClick={() => setShowModal(false)}
        //           >
        //             Close
        //           </button>
        //           <button
        //             className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //             type="button"
        //             onClick={() => setShowModal(false)}
        //           >
        //             Save Changes
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        // </>
//       ) : null}
//     </>
//   );
// }

