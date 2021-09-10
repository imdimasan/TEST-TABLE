import { Switch, Route, Redirect } from "react-router-dom";
import { pageRoutes } from "constants/pageRoutes";
import { Page404, HomePage } from "pages";

function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path={pageRoutes.HOME}>
          <HomePage />
        </Route>
        <Redirect exact from="/" to={pageRoutes.HOME} />
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}

export default AppRouter;
