import { Button, Modal } from "antd";

export const ButtonDelete = ({ onDelete, isLoading }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
            }}
        >
            <Button onClick={() => Modal.destroyAll()} style={{ marginRight: 8 }}>
                Cancel
            </Button>
            <Button danger type="primary" onClick={onDelete} loading={isLoading}>
                Delete
            </Button>
        </div>
    );
};

export const ButtonEdit = ({ onReset, isLoading }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                position: "sticky",
                top: 0,
                bottom: 0,
                zIndex: 1000,
                width: "100%",
                padding: "8px 14px",
                backgroundColor: "#FFFFFF",
            }}
        >
            <Button type="primary" danger htmlType="button" onClick={onReset}>
                Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={isLoading}>
                Submit
            </Button>
        </div>
    );
};

export const ButtonSubmit = ({ onReset, isLoading }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                position: "sticky",
                top: 0,
                bottom: 0,
                zIndex: 1000,
                width: "100%",
                padding: "20px",
                boxShadow: "0px -4px 4px #00000016",
                backgroundColor: "#FFFFFF",
                borderRadius: "0 0 8px 8px",
            }}
        >
            <Button type="primary" danger htmlType="button" onClick={onReset}>
                Reset
            </Button>
            <Button type="primary" htmlType="submit" loading={isLoading}>
                Submit
            </Button>
        </div>
    );
};