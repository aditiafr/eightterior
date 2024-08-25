import { DeleteFilled, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, message, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { ButtonDelete } from "../../components/Global/Button";
import { deleteProject } from "../../API/DeleteData";

const { confirm } = Modal;

const DeleteProject = ({ onData, onDelete }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            const res = await deleteProject(onData.id);
            message.success(res.data.msg);
            onDelete(false);
            Modal.destroyAll();
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const content = `Data Project ${onData.name}`;

    const showConfirm = () => {
        confirm({
            title: "Do you want to delete these items?",
            icon: <ExclamationCircleFilled />,
            content: content,
            centered: true,
            footer: <ButtonDelete onDelete={handleDelete} isLoading={isLoading} />,
        });
    };

    return (
        <>
            <Tooltip title="Delete">
                <Button icon={<DeleteFilled />} onClick={showConfirm} type="text" />
            </Tooltip>
        </>
    );
};

export default DeleteProject;
