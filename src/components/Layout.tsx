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
  Store,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Atendimento', path: '/atendimento', icon: MessageSquare },
  { name: 'Vendas & CRM', path: '/vendas', icon: ShoppingCart },
  { name: 'Estoque & Fiscal', path: '/estoque', icon: Package },
  { name: 'Logística', path: '/entregas', icon: Truck },
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
          <header className="h-16 flex-shrink-0 border-b bg-card flex items-center justify-between px-4 lg:px-6 shadow-sm z-10">
            <div className="flex items-center flex-1">
              <SidebarTrigger className="mr-4 lg:hidden" />
              <Button variant="outline" size="sm" className="hidden md:flex text-xs mr-4">
                <Store className="w-3.5 h-3.5 mr-2" /> Matriz - CNPJ 00.000/0001
              </Button>
              <div className="relative w-full max-w-md hidden lg:flex items-center">
                <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar clientes, produtos ou receituários..."
                  className="pl-9 bg-muted/50 border-none h-9 focus-visible:ring-1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex text-xs space-x-4 mr-2 border-r pr-4">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-primary">12</span>
                  <span className="text-[10px] text-muted-foreground">Em Fila</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-green-600">4</span>
                  <span className="text-[10px] text-muted-foreground">Ativos</span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-warning rounded-full border-2 border-card"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center space-x-3 cursor-pointer hover:bg-muted/50 p-1.5 rounded-lg transition-colors">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-medium leading-none">Dra. Ana Silva</p>
                      <div className="flex items-center justify-end mt-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                          Disponível
                        </p>
                      </div>
                    </div>
                    <Avatar className="h-9 w-9 border-2 border-green-500/20">
                      <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Status de Atendimento</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value="disponivel">
                    <DropdownMenuRadioItem
                      value="disponivel"
                      className="text-green-600 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Disponível
                    </DropdownMenuRadioItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="text-warning font-medium">
                        <span className="w-2 h-2 rounded-full bg-warning mr-2"></span> Pausado
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioItem value="almoco">Almoço</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="lanche">Lanche</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="banheiro">Banheiro</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="outro">Outro (Admin)</DropdownMenuRadioItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuRadioItem value="offline" className="text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground mr-2"></span>{' '}
                      Offline
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 overflow-auto bg-background/50 p-4 lg:p-6 animate-fade-in">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
