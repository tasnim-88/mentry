import React, { useEffect, useState } from "react";
import { MdAdd, MdVisibility, MdEdit, MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import Loading from "../../../Components/Loading/Loading";

const MyLessons = () => {
  const { axiosSecure, loading: axiosLoading } = useAxiosSecure();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!axiosLoading && axiosSecure) {
      // Only fetch when axiosSecure is ready
      const fetchLessons = async () => {
        try {
          const res = await axiosSecure.get("/my-lessons");
          setLessons(res.data);
        } catch (error) {
          console.error("Failed to fetch lessons:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchLessons();
    }
  }, [axiosSecure, axiosLoading]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lesson?")) return;

    try {
      await axiosSecure.delete(`/lessons/${id}`);
      setLessons((prev) => prev.filter((l) => l._id !== id));
    } catch (error) {
      console.error("Failed to delete lesson:", error);
    }
  };

  if (loading || axiosLoading) {
    return <Loading />;
  }

  return (
    <main className="grow py-8 px-4 sm:px-6">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center gap-4 p-4 mb-6">
        <p className="text-4xl font-black text-black dark:text-white">My Lessons</p>
        <Link
          to="/dashboard/addlesson"
          className="flex items-center gap-2 rounded-lg h-10 px-5 bg-primary text-white font-bold hover:opacity-90"
        >
          <MdAdd className="text-lg" />
          <span>Create New Lesson</span>
        </Link>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-base-300 shadow-sm">
        <table className="min-w-[800px] w-full bg-white dark:bg-base-200">
          <thead className="bg-gray-50 dark:bg-base-300">
            <tr className="border-b border-gray-200 dark:border-base-300">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Lesson Title</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Visibility</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Created</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Reactions</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Saves</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-base-300">
            {lessons.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-4 text-center text-gray-500">
                  No lessons found.
                </td>
              </tr>
            ) : (
              lessons.map((lesson) => (
                <tr key={lesson._id} className="hover:bg-gray-50 dark:hover:bg-base-100">
                  <td className="px-4 py-4 font-medium">{lesson.lessonInfo.title}</td>
                  <td className="px-4 py-4">
                    <div className="badge badge-primary badge-sm">{lesson.metadata.accessLevel}</div>
                  </td>
                  <td className="px-4 py-4">{lesson.metadata.visibility}</td>
                  <td className="px-4 py-4">{lesson.metadata.createdDate?.slice(0, 10)}</td>
                  <td className="px-4 py-4">{lesson.stats?.likes || 0}</td>
                  <td className="px-4 py-4">{lesson.stats?.favorites || 0}</td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <Link to={`/lessondetails/${lesson._id}`} className="btn btn-ghost btn-sm">
                        <MdVisibility size={20} />
                      </Link>
                      <Link to={`/updatelesson/${lesson._id}`} className="btn btn-ghost btn-sm">
                        <MdEdit size={20} />
                      </Link>
                      <button onClick={() => handleDelete(lesson._id)} className="btn btn-ghost btn-sm text-red-500">
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MyLessons;
