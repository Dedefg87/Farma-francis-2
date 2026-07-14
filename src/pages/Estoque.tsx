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
import { Search, Filter, Download, AlertTriangle, FileUp, ShieldCheck } from 'lucide-react'

const INVENTORY = [
  {
    id: '1',
    ean: '789101',
    name: 'Amoxicilina 500mg',
    active: 'Amoxicilina',
    batch: 'L-29384',
    expiry: '2026-12-10',
    stock: 45,
    ncm: '3004.10.11',
    cfop: '5102',
    controlled: true,
  },
  {
    id: '2',
    ean: '789042',
    name: 'Rivotril 2mg',
    active: 'Clonazepam',
    batch: 'L-11234',
    expiry: '2027-05-15',
    stock: 18,
    ncm: '3004.90.69',
    cfop: '5102',
    controlled: true,
  },
  {
    id: '3',
    ean: '789110',
    name: 'Loratadina 10mg',
    active: 'Loratadina',
    batch: 'L-99882',
    expiry: '2023-01-20',
    stock: 120,
    ncm: '3004.90.99',
    cfop: '5102',
    controlled: false,
    expired: true,
  },
]

export default function Estoque() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Backend Fiscal & Estoque
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Controle regulatório (Portaria 344/98), Lotes, Validade e Tributos.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <FileUp className="w-4 h-4 mr-2" /> Importar XML (NF-e Entrada)
          </Button>
        </div>
      </div>

      <Tabs defaultValue="geral">
        <TabsList className="mb-4">
          <TabsTrigger value="geral">Catálogo Técnico</TabsTrigger>
          <TabsTrigger
            value="sngpc"
            className="text-primary font-medium data-[state=active]:bg-primary/10"
          >
            <ShieldCheck className="w-4 h-4 mr-2" /> SNGPC / Portaria 344
          </TabsTrigger>
        </TabsList>

        <TabsContent value="geral" className="m-0">
          <Card className="shadow-subtle border-none">
            <CardHeader className="pb-3 border-b flex flex-row items-center justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por Princípio Ativo, EAN ou Lote..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" /> Filtros Fiscais
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Produto & EAN</TableHead>
                    <TableHead>Princípio Ativo</TableHead>
                    <TableHead>Lote / Validade</TableHead>
                    <TableHead>NCM / CFOP</TableHead>
                    <TableHead className="text-right">Estoque</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {INVENTORY.map((item) => (
                    <TableRow key={item.id} className={item.expired ? 'bg-destructive/5' : ''}>
                      <TableCell>
                        <div className="font-medium text-sm flex items-center">
                          {item.name}
                          {item.expired && (
                            <AlertTriangle className="w-4 h-4 text-destructive ml-2 shrink-0" />
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">EAN: {item.ean}</div>
                        {item.controlled && (
                          <Badge
                            variant="outline"
                            className="mt-1 text-[9px] h-4 border-warning text-warning px-1"
                          >
                            Controlado
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-sm">{item.active}</TableCell>
                      <TableCell>
                        <div className="flex flex-col space-y-1">
                          <Badge variant="secondary" className="w-fit font-mono text-[10px]">
                            {item.batch}
                          </Badge>
                          <span
                            className={`text-xs font-medium ${item.expired ? 'text-destructive' : ''}`}
                          >
                            Venc: {new Date(item.expiry).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        <p>NCM: {item.ncm}</p>
                        <p>CFOP: {item.cfop}</p>
                      </TableCell>
                      <TableCell className="text-right font-bold text-base">{item.stock}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sngpc" className="m-0">
          <Card className="shadow-subtle border-none border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Relatórios e Transmissão ANVISA</span>
                <Button className="bg-primary">
                  <Download className="w-4 h-4 mr-2" /> Gerar Arquivo SNGPC
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg flex items-start space-x-4 border border-border/50">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Atenção Farmacêutico Responsável</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    As vendas de medicamentos controlados exigem a retenção digital da receita.
                    Certifique-se de validar os CRMs antes da transmissão do inventário no padrão
                    XML definido pela ANVISA.
                  </p>
                  <p className="text-xs font-medium">
                    Última transmissão com sucesso: 12/07/2026 às 18:45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
