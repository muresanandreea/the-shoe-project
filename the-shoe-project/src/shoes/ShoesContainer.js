import React, { useState, useEffect } from "react";
import ShoesBox from "./shoesBox.jsx";

export default function ShoesContainer(props) {
    useEffect(() => {
        const data = fetch ('/shoes')
            .then(response => response.json())
            .then(data => setShoesData(data))
    },[])

    const [shoesData, setShoesData] = useState([]);
    const shoes=shoesData.shoes;
    console.log(shoesData.shoes,'aici');
    return (
        <div className="page">
            <h1 className="title">
                If the shoe fits...
            </h1>
            <div className="dashboard">
                <div className="sideButtons">
                </div>
                <div className="shoesBoxes">
                    {shoes.map (e =>
                        <ShoesBox key={e.id} className="shoeBox" image={e.imageUrl}
                                  name={e.name}
                                  size={e.size}/>
                    )}

                </div>
            </div>
        </div>
    );
}
