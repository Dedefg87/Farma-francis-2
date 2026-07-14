import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { MapPin, Package, Clock, CheckCircle2, Camera, PenTool } from 'lucide-react'

const DELIVERIES = [
  {
    id: '1092',
    name: 'Carlos Augusto',
    address: 'Rua das Flores, 123',
    status: 'pending',
    total: 145.9,
  },
  {
    id: '1088',
    name: 'João Ferreira',
    address: 'Rua Augusta, 500',
    status: 'transit',
    driver: 'José (Moto)',
  },
]

export default function Entregas() {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Logística & App Entregador
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Acompanhamento de rotas e confirmação rigorosa de entrega (RNG-016).
        </p>
      </div>

      <div className="flex-1 grid md:grid-cols-3 gap-6 overflow-hidden pb-4">
        {/* Pending */}
        <div className="flex flex-col bg-muted/40 rounded-xl p-4 border border-border/50">
          <h2 className="font-semibold flex items-center mb-4">
            <Clock className="w-4 h-4 mr-2" /> Pendentes
          </h2>
          <Card className="shadow-sm cursor-pointer hover:border-primary/50 transition-colors">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-muted-foreground">#1092</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">Carlos Augusto</h3>
              <p className="text-xs text-muted-foreground flex items-center mt-2">
                <MapPin className="w-3 h-3 mr-1" /> Rua das Flores, 123
              </p>
              <Button size="sm" className="w-full mt-3 h-8 text-xs">
                Atribuir Rota
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Transit */}
        <div className="flex flex-col bg-primary/5 rounded-xl p-4 border border-primary/20">
          <h2 className="font-semibold flex items-center text-primary mb-4">
            <Package className="w-4 h-4 mr-2" /> Em Rota
          </h2>
          <Card className="shadow-sm border-primary/30">
            <CardContent className="p-4">
              <span className="text-xs font-bold text-muted-foreground">#1088</span>
              <h3 className="font-semibold text-sm mb-1 mt-1">João Ferreira</h3>
              <p className="text-xs text-muted-foreground flex items-center mt-2">
                <MapPin className="w-3 h-3 mr-1" /> Rua Augusta, 500
              </p>
              <div className="mt-3 bg-white dark:bg-black/20 rounded p-2 border text-xs flex justify-between items-center mb-3">
                <span className="font-medium text-slate-600">Entregador:</span>
                <span className="font-bold">José (Moto)</span>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Finalizar Entrega
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirmação de Entrega Obrigatória</DialogTitle>
                  </DialogHeader>
                  <div className="py-4 text-sm text-muted-foreground space-y-4">
                    <p>
                      A regra <strong className="text-foreground">RNG-016</strong> exige prova de
                      entrega para concluir o fluxo logístico.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="h-24 flex flex-col items-center justify-center border-dashed"
                      >
                        <Camera className="w-6 h-6 mb-2 text-primary" /> Capturar Foto (Local)
                      </Button>
                      <Button
                        variant="outline"
                        className="h-24 flex flex-col items-center justify-center border-dashed"
                      >
                        <PenTool className="w-6 h-6 mb-2 text-primary" /> Assinatura Digital
                      </Button>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button disabled>Concluir Pedido</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Completed */}
        <div className="flex flex-col bg-muted/20 rounded-xl p-4 border border-border/50">
          <h2 className="font-semibold flex items-center text-green-700 mb-4">
            <CheckCircle2 className="w-4 h-4 mr-2" /> Entregues
          </h2>
          <Card className="shadow-sm opacity-70">
            <CardContent className="p-4">
              <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded">
                Comprovante Digital ✓
              </span>
              <h3 className="font-semibold text-sm text-muted-foreground mt-2">Ana Paula</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
