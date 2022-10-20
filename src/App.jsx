import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Average, CheckboxCallback } from "./page";


export const App = () => {
    // 시작시 실행init3
    useEffect(() => {
      
    }, []);

    return (        
		<Router >
            <Routes>
                <Route path="/" element={<Average/>}/>
                <Route path="/Average" element={<Average/>}/>
                <Route path="/CheckboxCallback" element={<CheckboxCallback/>}/>
            </Routes>
        </Router>
    );
}

export default App;