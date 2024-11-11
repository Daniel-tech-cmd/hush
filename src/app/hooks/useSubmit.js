import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const { user } = useAuthContext();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${user?.token}`,
  };
  const submit = async (data) => {
    setIsLoading(true);
    setError(null);
    setResponseData(null);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/gift`,
        data,
        { headers }
      );

      if (response.status !== 200) {
        setIsLoading(false);
        setError(response.data.error);
      }
      if (response.status === 200) {
        alert(`Tracking id: ${response.data.trackingId}`);
        setResponseData(response.data);
        setIsLoading(false);
      }
      // Handle the response data here
    } catch (error) {
      if (error?.message) {
        if (
          error.message ===
          "getaddrinfo ENOTFOUND ac-dqmw5os-shard-00-01.n3fknvn.mongodb.net"
        ) {
          setError("Network error");
        } else {
          setError(error.message);
        }
      }
      if (error?.response?.data.error) {
        if (
          error.response?.data.error ===
          "getaddrinfo ENOTFOUND ac-dqmw5os-shard-00-01.n3fknvn.mongodb.net"
        ) {
          setError("Network error");
        } else {
          setError(error.response.data.error);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, responseData, submit };
};

export default useSubmit;
