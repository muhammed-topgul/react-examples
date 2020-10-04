import React from "react";
import ReactDOM from "react-dom";

// external libs
import faker from "faker";

// components
import CommentDetail from "./component/CommentDetail";
import ApprovalCard from "./component/ApprovalCard";

const App = () => {
    return (
        <div className={"ui container comments"}>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo={"Today at 4.30 AM"}
                    content={"React is beautiful"}
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo={"Today at 8.30 PM"}
                    content={"I like React"}
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo={"Today at 12.13 AM"}
                    content={"React is wonderful"}
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));