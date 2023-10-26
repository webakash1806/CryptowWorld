import AuthHeader from "./AuthHeader"
import Header from "../../Components/Header/MainHeader/Header"
import Footer from "../../Components/Footer/Footer"

const SignUp = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-between">
            <Header />
            <AuthHeader />
            <form action=""
                className=" flex flex-col border text-center">
                <div>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className="border-2" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        className="border-2" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" className="border-2" />
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className="border-2" />
                </div>
                <button>SignUP</button>
            </form>
            <Footer />
        </div>
    )
}

export default SignUp
