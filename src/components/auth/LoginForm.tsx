import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-center text-green-700">
        Welcome Back
      </h1>

      <p className="mt-2 text-center text-gray-500">
        Sign in to your E-Farm Nexus account
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <Button className="w-full">
          Login
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-green-600"
        >
          Register
        </Link>
      </p>
    </div>
  );
}