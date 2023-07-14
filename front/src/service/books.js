import Client from "./index";

export const getAll = async () => {
  const { data } = await Client.get("/");

  return data;
};
