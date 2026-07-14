import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  Paperclip,
  Send,
  Clock,
  CheckCheck,
  FileText,
  ShoppingCart,
  Info,
  Image as ImageIcon,
} from 'lucide-react'

const CHATS = [
  {
    id: 1,
    name: 'Marcos Silva',
    msg: 'Preciso daquele xarope infantil',
    time: '10:42',
    unread: 2,
    status: 'online',
  },
  {
    id: 2,
    name: 'Juliana Costa',
    msg: 'Receita enviada. Pode verificar?',
    time: '10:15',
    unread: 0,
    status: 'offline',
    tag: 'Receita Pendente',
  },
  {
    id: 3,
    name: 'Dona Maria',
    msg: 'Qual o valor do Losartana?',
    time: '09:30',
    unread: 0,
    status: 'offline',
  },
]

const MESSAGES = [
  { id: 1, sender: 'bot', text: 'Olá! Bem-vindo à FarmaSys. Como podemos ajudar?', time: '10:40' },
  {
    id: 2,
    sender: 'user',
    text: 'Bom dia. Preciso daquele xarope infantil, o Abrilar.',
    time: '10:41',
  },
  { id: 3, sender: 'user', text: 'Vocês têm em estoque?', time: '10:42' },
]

export default function Atendimento() {
  const [activeChat, setActiveChat] = useState(1)

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-4 animate-fade-in">
      {/* Left Column: Chat List */}
      <Card className="w-80 flex flex-col border-none shadow-subtle overflow-hidden">
        <div className="p-4 border-b bg-muted/30">
          <h2 className="font-semibold text-lg mb-3">Conversas</h2>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar cliente..." className="pl-8 bg-background border-muted" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {CHATS.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`w-full flex items-start space-x-3 p-3 rounded-lg transition-colors text-left ${activeChat === chat.id ? 'bg-primary/10' : 'hover:bg-muted/50'}`}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10 border border-border/50">
                    <AvatarImage src={`https://img.usecurling.com/ppl/thumbnail?seed=${chat.id}`} />
                    <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {chat.status === 'online' && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <p
                      className={`text-sm font-medium truncate ${activeChat === chat.id ? 'text-primary font-bold' : ''}`}
                    >
                      {chat.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{chat.time}</p>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{chat.msg}</p>
                  {chat.tag && (
                    <Badge
                      variant="outline"
                      className="mt-1 text-[9px] px-1.5 py-0 border-warning text-warning"
                    >
                      {chat.tag}
                    </Badge>
                  )}
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                    {chat.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* Center Column: Active Chat */}
      <Card className="flex-1 flex flex-col border-none shadow-subtle overflow-hidden">
        <div className="h-16 px-4 border-b flex items-center justify-between bg-card shrink-0">
          <div className="flex items-center space-x-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?seed=1" />
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">Marcos Silva</h3>
              <p className="text-xs text-green-600 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Visto por último hoje às 10:42
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Receituários
            </Button>
            <Button size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Criar Venda
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4 bg-slate-50/50 dark:bg-background/20">
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col">
            <div className="text-center">
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Hoje
              </span>
            </div>
            {MESSAGES.map((msg) => (
              <div
                key={msg.id}
                className={`flex max-w-[75%] animate-message ${msg.sender === 'bot' || msg.sender === 'agent' ? 'self-end' : 'self-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl text-sm shadow-sm ${
                    msg.sender === 'bot' || msg.sender === 'agent'
                      ? 'bg-primary text-primary-foreground rounded-tr-sm'
                      : 'bg-card border rounded-tl-sm'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`text-[10px] text-right mt-1 opacity-70 flex justify-end items-center ${msg.sender === 'user' ? 'text-muted-foreground' : ''}`}
                  >
                    {msg.time}
                    {(msg.sender === 'bot' || msg.sender === 'agent') && (
                      <CheckCheck className="w-3 h-3 ml-1" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t bg-card shrink-0">
          <div className="flex items-end space-x-2 bg-muted/50 rounded-xl p-2 border focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground rounded-full hover:bg-muted shrink-0"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground rounded-full hover:bg-muted shrink-0"
            >
              <ImageIcon className="w-5 h-5" />
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

      {/* Right Column: Context/Draft */}
      <Card className="w-72 flex flex-col border-none shadow-subtle overflow-hidden hidden xl:flex">
        <div className="p-4 border-b bg-card">
          <h3 className="font-semibold flex items-center">
            <Info className="w-4 h-4 mr-2 text-primary" />
            Info do Cliente
          </h3>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Dados</p>
              <div className="text-sm space-y-2">
                <p>
                  <span className="text-muted-foreground">Telefone:</span> +55 11 99999-8888
                </p>
                <p>
                  <span className="text-muted-foreground">CPF:</span> 123.456.789-00
                </p>
                <p>
                  <span className="text-muted-foreground">Fidelidade:</span>{' '}
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-none">
                    Ouro
                  </Badge>
                </p>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                Histórico Recente
              </p>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Venda #1024</p>
                  <p className="text-xs text-muted-foreground">12/06/2026 - R$ 45,90</p>
                  <p className="text-xs truncate">Dipirona, Sorine</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Venda #0890</p>
                  <p className="text-xs text-muted-foreground">25/05/2026 - R$ 120,00</p>
                  <p className="text-xs truncate">Fralda Pampers G</p>
                </div>
              </div>
            </div>
            <Separator />
            <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
              <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">
                Chá de Fraldas Ativo
              </p>
              <p className="text-sm font-medium">Enzo Gabriel</p>
              <p className="text-xs text-muted-foreground mt-1">15 itens pendentes</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-2 h-7 text-xs border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Lista
              </Button>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  )
}
