import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import {
  Search,
  Paperclip,
  Send,
  Clock,
  CheckCheck,
  FileText,
  ShoppingCart,
  Info,
  EyeOff,
  ShieldAlert,
  Zap,
} from 'lucide-react'

export default function Atendimento() {
  const { toast } = useToast()
  const [activeChat, setActiveChat] = useState(1)

  const handleConvert = () => {
    toast({
      title: 'Funil de Vendas',
      description: "Cliente Marcos Silva convertido para 'Proposta' no PDV. Dados exportados.",
    })
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-4 animate-fade-in">
      <Card className="w-80 flex flex-col border-none shadow-subtle overflow-hidden bg-card">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">Omnichannel</h2>
            <Badge variant="outline" className="text-[10px]">
              Transmissão: 0/50
            </Badge>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar cliente ou tag..."
              className="pl-8 bg-muted/50 border-none"
            />
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {[1, 2, 3].map((id) => (
              <button
                key={id}
                onClick={() => setActiveChat(id)}
                className={`w-full flex items-start space-x-3 p-3 rounded-lg text-left transition-colors ${activeChat === id ? 'bg-primary/10' : 'hover:bg-muted/50'}`}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10 border border-border/50">
                    <AvatarImage src={`https://img.usecurling.com/ppl/thumbnail?seed=${id}`} />
                  </Avatar>
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-card rounded-full ${id === 1 ? 'bg-green-500' : 'bg-muted-foreground'}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <p
                      className={`text-sm font-medium truncate ${activeChat === id ? 'text-primary font-bold' : ''}`}
                    >
                      {id === 1 ? 'Marcos Silva' : id === 2 ? 'Juliana C.' : 'Dona Maria'}
                    </p>
                    <p className="text-[10px] text-muted-foreground">10:42</p>
                  </div>
                  <div className="flex items-center">
                    {id === 1 && <CheckCheck className="w-3 h-3 text-blue-500 mr-1 shrink-0" />}
                    <p className="text-xs text-muted-foreground truncate">
                      Preciso daquele xarope...
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </Card>

      <Card className="flex-1 flex flex-col border-none shadow-subtle overflow-hidden">
        <div className="h-16 px-4 border-b flex items-center justify-between bg-card shrink-0">
          <div className="flex items-center space-x-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?seed=1" />
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm flex items-center">
                Marcos Silva
                <Badge className="ml-2 bg-indigo-500/10 text-indigo-700 border-none h-5 px-1.5 text-[10px]">
                  VIP
                </Badge>
              </h3>
              <p className="text-xs text-muted-foreground flex items-center">
                <ShieldAlert className="w-3 h-3 mr-1 text-primary" /> Atendimento Exclusivo (Regra
                RNG-001)
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" onClick={handleConvert}>
              <ShoppingCart className="w-4 h-4 mr-2" /> Converter em Venda
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4 bg-slate-50/50 dark:bg-background/20">
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col pb-4">
            <div className="text-center">
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Hoje
              </span>
            </div>

            <div className="flex max-w-[75%] self-end">
              <div className="p-3 rounded-2xl text-sm shadow-sm bg-primary text-primary-foreground rounded-tr-sm">
                <p>Olá! Bem-vindo à FarmaSys. Como podemos ajudar?</p>
                <div className="text-[10px] text-right mt-1 opacity-70 flex justify-end items-center">
                  10:40 <CheckCheck className="w-3 h-3 ml-1 text-blue-300" />
                </div>
              </div>
            </div>

            <div className="flex max-w-[75%] self-start">
              <div className="p-3 rounded-2xl text-sm shadow-sm bg-card border rounded-tl-sm">
                <p>Bom dia. Preciso daquele xarope infantil, o Abrilar.</p>
                <div className="text-[10px] text-right mt-1 text-muted-foreground">10:41</div>
              </div>
            </div>

            <div className="flex max-w-[75%] self-end w-full">
              <div className="w-full p-3 rounded-2xl text-sm shadow-sm bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 rounded-tr-sm">
                <div className="flex items-center mb-1 font-bold text-xs">
                  <EyeOff className="w-3 h-3 mr-1" /> Whisper Message (Visível só para Admin/Agente)
                </div>
                <p>
                  Verificar se ele não quer levar também o soro fisiológico, já que está levando
                  para criança.
                </p>
              </div>
            </div>

            <div className="flex max-w-[75%] self-start items-center space-x-2 mt-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?seed=1" />
              </Avatar>
              <div className="bg-card border rounded-2xl px-3 py-2 text-sm text-muted-foreground flex items-center">
                <span className="flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"></span>
                  <span
                    className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></span>
                  <span
                    className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 border-t bg-card shrink-0">
          <div className="flex items-end space-x-2 bg-muted/50 rounded-xl p-2 border focus-within:ring-1 focus-within:ring-primary transition-all">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground rounded-full shrink-0"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input
              placeholder="Digite sua mensagem..."
              className="border-0 bg-transparent focus-visible:ring-0 px-2 shadow-none min-h-[40px]"
            />
            <Button size="icon" className="rounded-full h-10 w-10 shrink-0 shadow-sm">
              <Send className="w-4 h-4 ml-0.5" />
            </Button>
          </div>
        </div>
      </Card>

      <Card className="w-72 flex flex-col border-none shadow-subtle overflow-hidden hidden xl:flex">
        <div className="p-4 border-b bg-card">
          <h3 className="font-semibold flex items-center">
            <Info className="w-4 h-4 mr-2 text-primary" /> CRM 360º
          </h3>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-6">
            <div className="bg-destructive/10 text-destructive border border-destructive/20 p-3 rounded-lg flex items-start space-x-2">
              <Zap className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold">Alerta de Inatividade</p>
                <p className="text-[10px] mt-0.5 leading-tight">
                  Cliente sem compras há 35 dias. Sugira um desconto.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                Dados Cadastrais
              </p>
              <div className="text-sm space-y-2">
                <p>
                  <span className="text-muted-foreground">Tel:</span> +55 11 99999-8888
                </p>
                <p>
                  <span className="text-muted-foreground">Opt-out:</span>{' '}
                  <Badge variant="secondary" className="bg-green-100 text-green-700 text-[10px]">
                    Ativo (Aceita Msgs)
                  </Badge>
                </p>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold mb-2 flex justify-between">
                <span>Receitas Retidas</span>
                <FileText className="w-3.5 h-3.5" />
              </p>
              <div className="bg-muted/50 p-2 rounded text-xs border border-border/50">
                <p className="font-medium">Amoxicilina 500mg</p>
                <p className="text-muted-foreground mt-0.5">CRM: 99882-SP • 12/05/2026</p>
                <Button variant="link" className="h-auto p-0 text-[10px] text-primary mt-1">
                  Ver Arquivo Digital
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  )
}
