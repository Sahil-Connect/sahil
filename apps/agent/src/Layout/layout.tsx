import React, { ReactChild } from "react";
import Navbar from '@/components/UI/Navbar';
type LayoutProps = {
  children: ReactChild | ReactChild[];
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
