import { DeleteFilled, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, message, Modal, Tooltip } from "antd";
import React from "react";
import { ButtonDelete } from "../../components/Global/Button";
import { deleteCategory } from "../../API/DeleteData";
import { useState } from "react";

const { confirm } = Modal;

const DeleteCategory = ({ onData, onDelete }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            const res = await deleteCategory(onData.id);
            message.success(res.data.msg);
            onDelete(true);
            Modal.destroyAll();
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const content = `Data Category Name ${onData.name}`;

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

export default DeleteCategory;
