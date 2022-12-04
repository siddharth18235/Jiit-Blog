import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const formSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("blog", {
        ...data,
        creator: user.role.userId,
        creatorName: user.role.firstName,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submitError = (err, e) => {
    e.preventDefault();
    console.log(err);
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase">
          Input Updates
        </h1>
        <form
          className="mt-6"
          onSubmit={handleSubmit(formSubmit, submitError)}
          autoComplete="off"
        >
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Title</span>
              <input
                type="text"
                name="title"
                className={` w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            ${errors.title ? "!border-red-700" : ""}
          `}
                placeholder="Enter a relevent title"
                {...register("title", {
                  required: "Title is required",
                })}
              />
            </label>
            <span className="text-red-700">
              {errors.title ? errors.title.message : ""}
            </span>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Announcement</span>
              <textarea
                name="content"
                className={`
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            ${errors.message ? "!border-red-700" : ""}
          `}
                rows="5"
                placeholder="Enter announcement"
                {...register("content", {
                  required: "Announcement is required",
                })}
              ></textarea>
            </label>
            <span className="text-red-700">
              {errors.announcement ? errors.announcement.message : ""}
            </span>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Branch</span>
              <input
                type="text"
                name="title"
                className={` w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            ${errors.branch ? "!border-red-700" : ""}
          `}
                placeholder="Enter a branch"
                {...register("branch", {
                  required: "Branch is required",
                })}
              />
            </label>
            <span className="text-red-700">
              {errors.branch ? errors.branch.message : ""}
            </span>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Submit
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default Form;
