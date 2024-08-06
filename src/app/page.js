"use client";

import { useState, useEffect } from "react";
import { getCurrentUser } from "../services/api/api";
import Content from "../components/Content";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [applications, setApplications] = useState([]);
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await getCurrentUser();
      if (response.error) {
        window.location.href = "/auth/login";
      } else {
        setValid(true);
        setUser(response);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {!valid && (
        <div className=" m-10 p-10 rounded bg-purple-300 text-xl text-purple-600 font-semibold">
          Loading...
        </div>
      )}
      {valid && (
        <Content
          user={user}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          applications={applications}
          setApplications={setApplications}
        />
      )}
    </div>
  );
}
