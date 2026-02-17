import LoginForm from "../../../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F4F6F8]">
      <div className="bg-white p-10 rounded-lg shadow-sm w-full max-w-md">
        <h1 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
          Institution Login
        </h1>
        <LoginForm />
      </div>
    </section>
  );
}
