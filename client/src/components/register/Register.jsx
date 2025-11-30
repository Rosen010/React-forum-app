import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";

export default function Register() {
    const navigate = useNavigate();
    const { registerHandler } = useContext(UserContext);

    const registerSubmitHandler = async (values) => {
        const { email, password, confirmPassword, profilePicture } = values;

        if (!email || !password) {
            return alert('Email and password are required!');
        }

        if (password !== confirmPassword) {
            return alert('Password missmatch!');
        }

        try {
            await registerHandler(email, password, profilePicture);

            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    }

    const {
        register,
        formAction,
    } = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        confirmPassword: '',
        profilePicture: '',
    });


    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">

            <div className="max-w-md mx-auto px-4 py-12">
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>

                    <form className="space-y-6" action={formAction}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email')}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register('password')}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                {...register('confirmPassword')}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Confirm your password"
                            />
                        </div>

                        <div>
                            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-300 mb-2">
                                Profile Picture Link
                            </label>
                            <input
                                type="text"
                                id="profilePicture"
                                {...register('profilePicture')}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Profile Picture Link"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 px-4 py-3 rounded-md font-medium transition-colors">
                            Register
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-400 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-500 hover:text-blue-400 font-medium">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}