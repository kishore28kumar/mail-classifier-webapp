import Image from "next/image";

const AuthOp = () => {
  return (
    <div className="max-w-md bg-white w-full rounded p-12 ">
      <div>
        <h2>Create an account</h2>
      </div>
      <div>
        <button className="flex items-center justify-between border rounded-lg w-full bg-black text-white px-3 py-2 my-6">
          <img
            src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
            alt="google"
            className="h-5 w-5"
          />
          <span className="flex-1">Sign Up</span>
        </button>
        <div className="flex items-center">
          <div className="flex-grow bg bg-gray-300 h-06"></div>
          <div className="flex-grow-0 mx-5 text-neutral-400">
            Already have an account, then
          </div>
          <div className="flex-grow bg bg-gray-300 h-06"></div>
        </div>
        <button className="flex items-center justify-between border rounded-lg w-full bg-neutral-200 px-3 py-2 my-6">
          <img
            src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
            alt="google"
            className="h-5 w-5"
          />
          <span className="flex-1">Log In</span>
        </button>
      </div>
      <div>
        <p className="text-neutral-400">
          By clicking continue, you agree to our{" "}
          <span className="text-black">Terms of Service</span>
          and <span className="text-black">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default AuthOp;
