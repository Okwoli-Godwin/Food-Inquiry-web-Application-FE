import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { createRecipes } from "../../apis/RecipiesApi/RecipiesApi";

const newRecipe = () => {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [foodImg, setfoodImg] = useState<File | null>(null);

  const ImageOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setfoodImg(file);
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  const schema = yup
    .object({
      title: yup.string().required("Please Enter your title"),
      nutritions: yup.string().required("Please Enter your nutritions"),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const { handleSubmit, reset, register } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const postData = useMutation({
    mutationKey: ["Recipes"],
    mutationFn: createRecipes,

    onSuccess: (data: any) => {
      console.log("data", data);
      Swal.fire({
        title: "Recipe Created",
        html: "Thank You",
        timer: 2000,
        icon: "success",
      });
      reset();
    },

    onError: (error: any) => {
      console.log("error", error);
      if (error.message === "Network Error") {
        Swal.fire({
          title: error.message,
          text: error.code,
          timer: 2000,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Couldn't Create Recipe",
          text: error?.response?.data?.err,
          timer: 2000,
          icon: "error",
        });
      }
    },
  });

  const Submit = (event: any) => {
    event?.preventDefault();
    handleSubmit((data: FormData) => {
      if (foodImg) {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("nutritions", data.nutritions);
        formData.append("foodImg", foodImg);
        postData.mutate(formData);
      }
    })();
  };

  return (
    <div className="h-screen w-full flex flex-col gap-8">
      <div className="w-full py-5 text-xl bg-first text-white border-b">
        Create Recipe
      </div>
      <form
        onSubmit={Submit}
        className="grid mx-5 gap-32 grid-cols-[1fr,0.5fr] lg:grid-cols-1 lg:gap-10"
      >
        <div className="flex flex-col gap-16">
          <div>
            <p className="text-2xl font-semibold">Title</p>
            <input
              type="text"
              required
              {...register("title")}
              className="w-full h-[10vh] text-xl pl-3 outline-none border-b"
              placeholder="enter recipe title"
            />
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-2xl font-semibold">Recipe text</p>
            <textarea
              {...register("nutritions")}
              required
              placeholder="enter recipe description"
              className="w-full border-b outline-none text-xl"
              rows={10}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:mb-5">
          <div className="w-[full] py-3 px-4 flex flex-col gap-6 items-start bg-[#f1f1f1] rounded-md border overflow-hidden">
            <div className="h-[80%] w-full">
              <img
                src={previewImage}
                alt="featured image"
                className="w-full h-full object-cover object-top rounded-md"
              />
            </div>
            <input
              onChange={ImageOnchange}
              id="pix"
              name="image"
              type="file"
              className="bg-first py-3 px-4 rounded-md text-white hidden"
            />
            <label
              htmlFor="pix"
              className="bg-first py-3 px-4 rounded-md text-white cursor-pointer"
            >
              featured image
            </label>
          </div>
          <div className="w-[full] py-3 px-4 flex flex-col gap-6 items-start bg-[#f1f1f1] rounded-md border overflow-hidden">
            <p>title of post</p>
            <button
              type="submit"
              className="bg-first py-3 px-4 rounded-md text-white"
            >
              publish recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default newRecipe;
