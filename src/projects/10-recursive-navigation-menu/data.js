const menuData = [
  {
    id: "home",
    label: "Home",
    path: "/home",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    children: [
      {
        id: "analytics",
        label: "Analytics",
        path: "/dashboard/analytics",
      },
      {
        id: "sales",
        label: "Sales Performance",
        path: "/dashboard/sales",
        children: [
          {
            id: "revenue",
            label: "Revenue Reports",
            path: "/dashboard/sales/revenue",
          },
          {
            id: "forecast",
            label: "Forecasts",
            path: "/dashboard/sales/forecast",
          },
        ],
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    children: [
      {
        id: "active-projects",
        label: "Active",
        path: "/projects/active",
      },
      {
        id: "archived-projects",
        label: "Archived",
        path: "/projects/archived",
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    children: [
      {
        id: "profile",
        label: "Profile Settings",
        path: "/settings/profile",
      },
      {
        id: "security",
        label: "Security & Privacy",
        path: "/settings/security",
      },
    ],
  },
  {
    id: "help",
    label: "Help & Support",
    path: "/help",
  },
];

export default menuData;
