import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { HiOutlineDocumentReport, HiOutlineXCircle } from 'react-icons/hi';
import { RiDeleteBin6Fill, RiCheckLine } from 'react-icons/ri';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Loading from '../../../Components/Loading/Loading';

const ReportedLessons = () => {
    const { axiosSecure } = useAxiosSecure();
    const queryClient = useQueryClient();
    const [selectedReport, setSelectedReport] = useState(null);

    const { data: reportedLessons = [], isLoading } = useQuery({
        queryKey: ['reported-lessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/reported-lessons');
            return res.data;
        }
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => axiosSecure.delete(`/lessons/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries(['reported-lessons']);
            Swal.fire("Deleted", "Lesson removed from platform.", "success");
        }
    });

    const ignoreMutation = useMutation({
        mutationFn: (id) => axiosSecure.patch(`/admin/ignore-reports/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries(['reported-lessons']);
            Swal.fire("Ignored", "Reports have been marked as resolved.", "success");
        }
    });

    if (isLoading) return <Loading />;

    return (
        <main className="flex-1 p-8 bg-gray-50 dark:bg-[#0a0f0c] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-gray-900 dark:text-white text-4xl font-black">Reported & Flagged Lessons</h1>
                    <p className="text-gray-500">Maintain community safety by reviewing flags.</p>
                </div>

                {reportedLessons.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-[#111814] rounded-xl border dark:border-gray-800">
                        <p className="text-xl font-bold dark:text-white">Clean Slate!</p>
                        <p className="text-gray-500">No lessons are currently flagged.</p>
                    </div>
                ) : (
                    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111814]">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                            <thead className="bg-gray-50 dark:bg-white/5">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">Lesson Title</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">Author</th>
                                    <th className="px-6 py-4 text-center text-xs font-bold uppercase text-gray-500">Flags</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y dark:divide-gray-800">
                                {reportedLessons.map((item) => (
                                    <tr key={item.lessonId} className={item.status === 'Ignored' ? 'opacity-40' : ''}>
                                        <td className="px-6 py-4 text-sm font-bold dark:text-white">{item.title}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{item.author}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-black">
                                                {item.reportCount}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <button
                                                onClick={() => setSelectedReport(item)}
                                                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:text-blue-500 transition-colors"
                                                title="View Details"
                                            >
                                                <HiOutlineDocumentReport size={20} />
                                            </button>

                                            {item.status !== 'Ignored' && (
                                                <>
                                                    <button
                                                        onClick={() => ignoreMutation.mutate(item.lessonId)}
                                                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:text-green-500 transition-colors"
                                                        title="Ignore Reports"
                                                    >
                                                        <RiCheckLine size={20} />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteMutation.mutate(item.lessonId)}
                                                        className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                                                        title="Delete Lesson"
                                                    >
                                                        <RiDeleteBin6Fill size={20} />
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* DETAILS MODAL */}
            {selectedReport && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-[#111814] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border dark:border-gray-800">
                        <div className="p-6 border-b dark:border-gray-800 flex justify-between items-center">
                            <h2 className="text-xl font-bold dark:text-white">Report Details: {selectedReport.title}</h2>
                            <button onClick={() => setSelectedReport(null)} className="text-gray-400 hover:text-white">
                                <HiOutlineXCircle size={24} />
                            </button>
                        </div>
                        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
                            {selectedReport.reports.map((report, idx) => (
                                <div key={idx} className="p-4 bg-gray-50 dark:bg-[#1a2c22] rounded-xl border dark:border-gray-700">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs font-bold text-green-500 uppercase">Reporter: {report.reportedUserEmail}</span>
                                        <span className="text-[10px] text-gray-500">{new Date(report.timestamp).toLocaleString()}</span>
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{report.reason}"</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-white/5 text-right">
                            <button
                                onClick={() => setSelectedReport(null)}
                                className="px-6 py-2 bg-gray-900 text-white rounded-lg font-bold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ReportedLessons;