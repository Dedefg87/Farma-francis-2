import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { TrendingUp, MessageCircle, Clock, CheckCircle2, Award, Zap } from 'lucide-react'

const salesData = [
  { day: 'Seg', amount: 12500 },
  { day: 'Ter', amount: 14200 },
  { day: 'Qua', amount: 13800 },
  { day: 'Qui', amount: 15100 },
  { day: 'Sex', amount: 18900 },
  { day: 'Sáb', amount: 21400 },
  { day: 'Dom', amount: 9800 },
]

const ranking = [
  { id: 1, name: 'Marcos P.', sales: 'R$ 45.2K', pts: 1250, badge: 'Diamante' },
  { id: 2, name: 'Julia C.', sales: 'R$ 38.1K', pts: 980, badge: 'Ouro' },
  { id: 3, name: 'Dra. Ana S.', sales: 'R$ 32.5K', pts: 840, badge: 'Ouro' },
]

export default function Index() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard Executivo</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Visão geral da operação omnichannel, performance de vendas e gamificação.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-subtle border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taxa de Conversão
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.4%</div>
            <p className="text-xs text-green-600 mt-1 font-medium">+2.1% esta semana</p>
          </CardContent>
        </Card>

        <Card className="shadow-subtle border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              TMR (Resposta)
            </CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42s</div>
            <p className="text-xs text-muted-foreground mt-1">Tempo Médio de Resposta</p>
          </CardContent>
        </Card>

        <Card className="shadow-subtle border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              CSAT (Satisfação)
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96%</div>
            <p className="text-xs text-muted-foreground mt-1">142 avaliações (5 estrelas)</p>
          </CardContent>
        </Card>

        <Card className="shadow-subtle border-none bg-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Atendimentos Ativos</CardTitle>
            <MessageCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">34</div>
            <p className="text-xs text-primary/80 mt-1 font-medium">
              Distribuição Round-Robin Otimizada
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4 shadow-subtle border-none">
          <CardHeader>
            <CardTitle className="text-base">Faturamento Omnichannel (Últimos 7 dias)</CardTitle>
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
                      tickFormatter={(v) => `R${v / 1000}k`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="amount" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 shadow-subtle border-none overflow-hidden flex flex-col">
          <CardHeader className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-amber-500/20 pb-4">
            <CardTitle className="text-base flex items-center text-amber-700 dark:text-amber-500">
              <Award className="w-5 h-5 mr-2" /> Gamificação & Ranking
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            <div className="divide-y">
              {ranking.map((user, i) => (
                <div
                  key={user.id}
                  className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10 border border-border">
                        <AvatarImage
                          src={`https://img.usecurling.com/ppl/thumbnail?seed=${user.id + 5}`}
                        />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-background rounded-full flex items-center justify-center text-xs font-bold shadow-sm border">
                        {i + 1}º
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{user.name}</p>
                      <Badge
                        variant="secondary"
                        className="text-[10px] mt-0.5 bg-amber-100 text-amber-800 border-none"
                      >
                        {user.badge}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm text-foreground">{user.sales}</p>
                    <p className="text-xs text-muted-foreground flex items-center justify-end">
                      <Zap className="w-3 h-3 text-warning mr-1" /> {user.pts} pts
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
