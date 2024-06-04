"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";
import { useGetUsersQuery, userApi } from "@/redux/services/userApi";

function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispath = useAppDispatch();

  const { data, error, isFetching, isLoading } = useGetUsersQuery(null);
  if (isLoading || isFetching) return <p>Loading</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h1>Current value: {count}</h1>
      <h1>Increment</h1>
      <button onClick={() => dispath(increment())}>Increment</button>
      <br />
      <h1>Decrement</h1>
      <button onClick={() => dispath(decrement())}>Decrement</button>

      {data?.map((user) => (
        <div>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
