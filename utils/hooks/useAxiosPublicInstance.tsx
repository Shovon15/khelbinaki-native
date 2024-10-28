import axios from 'axios';
import { useMemo } from 'react';
import { API_URL } from '../Apis/Api';

function useAxiosPublicInstance() {
  const axiosPublicInstance = useMemo(
    () =>
      axios.create({
        baseURL: API_URL + 'customerApp/public/',
      }),
    [],
  );

  return axiosPublicInstance;
}

export default useAxiosPublicInstance;
