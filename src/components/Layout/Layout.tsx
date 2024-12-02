import { ReactNode } from "react";
import "./Layout.css";

export function Layout({ children }: { children: ReactNode }) {
  return <div className="layout">{children}</div>;
}
