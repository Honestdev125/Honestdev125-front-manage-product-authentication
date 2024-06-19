"use client"
import React, { useState } from "react";
import  { postRequest } from "@/utils/api"
import { useRouter } from 'next/navigation';
import styles from "./login.module.css";

import { login } from "@/redux/authSlice";
import { UseDispatch, useDispatch, useSelector } from "react-redux";


const LogIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const response = await postRequest('api/auth/login', formData);

    if (response.statusCode == 200) {
      console.log('LOGED IN');
      console.log(response);
      router.push('/main');
    } else {
      console.log('ERROR LOGED IN');
      console.log(response);
    }
   
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center w-full mt-20">
      <div className={styles["container-lg"]}>
        <form className="w-96" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-4">ログイン</h1>

          {/* <input
            type="text"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="メールアドレス"
            value={formData.email} onChange={handleChange}
          /> */}

          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="パスワード"
            value={formData.password} onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  )
}

export default LogIn;