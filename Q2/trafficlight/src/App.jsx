import React, { useState, useEffect } from "react";
const App = () => {
    const [color, setColor] = useState("green");
    useEffect(() => {
        const colors = ["green", "yellow", "red", "yellow"];
        const durations = [3000, 2000, 5000, 2000];
        let i = 0;
        
        const interval = setInterval(() => {
            i = (i + 1) % colors.length;
            setColor(colors[i]);
        }, durations[i]);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: color,
                    borderRadius: "50%",
                    margin: "50px auto"
                }}
            ></div>
        </div>
    );
};
export default App;
