import { HashRouter as Router, Switch, Route, Redirect, Link,NavLink } from "react-router-dom"
import { Menu } from "antd";
import { menu, route } from "./config"
import Notfound from "../components/Notfound";

//路由
export const MyRouter = () => {
    return (
        <Switch>
            {
                route.map(item => {
                    return <Route exact={item.exact} path={item.path} component={item.component} />
                })

            }
            <Route path='/404' component={Notfound} />
            <Redirect from='/' to="404" />
        </Switch>
    )
}



//导航
export const HeaderMenu = () => {
    return (
        <Menu>
            {
                menu.map(item => {
                    return (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )
}
