import { DeleteFilled, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, message, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { ButtonDelete } from "../../components/Global/Button";
import { deleteCarousel } from "../../API/DeleteData";

const { confirm } = Modal;

const DeleteCarousel = ({ onData, onDelete }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            const res = await deleteCarousel(onData.id);
            message.success(res.data.msg);
            onDelete(true);
            Modal.destroyAll();
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const content = `Data Carousel ${onData.title}`;

    const showConfirm = () => {
        confirm({
            title: `Do you want to delete these items?`,
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

export default DeleteCarousel;
