import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUserState } from "../store/actions";

const PrivateRoute = ({ children, ...rest }) => {
  const { profile } = useSelector(getUserState);
  // console.log(profile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        profile?.firstName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
