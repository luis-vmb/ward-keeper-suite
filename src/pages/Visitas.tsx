import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Calendar, Clock, User } from "lucide-react";

const Visitas = () => {
  const visitas = [
    {
      id: "V001",
      visitante: "Maria Santos Silva",
      detento: "João Silva Santos",
      parentesco: "Cônjuge",
      dataHora: "25/09/2024 14:30",
      duracao: "2h",
      status: "Agendada",
      observacoes: "Primeira visita do mês"
    },
    {
      id: "V002", 
      visitante: "Pedro Costa Jr.",
      detento: "Pedro Costa Lima",
      parentesco: "Filho",
      dataHora: "25/09/2024 15:00",
      duracao: "1h30",
      status: "Em Andamento",
      observacoes: "Visita regular"
    },
    {
      id: "V003",
      visitante: "Ana Oliveira",
      detento: "Carlos Oliveira",
      parentesco: "Mãe",
      dataHora: "25/09/2024 16:00",
      duracao: "2h",
      status: "Concluída",
      observacoes: "Trouxe documentos"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Agendada":
        return <Badge variant="default" className="bg-primary text-primary-foreground">Agendada</Badge>;
      case "Em Andamento":
        return <Badge variant="default" className="bg-warning text-warning-foreground">Em Andamento</Badge>;
      case "Concluída":
        return <Badge variant="default" className="bg-success text-success-foreground">Concluída</Badge>;
      case "Cancelada":
        return <Badge variant="destructive">Cancelada</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getParentescoBadge = (parentesco: string) => {
    const colors: { [key: string]: string } = {
      "Cônjuge": "bg-purple-100 text-purple-800 border-purple-200",
      "Filho": "bg-blue-100 text-blue-800 border-blue-200", 
      "Mãe": "bg-pink-100 text-pink-800 border-pink-200",
      "Pai": "bg-green-100 text-green-800 border-green-200",
      "Irmão": "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    
    return (
      <Badge variant="outline" className={colors[parentesco] || "bg-gray-100 text-gray-800"}>
        {parentesco}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Controle de Visitas</h1>
          <p className="text-muted-foreground">Agendamento e monitoramento de visitas</p>
        </div>
        <Button className="bg-institutional text-institutional-foreground hover:bg-institutional/90">
          <Plus className="h-4 w-4 mr-2" />
          Agendar Visita
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">34</div>
                <p className="text-sm text-muted-foreground">Visitas Hoje</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-warning" />
              <div>
                <div className="text-2xl font-bold text-foreground">12</div>
                <p className="text-sm text-muted-foreground">Em Andamento</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <User className="h-8 w-8 text-success" />
              <div>
                <div className="text-2xl font-bold text-foreground">187</div>
                <p className="text-sm text-muted-foreground">Esta Semana</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-muted-foreground" />
              <div>
                <div className="text-2xl font-bold text-foreground">45</div>
                <p className="text-sm text-muted-foreground">Agendadas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros e Busca</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por visitante ou detento..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Hoje</Button>
            <Button variant="outline">Esta Semana</Button>
            <Button variant="outline">Filtrar Status</Button>
          </div>
        </CardContent>
      </Card>

      {/* Visitas Table */}
      <Card>
        <CardHeader>
          <CardTitle>Visitas Programadas ({visitas.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium text-muted-foreground">ID</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Visitante</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Detento</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Parentesco</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Data/Hora</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Duração</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Observações</th>
                </tr>
              </thead>
              <tbody>
                {visitas.map((visita) => (
                  <tr key={visita.id} className="border-b border-border hover:bg-muted/50">
                    <td className="p-3 font-mono text-sm">{visita.id}</td>
                    <td className="p-3">
                      <p className="font-medium text-foreground">{visita.visitante}</p>
                    </td>
                    <td className="p-3">
                      <p className="font-medium text-foreground">{visita.detento}</p>
                    </td>
                    <td className="p-3">{getParentescoBadge(visita.parentesco)}</td>
                    <td className="p-3">
                      <div className="text-sm">
                        <p className="font-medium">{visita.dataHora.split(' ')[0]}</p>
                        <p className="text-muted-foreground">{visita.dataHora.split(' ')[1]}</p>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{visita.duracao}</td>
                    <td className="p-3">{getStatusBadge(visita.status)}</td>
                    <td className="p-3 text-sm text-muted-foreground max-w-40 truncate">
                      {visita.observacoes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Visitas;