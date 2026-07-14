import { Outlet, Link, useLocation } from 'react-router-dom'
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import {
  LayoutDashboard,
  MessageSquare,
  ShoppingCart,
  Package,
  Truck,
  Settings,
  Bell,
  Search,
  Pill,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Atendimento', path: '/atendimento', icon: MessageSquare },
  { name: 'Vendas', path: '/vendas', icon: ShoppingCart },
  { name: 'Estoque', path: '/estoque', icon: Package },
  { name: 'Entregas', path: '/entregas', icon: Truck },
  { name: 'Configurações', path: '/configuracoes', icon: Settings },
]

export default function Layout() {
  const location = useLocation()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background font-sans">
        <Sidebar className="border-r border-sidebar-border shadow-sm">
          <SidebarHeader className="p-4 flex flex-row items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <Pill className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-sidebar-foreground tracking-tight">
              FarmaSys
            </span>
          </SidebarHeader>
          <SidebarContent className="px-2">
            <SidebarMenu>
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.name}
                      className={
                        isActive
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                          : 'text-sidebar-foreground/80 hover:text-sidebar-foreground'
                      }
                    >
                      <Link to={item.path}>
                        <item.icon className="w-5 h-5 mr-2" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex flex-col flex-1 w-full overflow-hidden">
          {/* Header */}
          <header className="h-16 flex-shrink-0 border-b bg-card flex items-center justify-between px-4 lg:px-6 shadow-sm z-10">
            <div className="flex items-center flex-1">
              <SidebarTrigger className="mr-4 lg:hidden" />
              <div className="relative w-full max-w-md hidden md:flex items-center">
                <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar clientes, produtos ou receituários..."
                  className="pl-9 bg-muted/50 border-none focus-visible:ring-1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-warning rounded-full border-2 border-card"></span>
              </Button>

              <div className="flex items-center space-x-3 border-l pl-4">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium leading-none">Dra. Ana Silva</p>
                  <p className="text-xs text-muted-foreground mt-1">Farmacêutica - CRF 12345</p>
                </div>
                <Avatar className="h-9 w-9 border-2 border-primary/20">
                  <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto bg-background/50 p-4 lg:p-6 animate-fade-in">
            <Outlet />
          </main>

          {/* Status Bar */}
          <footer className="h-8 flex-shrink-0 border-t bg-card flex items-center justify-between px-4 text-[11px] font-medium text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                WhatsApp: Conectado (Instância #1)
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                SNGPC: Sincronizado
              </div>
            </div>
            <div>
              Ambiente: <span className="text-primary">Produção</span> | v2.4.1
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
