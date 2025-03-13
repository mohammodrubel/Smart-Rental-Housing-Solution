"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { LoginUser } from '../api/auth';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);

    const response = await LoginUser(formData);
    if (response?.success) {
      toast.success(response?.message)
      router.push('/')
    }
    if (response.success === false) {
      toast.error(response?.message)
    }
  };
  // onClick={() => setOpenModal(true)}

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#07588a] text-white rounded-md hover:bg-[#07588a] focus:outline-none focus:ring-2 focus:ring-[#07588a]"
          >
            Log in
          </button>
          <small>If you have no account Please <Link href="/register">Register</Link></small>
        </form>
      </div>
     
   </>
  );
};

export default LoginForm;

// #