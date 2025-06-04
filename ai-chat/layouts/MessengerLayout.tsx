import React, { ReactNode } from "react";

interface MessengerLayoutProps {
  children: ReactNode;
}

const MessengerLayout: React.FC<MessengerLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MessengerLayout; 