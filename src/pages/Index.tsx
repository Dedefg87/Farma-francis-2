import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { TrendingUp, MessageCircle, PackageOpen, ClipboardCheck, AlertTriangle } from 'lucide-react'

const salesData = [
  { day: 'Seg', amount: 12500 },
  { day: 'Ter', amount: 14200 },
  { day: 'Qua', amount: 13800 },
  { day: 'Qui', amount: 15100 },
  { day: 'Sex', amount: 18900 },
  { day: 'Sáb', amount: 21400 },
  { day: 'Dom', amount: 9800 },
]

const alertsData = [
  {
    id: 1,
    product: 'Amoxicilina 500mg (EMS)',
    reason: 'Vencimento Próximo',
    detail: '15 Dias',
    level: 'warning',
  },
  {
    id: 2,
    product: 'Dipirona Sódica 500mg',
    reason: 'Estoque Baixo',
    detail: '12 unids',
    level: 'destructive',
  },
  {
    id: 3,
    product: 'Rivotril 2mg (Clonazepam)',
    reason: 'Validar Receita',
    detail: 'WhatsApp #402',
    level: 'primary',
  },
  {
    id: 4,
    product: 'Fralda Pampers M',
    reason: 'Estoque Baixo',
    detail: '3 unids',
    level: 'destructive',
  },
]

const recentActivity = [
  { time: '10:42', msg: 'Nova venda aprovada via WhatsApp (R$ 142,50)' },
  { time: '10:38', msg: 'Receita validada por Dra. Ana Silva' },
  { time: '10:15', msg: 'Entregador "Carlos" saiu para rota com 4 pedidos' },
  { time: '09:55', msg: 'Lote #8829 de Omeprazol recebido e conferido' },
]

export default function Index() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Visão geral da operação, vendas e alertas da farmácia.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-subtle border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Vendas Hoje</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 15.430,20</div>
            <p className="text-xs text-green-600 mt-1 font-medium flex items-center">
              +12% em relação a ontem
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-subtle border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Chats Pendentes
            </CardTitle>
            <MessageCircle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">Tempo médio resp: 4m</p>
          </CardContent>
        </Card>

        <Card className="shadow-subtle border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Entregas em Rota
            </CardTitle>
            <PackageOpen className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">3 aguardando coleta</p>
          </CardContent>
        </Card>

        <Card className="shadow-subtle border-none bg-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Ação Farmacêutico</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">3</div>
            <p className="text-xs text-primary/80 mt-1 font-medium">Receitas p/ validação</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        {/* Chart Section */}
        <Card className="md:col-span-4 shadow-subtle border-none">
          <CardHeader>
            <CardTitle className="text-base">Evolução de Vendas (Últimos 7 dias)</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[300px] w-full">
              <ChartContainer config={{ sales: { color: 'hsl(var(--primary))' } }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis
                      dataKey="day"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `R$${value / 1000}k`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="amount" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Alerts Section */}
        <Card className="md:col-span-3 shadow-subtle border-none">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-warning" />
              Alertas Prioritários
            </CardTitle>
            <Button variant="link" size="sm" className="text-xs">
              Ver todos
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[150px]">Produto</TableHead>
                  <TableHead>Motivo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alertsData.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-medium text-sm truncate max-w-[150px]">
                      {alert.product}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            alert.level as 'default' | 'destructive' | 'secondary' | 'outline'
                          }
                          className={
                            alert.level === 'warning'
                              ? 'bg-warning text-warning-foreground hover:bg-warning/80'
                              : alert.level === 'primary'
                                ? 'bg-primary text-primary-foreground'
                                : ''
                          }
                        >
                          {alert.reason}
                        </Badge>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {alert.detail}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-6">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Feed em Tempo Real
              </h4>
              <div className="space-y-4 border-l-2 border-muted pl-4 ml-2">
                {recentActivity.map((act, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-card" />
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">{act.time}</p>
                    <p className="text-sm">{act.msg}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
