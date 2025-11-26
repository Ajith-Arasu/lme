import api from "../Instance";
import { EVENTS_URL } from "../urlConfig";

export const getActiveExamEvents = async (
  university_id: string,
  count: number | string = "",
  page: number | string = ""
) => {
  const response = await api.get(EVENTS_URL, {
    params: {
      university_id,
      count,
      page,
    },
  });

  return response.data;
};
