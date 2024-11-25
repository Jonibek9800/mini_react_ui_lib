import React, { FC, ReactNode } from "react";

interface IButtomProps {
    children: ReactNode | string;
}

const TextButton: FC<IButtomProps> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

export default TextButton;
