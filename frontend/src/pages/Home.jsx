import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { getToken } from "../utils/authStorage";

const Home = () => {
    const isLoggedIn = Boolean(getToken());

    return (
        <main className="min-h-[calc(100vh-73px)] bg-gray-50">
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                            <img
                                src={logo}
                                alt="VoteApp logo"
                                className="w-5 h-5"
                            />
                            Simple voting platform
                        </div>

                        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                            Create polls and collect votes easily
                        </h1>

                        <p className="mt-6 text-lg text-gray-500 leading-8">
                            VoteApp helps you create polls, vote for answers,
                            manage your own questions and check results in one
                            simple place.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                to={isLoggedIn ? "/dashboard" : "/signup"}
                                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition"
                            >
                                {isLoggedIn ? "Go to dashboard" : "Get started"}
                            </Link>

                            {!isLoggedIn && (
                                <Link
                                    to="/login"
                                    className="px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-semibold text-center hover:bg-gray-100 transition"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
                            <div className="flex items-center justify-between mb-5">
                                <p className="text-sm text-gray-500">
                                    Created by{" "}
                                    <span className="font-semibold text-gray-700">
                                        You
                                    </span>
                                </p>

                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                                    Active
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-5">
                                What feature should we build next?
                            </h2>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white">
                                    <span className="text-gray-700">
                                        Poll sharing
                                    </span>
                                    <span className="text-sm font-medium text-gray-500">
                                        12 votes
                                    </span>
                                </div>

                                <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-blue-200 bg-blue-50">
                                    <span className="text-gray-900 font-medium">
                                        Live results
                                    </span>
                                    <span className="text-sm font-medium text-blue-600">
                                        24 votes
                                    </span>
                                </div>

                                <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white">
                                    <span className="text-gray-700">
                                        Private polls
                                    </span>
                                    <span className="text-sm font-medium text-gray-500">
                                        8 votes
                                    </span>
                                </div>
                            </div>

                            <div className="mt-5 pt-4 border-t border-gray-200 text-sm text-gray-500">
                                Expires at:{" "}
                                <span className="font-medium text-gray-700">
                                    2026-06-30 20:30
                                </span>
                            </div>

                            <button
                                type="button"
                                className="mt-4 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                Vote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                            1
                        </div>

                        <h3 className="text-xl font-bold text-gray-900">
                            Create a poll
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Add your question, possible answers and expiration
                            date.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                            2
                        </div>

                        <h3 className="text-xl font-bold text-gray-900">
                            Vote easily
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Users can browse active polls and choose their
                            answer.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                            3
                        </div>

                        <h3 className="text-xl font-bold text-gray-900">
                            Manage results
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Check vote counts and manage polls created by you.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="bg-blue-600 rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold text-white">
                        Ready to create your first poll?
                    </h2>

                    <p className="mt-3 text-blue-100">
                        Start now and collect answers from users.
                    </p>

                    <Link
                        to={isLoggedIn ? "/poll/create" : "/signup"}
                        className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transition"
                    >
                        {isLoggedIn ? "Create poll" : "Create account"}
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;