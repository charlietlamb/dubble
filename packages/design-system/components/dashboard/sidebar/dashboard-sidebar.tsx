import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarRail,
} from '@dubble/design-system/components/ui/sidebar'
import { dashboardSidebarItems } from './data/dashboardSidebarItems'
import DashboardSidebarMenuItem from './dashboard-sidebar-menu'
import DashboardSidebarFooter from './footer/dashboard-sidebar-footer'
import DashboardSidebarHeader from './header/dashboard-sidebar-header'
import DashboardSidebarSettings from './dashboard-sidebar-settings'

export default function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon" className="font-heading border-none">
      <DashboardSidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          {dashboardSidebarItems.map((item) => (
            <DashboardSidebarMenuItem key={item.title} item={item} />
          ))}
          <DashboardSidebarSettings />
        </SidebarMenu>
      </SidebarContent>
      <DashboardSidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
