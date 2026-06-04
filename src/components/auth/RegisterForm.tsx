import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-lg rounded-2xl border bg-white p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-center text-green-700">
        Create Account
      </h1>

      <p className="mt-2 text-center text-gray-500">
        Join the E-Farm Nexus ecosystem
      </p>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-lg border p-3"
        />

        <select
          className="w-full rounded-lg border p-3"
          defaultValue=""
        >
          <option value="" disabled>
            Select Role
          </option>

          <option value="farmer">Farmer</option>
          <option value="buyer">Buyer</option>
          <option value="driver">Driver</option>
          <option value="vet">Veterinarian</option>
        </select>

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded-lg border p-3"
        />

        <Button className="w-full">
          Create Account
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-green-600"
        >
          Login
        </Link>
      </p>
    </div>
  );
}