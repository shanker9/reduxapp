import React from 'react';
import AppConstants from '../Constants';
import './Header.scss';

export default class HeaderComponent extends React.Component {
    setBlotter(view) {
        this.props.setView(view)
    }

    removeTab(view, index) {
        this.props.removeView(view, index);
    }

    renderHeaderNavigationLinks() {
        const { navigation } = { ...this.props };
        // let links = this.props.data.layout.children[0].children;
        return navigation.navLinks.map((item, i) =>
            <li className={navigation.blotter === item.key ? "active" : ""}
                key={i}
                onClick={() => this.setBlotter(item.key)}>
                <div>
                    <i className={item.icon}></i>
                    <span>{item.label} ({this.props.dataCount.get(item.key)})</span>
                </div>
                {item.enableClose === true ? <span className="qgraph-close" onClick={(e) => {
                    e.stopPropagation();
                    this.removeTab(item.key, i)
                }}></span> : ''}
            </li>)
    }

    render() {
        return (
            <div className="topNavBar">
                {/* <div onClick={this.props.invokeSideDrawer} className="hamburger-menu-button" ></div> */}
                <div className="qgraphLogo" onClick={() => {
                    this.setBlotter(AppConstants.NavigationKeys.RISK_VIEW)
                }}></div>
                <div className="nav-buttons">
                    <ul className="header-nav">
                        {this.renderHeaderNavigationLinks()}
                    </ul>
                </div>
                {/*<div className="user-nav">*/}
                {/*<select onChange={this.changeThemeBrowser} className="themeSelect form-control">*/}
                {/*<option value="openfinlight">Light</option>*/}
                {/*<option value="openfindark">Dark</option>*/}
                {/*</select>*/}
                {/*<div className="Select themeSelect">*/}
                {/*<Select*/}
                {/*clearable={false}*/}
                {/*searchable={false}*/}
                {/*name="form-field-name"*/}
                {/*value={this.state.selectedTheme}*/}
                {/*onChange={this.changeThemeBrowser}*/}
                {/*options={this.state.options}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*<a href={downloadUrl} title="download desktop app">Desktop App</a>*/}
                {/*<i className="qgraph-theme" title="Theme builder" onClick={this.openThemeBuilder}></i>*/}
                {/*<div>*/}
                {/*<img className="userLogo" alt="User avatar"*/}
                {/*src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzIDUzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MyA1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiNFN0VDRUQ7IiBkPSJNMTguNjEzLDQxLjU1MmwtNy45MDcsNC4zMTNjLTAuNDY0LDAuMjUzLTAuODgxLDAuNTY0LTEuMjY5LDAuOTAzQzE0LjA0Nyw1MC42NTUsMTkuOTk4LDUzLDI2LjUsNTMgIGM2LjQ1NCwwLDEyLjM2Ny0yLjMxLDE2Ljk2NC02LjE0NGMtMC40MjQtMC4zNTgtMC44ODQtMC42OC0xLjM5NC0wLjkzNGwtOC40NjctNC4yMzNjLTEuMDk0LTAuNTQ3LTEuNzg1LTEuNjY1LTEuNzg1LTIuODg4di0zLjMyMiAgYzAuMjM4LTAuMjcxLDAuNTEtMC42MTksMC44MDEtMS4wM2MxLjE1NC0xLjYzLDIuMDI3LTMuNDIzLDIuNjMyLTUuMzA0YzEuMDg2LTAuMzM1LDEuODg2LTEuMzM4LDEuODg2LTIuNTN2LTMuNTQ2ICBjMC0wLjc4LTAuMzQ3LTEuNDc3LTAuODg2LTEuOTY1di01LjEyNmMwLDAsMS4wNTMtNy45NzctOS43NS03Ljk3N3MtOS43NSw3Ljk3Ny05Ljc1LDcuOTc3djUuMTI2ICBjLTAuNTQsMC40ODgtMC44ODYsMS4xODUtMC44ODYsMS45NjV2My41NDZjMCwwLjkzNCwwLjQ5MSwxLjc1NiwxLjIyNiwyLjIzMWMwLjg4NiwzLjg1NywzLjIwNiw2LjYzMywzLjIwNiw2LjYzM3YzLjI0ICBDMjAuMjk2LDM5Ljg5OSwxOS42NSw0MC45ODYsMTguNjEzLDQxLjU1MnoiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTI2Ljk1MywwLjAwNEMxMi4zMi0wLjI0NiwwLjI1NCwxMS40MTQsMC4wMDQsMjYuMDQ3Qy0wLjEzOCwzNC4zNDQsMy41Niw0MS44MDEsOS40NDgsNDYuNzYgICBjMC4zODUtMC4zMzYsMC43OTgtMC42NDQsMS4yNTctMC44OTRsNy45MDctNC4zMTNjMS4wMzctMC41NjYsMS42ODMtMS42NTMsMS42ODMtMi44MzV2LTMuMjRjMCwwLTIuMzIxLTIuNzc2LTMuMjA2LTYuNjMzICAgYy0wLjczNC0wLjQ3NS0xLjIyNi0xLjI5Ni0xLjIyNi0yLjIzMXYtMy41NDZjMC0wLjc4LDAuMzQ3LTEuNDc3LDAuODg2LTEuOTY1di01LjEyNmMwLDAtMS4wNTMtNy45NzcsOS43NS03Ljk3NyAgIHM5Ljc1LDcuOTc3LDkuNzUsNy45Nzd2NS4xMjZjMC41NCwwLjQ4OCwwLjg4NiwxLjE4NSwwLjg4NiwxLjk2NXYzLjU0NmMwLDEuMTkyLTAuOCwyLjE5NS0xLjg4NiwyLjUzICAgYy0wLjYwNSwxLjg4MS0xLjQ3OCwzLjY3NC0yLjYzMiw1LjMwNGMtMC4yOTEsMC40MTEtMC41NjMsMC43NTktMC44MDEsMS4wM1YzOC44YzAsMS4yMjMsMC42OTEsMi4zNDIsMS43ODUsMi44ODhsOC40NjcsNC4yMzMgICBjMC41MDgsMC4yNTQsMC45NjcsMC41NzUsMS4zOSwwLjkzMmM1LjcxLTQuNzYyLDkuMzk5LTExLjg4Miw5LjUzNi0xOS45QzUzLjI0NiwxMi4zMiw0MS41ODcsMC4yNTQsMjYuOTUzLDAuMDA0eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<ThemeComponent ref="themeComponent" theme={this.getSelectedTheme}*/}
                {/*saveTheme={this.saveTheme}></ThemeComponent>*/}
            </div>
        )
    }

}