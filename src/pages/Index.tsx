import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from "lucide-react";

const Index = () => {
  const recentActivities = [
    { id: 1, type: "entrada", detento: "João Silva", horario: "08:30", status: "concluído" },
    { id: 2, type: "visita", visitante: "Maria Santos", detento: "Pedro Costa", horario: "09:15", status: "em andamento" },
    { id: 3, type: "transferência", detento: "Carlos Oliveira", destino: "Ala B", horario: "10:00", status: "pendente" },
    { id: 4, type: "saída", detento: "Ana Paula", motivo: "Audiência", horario: "11:30", status: "autorizado" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "concluído":
        return <Badge variant="default" className="bg-success text-success-foreground">Concluído</Badge>;
      case "em andamento":
        return <Badge variant="default" className="bg-warning text-warning-foreground">Em Andamento</Badge>;
      case "pendente":
        return <Badge variant="destructive">Pendente</Badge>;
      case "autorizado":
        return <Badge variant="default" className="bg-primary text-primary-foreground">Autorizado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral do sistema penitenciário</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total de Detentos"
          value="1,247"
          icon={Users}
          change="+2.1% desde ontem"
          changeType="increase"
          variant="default"
        />
        <StatsCard
          title="Funcionários Ativos"
          value="89"
          icon={UserCheck}
          change="3 em licença"
          changeType="neutral"
          variant="success"
        />
        <StatsCard
          title="Visitas Hoje"
          value="34"
          icon={Calendar}
          change="-5.2% vs. ontem"
          changeType="decrease"
          variant="warning"
        />
        <StatsCard
          title="Ocorrências"
          value="7"
          icon={AlertTriangle}
          change="2 pendentes"
          changeType="neutral"
          variant="destructive"
        />
      </div>

      {/* Recent Activities */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">
                      {activity.type === "entrada" && `Entrada: ${activity.detento}`}
                      {activity.type === "visita" && `Visita: ${activity.visitante} → ${activity.detento}`}
                      {activity.type === "transferência" && `Transferência: ${activity.detento} → ${activity.destino}`}
                      {activity.type === "saída" && `Saída: ${activity.detento} (${activity.motivo})`}
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.horario}</p>
                  </div>
                  {getStatusBadge(activity.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estatísticas da Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Novas Entradas</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">23</span>
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Saídas Autorizadas</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">12</span>
                  <TrendingDown className="h-4 w-4 text-destructive" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total de Visitas</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">187</span>
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Ocorrências Resolvidas</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">15</span>
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
