import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Eye, Edit, Phone, Mail } from "lucide-react";

const Funcionarios = () => {
  const funcionarios = [
    {
      id: "F001",
      nome: "Ana Maria Santos",
      cargo: "Agente Penitenciário",
      setor: "Segurança",
      turno: "Manhã",
      status: "Ativo",
      telefone: "(11) 99999-1234",
      email: "ana.santos@sigep.gov.br",
      admissao: "15/01/2020"
    },
    {
      id: "F002",
      nome: "Roberto Silva",
      cargo: "Supervisor de Segurança", 
      setor: "Segurança",
      turno: "Tarde",
      status: "Ativo",
      telefone: "(11) 99999-5678",
      email: "roberto.silva@sigep.gov.br",
      admissao: "03/08/2018"
    },
    {
      id: "F003",
      nome: "Carla Oliveira",
      cargo: "Psicóloga",
      setor: "Ressocialização",
      turno: "Manhã",
      status: "Licença",
      telefone: "(11) 99999-9012",
      email: "carla.oliveira@sigep.gov.br",
      admissao: "22/05/2021"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ativo":
        return <Badge variant="default" className="bg-success text-success-foreground">Ativo</Badge>;
      case "Licença":
        return <Badge variant="default" className="bg-warning text-warning-foreground">Licença</Badge>;
      case "Afastado":
        return <Badge variant="destructive">Afastado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTurnoBadge = (turno: string) => {
    switch (turno) {
      case "Manhã":
        return <Badge variant="outline">Manhã (06h-14h)</Badge>;
      case "Tarde":
        return <Badge variant="outline">Tarde (14h-22h)</Badge>;
      case "Noite":
        return <Badge variant="outline">Noite (22h-06h)</Badge>;
      default:
        return <Badge variant="secondary">{turno}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestão de Funcionários</h1>
          <p className="text-muted-foreground">Controle de pessoal e recursos humanos</p>
        </div>
        <Button className="bg-institutional text-institutional-foreground hover:bg-institutional/90">
          <Plus className="h-4 w-4 mr-2" />
          Novo Funcionário
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-foreground">89</div>
            <p className="text-sm text-muted-foreground">Total de Funcionários</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-success">86</div>
            <p className="text-sm text-muted-foreground">Ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-warning">3</div>
            <p className="text-sm text-muted-foreground">Em Licença</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-sm text-muted-foreground">Novos Funcionários (30d)</p>
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
                placeholder="Buscar por nome, matrícula ou cargo..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filtrar por Setor</Button>
            <Button variant="outline">Filtrar por Turno</Button>
          </div>
        </CardContent>
      </Card>

      {/* Funcionários Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Funcionários ({funcionarios.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium text-muted-foreground">Matrícula</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Nome</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Cargo/Setor</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Turno</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Contato</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Admissão</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Ações</th>
                </tr>
              </thead>
              <tbody>
                {funcionarios.map((funcionario) => (
                  <tr key={funcionario.id} className="border-b border-border hover:bg-muted/50">
                    <td className="p-3 font-mono text-sm">{funcionario.id}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium text-foreground">{funcionario.nome}</p>
                        <p className="text-sm text-muted-foreground">{funcionario.cargo}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-sm">
                        <p className="font-medium">{funcionario.cargo}</p>
                        <p className="text-muted-foreground">{funcionario.setor}</p>
                      </div>
                    </td>
                    <td className="p-3">{getTurnoBadge(funcionario.turno)}</td>
                    <td className="p-3">{getStatusBadge(funcionario.status)}</td>
                    <td className="p-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span>{funcionario.telefone}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">{funcionario.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{funcionario.admissao}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
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

export default Funcionarios;