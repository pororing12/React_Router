import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';


function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><NavLink 
                        to = "/profiles/kim" 
                        activeStyle = {{ background: 'black', color: 'white'}}
                    >
                        Kim
                    </NavLink>
                </li>
                <li><NavLink 
                        to = "/profiles/homer"
                        activeStyle = {{ background: 'black', color: 'white'}}
                    >
                        Homer
                    </NavLink>
                </li>
            </ul>

            <Route path = "/profiles" exact render = {() => <div>사용자를 선택해주세요</div>} />
            <Route path = "/profiles/:username" component = {Profile} />
            <RouterHookSample/>
            
        </div>
    )
}
export default Profiles;