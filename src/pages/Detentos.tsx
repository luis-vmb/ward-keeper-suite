import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Eye, Edit } from "lucide-react";

const Detentos = () => {
  const detentos = [
    {
      id: "001",
      nome: "João Silva Santos",
      cpf: "123.456.789-00",
      entrada: "15/03/2024",
      ala: "A1",
      cela: "15",
      regime: "Fechado",
      situacao: "Ativo",
      crime: "Roubo qualificado"
    },
    {
      id: "002", 
      nome: "Pedro Costa Lima",
      cpf: "987.654.321-00",
      entrada: "22/02/2024",
      ala: "B2",
      cela: "08",
      regime: "Semi-aberto",
      situacao: "Ativo",
      crime: "Furto"
    },
    {
      id: "003",
      nome: "Carlos Oliveira",
      cpf: "456.789.123-00", 
      entrada: "10/01/2024",
      ala: "A3",
      cela: "22",
      regime: "Fechado",
      situacao: "Transferência",
      crime: "Tráfico de drogas"
    }
  ];

  const getSituacaoBadge = (situacao: string) => {
    switch (situacao) {
      case "Ativo":
        return <Badge variant="default" className="bg-success text-success-foreground">Ativo</Badge>;
      case "Transferência":
        return <Badge variant="default" className="bg-warning text-warning-foreground">Transferência</Badge>;
      case "Saída":
        return <Badge variant="destructive">Saída</Badge>;
      default:
        return <Badge variant="secondary">{situacao}</Badge>;
    }
  };

  const getRegimeBadge = (regime: string) => {
    switch (regime) {
      case "Fechado":
        return <Badge variant="destructive">Fechado</Badge>;
      case "Semi-aberto":
        return <Badge variant="default" className="bg-warning text-warning-foreground">Semi-aberto</Badge>;
      case "Aberto":
        return <Badge variant="default" className="bg-success text-success-foreground">Aberto</Badge>;
      default:
        return <Badge variant="secondary">{regime}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestão de Detentos</h1>
          <p className="text-muted-foreground">Controle e monitoramento da população carcerária</p>
        </div>
        <Button className="bg-institutional text-institutional-foreground hover:bg-institutional/90">
          <Plus className="h-4 w-4 mr-2" />
          Novo Detento
        </Button>
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
                placeholder="Buscar por nome, CPF ou matrícula..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filtrar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Detentos Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Detentos ({detentos.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium text-muted-foreground">Matrícula</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Nome</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">CPF</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Localização</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Regime</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Situação</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Entrada</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Ações</th>
                </tr>
              </thead>
              <tbody>
                {detentos.map((detento) => (
                  <tr key={detento.id} className="border-b border-border hover:bg-muted/50">
                    <td className="p-3 font-mono text-sm">{detento.id}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium text-foreground">{detento.nome}</p>
                        <p className="text-sm text-muted-foreground">{detento.crime}</p>
                      </div>
                    </td>
                    <td className="p-3 font-mono text-sm">{detento.cpf}</td>
                    <td className="p-3">
                      <div className="text-sm">
                        <p>Ala {detento.ala}</p>
                        <p className="text-muted-foreground">Cela {detento.cela}</p>
                      </div>
                    </td>
                    <td className="p-3">{getRegimeBadge(detento.regime)}</td>
                    <td className="p-3">{getSituacaoBadge(detento.situacao)}</td>
                    <td className="p-3 text-sm">{detento.entrada}</td>
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

export default Detentos;