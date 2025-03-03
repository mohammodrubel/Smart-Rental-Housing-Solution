"use client";
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { RegisterUser } from '../api/auth';
import { error } from 'console';
import { toast } from 'sonner';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
    role: 'Tenant', // Default role
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      if (formData.password !== formData.repassword) {
        alert("Passwords do not match!");
        return;
      }
  
      const sendInfo = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };
  
      const response = await RegisterUser(sendInfo);
      
      if (response?.success) {
        toast.success(response.message || "Registration successful!");
      } else {
        toast.error(response.message || "Something went wrong.");
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error?.message || "An unexpected error occurred.");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
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

        {/* Password */}
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

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="repassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="repassword"
            value={formData.repassword}
            onChange={(e) => setFormData({ ...formData, repassword: e.target.value })}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Role Selection (Radio Buttons) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <div className="flex items-center space-x-4 mt-1">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Landlord"
                checked={formData.role === 'Landlord'}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="mr-2"
              />
              Landlord
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Tenant"
                checked={formData.role === 'Tenant'}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="mr-2"
              />
              Tenant
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-[#f70776] text-white rounded-md hover:bg-[#f70776] focus:outline-none focus:ring-2 focus:ring-[#f70777ef]"
        >
          Register
        </button>

        {/* Login Link */}
        <small className="block text-center mt-4">
          Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
        </small>
      </form>
    </div>
  );
};

export default RegisterForm;
