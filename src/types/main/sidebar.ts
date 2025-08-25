export type SidebarContextType = {
  isDesktopExpanded: boolean;
  toggleDesktopSidebar: () => void;
  isMobileOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
};
