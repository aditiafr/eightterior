import { LikeOutlined, SnippetsOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderTitle from '../../components/Global/HeaderTitle'
import { useState } from 'react'
import { getProjectList, getReviewList } from '../../API/GetData'

const Dashboard = () => {

    useEffect(() => {
        document.title = "Eightterior - Dashboard";
    }, []);
    
    const [sumProject, setSumProject] = useState(0);
    const [sumReview, setSumReview] = useState(0);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await getProjectList();
                if (Array.isArray(res)) {
                    setSumProject(res.length);
                } else {
                    console.error("Data yang diterima bukan array:", res);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchProject();
    }, []);

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const res = await getReviewList();
                if (Array.isArray(res)) {
                    setSumReview(res.length);
                } else {
                    console.error("Data yang diterima bukan array:", res);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchReview();

    }, []);


    return (
        <div className="w-full">
            <HeaderTitle title="DASHBOARD" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center bg-white py-4 px-6 rounded-md gap-8">
                    <SnippetsOutlined className="text-4xl" />
                    <div className="flex flex-col w-full gap-2 font-bold">
                        <p className="text-2xl">Project</p>
                        <p className="text-4xl">{sumProject}</p>
                        <p>see all the <Link to="/dashboard/project" className="text-primary-500 hover:text-primary-400">project</Link></p>
                    </div>
                </div>
                <div className="flex items-center bg-white py-4 px-6 rounded-md gap-8">
                    <LikeOutlined className="text-4xl" />
                    <div className="flex flex-col w-full gap-2 font-bold">
                        <p className="text-2xl">Review</p>
                        <p className="text-4xl">{sumReview}</p>
                        <p>see all the <Link to="/dashboard/review" className="text-primary-500 hover:text-primary-400">review</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard