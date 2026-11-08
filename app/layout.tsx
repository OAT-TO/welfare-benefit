"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/tailgrids/core/sidebar";
import {
  AngleDoubleLeft,
  BoxGift2,
  Calendar,
  ClockThree,
  DashboardSquare1,
  Envelope1,
  Gear1,
  Home,
  Layout14,
  Search1,
  User2,
  Page,
  Bell1,
} from "@tailgrids/icons";
import { forwardRef, SVGProps, useEffect, useState } from "react";
import { mergeProps } from "react-aria";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/app/globals.css";

const personalItems = [
  { title: "Dashboard", url: "/", icon: Layout14 },
  { title: "ประวัติครอบครัวของฉัน", url: "/family", icon: User2 },
  { title: "ยื่นคำขอเบิกสวัสดิการ", url: "/requests", icon: Page },
  { title: "ประวัติการเบิกของฉัน", url: "/history", icon: ClockThree },
];

const departmentItems = [
  { title: "รายชื่อพนักงานในแผนก", url: "/emloyees", icon: User2 },
  {
    title: "ประวัติการเบิกของแผนก",
    url: "/department-history",
    icon: Calendar,
  },
];

// export const metadata: Metadata = {
//   title: "สวัสดิการพนักงาน | แดชบอร์ด",
//   description: "ระบบจัดการข้อมูลพนักงานและสวัสดิการ",
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [today, setToday] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setToday(
        new Date().toLocaleDateString("th-TH", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <html lang="th">
      <head>
        <title>แดชบอร์ด · หัวหน้าแผนก</title>
      </head>

      <body>
        <div className="flex h-screen w-full overflow-hidden bg-background-100">
          <SidebarProvider className="h-full">
            <Sidebar className="h-full w-75 shrink-0 bg-white">
              {/* sidebar header */}
              <SidebarHeader className="flex-row items-center gap-3 border-b border-base-200 px-6 py-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-700">
                  <Layout14 className="size-6 text-white" />
                </span>

                <span>
                  <b className="text-xl font-bold">สวัสดิการพนักงาน</b>
                  <p className="text-sm text-muted-foreground">
                    พื้นที่สำหรับหัวหน้าแผนก
                  </p>
                </span>
              </SidebarHeader>

              {/* sidebar content */}
              <SidebarContent className="px-4 py-4">
                {/* Personal Usage */}
                <SidebarGroup>
                  <SidebarGroupLabel className="mb-2 px-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    <span>
                      ส่วนการใช้งานส่วนตัว
                      <br />
                      (PERSONAL USAGE)
                    </span>
                  </SidebarGroupLabel>

                  <SidebarGroupContent>
                    <SidebarMenu>
                      {personalItems.map((item) => (
                        <SidebarMenuItem
                          key={item.title}
                          className="mb-2 last:mb-0"
                        >
                          <SidebarMenuButton
                            tooltip={item.title}
                            render={({ ref, ...props }) => (
                              <SidebarMenuItemLink
                                title={item.title}
                                url={item.url}
                                icon={item.icon}
                                active={pathname === item.url}
                                ref={ref as React.Ref<HTMLAnchorElement>}
                                {...props}
                              />
                            )}
                          />
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>

                {/* Department Governance */}
                <SidebarGroup className="mt-6">
                  <SidebarGroupLabel className="mb-2 px-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    <span>
                      ส่วนการดูแลแผนก
                      <br />
                      (DEPARTMENT GOVERNANCE)
                    </span>
                  </SidebarGroupLabel>

                  <SidebarGroupContent>
                    <SidebarMenu>
                      {departmentItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            tooltip={item.title}
                            render={({ ref, ...props }) => (
                              <SidebarMenuItemLink
                                title={item.title}
                                url={item.url}
                                icon={item.icon}
                                active={pathname === item.url}
                                ref={ref as React.Ref<HTMLAnchorElement>}
                                {...props}
                              />
                            )}
                          />
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>

              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Settings">
                      <Gear1 />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>

            {/* header */}
            <div className="flex flex-1 flex-col">
              <header className="flex h-18 items-center gap-4 border-b border-base-200 bg-background-100 px-6">
                <SidebarTrigger>
                  <AngleDoubleLeft className="group-data-[sidebar=closed]/sidebar-wrapper:rotate-180 duration-300" />
                </SidebarTrigger>
                <p className="text-lg font-semibold">
                  ระบบจัดการข้อมูลพนักงานและสวัสดิการ · ฝ่ายการตลาด
                </p>
 
                <div className="ml-auto flex items-center gap-2">
                  <Bell1 className="size-5" />
                  {/* <p className="text-sm font-medium">{today}</p> */}

                  <p>ชื่อ</p>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-700">
                    <User2 className="size-6 text-white" />
                  </span>
                </div>
              </header>

              <main className="flex-1 overflow-auto p-6 bg-gray-100">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}

const SidebarMenuItemLink = forwardRef<
  HTMLAnchorElement,
  {
    title: string;
    url: string;
    icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    active?: boolean;
    [key: string]: any;
  }
>(({ title, url, icon: Icon, active = false, ...props }, ref) => {
  const { className, ...rest } = props;

  return (
    <Link
      {...mergeProps(rest, {
        href: url,
      })}
      ref={ref}
      aria-current={active ? "page" : undefined}
      className={`
        flex w-full items-center gap-3
        rounded-lg px-3 py-3
        text-sm font-medium
        transition-colors duration-200
        ${active ? "bg-blue-700 text-white" : "text-foreground hover:bg-muted"}
        ${className ?? ""}
      `}
    >
      <Icon className="size-5 shrink-0" />
      <span>{title}</span>
    </Link>
  );
});

SidebarMenuItemLink.displayName = "SidebarMenuItemLink";
