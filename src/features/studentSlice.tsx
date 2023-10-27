import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Student } from "../models/student.model";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62a59821b9b74f766a3c09a4.mockapi.io",
    // prepareHeaders: (headers) => {
    //   headers.set("Access-Control-Allow-Headers", "*");
    // },
  }),
  tagTypes: ["Student"],

  endpoints: (builder) => ({
    getStudents: builder.query<Student[], void>({
      query: () => "/crud",
      providesTags: ["Student"],
      transformResponse: (response: Student[], meta, args: any) => {
        if (args === 2) {
          return response.slice(0, 4);
        }
        return response;
      },
    }),
    getStudent: builder.query<Student, string>({
      query: (id) => `/crud/${id}`,
      providesTags: ["Student"],
    }),
    addStudent: builder.mutation<void, Student>({
      query: (student) => ({
        url: "/crud",
        method: "POST",
        body: student,
      }),
      invalidatesTags: ["Student"],
    }),
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/crud/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
    }),
    updateStudent: builder.mutation<void, Student>({
      query: ({ id, ...rest }) => ({
        url: `/crud/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
} = studentApi;
