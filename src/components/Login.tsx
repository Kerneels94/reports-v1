import loginUser from "../firebase/login"

/**
 * @description Login component
 */

const Login = () => {
  return <>
    <button 
    className="btn btn-sm btn-primary rounded-full"
    // onClick={() => loginUser}
    >Login</button>
  </>
}

export default Login