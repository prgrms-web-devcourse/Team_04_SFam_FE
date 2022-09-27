import { Dispatch, SetStateAction } from 'react';

import axios, { AxiosResponse } from 'axios';

interface Document {
  road_address: RoadAddress;
  address: Address;
}

interface RoadAddress {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  road_name: string;
  underground_yn: string;
  main_building_no: string;
  sub_building_no: string;
  building_name: string;
  zone_no: string;
}

export interface Address {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  mountain_yn: string;
  main_address_no: string;
  sub_address_no: string;
}

interface MapResponse {
  meta: {
    total_count: number;
  };
  documents: Document[];
  address: Address;
}

export const kakaoMapApi = async (
  latitude: number,
  longitude: number,
  setAddress: Dispatch<SetStateAction<Address>>,
) => {
  try {
    if (latitude && longitude)
      await axios
        .get<MapResponse>(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_MAP_REST_API_KEY as string}`,
            },
          },
        )
        .then((response: AxiosResponse<MapResponse>) => {
          const location = response.data.documents[0];
          setAddress(location.address);
        });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
