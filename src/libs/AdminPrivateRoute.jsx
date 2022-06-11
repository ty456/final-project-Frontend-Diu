import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getAdminState } from "../store/actions";

const AdminPrivateRoute = ({ children, ...rest }) => {
  const { adminProfile } = useSelector(getAdminState);
  console.log("from private", adminProfile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        adminProfile?.userType === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin-login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminPrivateRoute;
