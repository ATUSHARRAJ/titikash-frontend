import { useState } from 'react';
import axios from 'axios';

const baseUrl1 = 'http://localhost:5000/api/';

export const useApi = <T>(baseUrl: string) => {
  const fullUrl = baseUrl1 + baseUrl;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<T>(fullUrl);
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchById = async (id: string | number) => {
    setLoading(true);
    try {
      const response = await axios.get<T>(`${fullUrl}/${id}`);
      setData(response.data);
      console.log("Data fetched by ID:", response.data);
      setError(null);
    } catch (err: any) {
      setError(err?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createData = async (newData: Partial<T>) => {
    setLoading(true);
    try {
      const response = await axios.post<T>(fullUrl, newData);
      setError(null);
    } catch (err: any) {
      setError(err?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (id: string, updatedData: Partial<T>) => {
    setLoading(true);
    try {
      await axios.put(`${fullUrl}/${id}`, updatedData);
      setError(null);
    } catch (err: any) {
      setError(err?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id: string) => {
    setLoading(true);
    try {
      await axios.delete(`${fullUrl}/${id}`);
      setError(null);
    } catch (err: any) {
      setError(err?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
    fetchById,
    createData,
    updateData,
    deleteData,
  };
};
