import { KanbanBoard } from '.';

const toDoColumn = {
  id: 1,
  title: 'Mais vendidos',
  tasks: [
    { id: 4, description: 'Energéticos para Programadores' },
    { id: 5, description: 'Vitamina C' },
    { id: 6, description: 'Remédios para melhor concentração de Programadores' },
    { id: 7, description: 'Dipirona' },
    
  ],
};

const inProgressColumn = {
  id: 2,
  title: 'Com descontos',
  tasks: [
    { id: 2, description: 'Protetor solar' },
    { id: 3, description: 'Álcool gel' },
  ],
};

const completedColumn = {
  id: 3,
  title: 'Leve 3 pague 2',
  tasks: [
    { id: 1, description: 'Doril enxaqueca' },
    { id: 9, description: 'Complexo vitamínico' },
  ],
};

export const dummyBoard: KanbanBoard = {
  lists: [toDoColumn, inProgressColumn, completedColumn],
};
