import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import './index.less'
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            haha: 'wodehahahah'
        }
    }
    render() { 
        return (
            <React>
                <div>
                    <Link to="/first"></Link>
                    <Route ></Route>
                </div>
            </React>
        )
            
     
    }
}