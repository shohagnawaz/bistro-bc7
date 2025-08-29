import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
    };

    return (
        <div className="p-10">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;