"use client";
import Image from "next/image";
import React from "react";

type UserData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  address: string;
  details: string;
  image: string;
  coverImage: string;
  passwordChange: boolean;
  favourite: string[];
  followers: string[];
  followed: string[];
  verified: boolean;
};

interface ShowFollowDataProps {
  item: {
    data: UserData; // Ensure the prop includes data
    messages: string;
    success: boolean;
  };
}

const ShowFollowData: React.FC<ShowFollowDataProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center  to-red-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-slate-200">
      {item?.data.image ? (
        <Image
          src={item?.data.image}
          alt={`Image`}
          width={80}
          height={80}
          className="w-32 h-32  mb-4 border-4 border-white shadow-md object-cover"
        />
      ) : (
        <Image
          src="https://i0.wp.com/jiggambia.com/wp-content/uploads/2024/01/19e156dd3f2d29d0b5e8b081729abe9b.jpg?fit=400%2C400&ssl=1"
          alt={`Image`}
          width={80}
          height={80}
          className="w-32 h-32  mb-4 border-4 border-white shadow-md object-cover"
        />
      )}
      <p className="text-lg">{item?.data.name}</p>
    </div>
  );
};

export default ShowFollowData;
