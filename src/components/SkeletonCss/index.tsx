import React, {Component} from 'react';
import "./skeleton.css";


class SkeletonCss extends Component {
    render() {
        return (
            <div>
                <h1>Skeleton CSS - Basic</h1>
                <div className="postSk">
                    <div className="postSkImg"></div>
                    <div className="postSkInfo">
                        <div className="postSkAvatar"></div>
                        <div className="postSkDetail">
                            <div className="postSkText"></div>
                            <div className="postSkText sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkeletonCss;
