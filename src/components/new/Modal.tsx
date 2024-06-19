import React from "react";
import styles from "./blog.module.css";
import { Button } from "@nextui-org/react";

const Modal = ({ onClose, children, onConfirm }: { onClose: any, children: any, onConfirm: any }) => {
    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
    };
    const handleConfirmClick = (e: any) => {
        e.preventDefault();
        onConfirm();
    };

    const modalContent = (
        <div className={styles["modal-overlay"]}>
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <div className={styles["modal-wrapper"]}>
                <div className={styles["modal"]}>
                    <div className={styles["modal-header"]}>
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    <div className={styles["modal-body"]}>{children}</div>
                    <div className={styles["modal-button-wrap"]}>
                        <Button onClick={handleConfirmClick}>確認</Button>
                    </div>
                </div>
            </div>
        </div>
    );

    return modalContent
};

export default Modal;