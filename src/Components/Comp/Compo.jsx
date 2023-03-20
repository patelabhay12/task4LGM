import React, { useState } from 'react';
import './cmp.css';

const Compo = () => {

    const [Data, setData] = useState([]);

    const loadUserData = async () => {
        const responceData = await fetch("https://reqres.in/api/users?page=1");
        // console.log(responceData);
        const jsonres = await responceData.json();
        // console.log(jsonres.data);
        setData(jsonres.data);
        console.log(Data);
    }



    return (
        <div className="main">
            <div className="nav">
                <h2>LetsGrowMore Beginner Level Task4</h2>
            </div>

            <div className="contents">

                <button onClick={loadUserData}>Get Users</button>

                <div className="user">
                    <h3>Users</h3>
                    {
                        Data.map((item) => {
                            return (
                                <>
                                    <ol>
                                        <li>{item.email}</li>
                                        <li>{item.first_name}</li>
                                        <li>{item.last_name}</li>
                                        <li>{item.avatar}</li>
                                    </ol>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Compo;