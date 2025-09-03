
import '../../../styles/components/signUpNoti.scss'

// Sign Up Notification

const SignUp = ({ tryingSignUp }) => {
    return (
        <div className={`signUp ${tryingSignUp ? 'entrance' : null }`}>
            <p>Not included in demo.</p>
        </div>
    )
}

export default SignUp;




