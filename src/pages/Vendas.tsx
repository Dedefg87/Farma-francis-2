import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CardDescription } from '@/components/ui/card'
import {
  Search,
  ShoppingCart,
  Trash2,
  CreditCard,
  ScanLine,
  Gift,
  Kanban,
  Link as LinkIcon,
  BellRing,
  QrCode,
} from 'lucide-react'

const PRODUCTS = [
  {
    id: '1',
    ean: '789101010101',
    name: 'Amoxicilina 500mg 21 Cápsulas',
    price: 25.9,
    stock: 45,
    expired: false,
  },
  {
    id: '2',
    ean: '789202020202',
    name: 'Dipirona Sódica Gotas 20ml',
    price: 8.5,
    stock: 120,
    expired: false,
  },
  {
    id: '3',
    ean: '789303030303',
    name: 'Loratadina 50mg (Lote Vencido)',
    price: 12.0,
    stock: 5,
    expired: true,
  },
]

export default function Vendas() {
  const [paymentDone, setPaymentDone] = useState(false)

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Gestão de Vendas</h1>
          <p className="text-muted-foreground text-sm mt-1">
            PDV, Funil de Conversão e Chá de Fraldas.
          </p>
        </div>
      </div>

      <Tabs defaultValue="pdv" className="flex-1 flex flex-col">
        <TabsList className="w-fit mb-4 border bg-card">
          <TabsTrigger
            value="pdv"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-2" /> PDV Rápido
          </TabsTrigger>
          <TabsTrigger value="kanban">
            <Kanban className="w-4 h-4 mr-2" /> Funil Kanban
          </TabsTrigger>
          <TabsTrigger
            value="baby"
            className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
          >
            <Gift className="w-4 h-4 mr-2" /> Chá de Fraldas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pdv" className="flex-1 m-0 h-full">
          <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-14rem)]">
            <Card className="lg:col-span-2 shadow-subtle border-none flex flex-col overflow-hidden">
              <CardHeader className="pb-3 shrink-0 flex flex-row items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar por Nome, EAN..." className="pl-9 h-10" />
                </div>
                <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
                  <ScanLine className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto p-0">
                <Table>
                  <TableHeader className="bg-muted/50 sticky top-0 z-10">
                    <TableRow>
                      <TableHead>Produto / EAN</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead className="text-right">Preço</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {PRODUCTS.map((p) => (
                      <TableRow
                        key={p.id}
                        className={p.expired ? 'opacity-50 bg-destructive/5' : ''}
                      >
                        <TableCell>
                          <p className="font-medium text-sm">{p.name}</p>
                          <p className="text-xs text-muted-foreground">EAN: {p.ean}</p>
                          {p.expired && (
                            <Badge variant="destructive" className="mt-1 text-[10px] h-4 px-1">
                              Lote Vencido (RNG-012)
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{p.stock} un</Badge>
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          R$ {p.price.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            size="sm"
                            variant={p.expired ? 'ghost' : 'secondary'}
                            disabled={p.expired}
                          >
                            Adicionar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="shadow-subtle border-none flex flex-col overflow-hidden bg-slate-50 dark:bg-card">
              <CardHeader className="pb-3 border-b bg-card">
                <CardTitle className="text-lg flex justify-between">
                  Resumo do Pedido{' '}
                  <Badge
                    variant="outline"
                    className="text-[10px] border-primary text-primary bg-primary/5"
                  >
                    Estoque Reservado
                  </Badge>
                </CardTitle>
                <div className="mt-2">
                  <Input
                    defaultValue="Marcos Silva (CRM Integrado)"
                    className="h-8 text-xs bg-primary/5 border-primary/20 text-primary font-medium"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto p-4 space-y-4">
                <div className="flex justify-between items-start border-b pb-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-2 leading-tight">
                      Dipirona Sódica Gotas 20ml
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Input type="number" defaultValue={2} className="h-7 w-16 text-xs p-1" />
                      <span className="text-xs text-muted-foreground">x R$ 8.50</span>
                    </div>
                  </div>
                  <div className="text-right ml-2 flex flex-col justify-between items-end h-full">
                    <p className="text-sm font-bold">R$ 17.00</p>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive mt-1">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 border-t bg-card space-y-4 shrink-0">
                <div className="flex justify-between font-bold text-xl pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">R$ 17.00</span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full h-12 text-lg" size="lg">
                      <CreditCard className="mr-2 h-5 w-5" /> Checkout (Webhook)
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Pagamento e Emissão Fiscal</DialogTitle>
                      <DialogDescription>
                        Aguardando confirmação via Webhook de Pagamento PIX/Cartão.
                      </DialogDescription>
                    </DialogHeader>
                    {!paymentDone ? (
                      <div className="flex flex-col items-center justify-center p-6 space-y-4">
                        <QrCode className="w-32 h-32 text-muted-foreground opacity-50" />
                        <p className="text-sm text-center text-muted-foreground">
                          Gerando cobrança dinâmica PIX...
                        </p>
                        <Button
                          onClick={() => setPaymentDone(true)}
                          variant="outline"
                          className="w-full mt-4"
                        >
                          Simular Pagamento Aprovado
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 space-y-4">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-lg">Pagamento Confirmado!</h3>
                        <div className="bg-muted p-3 rounded-lg w-full text-xs space-y-1 text-center font-mono">
                          <p>Estoque Baixado com Sucesso</p>
                          <p>NF-e: 3526071234567800019955001000...</p>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="kanban" className="flex-1 m-0">
          <div className="grid grid-cols-4 gap-4 h-[calc(100vh-14rem)] overflow-hidden">
            {['Lead Novo', 'Proposta Enviada', 'Em Negociação', 'Fechamento'].map((col, i) => (
              <div
                key={col}
                className="bg-muted/40 rounded-xl p-3 border border-border/50 flex flex-col"
              >
                <h3 className="font-semibold text-sm mb-3 px-1">
                  {col}{' '}
                  <Badge variant="secondary" className="ml-2 bg-background">
                    {i === 1 ? 1 : 0}
                  </Badge>
                </h3>
                <div className="flex-1 overflow-y-auto space-y-2">
                  {i === 1 && (
                    <Card className="shadow-sm cursor-grab border-primary/20 bg-card">
                      <CardContent className="p-3">
                        <p className="text-xs font-bold text-muted-foreground mb-1">#OP-492</p>
                        <p className="font-medium text-sm mb-2">João Silva (Orçamento Kit Bebê)</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-primary font-bold">R$ 245,90</span>
                          <span className="bg-amber-100 text-amber-800 px-1.5 rounded">Hot</span>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="baby" className="flex-1 m-0">
          <Card className="shadow-subtle border-none">
            <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
              <div>
                <CardTitle>Módulo Chá de Fraldas</CardTitle>
                <CardDescription>
                  Crie páginas públicas integradas ao estoque real e notifique os pais.
                </CardDescription>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                <Gift className="w-4 h-4 mr-2" /> Novo Evento
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted/20">
                  <TableRow>
                    <TableHead>Bebê & Pais</TableHead>
                    <TableHead>Data do Evento</TableHead>
                    <TableHead>Arrecadado</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <p className="font-semibold text-sm">Enzo Gabriel</p>
                      <p className="text-xs text-muted-foreground">Mãe: Juliana Costa</p>
                    </TableCell>
                    <TableCell className="text-sm">20/08/2026</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        R$ 845,00 (12 itens)
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          <LinkIcon className="w-3 h-3 mr-2" /> Copiar Link
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                          <BellRing className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
