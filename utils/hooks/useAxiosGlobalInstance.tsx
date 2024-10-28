import axios from 'axios';
import { useMemo } from 'react';
import { API_URL } from '../Apis/Api';

function useAxiosGlobalInstance() {
  const axiosGlobalInstance = useMemo(
    () =>
      axios.create({
        baseURL: API_URL,
      }),
    [],
  );

  return axiosGlobalInstance;
}

export default useAxiosGlobalInstance;
