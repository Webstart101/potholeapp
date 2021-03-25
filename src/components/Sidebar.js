import React, { useEffect, useState } from 'react'
import { firestore } from '../auth/Firebase'

const Sidebar = () => {

    var ref = firestore.collection("issues")
    const [business, setBusiness] = useState([]);


    function getBusiness() {

        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setBusiness(items);
        });
    }

    useEffect(() => {
        getBusiness();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {business.map((business) => (
                <figure key={business.id} class="md:flex m-4 bg-green-100 rounded-3xl p-6 md:p-2">
                    <img src={business.ImageFile} alt="" class="w-18 h-18 md:w-24 md:h-auto md:rounded-xl rounded-full mx-2 my-2" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-2 shadow-xl">
                        <figcaption class="font-medium">
                            <div class="text-blue-600 text-lg">{business.BusinessName}</div>
                            <div class="text-gray-500 text-sm">{business.Location}</div>
                        </figcaption>
                    </div>
                </figure>
                
            ))}
        </div>
    )
}

export default Sidebar
