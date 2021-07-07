import React from "react";
import { Switch, Route } from "react-router-dom";

import ROUTES_CONFIG from "./config/routes";
import NotFound from "./pages/NotFound";

function Routes() {
  return (
    <Switch>
      {ROUTES_CONFIG.map((item) => {
        const Page = item.page;
        const Guard = item.guard;
        const Context = item.context;

        return (
          <Route
            key={item.path}
            path={item.path}
            exact={item.exact}
            render={(props) => {
              if (Context != undefined) {
                return (
                  <Context>
                    <Guard>
                      <Page {...props} />
                    </Guard>
                  </Context>
                );
              } else {
                return (
                  <Guard>
                    <Page {...props} />
                  </Guard>
                );
              }
            }}
          />
        );
      })}

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
export default Routes;
