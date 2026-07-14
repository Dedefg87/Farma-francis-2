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
import { Search, Plus, Filter, Download, AlertTriangle } from 'lucide-react'

const INVENTORY = [
  {
    id: '1',
    sku: 'MED-001',
    name: 'Amoxicilina 500mg (EMS)',
    batch: 'L-29384',
    expiry: '2026-12-10',
    stock: 45,
    class: 'Antibiótico',
    controlled: true,
  },
  {
    id: '2',
    sku: 'MED-042',
    name: 'Rivotril 2mg (Clonazepam)',
    batch: 'L-11234',
    expiry: '2027-05-15',
    stock: 18,
    class: 'Psicotrópico',
    controlled: true,
  },
  {
    id: '3',
    sku: 'MED-110',
    name: 'Dipirona 500mg',
    batch: 'L-99882',
    expiry: '2025-01-20',
    stock: 120,
    class: 'Analgésico',
    controlled: false,
  },
  {
    id: '4',
    sku: 'PER-005',
    name: 'Shampoo Johnson Baby 200ml',
    batch: 'L-0012',
    expiry: '2028-10-01',
    stock: 30,
    class: 'Perfumaria',
    controlled: false,
  },
  {
    id: '5',
    sku: 'MED-201',
    name: 'Losartana Potássica 50mg',
    batch: 'L-44551',
    expiry: '2026-08-30',
    stock: 85,
    class: 'Anti-hipertensivo',
    controlled: false,
  },
]

export default function Estoque() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Gestão de Estoque</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Controle de lotes, validades e relatórios SNGPC.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> Exportar
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Novo Produto
          </Button>
        </div>
      </div>

      <Tabs defaultValue="geral">
        <TabsList className="mb-4">
          <TabsTrigger value="geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="lotes">Controle de Lotes & Validade</TabsTrigger>
          <TabsTrigger
            value="sngpc"
            className="text-primary font-medium data-[state=active]:bg-primary/10"
          >
            SNGPC (ANVISA)
          </TabsTrigger>
        </TabsList>

        <Card className="shadow-subtle border-none">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome, SKU ou lote..." className="pl-9" />
              </div>
              <Button variant="outline" className="w-fit">
                <Filter className="w-4 h-4 mr-2" /> Filtros
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[100px]">SKU</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Lote</TableHead>
                  <TableHead>Validade</TableHead>
                  <TableHead className="text-right">Qtd. Estoque</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {INVENTORY.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-mono text-xs">{item.sku}</TableCell>
                    <TableCell>
                      <div className="font-medium text-sm">{item.name}</div>
                      {item.controlled && (
                        <div className="mt-1 flex items-center">
                          <Badge
                            variant="outline"
                            className="text-[10px] h-4 border-warning text-warning bg-warning/10 px-1.5"
                          >
                            Portaria 344/98
                          </Badge>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{item.class}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {item.batch}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">
                          {new Date(item.expiry).toLocaleDateString('pt-BR')}
                        </span>
                        {new Date(item.expiry).getFullYear() === 2025 && (
                          <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold">{item.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}
