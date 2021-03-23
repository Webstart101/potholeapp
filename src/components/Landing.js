import React from 'react';
import { useAuth } from '../auth/Auth';
import { useHistory } from 'react-router-dom'
import '../styles/tailwind.css'
import Header from './Header';
import Map from "./Map";


function Landing() {
    const { currentUser } = useAuth()

    const history = useHistory()


    return (

        <div className="App">
            {
                currentUser ? (history.push('/home'))
                    : (
                        <div className="w-full flex flex-col h-screen bg-gray-300">
                            <Header title="Pothole App" />

                            <div className="w-full flex-1 flex">
                                
                                <div className="w-full">
                                    <Map />
                                </div>
                            </div>
                        </div>

                    )
            }
        </div>
    )

}

export default Landing;