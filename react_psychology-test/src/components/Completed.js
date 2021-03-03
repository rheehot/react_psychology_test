import React from "react";
import {useLocation} from "react-router";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Completed() {

    const location = useLocation();
    const data = location.state.data;

    return(
        <div className="completed-container">
            <h2 className="completed-title" style={{ marginBottom:'50px'}}>🙏 검사가 완료되었습니다 🙏</h2>

            <article className="completed-message">
                <p style={{margin:'0'}}>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,</p>
                <p>중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
            </article>
            

            <br />
            <br />
            <br />
            <div className="link-container">
                <Link to={{
                    pathname: "/Result",
                    state : { seq : data }
                }} >
                <button type="button" class="btn btn-outline-success">결과 보기</button>
                </Link>
            </div>
        </div>
    );
}

export default Completed;