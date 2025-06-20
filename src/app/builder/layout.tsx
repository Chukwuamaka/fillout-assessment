"use client";

import { PropsWithChildren } from "react";
import LeftSidebar from "./LeftSidebar";
import TopNavigation from "./TopNavigation";
import BottomNavigation from "./BottomNavigation";
import Canvas from "./Canvas";

export default function FormBuilderLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen bg-white">
      <LeftSidebar />

      <div className="flex-1 flex flex-col">
        <TopNavigation />
        <div className="p-5 flex-1 flex flex-col gap-5">
          <Canvas>{children}</Canvas>
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}
