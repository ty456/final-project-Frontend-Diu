import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getDoctorState } from "../store/actions";

const DoctorPrivateRoute = ({ children, ...rest }) => {
  const { doctorProfile } = useSelector(getDoctorState);
  console.log(doctorProfile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        doctorProfile?.userType === "doctor" ? (
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

export default DoctorPrivateRoute;
