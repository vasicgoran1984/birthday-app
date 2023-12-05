import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, user }) => {
    console.log(children, user)
    if(!user) {
        return <Navigate to='/' />
    }
  return children;
}

export default ProtectedRoute