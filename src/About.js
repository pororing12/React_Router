import React from 'react';
import qs from 'qs';

function About({ location }) {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, //값 앞에 ?가 붙음  
    })
    const detail = query.detail === 'true';

    console.log(query)
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초</p>
            {detail && <p>detail 값이 true 입니다!</p>}
        </div>
    )
}
export default About;