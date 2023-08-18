import React, { useState } from 'react';
import Column from './Column';

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    todo: {
      title: 'To Do',
      cards: [
        { id: 'card-1', content: 'Task 1' },
        { id: 'card-2', content: 'Task 2' },
      ],
    },
    inProgress: {
      title: 'In Progress',
      cards: [],
    },
    done: {
      title: 'Done',
      cards: [],
    },
  });

  const handleMoveCard = (cardId, direction) => {
    const newColumns = { ...columns };
    let sourceColumnId = null;

    // Find the source column and card index
    for (const [columnId, column] of Object.entries(columns)) {
      const cardIndex = column.cards.findIndex(card => card.id === cardId);
      if (cardIndex !== -1) {
        sourceColumnId = columnId;

        // Remove the card from the source column
        const [movedCard] = newColumns[columnId].cards.splice(cardIndex, 1);

        // Add the card to the target column
        if (direction === 'prev') {
          newColumns[columnId === 'todo' ? 'todo' : 'inProgress'].cards.push(movedCard);
        } else if (direction === 'next') {
          newColumns[columnId === 'done' ? 'done' : 'inProgress'].cards.push(movedCard);
        }
        
        break;
      }
    }

    setColumns(newColumns);
  };

  return (
    <div className="kanban-board">
      {Object.entries(columns).map(([columnId, column]) => (
        <Column
          key={columnId}
          title={column.title}
          cards={column.cards}
          onMoveCard={handleMoveCard}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
