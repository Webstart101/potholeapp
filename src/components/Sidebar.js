import React, { useEffect, useState } from 'react'
import { firestore } from '../auth/Firebase'

const Sidebar = () => {

    var ref = firestore.collection("Business")
    const [issue, setIssue] = useState([]);


    function getIssue() {

        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setIssue(items);
        });
    }

    useEffect(() => {
        getIssue();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {issue.map((issue) => (
                <figure key={issue.id} class="md:flex m-4 bg-green-100 rounded-3xl p-6 md:p-2">
                    <img src={issue.name} alt="" class="w-18 h-18 md:w-24 md:h-auto md:rounded-xl rounded-full mx-2 my-2" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-2 shadow-xl">
                        <figcaption class="font-medium">
                            <div class="text-blue-600 text-lg">{issue.street}</div>
                            {/* <div class="text-gray-500 text-sm">{business.Location}</div> */}
                        </figcaption>
                    </div>
                </figure>
                
            ))}
        </div>
    )
}

export default Sidebar
