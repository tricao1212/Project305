import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
    const acc = useSelector((state) => state.AccountRedux.account);
    if (!acc) {
        return (<Navigate to='/'/>)
    }
    return children
}
export default Protected;