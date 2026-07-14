import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Users, Workflow, Store } from 'lucide-react'

export default function Configuracoes() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Painel Administrativo</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Configurações de infraestrutura, automações (N8N) e multi-unidades.
        </p>
      </div>

      <Tabs defaultValue="auto" className="space-y-4">
        <TabsList className="bg-card border w-full justify-start h-auto flex-wrap">
          <TabsTrigger value="auto" className="py-2">
            <Workflow className="w-4 h-4 mr-2" /> Automações Visuais
          </TabsTrigger>
          <TabsTrigger value="units" className="py-2">
            <Store className="w-4 h-4 mr-2" /> Multi-Unidade (Fiscal)
          </TabsTrigger>
          <TabsTrigger value="roles" className="py-2">
            <Users className="w-4 h-4 mr-2" /> Perfis e Permissões
          </TabsTrigger>
          <TabsTrigger value="lgpd" className="py-2">
            <ShieldCheck className="w-4 h-4 mr-2" /> LGPD
          </TabsTrigger>
        </TabsList>

        <TabsContent value="auto">
          <Card className="shadow-subtle border-none h-[400px] flex flex-col">
            <CardHeader className="border-b pb-3 shrink-0">
              <CardTitle>Editor de Fluxos (Estilo N8N)</CardTitle>
              <CardDescription>Crie lógicas condicionais arrastando blocos.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 bg-slate-100 dark:bg-slate-900/50 p-6 flex items-center justify-center relative overflow-hidden">
              {/* Mock visual canvas */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="bg-white dark:bg-card border-2 border-green-500 rounded-lg p-3 shadow-md w-40 text-center">
                  <p className="font-bold text-xs text-green-600 mb-1">Webhook</p>
                  <p className="text-[10px] text-muted-foreground">Nova Msg Meta API</p>
                </div>
                <div className="h-0.5 w-12 bg-muted-foreground/30 relative">
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-t-2 border-r-2 border-muted-foreground/50 rotate-45"></div>
                </div>
                <div className="bg-white dark:bg-card border-2 border-amber-500 rounded-lg p-3 shadow-md w-40 text-center">
                  <p className="font-bold text-xs text-amber-600 mb-1">Condicional (IF)</p>
                  <p className="text-[10px] text-muted-foreground">Dentro Horário?</p>
                </div>
                <div className="flex flex-col space-y-8 relative">
                  <div className="flex items-center">
                    <div className="h-0.5 w-12 bg-muted-foreground/30 relative">
                      <span className="absolute -top-4 left-2 text-[9px] font-bold">Sim</span>
                    </div>
                    <div className="bg-white dark:bg-card border-2 border-primary rounded-lg p-3 shadow-md w-40 text-center">
                      <p className="font-bold text-xs text-primary mb-1">Round-Robin</p>
                      <p className="text-[10px] text-muted-foreground">Fila de Agentes</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-0.5 w-12 bg-muted-foreground/30 relative">
                      <span className="absolute -top-4 left-2 text-[9px] font-bold text-destructive">
                        Não
                      </span>
                    </div>
                    <div className="bg-white dark:bg-card border-2 border-muted rounded-lg p-3 shadow-md w-40 text-center opacity-70">
                      <p className="font-bold text-xs mb-1">Msg Offline</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="units">
          <Card className="shadow-subtle border-none">
            <CardHeader>
              <CardTitle>Gestão Multi-Unidade (RNG-017)</CardTitle>
              <CardDescription>
                Configure os dados fiscais independentes para cada farmácia.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Farmácia Matriz (Centro)</h3>
                      <Badge>Ativa</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">CNPJ: 12.345.678/0001-90</p>
                    <div className="text-xs space-y-1">
                      <p>✓ Certificado A1 Válido (05/2027)</p>
                      <p>✓ Webservice SEFAZ Conectado</p>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-4 h-8 text-xs">
                      Configurar Fiscal
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-dashed border-2 flex items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer transition-colors">
                  <CardContent className="p-6 text-center">
                    <Store className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="font-medium text-sm">Adicionar Nova Unidade</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lgpd">
          <Card className="shadow-subtle border-none">
            <CardHeader>
              <CardTitle>Conformidade LGPD</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-semibold">Logs de Acesso a Prontuários</Label>
                  <p className="text-sm text-muted-foreground">
                    Auditoria estrita de visualização de receitas médicas.
                  </p>
                </div>
                <Switch defaultChecked disabled />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <Card className="shadow-subtle border-none">
            <CardHeader>
              <CardTitle>Perfis e Permissões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                Gerencie permissões granulares: <strong className="text-foreground">Admin</strong>{' '}
                (Total), <strong className="text-foreground">Supervisor</strong> (Relatórios),{' '}
                <strong className="text-foreground">Agente</strong> (Chat/CRM),{' '}
                <strong className="text-foreground">Farmacêutico</strong> (Validação Técnica/SNGPC),{' '}
                <strong className="text-foreground">Entregador</strong> (App Logística).
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
