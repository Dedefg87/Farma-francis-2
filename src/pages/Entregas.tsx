import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Package, Clock, CheckCircle2 } from 'lucide-react'

const DELIVERIES = {
  pending: [
    {
      id: '1092',
      name: 'Carlos Augusto',
      address: 'Rua das Flores, 123 - Centro',
      time: '14:30',
      items: 3,
      total: 145.9,
    },
    {
      id: '1095',
      name: 'Maria Souza',
      address: 'Av. Paulista, 1000 - Apto 42',
      time: '15:00',
      items: 1,
      total: 25.0,
    },
  ],
  transit: [
    {
      id: '1088',
      name: 'João Ferreira',
      address: 'Rua Augusta, 500',
      time: '13:15',
      items: 5,
      total: 320.5,
      driver: 'José (Moto)',
    },
  ],
  completed: [
    {
      id: '1080',
      name: 'Ana Paula',
      address: 'Alameda Santos, 200',
      time: '11:00',
      items: 2,
      total: 89.9,
    },
  ],
}

export default function Entregas() {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Logística & Entregas
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Acompanhamento de rotas e status de pedidos.
          </p>
        </div>
      </div>

      <div className="flex-1 grid md:grid-cols-3 gap-6 overflow-hidden pb-4">
        {/* Column: Pendentes */}
        <div className="flex flex-col bg-muted/40 rounded-xl p-4 border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold flex items-center text-slate-700 dark:text-slate-300">
              <Clock className="w-4 h-4 mr-2" /> Pendentes
            </h2>
            <Badge variant="secondary">{DELIVERIES.pending.length}</Badge>
          </div>
          <div className="space-y-3 overflow-y-auto pr-1">
            {DELIVERIES.pending.map((d) => (
              <Card
                key={d.id}
                className="shadow-sm cursor-pointer hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-muted-foreground">#{d.id}</span>
                    <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                      {d.time}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{d.name}</h3>
                  <div className="flex items-start text-xs text-muted-foreground mt-2">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 mt-0.5" />
                    <p className="line-clamp-2">{d.address}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t pt-3">
                    <span className="text-xs text-muted-foreground">{d.items} itens</span>
                    <span className="font-bold text-sm">R$ {d.total.toFixed(2)}</span>
                  </div>
                  <Button size="sm" className="w-full mt-3 h-8 text-xs">
                    Atribuir Rota
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Column: Em Rota */}
        <div className="flex flex-col bg-primary/5 rounded-xl p-4 border border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold flex items-center text-primary">
              <Package className="w-4 h-4 mr-2" /> Em Rota
            </h2>
            <Badge className="bg-primary">{DELIVERIES.transit.length}</Badge>
          </div>
          <div className="space-y-3 overflow-y-auto pr-1">
            {DELIVERIES.transit.map((d) => (
              <Card key={d.id} className="shadow-sm border-primary/30">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-muted-foreground">#{d.id}</span>
                    <span className="text-xs font-medium text-primary">Previsão: 15min</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{d.name}</h3>
                  <div className="flex items-start text-xs text-muted-foreground mt-2">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 mt-0.5" />
                    <p className="line-clamp-2">{d.address}</p>
                  </div>
                  <div className="mt-3 bg-white dark:bg-black/20 rounded p-2 border text-xs flex justify-between items-center">
                    <span className="font-medium text-slate-600 dark:text-slate-400">
                      Entregador:
                    </span>
                    <span className="font-bold">{d.driver}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Column: Entregues */}
        <div className="flex flex-col bg-muted/20 rounded-xl p-4 border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold flex items-center text-green-700 dark:text-green-500">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Entregues
            </h2>
            <Badge variant="outline" className="text-green-700 border-green-700">
              {DELIVERIES.completed.length}
            </Badge>
          </div>
          <div className="space-y-3 overflow-y-auto pr-1">
            {DELIVERIES.completed.map((d) => (
              <Card key={d.id} className="shadow-sm opacity-70">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-muted-foreground">#{d.id}</span>
                    <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      Realizada às 12:45
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-muted-foreground">{d.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
