import baseUrl from "../apis/instance";

// Gọi API lấy thông tin tất cả user
export const fetchAllUser = createAsyncThunk("user/fetchAllUser", async () => {
  const response = await baseUrl.get("users");

  return response.data;
});

// Gọi API xóa thông tin user theo id
export const removeUser = createAsyncThunk("user/removeUser", async (id) => {
  await baseUrl.delete(`users/${id}`);

  return id;
});
