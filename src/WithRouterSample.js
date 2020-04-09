import React from 'react';
import { withRouter } from 'react-router-dom';

function WithRouterSample({ location, match, history }) {
    return (
        <div>
            <h4>location</h4>
            {/* JSON.stringify : json으로 이루어진 객체를 문자열로 변환 null, 2 : 들여쓰기 */}
            {/* location은 어디서든 불러와도 똑같은 정보를 제공 */}
            <textarea value = {JSON.stringify(location, null, 2)} readOnly/>
            <h4>match</h4>
            {/* match 같은 경우 현재 컴포넌트가 렌더링 된 위치를 기준으로 읽어옴 */}
            <textarea value = {JSON.stringify(match, null, 2)} readOnly/>
            <button onClick = {() => history.push('/')}>홈으로</button>
        </div>
    )
}
export default withRouter(WithRouterSample);