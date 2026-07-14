import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShieldCheck, Users, Lock, Database } from 'lucide-react'

export default function Configuracoes() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Configurações do Sistema
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Ajustes de segurança, acessos e integrações.
        </p>
      </div>

      <Tabs defaultValue="lgpd" className="space-y-4">
        <TabsList>
          <TabsTrigger value="lgpd">
            <ShieldCheck className="w-4 h-4 mr-2" /> LGPD & Privacidade
          </TabsTrigger>
          <TabsTrigger value="roles">
            <Users className="w-4 h-4 mr-2" /> Perfis de Acesso
          </TabsTrigger>
          <TabsTrigger value="api">
            <Database className="w-4 h-4 mr-2" /> Integrações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lgpd">
          <Card className="shadow-subtle border-none">
            <CardHeader>
              <CardTitle>Conformidade LGPD</CardTitle>
              <CardDescription>
                Ferramentas para anonimização e controle de dados pessoais.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-semibold">Anonimização Automática</Label>
                  <p className="text-sm text-muted-foreground">
                    Ocultar dados de clientes em vendas antigas (após 5 anos).
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-0.5">
                  <Label className="text-base font-semibold">Log de Acesso a Prontuários</Label>
                  <p className="text-sm text-muted-foreground">
                    Auditoria estrita de visualização do histórico de receitas.
                  </p>
                </div>
                <Switch defaultChecked disabled />
              </div>
              <div className="pt-4">
                <h4 className="text-sm font-semibold mb-3 text-destructive">Ações Sensíveis</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="border-destructive text-destructive hover:bg-destructive/10"
                  >
                    Exportar Relatório de Consentimentos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <Card className="shadow-subtle border-none">
            <CardHeader>
              <CardTitle>Perfis e Permissões (9 Níveis)</CardTitle>
              <CardDescription>
                Gerencie quem tem acesso aos módulos sensíveis (ex: Validação Farmacêutica).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm flex items-center text-primary">
                        <Lock className="w-4 h-4 mr-2" /> Farmacêutico
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-xs text-muted-foreground space-y-2 mt-2">
                      <p>✓ Acesso Total ao SNGPC</p>
                      <p>✓ Validação de Receitas (WPP)</p>
                      <p>✓ Gestão de Lotes</p>
                      <Button size="sm" variant="outline" className="w-full mt-2 h-7 text-xs">
                        Editar Permissões
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm flex items-center">
                        <Users className="w-4 h-4 mr-2" /> Atendente (Balcão/Wpp)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-xs text-muted-foreground space-y-2 mt-2">
                      <p>✓ Acesso a Chats Padrão</p>
                      <p>✓ Criação de Vendas (PDV)</p>
                      <p className="opacity-50">✗ Validação de Receitas</p>
                      <Button size="sm" variant="outline" className="w-full mt-2 h-7 text-xs">
                        Editar Permissões
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm flex items-center">
                        <Users className="w-4 h-4 mr-2" /> Entregador
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-xs text-muted-foreground space-y-2 mt-2">
                      <p>✓ Acesso Módulo Entregas</p>
                      <p>✓ Visualização de Rotas</p>
                      <p className="opacity-50">✗ Acesso Financeiro</p>
                      <Button size="sm" variant="outline" className="w-full mt-2 h-7 text-xs">
                        Editar Permissões
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
