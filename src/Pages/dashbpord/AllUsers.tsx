import { useQuery } from "@tanstack/react-query";
import { viewAllUser } from "../../apis/UserApi/userApi";

const AllUsers = () => {
  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
      reg_Date: "........",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      reg_Date: "........",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      reg_Date: "........",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      reg_Date: "........",
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      reg_Date: "........",
    },
  ];

  const data = useQuery({
    queryFn: viewAllUser,
  });

  return (
    <div className=" h-screen w-full flex flex-col gap-8  ">
      <div className="w-full py-5 text-xl bg-first text-white border-b">
        {" "}
        All Users
      </div>
      <div>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="items-start justify-between md:flex">
            <div className="max-w-lg">
              <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                All Members registered
              </h3>
            </div>
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Username</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Register Date</th>
                  <th className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {data?.data?.map((item: any) => (
                  <tr key={item?._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.fullname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.reg_Date}
                    </td>
                    <td className="text-right px-6 whitespace-nowrap">
                      <a
                        href="javascript:void()"
                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </a>
                      <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
