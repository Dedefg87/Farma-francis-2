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
import { Search, ShoppingCart, Trash2, CreditCard, ScanLine, Gift } from 'lucide-react'

const PRODUCTS = [
  {
    id: '1',
    ean: '789101010101',
    name: 'Amoxicilina 500mg 21 Cápsulas EMS',
    price: 25.9,
    stock: 45,
    type: 'controlled',
  },
  {
    id: '2',
    ean: '789202020202',
    name: 'Dipirona Sódica 500mg/ml Gotas 20ml',
    price: 8.5,
    stock: 120,
    type: 'normal',
  },
  {
    id: '3',
    ean: '789303030303',
    name: 'Fralda Pampers Confort Sec Mega M (74un)',
    price: 95.0,
    stock: 12,
    type: 'baby',
  },
]

const CART = [{ id: '2', name: 'Dipirona Sódica 500mg/ml Gotas', qty: 2, price: 8.5 }]

export default function Vendas() {
  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Ponto de Venda</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Crie novas vendas ou gerencie listas de Chá de Fraldas.
          </p>
        </div>
      </div>

      <Tabs defaultValue="pdv" className="flex-1 flex flex-col">
        <TabsList className="w-fit mb-4 border bg-card">
          <TabsTrigger
            value="pdv"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-2" /> PDV Padrão
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
            {/* Left: Product Search */}
            <Card className="lg:col-span-2 shadow-subtle border-none flex flex-col overflow-hidden">
              <CardHeader className="pb-3 shrink-0">
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar por Nome, EAN ou Princípio Ativo..."
                      className="pl-9 h-10"
                    />
                  </div>
                  <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
                    <ScanLine className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto p-0">
                <Table>
                  <TableHeader className="bg-muted/50 sticky top-0 z-10">
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead className="text-right">Preço</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {PRODUCTS.map((p) => (
                      <TableRow key={p.id}>
                        <TableCell>
                          <p className="font-medium text-sm">{p.name}</p>
                          <p className="text-xs text-muted-foreground">EAN: {p.ean}</p>
                          {p.type === 'controlled' && (
                            <Badge
                              variant="outline"
                              className="mt-1 text-[10px] border-primary text-primary px-1 py-0"
                            >
                              Portaria 344/98
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant={p.stock > 20 ? 'secondary' : 'destructive'}>
                            {p.stock} un
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          R$ {p.price.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="secondary">
                            Adicionar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Right: Cart */}
            <Card className="shadow-subtle border-none flex flex-col overflow-hidden bg-slate-50 dark:bg-card">
              <CardHeader className="pb-3 border-b bg-card">
                <CardTitle className="text-lg">Resumo do Pedido</CardTitle>
                <div className="mt-2">
                  <Input
                    placeholder="Vincular Cliente (Opcional)"
                    className="h-8 text-xs bg-background"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto p-4 space-y-4">
                {CART.map((item) => (
                  <div key={item.id} className="flex justify-between items-start border-b pb-3">
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-2 leading-tight">{item.name}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <Input
                          type="number"
                          defaultValue={item.qty}
                          className="h-7 w-16 text-xs p-1"
                        />
                        <span className="text-xs text-muted-foreground">
                          x R$ {item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-2 flex flex-col justify-between items-end h-full">
                      <p className="text-sm font-bold">R$ {(item.qty * item.price).toFixed(2)}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-destructive hover:bg-destructive/10 hover:text-destructive mt-1"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="p-4 border-t bg-card space-y-4 shrink-0">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>R$ 17.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Desconto</span>
                    <span className="text-green-600">- R$ 0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl pt-2 border-t">
                    <span>Total</span>
                    <span className="text-primary">R$ 17.00</span>
                  </div>
                </div>
                <Button className="w-full h-12 text-lg" size="lg">
                  <CreditCard className="mr-2 h-5 w-5" /> Finalizar Venda
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="baby" className="flex-1 m-0">
          <Card className="h-full flex items-center justify-center shadow-subtle border-none text-center bg-pink-50/30 dark:bg-pink-950/10">
            <div className="max-w-md">
              <Gift className="w-16 h-16 mx-auto text-pink-400 mb-4 opacity-80" />
              <h2 className="text-2xl font-bold mb-2">Módulo Chá de Fraldas</h2>
              <p className="text-muted-foreground mb-6">
                Gerencie listas de presentes, crie cotas e acompanhe os recebimentos de forma
                prática.
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">Criar Nova Lista</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
